'use client';

import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { Flame, Mail } from 'lucide-react';

const imagePool = [
  'https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3404e57460370b97757c_7719b29e960423bac19acd325c901392_gh-logo-blue.svg',
  'https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415233f03ab6c1143fa_gh-logo-pink.svg',
  'https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415e192971624995445_gh-logo-green.svg',
  'https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415b3eecf81e4b1d9a7_gh-logo-red.svg',
];

export default function CTASection() {
  const containerRef = useRef(null);
  const [imageIndex, setImageIndex] = useState(0);
  const lastPos = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const distance = Math.hypot(
      e.clientX - lastPos.current.x,
      e.clientY - lastPos.current.y
    );

    if (distance > 220) {
      lastPos.current = { x: e.clientX, y: e.clientY };
      spawnImage(e.clientX, e.clientY);
    }
  };

  const spawnImage = (x, y) => {
    if (!containerRef.current) return;

    const img = document.createElement('img');
    img.src = imagePool[imageIndex];

    img.className =
      'absolute pointer-events-none w-32 md:w-44 z-0 opacity-0 select-none';

    const rect = containerRef.current.getBoundingClientRect();
    const posX = x - rect.left;
    const posY = y - rect.top;

    img.style.left = `${posX}px`;
    img.style.top = `${posY}px`;
    img.style.transform = 'translate(-50%, -50%)';

    containerRef.current.appendChild(img);
    setImageIndex((prev) => (prev + 1) % imagePool.length);

    const tl = gsap.timeline();
    tl.to(img, {
      opacity: 1,
      scale: 1,
      rotation: Math.random() * 40 - 20,
      duration: 0.6,
      ease: 'expo.out',
    }).to(
      img,
      {
        y: -120,
        x: Math.random() * 60 - 30,
        opacity: 0,
        scale: 0.4,
        duration: 1.2,
        ease: 'power2.inOut',
        onComplete: () => img.remove(),
      },
      '-=0.2'
    );
  };

  return (
    <section
      onMouseMove={(e) => {
        if (window.innerWidth >= 768) handleMouseMove(e);
      }}
      // Hidden on mobile
      className="hidden md:flex relative w-full h-[90vh] bg-[#FAF4EC] flex-col items-center justify-center overflow-hidden"
    >
      <div
        ref={containerRef}
        className="absolute inset-0 pointer-events-none z-0"
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6 pointer-events-none">
        <h2 className="text-[120px] font-bold text-[#161616] tracking-tighter mb-12 leading-[0.85] select-none">
          Let&apos;s Get Hyped!
        </h2>

        {/* Buttons Container */}
        <div className="flex items-center gap-6 pointer-events-auto">
          <a
            href="#"
            className="flex items-center gap-4 p-2  border  text-xl  font-bold rounded-lg transition-all "
          >
            Mail ons direct
            <div className="bg-[#161616] text-white p-1 rounded-md ">
              <Mail size={18} />
            </div>
          </a>

          <a
            href="#"
            className="flex items-center gap-4 p-2  bg-[#FA5424] text-[#FFFFFF] text-xl  font-bold rounded-lg transition-all "
          >
            Get Results
            <div className="bg-[#FFFFFF] text-black p-1 rounded-md ">
              <Flame
                size={18}
                strokeWidth={3}
                className="text-[#FF4D00]"
                fill="#FF4D00"
                fillOpacity={0.45}
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
