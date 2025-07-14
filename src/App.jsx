import CardFilme from './components/CardFilme'
import movie1 from './assets/image/movie1.jpg';

import Catalogo from './components/Catalogo';
import { MagnifyingGlass, Play, SignIn, User } from 'phosphor-react';

function App() {

  const filme = {
    imagem: movie1,
    titulo: "Ação Explosiva",
    ano: "2020",
    nota: "10"
  };
  return (
    <>
      <header className='bg-[#1D1D1D] w-full flex items-center justify-between p-4'>
        <h1 className="text-[#C31867] text-2xl font-bold text-center">Digitalflix</h1>

        <div className="flex gap-8 p-2 text-white">
          <div className="gap-2 flex items-center rounded-md py-2 px-2 bg-[#2E2E2E]">
            <MagnifyingGlass size={22} />
            <input className='border-0 outline-0' type="text" placeholder='Buscar filmes...' />
          </div>
          <button className='cursor-pointer'>
            <User size={22} />
          </button>
          <button className='cursor-pointer'>
            <SignIn size={22} />
          </button>
        </div>
      </header>

      <div className="">
        <section>
          <div style={{
            backgroundImage: `url(${movie1})`,
            backgroundPosition: 'center'
          }} className="bg-cover h-96 w-full">
            <div className="p-4 flex flex-col h-full justify-end gap-4">
              <h1 className='font-bold text-white text-4xl'>Ação Explosiva</h1>
              <p className='text-white text-xl'>Ação</p>
              <div className="gap-4 flex mb-6">
                <button className='cursor-pointer bg-[#E02D2D] text-white font-bold w-fit px-4 py-3 rounded-md flex gap-4 items-center'>
                  <Play size={22} />
                  <span>Assitir Agora</span>
                </button>
                <button className='cursor-pointer text-[#C80D66] font-bold w-fit px-4 py-3 rounded-md border'>Mais Informações</button>
              </div>
            </div>
          </div>
        </section>
        <Catalogo />
      </div>
    </>
  );
}

export default App;
