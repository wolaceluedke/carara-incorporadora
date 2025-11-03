export const HeroSection = () => {
  return (
    <section className="relative min-h-52 flex items-center justify-center overflow-hidden bg-red-500">
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-40 z-[1]"></div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 leading-tight drop-shadow-2xl text-white ">
          Construímos o lugar onde a sua história começa.
        </h1>

        <p className="text-lg md:text-xl text-white leading-relaxed">
          A Carara acredita que um lar é o cenário das melhores histórias,
          porque o lar é onde a vida acontece
        </p>
      </div>
    </section>
  );
};
