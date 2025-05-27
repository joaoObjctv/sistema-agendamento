const credentials = btoa(`${process.env.BASIC_AUTH_USER}:${process.env.BASIC_AUTH_PASSWORD}`);

export async function getAgendamento() {
    const agendamentos = await fetch(`${process.env.NEXT_PUBLIC_WP_SITE_URL}/wp-json/wp/v2/agendamento`,  {
        headers: {
        'Authorization': `Basic ${credentials}`
        }
    }).then(res => res.json());

    return agendamentos;
}

export async function getProcedimento(id : string | number[]) {
    const idProcedimento = Array.isArray(id) ? id.join(',') : id;

    const endpoint = Array.isArray(id)
    ? `${process.env.NEXT_PUBLIC_WP_SITE_URL}/wp-json/wp/v2/procedimento?include=${idProcedimento}`
    : `${process.env.NEXT_PUBLIC_WP_SITE_URL}/wp-json/wp/v2/procedimento/${idProcedimento}`;

    const procedimentos = await fetch(endpoint, {
        headers: {
        'Authorization': `Basic ${credentials}`
        }
    }).then(res => res.json());

    return procedimentos;
}

export async function getPaciente(id: string | number[]) {
    const idPaciente = id ? id : '';
    const credentials = btoa(`${process.env.BASIC_AUTH_USER}:${process.env.BASIC_AUTH_PASSWORD}`); // Codifica em Base6
    const pacientes = await fetch(`${process.env.NEXT_PUBLIC_WP_SITE_URL}/wp-json/wp/v2/paciente/${idPaciente}`,  {
        headers: {
        'Authorization': `Basic ${credentials}`
        }
    }).then(res => res.json());

    return pacientes;
}