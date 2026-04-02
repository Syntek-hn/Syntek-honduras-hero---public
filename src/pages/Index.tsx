import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Industrias from "@/components/Industrias";
import Process from "@/components/Process";
import Planes from "@/components/Planes";
import WhySyntek from "@/components/WhySyntek";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Industrias />
      <Process />
      <Planes />
      <WhySyntek />
      <CTAFinal />
      <Footer />
    </div>
  );
};

export default Index;
