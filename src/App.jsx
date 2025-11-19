import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Video from "./components/Video";
import LiquidGlassSearch from "./components/LiquidGlassSearch";

function App() {
  const [showNavbar, setShowNavbar] = useState(false); // control navbar visibility

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 justify-center">
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-1000 ease-in-out ${
          showNavbar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
        }`}
      >
        <Navbar />
      </div>

      <main>
        <Hero onAnimationComplete={() => setShowNavbar(true)} />
        {/* <Pricing />
        <Video />
        <LiquidGlassSearch /> */}
      </main>
    </div>
  );
}

export default App;
 