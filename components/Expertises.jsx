'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const expertiseData = [
  {
    id: '01',
    label: 'Expertise',
    title: 'Social strategy',
    subtitle: 'Slimme strategie. Sterke start.',
    desc: 'We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.',
    button: 'Meer over social strategie',
    video: 'https://gethyped.b-cdn.net/MD/MD%20Loop%20Schaken.mp4',
    bgColor: '#E5E7EB',
  },
  {
    id: '02',
    label: 'Expertise',
    title: 'Content creation',
    subtitle: 'Content die opvalt en raakt.',
    desc: 'We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.',
    button: 'Meer over content creatie',
    video: 'https://gethyped.b-cdn.net/Expertises/Loop%20BTS%20comp.mp4',
    bgColor: '#FEF3C7',
  },
  {
    id: '03',
    label: 'Expertise',
    title: 'Activation',
    subtitle: 'Zichtbaar waar en wanneer het telt.',
    desc: 'De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is. Zo raakt jouw merk de juiste mensen, precies waar en wanneer het telt.',
    button: 'Meer over activatie',
    video: 'https://gethyped.b-cdn.net/Over%20de%20Top/overdetop-loop.mp4',
    bgColor: '#D1FAE5',
  },
  {
    id: '04',
    label: 'Expertise',
    title: 'Data',
    subtitle: 'Inzichten die impact maken.',
    desc: 'We duiken in de cijfers om te snappen wat écht werkt. En sturen jouw content scherp bij.',
    button: 'Meer over data',
    video: 'https://gethyped.b-cdn.net/Expertises/Data%20comp.mp4',
    bgColor: '#DBEAFE',
  },
];

export default function ExpertiseSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray('.expertise-card');

    cards.forEach((card, index) => {
      if (index !== cards.length - 1) {
        gsap.to(card, {
          scale: 0.9,
          opacity: 0.8,
          scrollTrigger: {
            trigger: card,
            start: 'top top',
            endTrigger: containerRef.current,
            end: 'bottom bottom',
            scrub: true,
            pin: true,
            pinSpacing: false,
          },
        });
      } else {
        ScrollTrigger.create({
          trigger: card,
          start: 'top top',
          pin: true,
          pinSpacing: false,
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      {expertiseData.map((item) => (
        <section
          key={item.id}
          className="expertise-card sticky top-0 h-screen w-full flex items-center justify-center p-6 md:p-12"
          style={{ backgroundColor: item.bgColor }}
        >
          {/* Main Card Container */}
          <div className="relative w-full max-w-7xl h-full flex flex-col justify-between py-12">
            {/* TOP SECTION: Label/Title (Left) and Number (Right) */}
            <div className="flex justify-between items-start w-full">
              <div className="max-w-2xl">
                <span className="block text-sm uppercase tracking-[0.2em] font-bold mb-4 opacity-60">
                  {item.label}
                </span>
                <h2 className="text-5xl md:text-8xl font-black text-[#161616] tracking-tighter leading-[0.9]">
                  {item.title}
                </h2>
              </div>
              <div className="hidden md:block">
                <span className="text-8xl md:text-9xl font-black opacity-10 leading-none">
                  {item.id}
                </span>
              </div>
            </div>

            {/* BOTTOM SECTION: Subtitle/Desc (Left) and Video (Right) */}
            <div className="flex flex-col md:flex-row justify-between items-end w-full gap-8">
              {/* Bottom Left: Text & CTA */}
              <div className="w-full md:w-1/2 pb-4">
                <h4 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                  {item.subtitle}
                </h4>
                <p className="text-base md:text-lg font-medium opacity-80 mb-8 max-w-[440px] leading-relaxed">
                  {item.desc}
                </p>
                <a
                  href="#"
                  className="group inline-flex items-center gap-4 bg-[#fa5424] text-white px-8 py-4 rounded-full font-bold transition-all hover:bg-[#161616] hover:scale-105"
                >
                  {item.button}
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>

              {/* Bottom Right: Video Visual (Controlled Size) */}
              <div className="w-full md:w-[40%] flex justify-end">
                <div className="relative w-full max-w-[450px] aspect-[4/3] md:aspect-square overflow-hidden rounded-[2.5rem] shadow-2xl">
                  <video
                    src={item.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  {/* Optional Orange Frame overlay to match your previous design */}
                  <div className="absolute inset-0 border-[12px] border-[#fa5424]/10 pointer-events-none rounded-[2.5rem]" />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
