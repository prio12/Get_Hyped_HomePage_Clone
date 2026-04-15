'use client';

import { ArrowDown, ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';

export default function About() {
  const arrowWrapperRef = useRef(null);
  const containerRef = useRef(null);

  const handleMouseEnter = () => {
    // 1. Make the box bigger
    gsap.to(containerRef.current, {
      scale: 1.2,
      duration: 0.3,
      ease: 'power2.out',
    });

    // 2. The "Infinite Slide" Animation
    // We move the wrapper down by 50% so the top arrow lands exactly in the middle
    gsap.to(arrowWrapperRef.current, {
      y: '50%',
      duration: 0.4,
      ease: 'expo.inOut',
      onComplete: () => {
        // RESET: Move it back to 0% instantly so it's ready for the next hover
        gsap.set(arrowWrapperRef.current, { y: '0%' });
      },
    });
  };

  const handleMouseLeave = () => {
    gsap.to(containerRef.current, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.in',
    });
  };
  return (
    <div className="px-4 mt-12 max-w-[1280px] mx-auto">
      {/* Desktop H2 */}
      <h2
        className="text-5xl hidden leading-[1.1] tracking-[-0.03em] font-bold text-[#161616] 
               lg:block md:block max-w-[90%] mb-6 pl-0 md:pl-22"
      >
        <span>Wij maken content die opvalt. Die</span>
        <br />
        <span>blijft hangen. Die jouw doelgroep</span>
        <br />
        <span>raakt en jouw merk in beweging</span>
        <br />
        <span>brengt. Snel, krachtig en energiek.</span>
      </h2>

      {/* Mobile H2 */}
      <h2
        className="text-[28px] leading-[1.1] tracking-[-0.03em] font-bold text-[#161616] 
               block md:hidden max-w-full mb-6"
      >
        Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep
        raakt en jouw merk in beweging brengt. Snel, krachtig en energiek.
      </h2>

      {/* Main Section Grid */}
      <section className="grid grid-cols-1 md:grid-cols-9 px-4 mt-16 gap-10 md:gap-5">
        {/* 1st Child: Image (Full width on mobile) */}
        <div className="col-span-1 md:col-span-3 hidden md:block lg:block">
          <img
            src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/6894757aa6dd3f84f6e463a2_Anniek%20Bril.webp"
            alt="about image"
            className="w-full md:w-1/2 rounded-2xl h-auto object-cover"
          />
        </div>
        {/* <div className="col-span-1 md:col-span-3 md:hidden lg:hidden">
          <video
            src={card.video}
            poster={card.thumbnail}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        </div> */}

        {/* 2nd Child: Text & Button (Full width on mobile) */}
        <div className="col-span-1 md:col-span-3 text-xl font-bold flex flex-col justify-start md:pt-10">
          <p className="leading-tight">
            We stoppen niet bij mooie plaatjes en vette beelden. We maken het
            meetbaar. Zo weet je precies wat werkt en wat niet. Nooit meer
            content zonder strategie. Nooit meer content zonder resultaat.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-flex items-center gap-3 p-1.5  text-[#161616] text-sm border-2 border-[#161616] font-bold rounded-full  transition-all group"
            >
              Leer ons kennen
              <div className="bg-[#161616] text-white p-1 rounded-lg">
                <ArrowRight />
              </div>
            </a>
          </div>
        </div>

        {/* 3rd Child: Positioned Arrow (Hidden on mobile, Bottom-Middle on Desktop) */}
        <div className="hidden md:flex md:col-span-3 flex-col items-center justify-end pb-8">
          {/* The Quadrilateral Container */}
          <div
            ref={containerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative w-12 h-12 overflow-hidden cursor-pointer flex items-center justify-center border-2 border-[#161616] rounded-md bg-transparent"
          >
            {/* The Sliding Wrapper: Twice the height of the container */}
            <div
              ref={arrowWrapperRef}
              className="absolute top-[-100%] left-0 w-full h-[200%] flex flex-col"
            >
              {/* Incoming Arrow (Top Half) */}
              <div className="h-1/2 w-full flex items-center justify-center">
                <ArrowDown size={22} className="text-[#fa5424]" />
              </div>
              {/* Current Arrow (Bottom Half - starts in the middle) */}
              <div className="h-1/2 w-full flex items-center justify-center">
                <ArrowDown size={22} className="text-[#fa5424]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
