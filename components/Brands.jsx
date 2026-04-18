'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const logos = [
  {
    name: 'Bullit',
    url: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/69241146b4df63c4ca966552_Bullit%20Digital.svg',
  },
  {
    name: 'Morssinkhof',
    url: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68c194e6d1b186563459b107_morssinkhof.svg',
  },
  {
    name: 'Salontopper',
    url: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d88f755388cc2c74ecff_salontopper.svg',
  },
  {
    name: 'Seesing Flex',
    url: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d880bed5996600cbc586_seesing-flex.svg',
  },
  {
    name: 'Graafschap College',
    url: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d86cd6ba384af3c14e58_graafschap-college.svg',
  },
  {
    name: 'Fides',
    url: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d85341bf0d7476e56a8c_fides.svg',
  },
  {
    name: 'SRHK',
    url: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d838fc5735f090bd9843_SRHK.svg',
  },
  {
    name: 'KNLTB',
    url: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d81e72e08110e3fd1a17_knltb.svg',
  },
  {
    name: 'THO',
    url: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/684b062ebc242028ca4b3ea1_tho.svg',
  },
  {
    name: 'Talententuin',
    url: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/684c05642bf8f5cea7384403_de-talententuin.svg',
  },
  {
    name: 'ZCLV',
    url: 'https://cdn.prod.website-files.com/68c1952f22281ee50d3620b5_zclv.svg',
  },
];

export default function Brands() {
  const tickerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate from 0 to -50% for Right-to-Left motion
      gsap.to(tickerRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 35, // Adjust this for speed (higher = slower)
        ease: 'none',
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-[#F8F4EE] my-5 border-b border-slate-300  pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        {/* <h2 className="text-5xl font-bold  tracking-[0.2em] ">
          These brands got hyped.
        </h2> */}
        <h2 className="text-3xl md:text-5xl font-bold">
          These brands <br /> got hyped.
        </h2>
      </div>

      {/* Infinite Grid Ticker Wrapper */}
      <div className="flex  select-none">
        <div ref={tickerRef} className="flex gap-5  will-change-transform ">
          {/* We combine the array twice to ensure the loop is seamless */}
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center rounded-lg shrink-0 
                         w-[132px] h-[132px] 
                         md:w-[245px] md:h-[245px] 
                         border-1 border-slate-600"
            >
              <img
                src={logo.url}
                alt={logo.name}
                // max-h and max-w at 80% to keep them large but safe within the grid lines
                className="w-full h-full  object-contain block"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
