import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaArrowRight,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative bg-black pt-20 pb-10 overflow-hidden font-poppins">
      {/* --- Ambient Background Glows --- */}
      {/* These creates the colors behind the glass */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px] pointer-events-none" />

      {/* --- Glass Container --- */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top Border Line with Shine */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              {/* Replace with your Logo Image if you have one */}
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
                C
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Clinic.
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Providing world-class healthcare with a touch of modern
              technology. Your health is our priority, handled with care and
              precision.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-md"
                  >
                    <Icon size={16} />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                "About Us",
                "Our Doctors",
                "Services",
                "Book Appointment",
                "FAQ",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 hover:pl-2 transition-all duration-300 text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal / Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Legal</h3>
            <ul className="space-y-4">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Cookie Policy",
                "Patient Rights",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-gray-400 text-sm">
              <p>123 Medical Plaza,</p>
              <p>New York, NY 10012</p>
              <p className="mt-2 text-white font-medium">+1 (555) 123-4567</p>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">
              Stay Updated
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for the latest health tips and news.
            </p>

            {/* Glass Input Field */}
            <div className="relative group">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all backdrop-blur-sm"
              />
              <button className="absolute right-2 top-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-lg hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300">
                <FaArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Clinic Name. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <span className="cursor-pointer hover:text-white transition-colors">
              Privacy
            </span>
            <span className="cursor-pointer hover:text-white transition-colors">
              Security
            </span>
            <span className="cursor-pointer hover:text-white transition-colors">
              Sitemap
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
