import { Complement } from "./components/complement";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";
import { HistoriaSection } from "./components/historia";
import { ObrasSection } from "./components/projetos";
import { PropositoSection } from "./proposito";

export default function Home() {
  return (
    <div>
      <Header />
      <ObrasSection />
      <HeroSection />
      <HistoriaSection />
      <PropositoSection />
      <Complement />
      <Footer />
    </div>
  );
}
