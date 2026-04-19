'use client';

import React, { useEffect, useRef } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const casesData = [
  {
    id: 1,
    title: 'Van nul naar vol, binnen 3 weken',
    brand: 'Bullit',
    video: 'https://gethyped.b-cdn.net/Bullit/Bullit%20%7C%20Loop.mp4',
    thumbnail:
      'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/69c3d06cc7a0b07e150a671d_Bullit%20branded%20placeholder_2.1.1.avif',
    color: '#fa5424',
    offset: 'md:translate-y-0',
    mobileRotate: '-rotate-3',
  },
  {
    id: 2,
    title: 'Zacht in smaak, sterk in beeld',
    brand: 'Roasta',
    video: 'https://gethyped.b-cdn.net/Roasta/roasta-loop.mp4',
    thumbnail:
      'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68716a54a3bf63bf25c2ae92_roasta-placeholder.avif',
    color: '#0082ff',
    offset: 'md:-translate-y-[2cm]',
    mobileRotate: 'rotate-3',
  },
  {
    id: 3,
    title: 'Content die écht smaakt (en raakt)',
    brand: 'Loco',
    video: 'https://gethyped.b-cdn.net/Loco/loco-bites-loop.mp4',
    thumbnail:
      'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68716b4e8982337b1d3d1bd7_loco-loco-placeholder.avif',
    color: '#33c791',
    offset: 'md:-translate-y-[4cm]',
    mobileRotate: '-rotate-3',
  },
];

const ProjectCard = ({ project }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`relative group w-full md:w-[8.5cm] h-[11.5cm] rounded-[2.5rem] border-[6px] overflow-hidden transition-all duration-500 ease-out cursor-pointer 
      ${project.offset} 
      ${project.mobileRotate} md:rotate-0 hover:md:-rotate-3`}
      style={{ borderColor: project.color }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 md:opacity-100 opacity-0 group-hover:md:opacity-0"
        style={{ backgroundImage: `url(${project.thumbnail})` }}
      />

      <video
        ref={videoRef}
        src={project.video}
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover md:opacity-0 opacity-100 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      />

      {/* Slope Overlay */}
      <div
        className="absolute bottom-4 left-4 right-4 p-6 pt-12 text-white flex flex-col justify-end rounded-4xl overflow-hidden"
        style={{
          backgroundColor: project.color,
          clipPath: 'polygon(0 20%, 100% 0, 100% 100%, 0 100%)',
          boxShadow: '0 10px 30px -10px rgba(0,0,0,0.3)',
        }}
      >
        <h3 className="text-xl md:text-2xl mb-3 font-bold leading-tight tracking-tighter pr-14">
          {project.title}
        </h3>

        <div className="mb-1">
          <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-md text-[10px] font-bold tracking-widest uppercase">
            {project.brand}
          </span>
        </div>

        {/* Double Arrow animation */}
        <div className="absolute top-5 right-5 bg-white text-black w-10 h-10 rounded-full shadow-lg flex items-center justify-center overflow-hidden">
          <div className="relative h-full w-full flex flex-col items-center transition-transform duration-500 ease-in-out md:group-hover:-translate-y-full">
            <div className="flex h-full w-full items-center justify-center shrink-0">
              <ArrowUpRight size={22} />
            </div>
            <div className="flex h-full w-full items-center justify-center shrink-0">
              <ArrowUpRight size={22} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function CasesSection() {
  return (
    <section className="w-full bg-[#fcf9f3] py-24 px-6 md:px-20 relative z-30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-6xl md:text-8xl font-bold text-[#161616] leading-[0.85] tracking-tighter mb-8">
              Content <br /> dat scoort.
            </h2>
            <p className="text-lg md:text-xl font-bold text-[#161616] opacity-90 max-w-md leading-tight">
              Wij vertellen jouw verhaal. Op een manier die écht past bij jouw
              doelgroep. Met creatieve content die werkt en het verschil maakt.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center gap-3 p-1.5 pr-5 text-[#161616] text-sm border-2 border-[#161616] font-bold rounded-full transition-all hover:bg-[#161616] hover:text-white group"
              >
                <div className="bg-[#161616] text-white p-1 rounded-full group-hover:bg-white group-hover:text-[#161616] transition-colors">
                  <ArrowRight size={18} />
                </div>
                Bekijk al ons werk
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between gap-12 md:gap-4 mt-20">
          {casesData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
