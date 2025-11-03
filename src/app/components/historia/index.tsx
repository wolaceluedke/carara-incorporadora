"use client";
export const HistoriaSection = () => {
  const imagens = ["/sofa.png", "/sala.png", "/cozinha.png", "/sala.png"];

  return (
    <section id="historia" className="py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-12">
          Nossa História
        </h2>

        <div className="mb-16">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Desde 2018, a Carara Incorporadora nasceu com um propósito simples e
            verdadeiro: transformar o jeito de construir e de morar. Acreditamos
            que cada projeto vai muito além das paredes, ele é o início de novas
            histórias, momentos e sonhos que ganham vida. Com cuidado em cada
            detalhe, unimos técnica, qualidade e sensibilidade para criar
            espaços que acolhem e inspiram. Mais do que obras, entregamos lares.
            E em cada um deles, deixamos um pedacinho da nossa história também.
          </p>
        </div>

        {/* Grid de imagens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {imagens.map((imagem, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group bg-gray-200"
            >
              <img
                src={imagem}
                alt={`Interior ${index + 1}`}
                className="w-full h-72 object-cover"
                onError={(e) => {
                  console.log(`Erro ao carregar: ${imagem}`);
                  e.currentTarget.src = "/carara.png"; // fallback
                }}
                onLoad={() => console.log(`Carregou: ${imagem}`)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
