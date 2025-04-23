<?php 
    /*
    * Template Name: Home
    */

    get_header();

    $ordem = [
        'agendado' => 1,
        'atendido' => 2,
        'cancelado' => 3,
    ];

    $args = array(
        'post_type'      => 'agendamento',
        'post_status'    => 'publish',
        'posts_per_page' => -1,
        'meta_key'       => 'data_agendamento',
        'orderby'        => 'meta_value',
        'order'          => 'ASC',
    );

    $query = new WP_Query($args);

    $scheduling = [];
    $attended = 0;
    $scheduled = 0;
    $canceled = 0;

    if($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();

            $post_id = get_the_ID();
            $currentDate = current_time('Y-m-d H:i');
            $patient = get_the_title(get_field("paciente_slc", $post_id)[0]);
            $fullDate = strtotime(get_field("data_agendamento", $post_id));
            $procedure = get_field("procedimento_slc", $post_id);
            $date = date('d/m/Y', $fullDate);
            $hour = date('H:i', $fullDate);
            $status = get_field("status_agendamento", $post_id);

            $scheduling[] = array(
                "ID"            => $post_id,
                "paciente"      => $patient,
                "procedimentos" => $procedure,
                "data"          => $date,
                "hora"          => $hour,
                "status"        => $status,
                'peso'          => $ordem[$status] ?? 999,
            );

            if(date('Y-m-d H:i', $fullDate) >= $currentDate && $status != "cancelado") $scheduled ++;
            
            if($currentDate > date('Y-m-d H:i', $fullDate) && $status != "cancelado") $attended ++;

            if($status == "cancelado") $canceled ++;
        }
    }

    // Ordena por status (peso) e depois por data
    usort($scheduling, function ($a, $b) {
        if ($a['peso'] == $b['peso']) return $a['timestamp'] <=> $b['timestamp'];
        return $a['peso'] <=> $b['peso'];
    });
?>

    <main>
        <div class="container">
            <div class="title">
                <h1>Dashboard</h1>

                <select name="" id="">
                    <option value="" selected >Filtrar agendamentos</option>
                    <option value="">Filtrar por mês</option>
                    <option value="">Filtrar por semana</option>
                    <option value="">Filtrar por dia</option>
                </select>
            </div>
        </div>

        <div class="container">
            <div class="header">
                <div class="list">
                    <div class="card" style="background-color: #fff383;">
                        <p>Procedimentos</p>
                        <h2>Agendados</h2>
                        <span><?= $scheduled; ?></span>
                    </div>
                    <div class="card" style="background-color: #8dff83;">
                        <p>Pacientes</p>
                        <h2>Atendidos</h2>
                        <span><?= $attended; ?></span>
                    </div>
                    <div class="card" style="background-color: #ff8383;">
                        <p>Atendimentos</p>
                        <h2>Cancelados</h2>
                        <span><?= $canceled; ?></span>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="column">
                <div class="list">               
                    <?php foreach ($scheduling as $agenda): ?>
                        <div class="card <?= $agenda["status"]; ?>">
                            <h2><?= $agenda["paciente"]; ?></h2>
                            <p><?= $agenda["data"] .' - '. $agenda["hora"] ?></p>
                            
                            <h4>Procedimentos:</h4>
                            <ul>
                                <?php foreach ($agenda["procedimentos"] as $procedimento): ?>
                                    <li><?= get_the_title($procedimento); ?></li>
                                <?php endforeach; ?>
                            </ul>
                        </div>                            
                    <?php endforeach; ?>
                </div>
            </div>
        </div>

        <div class="container">
            <a href="/wp-admin/" class="button">Ir para o painel</a>
        </div>

    </main>

<?php get_footer(); ?>