import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';

export default function Home() {
  return (
    <main style={{ backgroundColor: '#F8F4EE' }} className="min-h-screen ">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}
