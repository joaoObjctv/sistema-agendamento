'use client';
import { useState } from 'react';

export default function NovoPaciente() {
  const [form, setForm] = useState({
    nome: '',
    cpf_rg: '',
    telefone: '',
    nascimento: '',
    anamnese: ''
  });
  const [msg, setMsg] = useState('');

  const handleChange = (e: { target: { name: any; value: any; }; }) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const res = await fetch('/api/create-paciente', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    const data = await res.json();
    setMsg(data.message || 'Erro');
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Novo Paciente</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input name="nome" placeholder="Nome" onChange={handleChange} className="border p-2 w-full" />
        <input name="cpf_rg" placeholder="CPF" onChange={handleChange} className="border p-2 w-full" />
        <input name="telefone" placeholder="Contato" onChange={handleChange} className="border p-2 w-full" />
        <input name="nascimento" placeholder="Data de Nascimento (YYYY-MM-DD)" onChange={handleChange} className="border p-2 w-full" />
        <textarea name="anamnese" placeholder="Ficha de Anamnese" onChange={handleChange} className="border p-2 w-full"></textarea>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Salvar</button>
      </form>
      {msg && <p className="mt-4 text-green-600">{msg}</p>}
    </div>
  );
}
