import CardFilme from "./CardFilme";
export default function Catalogo() {
  const filmes = [
    {
      id: 1,
      titulo: "Ação Explosiva",
      genero: "Ação",
      imagem: "../assets/image/movie1.jpg",
      nota: 7.7,
      ano: 2014,
    },
    {
      id: 2,
      titulo: "Romance Eterno",
      genero: "Romance",
      imagem: "../assets/image/movie2.jpg",
      nota: 5.4,
      ano: 2019,
    },
    {
      id: 3,
      titulo: "Futuro Cyberpunk",
      genero: "Ficção Cientifica",
      imagem: "../assets/image/movie3.jpg",
      nota: 9.7,
      ano: 2023,
    },
    {
      id: 4,
      titulo: "Terror Noturno",
      genero: "Terror",
      imagem: "../assets/image/movie4.jpg",
      nota: 8.2,
      ano: 2025,
    },
    {
      id: 5,
      titulo: "Comédia Hilária",
      genero: "Comédia",
      imagem: "../assets/image/movie5.jpg",
      nota: 3.7,
      ano: 2024,
    },
    {
      id: 6,
      titulo: "Aventura Mágica",
      genero: "Fantasia",
      imagem: "../assets/image/movie6.jpg",
      nota: 9.6,
      ano: 2022,
    },
  ];

  return (
    <section>
      <h1>Catálogo de Filmes</h1>
      <div className="grade-de-filmes">
        {filmes.map(filme => (
          <CardFilme key={filme.id} filme={filme} />
        ))}
      </div>
    </section>
  );
}