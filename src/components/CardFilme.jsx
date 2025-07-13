export default function CardFilme({ filme }) {
  return (
    <div className="bg-zinc-800 text-white p-4 rounded-x1 shadow-md hover:scale-105 transition-transform duration-300">
      <img
        src={filme.imagem}
        alt={filme.titulo}
        className="w-full h-auto rounded-md mb-4"
      />

      <h2 className="text-xl front-semibold">{filme.titulo}</h2>
      <p className="text-sm text-zinc-300">{filme.genero}</p>
      <p className="text-sm mt-1">
        Ano: {filme.ano} • Nota: {filme.nota}
      </p>
    </div>
  );
}
