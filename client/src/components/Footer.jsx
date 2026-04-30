// src/components/Footer.jsx
import { FaGithub, FaLinkedinIn, FaTwitter, FaArrowUp } from "react-icons/fa";
import { useRef } from "react";

function Footer() {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    ref.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const reset = () => {
    ref.current.style.transform = `translate(0px, 0px)`;
  };

  // if (window.innerWidth < 768) return;

  return (
  <footer className="relative z-10 px-6 py-9 text-gray-400 border-t border-white/10">

    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00ADB5] to-transparent opacity-50" />

      {/* 🌊 Wave */}
    {/* <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
      <div className="w-[200%] animate-wave">
        <svg
          className="relative block w-full h-[80px]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#00ADB5"
            fillOpacity="0.15"
            d="M0,160L80,176C160,192,320,224,480,224C640,224,800,192,960,176C1120,160,1280,160,1360,160L1440,160L1440,0L0,0Z"
          />
        </svg>
      </div>
    </div> */}


    {/* 🌊 Dual Waves */}
    <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">

      {/* Back Wave (slower) */}
      <div className="w-[200%] animate-waveSlow opacity-40">
        <svg
          className="block w-full h-[90px]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00ADB5" />
              <stop offset="50%" stopColor="#AFFFFF" />
              <stop offset="100%" stopColor="#00ADB5" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient1)"
            fillOpacity="0.2"
            d="M0,160L80,176C160,192,320,224,480,224C640,224,800,192,960,176C1120,160,1280,160,1360,160L1440,160L1440,0L0,0Z"
          />
        </svg>
      </div>

      {/* Front Wave (faster) */}
      <div className="w-[200%] animate-waveFast -mt-[70px]">
        <svg
          className="block w-full h-[90px]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#AFFFFF" />
              <stop offset="50%" stopColor="#00ADB5" />
              <stop offset="100%" stopColor="#AFFFFF" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient2)"
            fillOpacity="0.25"
            d="M0,180L80,170C160,160,320,200,480,210C640,220,800,200,960,180C1120,160,1280,170,1440,180L1440,0L0,0Z"
          />
        </svg>
      </div>

    </div>


      
    {/* Glow background */} 
      <div className="flex flex-col pt-6 text-center text-sm">


         {/* ⬆️Back to top button */}

        <div className="flex justify-center mb-6">
          <button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={reset}
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="group flex flex-col items-center text-gray-400 hover:text-white transition animate-pulse hover:animate-none"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full border border-white/10 bg-[#0f172a]/10 backdrop-blur-md group-hover:text-[#AFFFFF] group-hover:shadow-[0_0_20px_#00ADB5] transition duration-300">
              <FaArrowUp className="group-hover:-translate-y-1 group-hover:scale-110 transition duration-300" />
            </div>

            <span className="text-xs mt-2 tracking-widest opacity-70 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
              BACK TO TOP
            </span>
          </button>
        </div>


        {/* Social buttons */}
        <div className="flex gap-4 justify-center mb-3">
          <a href="#" className="hover:text-white hover:scale-125 transition">
            <FaGithub size={30}/>
          </a>
          <a href="#" className="hover:text-white hover:scale-125 transition">
            <FaLinkedinIn size={30}/>
          </a>
          <a href="#" className="hover:text-white hover:scale-125 transition">
            <FaTwitter size={30}/>
          </a>
        </div>

        {/* Copyright */}
        <p>
          © {new Date().getFullYear()} Lochan. All rights reserved.
        </p>

        {/* Extra line */}
        <p className="text-xs text-gray-500">
          Designed & Built with ❤️ 
        </p>

      </div>
    </footer>
  );
}

export default Footer;
