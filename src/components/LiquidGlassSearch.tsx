
import React from "react";

const LiquidGlassSearch = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a]">
      <div className="relative flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-2xl border border-white/20 bg-white/10 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]">
        {/* Search Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white/80"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
          />
        </svg>

        {/* Input Text */}
        <input
          type="text"
          placeholder="LIQUID GLASS"
          className="bg-transparent border-none text-white/90 text-lg tracking-widest outline-none placeholder-white/70 font-light w-56"
        />

        {/* Mic Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white/80"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 1a3 3 0 013 3v6a3 3 0 11-6 0V4a3 3 0 013-3zm0 14a6 6 0 006-6M6 9a6 6 0 006 6m0 0v4m0 0h3m-3 0H9"
          />
        </svg>

        {/* Glass reflection overlay */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/30 to-transparent opacity-40 blur-[2px]" />
          <div className="absolute top-0 left-[-50%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shine_3s_infinite]" />
        </div>
      </div>

      {/* Custom keyframes for shine effect */}
      <style>{`
        @keyframes shine {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { transform: translateX(50%); opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default LiquidGlassSearch;