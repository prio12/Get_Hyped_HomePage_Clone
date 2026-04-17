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
    labelBg: '#eae4d8',
    title: 'Social strategy',
    subtitle: 'Slimme strategie. Sterke start.',
    desc: 'We duiken diep in jouw merk, doelgroupe en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken.',
    video: 'https://gethyped.b-cdn.net/MD/MD%20Loop%20Schaken.mp4',
    bgColor: '#FFFFFF',
    btnText: 'Meer over social strategie',
    btnBgColor: '#fa5424',
    btnTextColor: '#FFFFFF',
    btnArrowDivBgColor: '#FFFFFF',
    btnArrowColor: '#161616',
  },
  {
    id: '02',
    label: 'Expertise',
    labelBg: '#FFFFFF',
    title: 'Content creation',
    subtitle: 'Content die opvalt en raakt.',
    desc: 'We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek.',
    video: 'https://gethyped.b-cdn.net/Expertises/Loop%20BTS%20comp.mp4',
    bgColor: '#fcb8fa',
    btnText: 'Meer over content creatie',
    btnBgColor: '#FFFFFF',
    btnTextColor: '#161616',
    btnArrowDivBgColor: '#161616',
    btnArrowColor: '#FFFFFF',
  },
  {
    id: '03',
    label: 'Expertise',
    labelBg: '#FFFFFF',
    title: 'Activation',
    subtitle: 'Zichtbaar waar en wanneer het telt.',
    desc: 'De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is.',
    video: 'https://gethyped.b-cdn.net/Over%20de%20Top/overdetop-loop.mp4',
    bgColor: '#33c791',
    btnText: 'Meer over activatie',
    btnBgColor: '#FFFFFF',
    btnTextColor: '#161616',
    btnArrowDivBgColor: '#161616',
    btnArrowColor: '#FFFFFF',
  },
  {
    id: '04',
    label: 'Expertise',
    labelBg: '#FFFFFF',
    title: 'Data',
    subtitle: 'Inzichten die impact maken.',
    desc: 'We duiken in de cijfers om te snappen wat écht werkt. En sturen jouw content scherp bij.',
    video: 'https://gethyped.b-cdn.net/Expertises/Data%20comp.mp4',
    bgColor: '#0d8dff',
    btnText: 'Meer over data',
    btnBgColor: '#FFFFFF',
    btnTextColor: '#161616',
    btnArrowDivBgColor: '#161616',
    btnArrowColor: '#FFFFFF',
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
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      {expertiseData.map((item) => (
        <section
          key={item.id}
          className="expertise-card sticky top-0 h-screen w-full flex items-center justify-center p-6 md:p-12 overflow-hidden"
          style={{ backgroundColor: item.bgColor }}
        >
          <div className="relative w-full max-w-7xl h-full flex flex-col justify-between py-10 md:py-16">
            {/* TOP SECTION */}
            <div className="flex justify-between items-start w-full">
              <div className="max-w-2xl">
                <div
                  className="text-sm md:text-lg font-semibold mb-4 px-3 py-1.5 rounded-md inline-block opacity-80"
                  style={{ backgroundColor: item.labelBg }}
                >
                  {item.label}
                </div>
                <h2 className="text-4xl md:text-8xl font-semibold text-[#161616] tracking-tighter leading-[0.9]">
                  {item.title}
                </h2>
              </div>
              <div>
                <span className="text-5xl md:text-8xl font-black opacity-10 leading-none">
                  {item.id}
                </span>
              </div>
            </div>

            {/* CONTENT & VIDEO SECTION */}
            <div className="flex flex-col md:flex-row justify-between items-end w-full gap-4 md:gap-8">
              {/* VIDEO CONTAINER */}
              <div className="w-full md:w-[45%] flex justify-start md:justify-end order-2 md:order-2">
                <div
                  className="relative overflow-hidden rounded-3xl shadow-xl border-7 transition-all duration-500 my-8 md:my-0 -rotate-[2deg] md:rotate-[3deg]"
                  style={{
                    borderColor: item.btnBgColor,
                    width: 'clamp(50%, 50%, 280px)',
                  }}
                >
                  <div className="w-full h-[210px] md:h-[320px] overflow-hidden">
                    <video
                      src={item.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover scale-150"
                    />
                  </div>
                </div>
              </div>

              {/* TEXT & CTA */}
              <div className="w-full md:w-1/2 pb-4 order-3 md:order-1">
                <h4 className="text-xl md:text-2xl tracking-tighter font-semibold mb-3 leading-tight">
                  {item.subtitle}
                </h4>
                <p className="text-sm md:text-lg opacity-80 mb-6 max-w-[440px] font-semibold leading-relaxed">
                  {item.desc}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-3 p-1.5 text-sm font-bold rounded-lg transition-all hover:opacity-90 active:scale-95 group"
                  style={{
                    backgroundColor: item.btnBgColor,
                    color: item.btnTextColor,
                  }}
                >
                  <span className="pl-2">{item.btnText}</span>
                  <div
                    className="p-1 rounded-lg"
                    style={{
                      backgroundColor: item.btnArrowDivBgColor,
                      color: item.btnArrowColor,
                    }}
                  >
                    <ArrowRight size={20} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
