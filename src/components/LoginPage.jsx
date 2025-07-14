import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

 let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !senha) {
      alert('Preencha todos os campos!');
      return;
    }
    navigate("/dashboard")
    alert(`Bem-vindo ao Digitalflix, ${email}`);
  };

  return (

    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-red-900 to-black">
      <h1 className='flex mb-2 text-5xl font-bold text-rose-600'>DigitalFlix</h1>
      <p className='mb-6 text-gray-300'>Assista a seus filmes e séries favoritos</p>
      <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl w-full max-w-sm">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Entrar</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 text-sm text-white">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border text-white border-gray-100 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="email@exemplo.com"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-white">Senha</label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full border text-white border-gray-100 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="********"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-800 transition"
            onClick={handleSubmit}
          >
            <p className=''>Entrar</p>
          </button>
          <p className='text-sm text-gray-400 text-center'>esqueceu a senha?
            <a href="#" className="text-red-500 hover:underline"> Clique aqui</a>
          </p>
          <p className="mt-4 text-sm text-gray-400 text-center">
            Não tem uma conta? <a href="#" className="text-red-500 hover:underline">Cadastre-se</a>
            </p>
        </form>
      </div>
    </div>
  );
}

export default Login;