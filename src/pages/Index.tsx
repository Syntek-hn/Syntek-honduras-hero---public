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

      {/* WhatsApp floating button — animated */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Ping ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        {/* Pulse glow */}
        <span className="absolute inset-[-4px] rounded-full bg-[#25D366]/20 animate-pulse" />
        <a
          href="https://wa.me/50498092116?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20Syntek%20AI"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl shadow-green-500/40 hover:scale-110 hover:shadow-2xl hover:shadow-green-500/50 active:scale-95 transition-all duration-300 animate-bounce-slow"
          aria-label="Contactar por WhatsApp"
        >
          <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
            <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958a15.923 15.923 0 008.832 2.662C24.826 31.994 32 24.818 32 15.996 32 7.174 24.826 0 16.004 0zm9.302 22.602c-.39 1.1-2.282 2.104-3.142 2.166-.86.062-1.666.388-5.612-1.168-4.756-1.874-7.772-6.756-8.006-7.07-.234-.312-1.908-2.538-1.908-4.842s1.206-3.432 1.636-3.902c.43-.47.936-.588 1.248-.588.312 0 .624.002.898.016.288.014.674-.11.954.728.312.858 1.058 2.928 1.152 3.14.094.212.156.46.032.742-.126.28-.188.456-.374.702-.188.25-.394.556-.562.746-.188.212-.382.442-.164.866.218.424.968 1.6 2.08 2.592 1.43 1.274 2.636 1.668 3.01 1.854.374.188.594.156.812-.094.218-.25.936-1.09 1.186-1.466.25-.374.5-.312.842-.188.344.126 2.18 1.028 2.554 1.214.374.188.624.28.718.436.094.156.094.904-.296 2.004z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Index;
