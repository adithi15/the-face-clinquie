import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Navbar from "../Navbar";
import { FaPhone, FaEnvelope, FaCommentDots } from "react-icons/fa";

// REFINED POSITIONS: Spread out in a "Ring" to clear the center text
const experts = [
  // Top Row (Left & Right)
  {
    img: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1170&auto=format&fit=crop",
    style: { transform: "translate(-380px, -220px)" },
  },
  {
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop",
    style: { transform: "translate(380px, -220px)" },
  },
  // Middle Row (Far Left & Far Right)
  {
    img: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop",
    style: { transform: "translate(-480px, 0px)" },
  },
  {
    img: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=764&auto=format&fit=crop",
    style: { transform: "translate(480px, 0px)" },
  },
  // Bottom Row (Spreading out to clear the text)
  {
    img: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=1170&auto=format&fit=crop",
    style: { transform: "translate(-200px, 200px)" },
  },
  {
    img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=687&auto=format&fit=crop",
    style: { transform: "translate(200px, 200px)" },
  },
  // Corners
  {
    img: "https://images.unsplash.com/photo-1481214110143-ed630356e1bb?q=80&w=687&auto=format&fit=crop",
    style: { transform: "translate(-380px, 150px)" },
  },
  {
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=687&auto=format&fit=crop",
    style: { transform: "translate(380px, 150px)" },
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1681493353999-a3eea8b95e1d?q=80&w=687&auto=format&fit=crop",
    style: { transform: "translate(150px, -220px)" },
  },
  {
    img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1171&auto=format&fit=crop",
    style: { transform: "translate(-150px, -220px)" },
  },
];

function Hero() {
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [showImages, setShowImages] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    if (headingInView) {
      const imageTimer = setTimeout(() => {
        setShowImages(true);
        setTimeout(() => setShowNavbar(true), 2500);
      }, 500);

      return () => {
        clearTimeout(imageTimer);
      };
    }
  }, [headingInView]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 font-poppins overflow-hidden bg-black selection:bg-purple-500/30">
      {/* --- Ambient Liquid Background --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-900/30 rounded-full blur-[120px] animate-blob mix-blend-screen opacity-50" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen opacity-50" />
      </div>

      {/* --- Main Background Image --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
        <div className="absolute inset-0 bg-black/80 z-0" />{" "}
        {/* Darkened background so images pop */}
        <img
          src="/images/hero-image1.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
      </div>

      {/* --- Navbar --- */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-[1500ms] ease-in-out ${
          showNavbar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <Navbar />
      </div>

      {/* --- Content Wrapper --- */}
      <div className="relative w-full h-[600px] flex items-center justify-center z-10">
        {/* Title Section - Transparent Glassy Text */}
        <div className="absolute z-20 flex flex-col items-center pointer-events-none px-4 w-full max-w-6xl">
          <h1
            ref={headingRef}
            className={`
      font-medium tracking-wide leading-tight text-center
      text-xl md:text-3xl lg:text-4xl
      text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/60
      drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]
      transition-all duration-[2500ms] ease-out
      flex flex-col gap-2 md:gap-4
      ${
        headingInView
          ? "opacity-100 blur-0 translate-y-0"
          : "opacity-0 blur-lg translate-y-10"
      }
    `}
          >
            {/* Line 1: The Core Values */}
            <span className="block">
              Faith
              <span className="text-white/30 font-thin mx-3 md:mx-6">|</span>
              Finesse
              <span className="text-white/30 font-thin mx-3 md:mx-6"></span>
              Maxillo-facial Aesthetics
            </span>

            {/* Line 2: The Medical Specialities (Dento is here) */}
            
              <span className="block">|
              Dento-facial Aesthetics
            </span>
          </h1>
        </div>

        {/* Floating Images Container - Scaled for Mobile/Desktop */}
        <div
          className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-transform duration-500
          scale-[0.45] sm:scale-[0.65] md:scale-[0.80] lg:scale-100`}
        >
          {showImages &&
            experts.map((expert, index) => (
              <FloatingImage
                key={index}
                img={expert.img}
                index={index}
                customStyle={expert.style}
              />
            ))}
        </div>
      </div>

      {/* --- Glass Bottom Bar (Positioned Below Images) --- */}
      <div
        // Positioned absolutely relative to the section center
        // translate-y-[280px] pushes it comfortably below the "ring" of images
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 flex items-center gap-6 px-8 py-3 rounded-full backdrop-blur-2xl border border-white/20 bg-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] text-gray-200 text-lg z-50 transition-all duration-[1500ms] ease-in-out hover:bg-white/20 max-w-[90vw]
          translate-y-[260px] md:translate-y-[320px]
          ${showImages ? "opacity-100" : "opacity-0 translate-y-[350px]"}`}
        style={{
          transitionDelay: showImages ? "1.5s" : "0s",
        }}
      >
        <span className="hidden sm:block font-medium tracking-wide text-white text-sm uppercase">
          Here To Help
        </span>
        <div className="hidden sm:block h-4 w-px bg-white/30" />
        <div className="flex gap-6">
          <FaPhone className="text-white hover:text-blue-400 hover:scale-110 transition-all cursor-pointer" />
          <FaEnvelope className="text-white hover:text-green-400 hover:scale-110 transition-all cursor-pointer" />
          <FaCommentDots className="text-white hover:text-pink-400 hover:scale-110 transition-all cursor-pointer" />
        </div>

        {/* Gloss Overlay */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent opacity-40 pointer-events-none" />
      </div>

      {/* --- Animations --- */}
      <style>{`
        @keyframes float-up { 0% { transform: translateY(0); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0); } }
        
        .float-up { animation-name: float-up; animation-timing-function: ease-in-out; animation-iteration-count: infinite; }
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 10s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}

function FloatingImage({ img, index, customStyle }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isVisible, setIsVisible] = useState(false);
  const [startFloating, setStartFloating] = useState(false);
  const [floatDirection, setFloatDirection] = useState("up");

  useEffect(() => {
    const directions = ["up", "up", "up"]; // Keep vertical float for cleaner look
    setFloatDirection(
      directions[Math.floor(Math.random() * directions.length)]
    );
  }, []);

  useEffect(() => {
    let fadeTimer, floatTimer;
    if (inView) {
      const delay = index * 80; // Faster entrance
      fadeTimer = setTimeout(() => setIsVisible(true), delay);
      floatTimer = setTimeout(() => setStartFloating(true), delay + 800);
    }
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(floatTimer);
    };
  }, [inView, index]);

  return (
    <div
      ref={ref}
      className={`absolute flex items-center justify-center transition-all duration-[1200ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
        isVisible
          ? "opacity-100 scale-100 blur-0"
          : "opacity-0 scale-50 blur-sm"
      }`}
      style={customStyle}
    >
      <div
        className={`relative w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-3xl overflow-hidden flex items-center justify-center
          hover:scale-110 hover:z-50 transition-all duration-500 cursor-pointer pointer-events-auto
          border border-white/30 backdrop-blur-xl bg-white/10
          shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]
          ${startFloating ? `float-${floatDirection}` : ""}`}
        style={
          startFloating
            ? {
                animationDuration: `${5 + Math.random() * 3}s`,
                animationDelay: `${Math.random() * 2}s`,
              }
            : {}
        }
      >
        {/* Stronger Inner Gloss */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-90 z-20 pointer-events-none" />

        {/* Brighter Image */}
        <img
          src={img}
          alt="Expert"
          className="w-full h-full object-cover opacity-100 transition-opacity duration-300"
        />

        {/* Outer Glow */}
        <div className="absolute -inset-4 bg-white/10 blur-xl -z-10 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
}

export default Hero;
