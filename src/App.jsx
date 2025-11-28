import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/pages/Hero";
import DoctorInfo from "./components/DoctorInfo"; // We import this to stack it
import Pricing from "./components/Pricing";
import Images from "./components/pages/Images";
import Footer from "./components/Footer";

import FaqSection from "./components/pages/FaqSection";


function AppContent() {
  const [showNavbar, setShowNavbar] = useState(false);
  const location = useLocation();

  // If we are NOT on the home page, show the Navbar immediately
  useEffect(() => {
    if (location.pathname !== "/") {
      setShowNavbar(true);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div
        className={`fixed top-0 w-full z-50 ${
          showNavbar ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navbar />
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero onAnimationComplete={() => setShowNavbar(true)} />
              <DoctorInfo />
            </>
          }
        />
        <Route path="/images" element={<Images />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faqsection" element={<FaqSection />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

