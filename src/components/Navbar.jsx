import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Updated Links Structure
  const navLinks = [
    { name: "Home", href: "/", type: "route" },
    { name: "Treatments", href: "/images", type: "hash" },
    { name: "FAQ Section", href: "/faqsection", type: "hash" },
    // { name: "Our Experts", href: "/#doctors", type: "hash" }, // Scrolls to DoctorInfo on Home
    // { name: "", href: "/image", type: "route" }, // Goes to Gallery Page
    { name: "Offers", href: "/pricing", type: "route" }, // Goes to Pricing Page
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-0" : "backdrop-blur-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex items-center justify-between h-20">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src="/title.svg"
              alt="Logo"
              className="w-40 h-auto object-contain filter brightness-0 invert"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
<div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 px-7 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]">
  {navLinks.map((link) => (
    <React.Fragment key={link.name}>
      {link.type === "route" ? (
        <Link
          to={link.href}
          className="px-3 py-2 mx-1 text-sm font-light text-white relative group"
        >
          {link.name}
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </Link>
      ) : (
        <a
          href={link.href}
          className="px-3 py-2 mx-1 text-sm font-light text-white relative group"
        >
          {link.name}
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </a>
      )}
    </React.Fragment>
  ))}

  {/* Shine reflection */}
  <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
    <div className="absolute top-0 left-[-50%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shine_3s_infinite]" />
  </div>
</div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="relative px-4 pt-4 pb-6 rounded-3xl mx-3 backdrop-blur-2xl border border-black/30 bg-black/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] overflow-hidden">
          
          <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/40 to-transparent opacity-50 blur-[2px]" />
          </div>

          <div className="relative z-10 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <React.Fragment key={link.name}>
                 {link.type === "route" ? (
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-center px-4 py-2 text-gray-200 font-light tracking-wide rounded-xl hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] transition"
                    >
                      {link.name}
                    </Link>
                 ) : (
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-center px-4 py-2 text-gray-200 font-light tracking-wide rounded-xl hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] transition"
                    >
                      {link.name}
                    </a>
                 )}
              </React.Fragment>
            ))}

            <Link
              to="/pricing"
              onClick={() => setIsOpen(false)}
              className="block text-center mt-3 px-6 py-2 rounded-full font-medium text-sm bg-gradient-to-r from-gray-400/70 to-gray-400/70 border border-gray-600 text-white hover:scale-105 transition-transform duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
            >
              Join Now
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shine {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { transform: translateX(50%); opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;