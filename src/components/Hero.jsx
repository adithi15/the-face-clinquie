import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Navbar from "./Navbar";
import { FaPhone, FaEnvelope, FaCommentDots } from "react-icons/fa";

const experts = [
  {
    img: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1170&auto=format&fit=crop",
    style: { transform: "translate(-350px, -200px)" },
  },
  {
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop",
    style: { transform: "translate(300px, -200px)" },
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop",
    style: { transform: "translate(-300px, -100px)" },
  },
  {
    img: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=1170&auto=format&fit=crop",
    style: { transform: "translate(100px, 160px)" },
  },
  {
    img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=687&auto=format&fit=crop",
    style: { transform: "translate(-330px, 160px)" },
  },
  {
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=687&auto=format&fit=crop",
    style: { transform: "translate(0px, 160px)" },
  },
  {
    img: "https://images.unsplash.com/photo-1481214110143-ed630356e1bb?q=80&w=687&auto=format&fit=crop",
    style: { transform: "translate(-450px, 120px)" },
  },
  {
    img: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=764&auto=format&fit=crop",
    style: { transform: "translate(430px, 120px)" },
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1681493353999-a3eea8b95e1d?q=80&w=687&auto=format&fit=crop",
    style: { transform: "translate(550px, -75px)" },
  },
  {
    img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1171&auto=format&fit=crop",
    style: { transform: "translate(-600px, -90px)" },
  },
];

function Hero() {
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [showButtons, setShowButtons] = useState(false);
  const [showImages, setShowImages] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    if (headingInView) {
      const buttonTimer = setTimeout(() => setShowButtons(true), 1000);
      const imageTimer = setTimeout(() => {
        setShowImages(true);
        setTimeout(() => setShowNavbar(true), 2500);
      }, 500);

      return () => {
        clearTimeout(buttonTimer);
        clearTimeout(imageTimer);
      };
    }
  }, [headingInView]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 font-poppins overflow-hidden bg-black bg-repeat bg-center">
      <img
        src="/images/hero-image1.jpg"
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-contain object-center bg-black"
      />

      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-[1500ms] ease-in-out ${
          showNavbar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <Navbar />
      </div>

      <div className="relative w-full max-w-5xl h-[550px] flex items-center justify-center">
        <div className="flex flex-col items-center pb-99 z-10">
          <h1
            ref={headingRef}
            className={`text-3xl sm:text-4xl md:text-6xl font-light text-white text-center mb-6 transition-opacity duration-[2500ms] ease-out ${
              headingInView ? "opacity-100" : "opacity-0"
            }`}
          >
            Welcome to clinic
          </h1>

          <div
            className={`flex gap-4 mt-4 transition-all duration-[1200ms] ease-out transform ${
              showButtons
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          ></div>
        </div>

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

      <div
        className={`flex items-center gap-6 px-8 py-2 rounded-full backdrop-blur-md border border-white/15 bg-white/5 shadow-[0_8px_24px_rgba(0,0,0,0.3)] text-gray-200 text-lg z-20 transition-all duration-[1500ms] ease-in-out ${
          showImages ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{
          transitionDelay: showImages ? "3s" : "0s",
        }}
      >
        <span className="font-light tracking-wide text-white/90">
          Here To Help
        </span>
        <div className="flex gap-6 text-light">
          <FaPhone className="transition-colors duration-300 hover:text-blue-400" />
          <FaEnvelope className="transition-colors duration-300 hover:text-green-400" />
          <FaCommentDots className="transition-colors duration-300 hover:text-pink-400" />
        </div>
      </div>
    </div>
  );
}

function FloatingImage({ img, index, customStyle }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [isVisible, setIsVisible] = useState(false);
  const [startFloating, setStartFloating] = useState(false);
  const [floatDirection, setFloatDirection] = useState("up");

  useEffect(() => {
    const directions = ["up", "left", "right"];
    setFloatDirection(
      directions[Math.floor(Math.random() * directions.length)]
    );
  }, []);

  useEffect(() => {
    let fadeTimer, floatTimer;
    if (inView) {
      const delay = index * 200;
      fadeTimer = setTimeout(() => setIsVisible(true), delay);
      floatTimer = setTimeout(() => setStartFloating(true), delay + 500);
    }
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(floatTimer);
    };
  }, [inView, index]);

  return (
    <div
      ref={ref}
      className={`absolute flex items-center justify-center transition-all duration-[1600ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
      }`}
      style={customStyle}
    >
      <div
        className={`w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden flex items-center justify-center opacity-90
          hover:scale-105 transition-transform duration-500 border border-black/40 backdrop-blur-md bg-black/30
          shadow-[0_8px_24px_rgba(0,0,0,0.4)] ${
            startFloating ? "floating" : ""
          } ${startFloating ? `float-${floatDirection}` : ""}`}
        style={
          startFloating
            ? {
                animationDuration: `${3 + Math.random() * 2}s`,
                animationDelay: `${Math.random() * 1}s`,
              }
            : {}
        }
      >
        <img
          src={img}
          alt="Expert"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    </div>
  );
}

export default Hero;
