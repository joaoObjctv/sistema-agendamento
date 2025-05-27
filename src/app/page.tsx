import { getAgendamento } from "./data/fetcher";
import { TypeAgendamento } from "@/utils/TypeAgendamento";
import CardAgendamento from "@/app/components/CardAgendamento";
import CardStatusAgenda from "@/app/components/CardStatusAgenda";

export default async function Home() {

  const agendamentos = await getAgendamento();

  return (
    <div className="flex flex-col items-center mx-auto p-8 pt-0 w-full">
      <div className="grid grid-cols-4 gap-4 mb-[30] max-h-screen w-full">
        <CardStatusAgenda agendamentos={agendamentos} />
      </div>

      <div className="grid grid-cols-4 content-start gap-4 w-full">
        {agendamentos.map((agendamento:TypeAgendamento) =>(
          <CardAgendamento key={agendamento.id} {...agendamento} />
        ))}
      </div>
    </div>
  );
}
