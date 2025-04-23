<?php

function mask_acf_admin() {
    ?>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-maskmoney/3.0.2/jquery.maskMoney.min.js"></script>
    <script>
      (function($) {
        $(document).ready(function() {
          $('#acf-field_67fe526cfc450').mask('000.000.000-00');

          $('#acf-field_67fe44a13e8cb').maskMoney({
            prefix: 'R$ ',
            allowNegative: false,
            thousands: '.',
            decimal: ',',
            affixesStay: true
          });

           // Máscara para telefone (com e sem 9 dígito)
           var behavior = function(val) {
            return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
          };
          var options = {
            onKeyPress: function(val, e, field, options) {
              field.mask(behavior.apply({}, arguments), options);
            }
          };

          // Aplica a máscara em campos com a classe ou nome relacionado
          $('#acf-field_67fe51f6fc44e').mask(behavior, options);
        });
      })(jQuery);
    </script>
    <?php
}
add_action('acf/input/admin_footer', 'mask_acf_admin');

// Redirecionamento da página inicial para o login
function redirecionar_home_para_login() {
  if ( is_front_page() && ! is_user_logged_in() ) {
    wp_redirect( '/login' );
    exit;
  }
}
add_action( 'template_redirect', 'redirecionar_home_para_login' );

// Altera a url do logo do site na tela de login para a página inicial
function my_login_logo_url() {
  return home_url();
}
add_filter( 'login_headerurl', 'my_login_logo_url' );

function wpb_login_logo() { ?>
  <style type="text/css">
    .login {
      background-color: #fff;
    }

    .login #login {
      align-items: center;
      display: flex;
      height: 100vh;
      flex-direction: column;
      justify-content: center;
      padding: 0;
    }
      #login h1 a, .login h1 a {
        background-image: url(<?= get_site_url() . '/wp-content/uploads/2025/04/logo3.webp' ?>);
        height: 50px;
        width: 220px;
        background-size: contain;
        background-repeat: no-repeat;
      }

      #login form#loginform, #login form[name="lostpasswordform"] {
        background-color: #2a4251;
        border-radius: 4px;
        margin: 0 0 10px;
      }
      
      .login form .input, .login form input[type=checkbox], .login input[type=text] {
        border-color: #fff;
      }
      
      #login label {
        color: #fff;
      }

      #login .button, #login form[name="lostpasswordform"] .button {
        background-color: #fff;
        border-color: #fff;
        color: #2a4251;
        transition: all .3s ease-in-out;
      }

      #login .button:hover, #login form[name="lostpasswordform"] .button:hover {
        background-color: #eeeeee;
        border-color: #eeeeee;
      }

      #login #nav {
        font-size: 16px;
        margin: 0;
        text-align: right;
      }

      #login #backtoblog, .login .language-switcher {
        display: none;
      }
  </style>
<?php }
add_action( 'login_enqueue_scripts', 'wpb_login_logo' );

function customizar_titulo_agendamento($post_id) {
  // Verifica se é um post do tipo correto
  if (get_post_type($post_id) !== 'agendamento') return;

  // Evita execução durante autosave ou revisão
  if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;
  if (wp_is_post_revision($post_id)) return;

  // Garante que os campos estejam disponíveis
  $paciente = get_field('paciente_slc', $post_id);
  $data_procedimento = get_field('data_agendamento', $post_id);

  if (!empty($paciente) && !empty($data_procedimento)) {
    $nome_cliente = get_the_title($paciente[0]);
    $novo_titulo = $nome_cliente . ' - ' . date('d/m/Y H:i', strtotime($data_procedimento));

    // Atualiza título e slug
    remove_action('acf/save_post', 'customizar_titulo_agendamento'); // evita loop
    wp_update_post([
        'ID'         => $post_id,
        'post_title' => $novo_titulo,
        'post_name'  => sanitize_title($novo_titulo),
    ]);
    add_action('acf/save_post', 'customizar_titulo_agendamento');
  }
}
add_action('acf/save_post', 'customizar_titulo_agendamento', 20);


