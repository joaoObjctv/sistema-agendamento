export default async function Agendamentos() {
    const credentials = btoa(`${process.env.BASIC_AUTH_USER}:${process.env.BASIC_AUTH_PASSWORD}`);

    return (
        <div className="flex flex-col items-start mx-auto px-8 py-0 w-full">
            <h2 className="mb-4 font-bold uppercase text-lg">Agendamentos</h2>
            <div className="bg-white flex flex-col p-4 items-start rounded shadow-sm w-full">
                <div className="flex mb-6 gap-4 w-full">
                    <input type="date" name="" id="" className="bg-white border border-[#ddd] shadow-2xs outline-none rounded p-4 w-[50%]" placeholder="10/05/2025" />
                    <input type="datetime-local" name="" id="" className="bg-white border border-[#ddd] shadow-2xs outline-none rounded p-4 w-[50%]" placeholder="10/05/2025" />

                    <select name="" id="" className="bg-white border border-[#ddd] shadow-2xs outline-none rounded p-4 w-[50%]">
                        <option value="">Selecione o status do atendimento</option>
                        <option value="">Agendado</option>
                        <option value="">Cancelado</option>
                        <option value="">Atendimento</option>
                    </select>
                </div>

                <h3 className="font-bold text-lg mb-2">Selecione o(s) procedimento(s) do atendimento</h3>
                <select name="" id="" className="bg-white border border-[#ddd] shadow-2xs outline-none rounded mb-6 p-4 w-full">
                    <option value="">Selecione o paciente do atendimento</option>
                    {pacientes.map(paciente =>(
                        <option key={paciente.id} value={paciente.id}>{paciente.title.rendered}</option>
                    ))}
                </select>
                
                <h3 className="font-bold text-lg mb-4">Selecione o(s) procedimento(s) do atendimento</h3>

                <div className="grid grid-cols-3 gap-4 mb-[30] max-h-screen w-full">
                    {procedimentos.map((procedimento, index) =>(
                        <label htmlFor={`user-${index}`} className="text-sm" key={procedimento.id}><input type="checkbox" className="mr-2" name={`user-${index}`} id={`user-${index}`} />{procedimento.title.rendered}</label>
                    ))}
                </div>

                <button className="bg-[#00b894] text-white px-16 py-2 ml-auto rounded cursor-pointer text-sm">Cadastrar</button>
            </div>
        </div>
    )
}