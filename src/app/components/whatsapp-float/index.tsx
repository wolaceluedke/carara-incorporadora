import { FaWhatsapp } from "react-icons/fa";

export const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/5547997180770"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="relative group">
        {/* Ícone do WhatsApp */}
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
          <FaWhatsapp className="text-white text-4xl" />
        </div>

        {/* Badge vermelho */}
        <span className="absolute -top-1 -right-1 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg animate-pulse">
          1
        </span>

        {/* Efeito de onda */}
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30"></span>
      </div>
    </a>
  );
};
