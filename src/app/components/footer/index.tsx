import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Coluna 1: Título e Redes Sociais */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-red-500 mb-8">
              Entre em contato
            </h3>

            <div className="space-y-4">
              {/* WhatsApp */}
              <a
                href="https://wa.me/5547997180770"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-16 h-16 bg-carara-red rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaWhatsapp className="text-3xl" />
                </div>
                <span className="bg-carara-red text-black px-6 py-3 rounded-full font-semibold text-lg hover:bg-red-500 transition-colors">
                  Quero mais informações
                </span>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/cararaincorporadora"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-16 h-16 bg-carara-red rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaInstagram className="text-3xl" />
                </div>
                <span className="bg-carara-red text-black px-6 py-3 rounded-full font-semibold text-lg hover:bg-red-500 transition-colors">
                  @cararaincorporadora
                </span>
              </a>
            </div>
          </div>

          {/* Coluna 2: Informações de Contato */}
          <div>
            <h4 className="text-2xl font-bold text-red-500 mb-8">Contatos</h4>

            <div className="space-y-4 text-gray-700">
              {/* Localização */}
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-carara-red text-xl mt-1 flex-shrink-0" />
                <p className="text-lg">Joinville/SC</p>
              </div>

              {/* Telefone/WhatsApp */}
              <div className="flex items-start gap-3">
                <FaWhatsapp className="text-carara-red text-xl mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg font-semibold">Fone / Whatsapp:</p>
                  <a
                    href="tel:+5547997180770"
                    className="text-lg hover:text-carara-red transition-colors"
                  >
                    (47) 99718-0770
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <FaEnvelope className="text-carara-red text-xl mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg font-semibold">Email:</p>
                  <a
                    href="mailto:incorporadora@carara.com.br"
                    className="text-lg hover:text-carara-red transition-colors"
                  >
                    incorporadora@carara.com.br
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Carara Incorporadora. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
