export const Complement = () => {
  return (
    <section className="relative min-h-52 flex items-center justify-center overflow-hidden bg-red-500">
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-40 z-[1]"></div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-20 text-center items-center">
        <img
          src="/logo-bg-white.png"
          className="items-center mb-8 mx-auto"
          alt=""
        />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 leading-tight drop-shadow-2xl text-white ">
          Construímos o lugar onde a sua história começa.
        </h1>
      </div>
    </section>
  );
};
