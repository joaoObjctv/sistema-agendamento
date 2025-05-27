import { getAgendamento } from "./data/fetcher";
import { TypeAgendamento } from "@/utils/TypeAgendamento";
import CardAgendamento from "@/app/components/CardAgendamento";
import CardStatusAgenda from "@/app/components/CardStatusAgenda";

export default async function Home() {

  const agendamentos = await getAgendamento();

  const agendado = agendamentos.filter((agendamento : TypeAgendamento) => agendamento.acf.status_agendamento == 'agendado');
    const orcamento = agendamentos.filter((agendamento : TypeAgendamento) => agendamento.acf.status_agendamento == 'orcamento');
    const atendido = agendamentos.filter((agendamento : TypeAgendamento) => agendamento.acf.status_agendamento == 'atendido');
    const cancelado = agendamentos.filter((agendamento : TypeAgendamento) => agendamento.acf.status_agendamento == 'cancelado');

  return (
    <div className="flex flex-col items-center mx-auto p-8 pt-0 w-full">
      <div className="grid grid-cols-4 gap-4 mb-[30] max-h-screen w-full">
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
      </div>

      <div className="grid grid-cols-4 content-start gap-4 w-full">
        {agendamentos.map((agendamento:TypeAgendamento) =>(
          <CardAgendamento key={agendamento.id} {...agendamento} />
        ))}
      </div>
    </div>
  );
}
