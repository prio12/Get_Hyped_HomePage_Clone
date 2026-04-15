import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Expertises from '@/components/Expertises';

export default function Home() {
  return (
    <main style={{ backgroundColor: '#F8F4EE' }} className="min-h-screen ">
      <Navbar />
      <Hero />
      <About />
      <Expertises />
    </main>
  );
}
