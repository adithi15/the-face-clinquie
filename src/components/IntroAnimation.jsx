import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import openingAnimation from "../animations/Cleaning Teeth.json";
import Hero from "./Hero"; // your actual hero component
import Navbar from "./Navbar";

const IntroAnimation = () => {
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    // Set a delay equal to your Lottie animation duration (in ms)
    const timer = setTimeout(() => {
      setShowHero(true);
    }, 3000); // ⏱️ adjust this based on animation length (3s example)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      {!showHero ? (
        <div className="flex justify-center items-center h-full">
          <Lottie
            animationData={openingAnimation}
            loop={false}
            className="w-full h-full"
          />
        </div>
      ) : (
        <div
          className="absolute inset-0 opacity-0 animate-fadeIn"
          style={{ animation: "fadeIn 1.5s forwards" }}
        > <Navbar   />
          <Hero />
        </div>
      )}
    </div>
  );
};

export default IntroAnimation;
