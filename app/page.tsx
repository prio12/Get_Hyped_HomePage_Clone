import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Expertises from '@/components/Expertises';
import CasesSection from '@/components/CasesSection';
import Brands from '@/components/Brands';

export default function Home() {
  return (
    <main style={{ backgroundColor: '#F8F4EE' }} className="min-h-screen ">
      <Navbar />
      <Hero />
      <About />
      <Expertises />
      <div className="relative z-20 bg-[#F8F4EE]">
        <CasesSection />
      </div>
      <Brands />
    </main>
  );
}
