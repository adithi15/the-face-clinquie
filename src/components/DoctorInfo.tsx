import React from "react";
import { Activity, Star, ArrowRight } from "lucide-react";

const doctors = [
  { 
    name: "Dr. Tona Toni", 
    role: "Cardiologist", 
    rating: "4.9",
    img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=500&q=80" 
  },
  { 
    name: "Dr. Jay Wilson", 
    role: "Neurosurgeon", 
    rating: "4.8",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=500&q=80" 
  }
];

export default function DoctorInfo() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center py-20 px-4 overflow-hidden font-sans selection:bg-blue-500/30">
      
      {/* --- Ambient Liquid Background Animation --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] animate-blob mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[20%] w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen" />
      </div>

      {/* --- Header Content --- */}
      <div className="relative z-10 text-center mb-16 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
          <Activity size={16} className="text-blue-400" />
          <span className="text-sm font-medium tracking-wide text-blue-200/80">PREMIUM HEALTHCARE</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/60">
          Meet Our Specialists
        </h1>
        <p className="text-lg text-white/50 font-light">
          World-class care wrapped in a modern experience.
        </p>
      </div>

      {/* --- Grid --- */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {doctors.map((doc, i) => (
          <div
            key={i}
            // Added 'animate-float' here. 
            // Added style delay so the second card floats slightly out of sync with the first.
            className="group relative h-[420px] w-full animate-float"
            style={{ animationDelay: i === 1 ? '1.5s' : '0s' }}
          >
            {/* The Liquid Glass Card */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/10 to-white/0 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),inset_0_0_20px_rgba(255,255,255,0.05)] overflow-hidden flex flex-col items-center">
              
              {/* Glossy Reflection Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20" />
              
              {/* Image Container */}
              <div className="relative w-full h-[220px] p-4">
                <div className="w-full h-full rounded-3xl overflow-hidden relative shadow-inner">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <img 
                    src={doc.img} 
                    alt={doc.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  {/* Floating Rating Badge */}
                  <div className="absolute top-3 right-3 z-20 flex items-center gap-1 bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full">
                    <Star size={12} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-xs font-semibold">{doc.rating}</span>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col items-center text-center px-6 pt-2 pb-8 w-full h-full justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                    {doc.name}
                  </h2>
                  <p className="text-sm font-medium text-white/50 uppercase tracking-wider mb-4">
                    {doc.role}
                  </p>
                  <p className="text-sm text-white/60 font-light leading-relaxed line-clamp-2">
                    Expert in comprehensive care with a focus on patient well-being.
                  </p>
                </div>

                {/* Bottom Action Area */}
                <button className="mt-4 w-full py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-blue-500 hover:border-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                  <span className="text-sm font-semibold">Book Appointment</span>
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Decorative Liquid Border Glow */}
              <div className="absolute -inset-1 rounded-[2.1rem] bg-gradient-to-r from-blue-500/0 via-white/20 to-purple-500/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 -z-10" />
            </div>
          </div>
        ))}
      </div>

      {/* --- CSS Animations --- */}
      <style>{`
        /* Floating Animation (Up and Down) */
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        /* Blob Background Animation */
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}