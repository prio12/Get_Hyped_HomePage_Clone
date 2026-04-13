'use client';

import { Flame } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
      <nav className="fixed top-0 left-0 w-full z-50 pt-4 px-6">
        <div className="max-w-7xl mx-auto  flex items-center justify-between bg-transparent">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center leading-none hover:opacity-80 transition-opacity"
          >
            <svg
              width="157"
              height="62"
              viewBox="0 0 157 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-12.5 w-auto"
            >
              {/* 1. The main Background Container - Set to transparent */}
              <path
                d="M157 13.5888V50.7983C157 56.9857 151.866 62.0011 145.532 62.0011H5.64043C2.52513 62.0011 0 59.5344 0 56.4911V27.7499C0 25.0027 2.03495 22.6557 4.81163 22.2052L140.824 0.186982C149.296 -1.18345 157 5.19928 157 13.5857"
                fill="transparent"
              />

              {/* 2. The "GET" section background - Solid Black */}
              <path
                d="M142.707 59.0965H42.2403V19.0674L141.001 3.94857C147.677 2.92784 153.714 7.96849 153.714 14.5717V48.3441C153.714 54.2826 148.786 59.0965 142.707 59.0965Z"
                fill="#000000"
              />

              {/* 3. The "HYPED" Letters - Set to WHITE fill with BLACK stroke/outline */}
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

              {/* 4. The "GET" Letters - Solid Black */}
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
          </a>

          {/* White Pill Nav Links */}
          <ul className="hidden md:flex items-center bg-white rounded-full py-1.5 shadow-sm border border-black/5">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  style={{ textDecoration: 'none' }}
                  className="group relative flex items-center justify-center overflow-hidden rounded-full px-[1.2rem] py-[0.6rem] mx-1 text-xs font-bold tracking-[-0.02em] text-black"
                >
                  {/* Swoosh Layers */}
                  <span className="absolute inset-0 translate-y-full bg-[#FF0000] transition-transform duration-300 ease-out group-hover:translate-y-0"></span>
                  <span className="absolute inset-0 translate-y-full bg-black transition-transform duration-500 delay-40 group-hover:translate-y-0"></span>
                  {/* Text Window — extra height to hide clone */}
                  <span className="relative z-10 block h-[1.1em] overflow-hidden leading-none py-0 my-0">
                    {/* Original text */}
                    <span className="block transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-full group-hover:text-white">
                      {link.label}
                    </span>
                    {/* Clone text — pushed far below */}
                    <span className="absolute top-0 left-0 block w-full translate-y-[150%] text-white transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-[20%]">
                      {link.label}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* Pink Pill CTA Button */}
          <a
            href="#"
            className="btn-results group relative hidden md:inline-flex items-center gap-2 px-4 py-2 text-[#1A1A1A] text-sm font-bold no-underline transition-transform duration-450 ease-bounce hover:rotate-[-8deg]"
          >
            {/* The Morphing Pink Background */}
            <span
              className="absolute inset-0 left-[0.15em] z-[-1] h-full bg-[#FCB8FA] rounded-[0.5em] 
    w-[calc(100%-0.3em)] transition-all duration-450 ease-bounce
    group-hover:w-[calc(100%-0.8em)] group-hover:rounded-[0.75em]"
            />

            <span className="relative z-10 flex items-center gap-2">
              Get Results
              <div className="bg-white px-1 py-1 rounded-md transition-transform duration-450 ease-bounce group-hover:rotate-10">
                <Flame
                  size={14} // Slightly smaller icon
                  strokeWidth={3}
                  className="text-[#FF4D00]"
                  fill="#FF4D00"
                  fillOpacity={0.25}
                />
              </div>
            </span>
          </a>

          {/* Mobile Hamburger */}
          <button
            className="flex md:hidden flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-6 h-0.5 bg-[#1A1A1A]"></span>
            <span className="block w-6 h-0.5 bg-[#1A1A1A]"></span>
            <span className="block w-6 h-0.5 bg-[#1A1A1A]"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-100 bg-[#F8F4EE] flex flex-col transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between px-6 py-4">
          <img
            src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3404e57460370b97757c_7719b29e960423bac19acd325c901392_gh-logo-blue.svg"
            alt="Get Hyped"
            className="h-8 w-auto"
          />
          <button
            onClick={() => setMenuOpen(false)}
            className="text-[#1A1A1A] p-2"
            aria-label="Close menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Mobile Nav Links */}
        <ul className="flex flex-col px-8 mt-12 gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-[#1A1A1A] text-4xl font-semibold hover:opacity-60 transition-opacity"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile CTA */}
        <div className="px-8 mt-auto mb-16">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#FCE7F3] text-[#1A1A1A] text-sm font-semibold rounded-full shadow-sm"
            onClick={() => setMenuOpen(false)}
          >
            Get Results 🔥
          </a>
        </div>
      </div>
    </>
  );
}
