import UIProvider from "@/components/ui/UIProvider";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Sobre from "@/components/sections/Sobre";
import Encontros from "@/components/sections/Encontros";
import Calendario from "@/components/sections/Calendario";
import Agenda from "@/components/sections/Agenda";
import Comunidade from "@/components/sections/Comunidade";
import Eventos from "@/components/sections/Eventos";
import InstagramSection from "@/components/sections/InstagramSection";

export default function Home() {
  return (
    <UIProvider>
      <NavBar />
      <main>
        <Hero />
        <Sobre />
        <Encontros />
        <Calendario />
        <Agenda />
        <Comunidade />
        <Eventos />
        <InstagramSection />
      </main>
      <Footer />
    </UIProvider>
  );
}
