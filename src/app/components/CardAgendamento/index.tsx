import { getPaciente, getProcedimento } from '@/app/data/fetcher';
import { TypeAgendamento } from '@/utils/TypeAgendamento';
import { TypeProcedimento } from '@/utils/TypeProcedimento';

export default async function CardAgendamento(agendamento : TypeAgendamento) {
    let statusAgdmt = agendamento.acf.status_agendamento;

    const statusAgendamento = statusAgdmt == 'agendado' ? 'border-[#fff383]' : statusAgdmt == 'atendido' ? 'border-[#8dff83]' : statusAgdmt == 'cancelado' ? 'border-[#ff8383]' : 'border-[#83cbff]';
    const paciente = await getPaciente(agendamento.acf.paciente_slc);
    
    const procedimento = await getProcedimento(agendamento.acf.procedimento_slc);

    return(
        <div className={`border-l-[4] ${statusAgendamento} shadow-sm rounded p-4 bg-white`}>
            <h2 className="font-bold mb-[10] text-[#222] text-base">{paciente.title.rendered}</h2>
            <p className="font-normal mb-[10] text-[#222] text-sm">{new Date(agendamento.acf.data_agendamento).toLocaleDateString('pt-br')}</p>
            
            <h4 className="font-semibold mb-[10] text-[#222]">Procedimentos:</h4>

            <ul className="list-disc pl-[20]">
                {procedimento.map((prcdmt: TypeProcedimento, index: number) => (
                    <li key={agendamento.id+index} className="font-normal text-[#222] text-sm">{prcdmt.title.rendered}</li>
                ))}
            </ul>
        </div>
    )
}