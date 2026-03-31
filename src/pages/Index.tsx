import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";
import Process from "@/components/Process";
import Industrias from "@/components/Industrias";
import Planes from "@/components/Planes";
import NovaVsEmpleado from "@/components/NovaVsEmpleado";
import Testimonios from "@/components/Testimonios";
import QuienesSomos from "@/components/QuienesSomos";
import Formulario from "@/components/Formulario";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <Servicios />
    <Process />
    <Industrias />
    <Planes />
    <NovaVsEmpleado />
    <Testimonios />
    <QuienesSomos />
    <Formulario />
    <Footer />
  </div>
);

export default Index;
