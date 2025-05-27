import { TypeAgendamento } from "@/utils/TypeAgendamento";

export default async function CardStatusAgenda({ agendamentos }: { agendamentos: TypeAgendamento[] }) {

    const agendado = agendamentos.filter((agendamento : TypeAgendamento) => agendamento.acf.status_agendamento == 'agendado');
    const orcamento = agendamentos.filter((agendamento : TypeAgendamento) => agendamento.acf.status_agendamento == 'orcamento');
    const atendido = agendamentos.filter((agendamento : TypeAgendamento) => agendamento.acf.status_agendamento == 'atendido');
    const cancelado = agendamentos.filter((agendamento : TypeAgendamento) => agendamento.acf.status_agendamento == 'cancelado');

    return(
       <>
            <div className="shadow-sm rounded p-4 bg-[#fff383] text-center">
                <p className="text-black font-light text-sm uppercase">Procedimentos</p>
                <h2 className="mb-[10] text-black font-bold text-2xl">Agendados</h2>
                <span className="font-bold text-black text-3xl">{agendado.length}</span>
            </div>

            <div className="shadow-sm rounded p-4 bg-[#83cbff] text-center">
                <p className="text-black font-light text-sm uppercase">Orçamentos</p>
                <h2 className="mb-[10] text-black font-bold text-2xl">Solicitados</h2>
                <span className="font-bold text-black text-3xl">{orcamento.length}</span>
            </div>
            
            <div className="shadow-sm rounded p-4 bg-[#8dff83] text-center">
                <p className="text-black font-light text-sm uppercase">Pacientes</p>
                <h2 className="mb-[10] text-black font-bold text-2xl">Atendidos</h2>
                <span className="font-bold text-black text-3xl">{atendido.length}</span>
            </div>
            
            <div className="shadow-sm rounded p-4 bg-[#ff8383] text-center">
                <p className="text-black font-light text-sm uppercase">Atendimentos</p>
                <h2 className="mb-[10] text-black font-bold text-2xl">Cancelados</h2>
                <span className="font-bold text-black text-3xl">{cancelado.length}</span>
            </div>
       </>
    )
}