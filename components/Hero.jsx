'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const cards = [
  {
    id: 1,
    type: 'metric',
    bg: '#0d8dff',
    rotate: 8,
    metric: '10M+',
    title: 'Organische views',
    desc: 'Groei door slimme content',
    dividerColor: 'rgba(255,255,255,0.3)',
  },
  {
    id: 2,
    type: 'video',
    rotate: -5,
    video: 'https://gethyped.b-cdn.net/Salontopper/Loop%20Salontopper.mp4',
    thumbnail:
      'https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/69c40296636e683096701cda_video-thumb-01.avif',
  },
  {
    id: 3,
    type: 'metric',
    bg: '#33c791',
    rotate: -12,
    metric: '30+',
    title: 'Merken geholpen',
    desc: 'Van start-up tot multinational',
    dividerColor: 'rgba(0,0,0,0.2)',
  },
  {
    id: 4,
    type: 'video',
    rotate: 4,
    video: 'https://gethyped.b-cdn.net/Petrol%20Head/petrolhead-loop.mp4',
    thumbnail:
      'https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/69c402fa5b2a05b98200d317_video-thumb-02.avif',
  },
];

export default function Hero() {
  const container = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useGSAP(
    () => {
      const allCards = gsap.utils.toArray('.bento-card-wrapper');

      allCards.forEach((card, i) => {
        if (hoveredIndex === null) {
          gsap.to(card, {
            x: 0,
            rotate: cards[i].rotate,
            y: 0,
            scale: 1,
            zIndex: i,
            duration: 0.7,
            ease: 'expo.out', // Very smooth deceleration for re-joining
          });
        } else if (hoveredIndex === i) {
          gsap.to(card, {
            x: 0,
            rotate: 0,
            y: -30,
            scale: 1.05,
            zIndex: 50,
            duration: 0.4,
            ease: 'back.out(1.4)',
          });
        } else {
          const direction = i < hoveredIndex ? -1 : 1;
          gsap.to(card, {
            x: direction * 70,
            rotate: cards[i].rotate + direction * 10,
            y: 0,
            scale: 1,
            zIndex: i,
            duration: 0.5,
            ease: 'power3.out',
          });
        }
      });
    },
    { scope: container, dependencies: [hoveredIndex] }
  );

  return (
    <section
      ref={container}
      className="relative  bg-[#F8F4EE] px-4 md:px-6 pt-32 md:pt-48 md:pb-20 pb-8 overflow-hidden select-none"
    >
      <div className="mx-auto max-w-[1300px]">
        {/* Headline - Reduced margin-bottom on mobile */}
        <div className="mb-10 md:mb-16">
          <h1 className="text-[clamp(2.5rem,7vw,5.33rem)] font-bold tracking-tighter leading-[0.95] text-[#1A1A1A] mb-4">
            <span className="hidden md:block lg:block">Get Hyped. Get</span>

            <span className="hidden md:block lg:block">
              Noticed. Get Results.
            </span>

            <span className="block md:hidden lg:hidden">Get Hyped.</span>

            <span className="block md:hidden lg:hidden">Get Noticed.</span>

            <span className="block md:hidden lg:hidden">Get Results.</span>
          </h1>
          <p className="text-lg md:text-xl font-semibold text-[#161616]">
            Klaar met gokken op content <br /> die niets oplevert?
          </p>
        </div>

        {/* Bento Grid Container - Reduced height on mobile to pull cards up */}
        <div className="flex flex-row items-center justify-center md:justify-start gap-2 md:gap-0  md:h-auto">
          {cards.map((card, index) => (
            <div
              key={card.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() =>
                setHoveredIndex(hoveredIndex === index ? null : index)
              }
              className={`
                bento-card-wrapper relative 
                w-1/2 md:w-full 
                max-w-[320px] aspect-[4.8/6.3] 
                rounded-[2rem] md:rounded-[2.8rem] 
                overflow-hidden shadow-2xl cursor-pointer
                md:-mr-16 last:mr-0 
                ${index > 1 ? 'hidden md:block' : 'block'}
              `}
              style={{ transformOrigin: 'bottom center' }}
            >
              {card.type === 'metric' ? (
                <div
                  className="h-full w-full p-5 md:p-8 flex flex-col justify-between"
                  style={{ backgroundColor: card.bg }}
                >
                  <div className="text-[2.2rem] md:text-[4rem] font-bold tracking-tighter leading-none text-[#161616]">
                    {card.metric}
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    <div className="text-base md:text-xl font-bold text-[#161616] leading-tight">
                      {card.title}
                    </div>
                    <div className="h-[1px] w-full bg-[#161616]" />
                    <div className="text-[10px] md:text-sm font-semibold text-[#161616]">
                      {card.desc}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative h-full w-full">
                  <video
                    src={card.video}
                    poster={card.thumbnail}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
