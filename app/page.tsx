import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main style={{ backgroundColor: '#F8F4EE' }} className="min-h-screen ">
      <Navbar />
      <Hero />
    </main>
  );
}
