export const SloganSection = () => {
  return (
    <section className="bg-black py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Logo branco */}
        <div className="mb-8 flex justify-center">
          <img
            src="/carara-white.png"
            alt="Carara Incorporadora"
            className="h-32 md:h-40"
          />
        </div>

        {/* Slogan */}
        <p className="text-white text-2xl md:text-3xl font-light italic">
          Construímos lares, cultivamos histórias.
        </p>
      </div>
    </section>
  );
};
