// pages/api/criar-paciente.js
export async function POST(request) {
  const apiUrl = `${process.env.NEXT_PUBLIC_WP_SITE_URL}/wp-json/wp/v2/paciente`;
  const token = `${process.env.WP_JWT_TOKEN}`;

  const data = await request.json();

  const { nome, cpf_rg, telefone, nascimento, anamnese } = data;

  const body = {
    title: nome,
    status: 'publish',
    fields: {
      cpf_rg,
      telefone,
      nascimento: nascimento,
      anamnese: anamnese
    }
  };

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    const result = await response.json();

    if (!response.ok) {
      return new Response(JSON.stringify({ error: true, details: result }), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({
      message: 'Paciente criado com sucesso!',
      postId: result.id
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({
      error: true,
      message: err.message
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
