"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Projeto {
  id: number;
  nome: string;
  bairro: string;
  prevEntrega?: string;
  entregue?: string;
  imagem: string;
  soldOut: boolean;
}

const projetos: Projeto[] = [
  {
    id: 1,
    nome: "Residencial Bisesvski",
    bairro: "Jarivatuba",
    prevEntrega: "",
    entregue: "Novembro/2020",
    imagem: "/bisesvski.png",
    soldOut: true,
  },
  {
    id: 2,
    nome: "Residencial Garça Vermelha",
    bairro: "Jarivatuba",
    prevEntrega: "",
    entregue: "Outubro/2025",
    imagem: "/garca.png",
    soldOut: true,
  },
  {
    id: 3,
    nome: "Residencial Arara",
    bairro: "Iririu",
    prevEntrega: "Setembro/2026",
    entregue: "",
    imagem: "/arara.png",
    soldOut: false,
  },
  {
    id: 4,
    nome: "Residencial Andorinha",
    bairro: "Parque Guarani",
    entregue: "",
    prevEntrega: "Dezembro/2026",
    imagem: "/andorinha.jpg",
    soldOut: true,
  },
];

export const ObrasSection = () => {
  return (
    <section id="obras" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-12">
          Nossas Obras
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="obras-carousel"
        >
          {projetos.map((projeto) => (
            <SwiperSlide key={projeto.id}>
              <ProjetoCard projeto={projeto} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const ProjetoCard = ({ projeto }: { projeto: Projeto }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={projeto.imagem}
          alt={projeto.nome}
          className="w-full h-64 object-cover"
        />

        {projeto.soldOut && (
          <div className="absolute -top-4.5 -right-18">
            <img src="/sold-out.png" className="h-32 object-cover " />
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {projeto.nome}
        </h3>
        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Bairro:</span> {projeto.bairro}
        </p>
        <p className="text-gray-600">
          {projeto.entregue ? (
            <>
              <span className="font-semibold">Entregue em: </span>
              {projeto.entregue}
            </>
          ) : projeto.prevEntrega ? (
            <>
              <span className="font-semibold">Previsão de Entrega: </span>
              {projeto.prevEntrega}
            </>
          ) : null}
        </p>
      </div>
    </div>
  );
};
