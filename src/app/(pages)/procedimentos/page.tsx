import { FaDollarSign, FaRegClock, FaRegCalendarAlt, FaUserMd  } from "react-icons/fa";
import { TypeProcedimento } from '@/utils/TypeProcedimento';
import { getPaciente, getProcedimento } from "@/app/data/fetcher";

export default async function Procedimentos() {
    const pacientes = await getPaciente('');
    const procedimentos = await getProcedimento('');

    return(
        <div className="flex flex-col items-start mx-auto p-8 pt-0 w-full">
            <h2 className="mb-4 font-bold uppercase text-lg">Procedimentos</h2>
            <div className="grid grid-cols-1 gap-4 w-full">
                {procedimentos.map((procedimento : TypeProcedimento) =>(
                    <div key={procedimento.id} className="bg-white flex flex-col p-4 items-start rounded shadow-sm w-full relative cardProcedimento">
                        <h3 className="font-base text-base mb-4 text-slate-200 uppercase relative z-10">{procedimento.title.rendered}</h3>
                        <p className="pb-4 border-b border-[#ddd] mb-4 text-gray-700">{procedimento.acf.descricao_procedimento}</p>

                        <div className="grid grid-cols-4 gap-4 pb-4 mb-4 border-b border-[#ddd] w-full">
                            <div className="flex flex-col">
                                <div className="flex items-center">
                                    <FaRegCalendarAlt color="#333" />
                                    <h4 className="font-bold ml-2">Número de sessões:</h4>
                                </div>
                                <p className="max-w-52 text-gray-700">{procedimento.acf.numero_sessoes}</p>
                            </div>

                            <div className="flex flex-col">
                                <div className="flex items-center">
                                    <FaDollarSign color="#333" />
                                    <h4 className="font-bold ml-2">Preço:</h4>
                                </div>
                                <p className="max-w-52 text-gray-700">{procedimento.acf.preco_procedimento}</p>
                            </div>
                            
                            <div className="flex flex-col">
                                <div className="flex items-center">
                                    <FaUserMd color="#333" />
                                    <h4 className="font-bold ml-2">Área de aplicação:</h4>
                                </div>
                                <p className="max-w-52 text-gray-700">{procedimento.acf.area_aplicada}</p>
                            </div>
                            
                            <div className="flex flex-col">
                                <div className="flex items-center">
                                    <FaRegClock color="#333" />
                                    <h4 className="font-bold ml-2">Tempo de aplicação:</h4>
                                </div>
                                <p className="max-w-52 text-gray-700">{procedimento.acf.tempo_aplicacao}</p>
                            </div>
                        </div>
                        
                        <div className="flex flex-col">
                            <h4 className="font-bold">Produtos utilizados no procedimento</h4>
                            <ul className="grid grid-cols-4 gap-2">
                                {procedimento.acf.produtos_utilizados.map((produto, index) =>(
                                    <li key={index+1}>{produto.nome_produto}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}