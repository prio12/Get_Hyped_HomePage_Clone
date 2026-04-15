'use client';

import { Flame, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

const LogoSVG = ({ className }) => (
  <svg
    width="157"
    height="62"
    viewBox="0 0 157 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M157 13.5888V50.7983C157 56.9857 151.866 62.0011 145.532 62.0011H5.64043C2.52513 62.0011 0 59.5344 0 56.4911V27.7499C0 25.0027 2.03495 22.6557 4.81163 22.2052L140.824 0.186982C149.296 -1.18345 157 5.19928 157 13.5857"
      fill="transparent"
    />
    <path
      d="M142.707 59.0965H42.2403V19.0674L141.001 3.94857C147.677 2.92784 153.714 7.96849 153.714 14.5717V48.3441C153.714 54.2826 148.786 59.0965 142.707 59.0965Z"
      fill="#000000"
    />
    <path
      d="M53.8437 19.7951V34.8824L51.0316 35.1313V20.2015L45.2815 21.0269V56.6707L51.0316 56.6171V41.6873L53.8437 41.5046V56.5919L59.9776 56.5352V18.913L53.8437 19.7951Z"
      fill="#FFFFFF"
      stroke="#000000"
      strokeWidth="0.5"
    />
    <path
      d="M71.5583 17.2464L69.9233 31.5556L69.8459 32.7811L69.6911 32.7968L69.6137 31.5871L68.0044 17.7568L61.3707 18.7114L66.45 43.0042V56.4753L73.1676 56.4155V42.6261L78.6855 16.2194L71.5583 17.2464Z"
      fill="#FFFFFF"
      stroke="#000000"
      strokeWidth="0.5"
    />
    <path
      d="M120.765 18.4688V10.1643L102.286 12.8233V56.1477L120.765 55.9776V47.6762L111.203 47.9976V37.8092L120.21 37.2295V28.9975L111.203 29.7977V19.6124L120.765 18.4688Z"
      fill="#FFFFFF"
      stroke="#000000"
      strokeWidth="0.5"
    />
    <path
      d="M91.3047 36.0575L87.8153 36.3159V21.6287L91.3047 21.2034V36.0575ZM80.0464 16.0241V56.3525L87.7572 56.28V43.209L91.3337 43.0231C96.0099 42.7805 99.6734 39.0063 99.6734 34.4319V23.1629C99.6734 17.9143 94.9005 13.8881 89.5826 14.6537L80.0464 16.0272V16.0241Z"
      fill="#FFFFFF"
      stroke="#000000"
      strokeWidth="0.5"
    />
    <path
      d="M137.963 47.8086L133.352 47.9535V16.0745L137.963 15.5106V47.8086ZM123.151 9.82093V55.9555L140.359 55.798C145.19 55.7539 149.083 51.9167 149.083 47.1974V16.0524C149.083 10.8039 144.31 6.77764 138.992 7.54319L123.148 9.82408L123.151 9.82093Z"
      fill="#FFFFFF"
      stroke="#000000"
      strokeWidth="0.5"
    />
    <path
      d="M16.2795 59.0965H26.2543V52.0175L20.501 52.1813V44.1824L25.906 43.8453V36.8199L20.501 37.3114V29.3094L26.2543 28.5942V21.5152L16.2795 23.04V59.0965Z"
      fill="#000000"
    />
    <path
      d="M27.7829 21.2789V28.4052L31.7561 27.9106V59.0965H36.5548V27.3151L40.8182 26.7859V19.2847L27.7829 21.2789Z"
      fill="#000000"
    />
    <path
      d="M10.7552 38.1967V30.4719L6.41764 31.0106V52.7862L10.7552 52.6633V46.2774L8.09139 46.4255V40.2381L14.7799 39.6836V59.0933H10.7584V57.0676L10.0586 57.7386C9.15239 58.6082 7.93337 59.0933 6.66597 59.0933H5.9726C4.14728 59.0933 2.67026 57.6473 2.67026 55.8673V28.8021C2.67026 26.6851 4.25047 24.8799 6.39184 24.5522L10.968 23.8528C12.9707 23.5473 14.7831 25.0594 14.7831 27.0379V37.8281L10.7616 38.1935L10.7552 38.1967Z"
      fill="#000000"
    />
  </svg>
);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling Down - Hide Navbar
        gsap.to(navRef.current, {
          y: -100,
          opacity: 0,
          duration: 0.4,
          ease: 'power2.inOut',
        });
      } else {
        // Scrolling Up - Show Navbar
        gsap.to(navRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: 'power2.out',
        });
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  const navLinks = [
    { label: 'Expertises', href: '#' },
    { label: 'Work', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  return (
    <>
      <nav
        ref={navRef}
        className="fixed w-full z-[100] pt-4 px-6 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between bg-transparent">
          <a
            href="#"
            className="relative z-[110] flex items-center leading-none hover:opacity-80 transition-opacity"
          >
            <LogoSVG className="h-10 md:h-12.5 w-auto" />
          </a>

          <ul className="hidden md:flex items-center bg-white/80 backdrop-blur-md rounded-full py-1.5 shadow-sm border border-black/5">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="group relative flex items-center justify-center overflow-hidden rounded-full px-[1.2rem] py-[0.6rem] mx-1 text-xs font-bold tracking-[-0.02em] text-black"
                >
                  <span className="absolute inset-0 translate-y-full bg-[#FF0000] transition-transform duration-300 ease-out group-hover:translate-y-0"></span>
                  <span className="absolute inset-0 translate-y-full bg-black transition-transform duration-500 delay-40 group-hover:translate-y-0"></span>
                  <span className="relative z-10 block h-[1.1em] overflow-hidden leading-none">
                    <span className="block transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-full group-hover:text-white">
                      {link.label}
                    </span>
                    <span className="absolute top-0 left-0 block w-full translate-y-[150%] text-white transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-[20%]">
                      {link.label}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <a
              href="#"
              className="group relative inline-flex items-center gap-2 px-4 py-2 text-[#1A1A1A] text-sm font-bold transition-transform duration-450 ease-bounce hover:rotate-[-8deg]"
            >
              <span className="absolute inset-0 left-[0.15em] z-[-1] h-full bg-[#FCB8FA] rounded-[0.5em] w-[calc(100%-0.3em)] transition-all duration-450 ease-bounce group-hover:w-[calc(100%-0.8em)]" />
              <span className="relative z-10 flex items-center gap-2">
                Get Results
                <div className="bg-white px-1 py-1 rounded-md transition-transform duration-450 group-hover:rotate-10 shadow-sm">
                  <Flame
                    size={14}
                    strokeWidth={3}
                    className="text-[#FF4D00]"
                    fill="#FF4D00"
                    fillOpacity={0.25}
                  />
                </div>
              </span>
            </a>
          </div>

          <button
            className={`relative z-[110] flex md:hidden flex-col gap-1.5 px-2.5 rounded-lg py-4 ${!menuOpen ? 'bg-[#FCB8FA]' : 'bg-[#FFFFFF]'} border border-black/10`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X size={18} className="text-[#1A1A1A]" />
            ) : (
              <>
                <span className="block w-6 h-0.5 bg-[#1A1A1A]"></span>
                <span className="block w-6 h-0.5 bg-[#1A1A1A]"></span>
              </>
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {menuOpen && (
          <div className="fixed inset-0 z-[60]">
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-110%', top: '-50px' }}
              transition={{
                type: 'spring',
                mass: 1.2,
                stiffness: 300,
                damping: 20,
                restDelta: 0.001,
                exit: {
                  type: 'tween',
                  delay: 0.3,
                  duration: 0.4,
                  ease: [0.76, 0, 0.24, 1],
                },
              }}
              className="absolute inset-0 bg-[#FCB8FA] m-2.5 rounded-lg origin-top shadow-2xl"
            />

            <div className="relative h-full flex flex-col items-center justify-center px-6">
              <ul className="flex flex-col items-center gap-2 mt-12">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.label}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{
                      y: -20,
                      opacity: 0,
                      transition: { duration: 0.2, delay: index * 0.05 },
                    }}
                    transition={{
                      delay: 0.4 + index * 0.1,
                      type: 'spring',
                      stiffness: 260,
                      damping: 20,
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-xl font-black text-[#1A1A1A] tracking-tighter pt-5 hover:italic hover:opacity-70 transition-all"
                    >
                      <div className="py-3 px-5 bg-[#FFFFFF] font-bold text-2xl rounded-xl">
                        {link.label}
                      </div>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                transition={{ delay: 0.8 }}
                className="pt-32"
              >
                <a
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center gap-3 px-4 py-3 bg-[#161616] text-[#FFFFFF] text-xl font-bold rounded-2xl"
                >
                  Get Results
                  <div className="bg-[#FCE7F3] p-1.5 rounded-lg">
                    <Flame
                      size={22}
                      strokeWidth={3}
                      className="text-[#FF4D00]"
                      fill="#FF4D00"
                      fillOpacity={0.45}
                    />
                  </div>
                </a>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
