import { getPaciente } from "@/app/data/fetcher";
import { TypePaciente } from "@/utils/TypePaciente";

export default async function Pacientes() {
    const pacientes = await getPaciente('');
    
    return (
        <div className="flex flex-col items-start mx-auto px-8 py-0 w-full">
            <h2 className="mb-4 font-bold uppercase text-lg">Agendamentos</h2>
            <div className="bg-white flex flex-col p-4 items-start rounded shadow-sm w-full">
                <div className="mx-auto w-full">
                    <div className="flex items-center justify-between pb-6">
                        <div>
                            <h2 className="font-semibold text-gray-700">User Accounts</h2>
                            <span className="text-xs text-gray-500">View accounts of registered users</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="ml-10 space-x-8 lg:ml-40">
                                <button className="flex items-center gap-2 rounded-md bg-[#dfe6e9] px-4 py-2 text-sm font-semibold text-[#222] focus:outline-none focus:ring hover:bg-[#c3c9cc]">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
                                    </svg>

                                    CSV
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-y-hidden rounded border border-[#ddd]">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-[#dfe6e9] text-left text-xs font-semibold uppercase tracking-widest text-[#222]">
                                        <th className="px-5 py-3 text-center">ID</th>
                                        <th className="px-5 py-3">Paciente</th>
                                        <th className="px-5 py-3">Contato</th>
                                        <th className="px-5 py-3">Procedimento</th>
                                        <th className="px-5 py-3">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-500">
                                    {pacientes.map((paciente: TypePaciente) =>(
                                        <tr key={paciente.id}>
                                            <td className="border-b border-gray-200 bg-white px-2 py-5 text-sm">
                                                <p className="whitespace-no-wrap text-center">{paciente.id}</p>
                                            </td>

                                            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                                <div className="flex items-center">
                                                    <p className="whitespace-no-wrap">{paciente.title.rendered}</p>
                                                </div>
                                            </td>

                                            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                                <p className="whitespace-no-wrap">{paciente.acf.telefone}</p>
                                            </td>

                                            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                                <p className="whitespace-no-wrap">Preenchimento com Ácido Hialurônico</p>
                                            </td>

                                            <td className="border-b border-gray-200 bg-white px-2 py-5 text-sm">
                                                <span className="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">Agendado</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}