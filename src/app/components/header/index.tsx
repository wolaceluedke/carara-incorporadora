"use client";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    setIsMenuOpen(false); // Fecha o menu ao clicar em um link
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
      const startPosition = window.pageYOffset;
      const distance = offsetPosition - startPosition;
      const duration = 1500;
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
      <div className="max-w-7xl mx-auto px-4 py-1 flex items-center justify-between">
        <img src="/carara-logo.png" alt="Logo" className="h-25" />

        {/* Botão Hambúrguer - visível apenas em mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span
            className={`w-6 h-0.5 bg-gray-700 transition-all ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-gray-700 transition-all ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-gray-700 transition-all ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* Menu Desktop */}
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

        {/* Menu Mobile */}
        <nav
          className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ${
            isMenuOpen
              ? "max-h-64 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col py-4">
            <a
              href="#historia"
              onClick={(e) => handleSmoothScroll(e, "#historia")}
              className="px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-red-600 transition-colors font-semibold"
            >
              Nossa História
            </a>
            <a
              href="#proposito"
              onClick={(e) => handleSmoothScroll(e, "#proposito")}
              className="px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-red-600 transition-colors font-semibold"
            >
              Nosso Propósito
            </a>
            <a
              href="#obras"
              onClick={(e) => handleSmoothScroll(e, "#obras")}
              className="px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-red-600 transition-colors font-semibold"
            >
              Nossas Obras
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};
