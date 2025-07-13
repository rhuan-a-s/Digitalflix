import CardFilme from './components/CardFilme'
import movie1 from './assets/image/movie1.jpg';

import Catalogo from './components/Catalogo';

function App() {
  const filme = {
    imagem: movie1,
    titulo: "Carga Explosiva",
    ano: "2020",
    nota: "10"
  };
  return (
    <div className="">
      <CardFilme filme= {filme} />
      <Catalogo />
    </div>
  );
}

export default App;
