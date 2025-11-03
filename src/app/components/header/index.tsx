"use client";
export const Header = () => {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
      const startPosition = window.pageYOffset;
      const distance = offsetPosition - startPosition;
      const duration = 1500; // Duração em milissegundos (1.5 segundos)
      let start: number | null = null;

      const easeInOutQuad = (t: number): number => {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      };

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutQuad(progress);

        window.scrollTo(0, startPosition + distance * ease);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  };

  return (
    <div className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-1 py-1 flex items-center justify-between">
        <img src="/carara-logo.png" alt="Logo" className="h-25" />

        <nav className="hidden md:flex gap-8">
          <a
            href="#historia"
            onClick={(e) => handleSmoothScroll(e, "#historia")}
            className="text-gray-700 hover:text-red-600 transition-colors font-semibold text-base leading-[1.4]"
          >
            Nossa História
          </a>
          <a
            href="#proposito"
            onClick={(e) => handleSmoothScroll(e, "#proposito")}
            className="text-gray-700 hover:text-red-600 transition-colors font-semibold text-base leading-[1.4]"
          >
            Nosso Propósito
          </a>
          <a
            href="#obras"
            onClick={(e) => handleSmoothScroll(e, "#obras")}
            className="text-gray-700 hover:text-red-600 transition-colors font-semibold text-base leading-[1.4]"
          >
            Nossas Obras
          </a>
        </nav>
      </div>
    </div>
  );
};
