import CardFilme from "./CardFilme";
import movie1 from "../assets/image/movie1.jpg";
import movie2 from "../assets/image/movie2.jpg";
import movie3 from "../assets/image/movie3.jpg";
import movie4 from "../assets/image/movie4.jpg";
import movie5 from "../assets/image/movie5.jpg";
import movie6 from "../assets/image/movie6.jpg";

function Catalogo() {
  const filmes = [
    {
      id: 1,
      titulo: "Ação Explosiva",
      genero: "Ação",
      imagem: movie1,
      nota: 7.7,
      ano: 2014,
    },
    {
      id: 2,
      titulo: "Romance Eterno",
      genero: "Romance",
      imagem: movie2,
      nota: 5.4,
      ano: 2019,
    },
    {
      id: 3,
      titulo: "Futuro Cyberpunk",
      genero: "Ficção Cientifica",
      imagem: movie3,
      nota: 9.7,
      ano: 2023,
    },
    {
      id: 4,
      titulo: "Terror Noturno",
      genero: "Terror",
      imagem: movie4,
      nota: 8.2,
      ano: 2025,
    },
    {
      id: 5,
      titulo: "Comédia Hilária",
      genero: "Comédia",
      imagem: movie5,
      nota: 3.7,
      ano: 2024,
    },
    {
      id: 6,
      titulo: "Aventura Mágica",
      genero: "Fantasia",
      imagem: movie6,
      nota: 9.6,
      ano: 2022,
    },
  ];

  return (
    <section className="p-6 bg-black">
      <h1 className="text-2xl font-bold mb-6 text-white p-8">Catálogo de Filmes</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4">
        {filmes.map(filme => (
          <CardFilme key={filme.id} filme={filme} />
        ))}
      </div>
    </section>
  );
}
export default Catalogo;