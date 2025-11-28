import React, { useState } from "react";
import { Check } from "lucide-react";

function Pricing() {
  const [yearly, setYearly] = useState(false);

  const plans = [
    {
      name: "Free Plan",
      price: "Free",
      description: "Perfect for getting started",
      highlight: false,
      features: [
        "Send up to 2 transfers per month",
        "Basic transaction history",
        "Email support",
        "Limited currency support",
        "Basic security features",
      ],
    },
    {
      name: "Standard Plan",
      price: yearly ? "$99.99" : "$9.99",
      description: "Best for personal use",
      highlight: true, // Center card glow
      features: [
        "Unlimited transfers",
        "Transaction history with export",
        "Priority email support",
        "Expanded currency support",
        "Advanced security features",
      ],
    },
    {
      name: "Pro Plan",
      price: yearly ? "$199.99" : "$19.99",
      description: "For power users & business",
      highlight: false,
      features: [
        "Unlimited transfers + priority",
        "Comprehensive analytics",
        "24/7 priority support",
        "Full currency support",
        "Enhanced security features",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-black flex flex-col items-center py-24 px-4 overflow-hidden font-sans">
      
      {/* --- BACKGROUND TITLE --- */}
      {/* Positioned absolutely behind the cards, moves with the page */}
      <div className="absolute top-20 left-0 right-0 flex justify-center pointer-events-none z-0">
        <h1 className="text-[12rem] md:text-[16rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-white/50 to-transparent opacity-30 select-none tracking-tighter leading-none">
          Pricing
        </h1>
      </div>

      {/* --- FOREGROUND CONTENT --- */}
      {/* Added margin-top to push cards down so they overlap the text correctly */}
      <div className="relative z-10 w-full max-w-6xl mt-32 md:mt-48">
        
        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 group
                ${plan.highlight 
                  ? "bg-white/10 border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.1)] scale-105 z-20" 
                  : "bg-black/40 border-white/10 hover:bg-white/5 hover:border-white/20 z-10"
                }
                backdrop-blur-xl
              `}
            >
              {/* Inner Gloss Gradient */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

              <div className="relative z-10">
                <p className="text-gray-400 text-sm font-medium mb-2">{plan.name}</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  {plan.price !== "Free" && (
                    <span className="text-gray-500 text-sm">{yearly ? "/yr" : "/mo"}</span>
                  )}
                </div>

                <ul className="space-y-4 mb-8 border-t border-white/10 pt-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                      <div className="mt-0.5 min-w-[16px]">
                        <Check size={14} className="text-white" />
                      </div>
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`mt-auto w-full py-3 rounded-full text-sm font-semibold tracking-wide transition-all
                ${plan.highlight
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-transparent border border-white/20 text-white hover:bg-white hover:text-black"
                }
              `}>
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* --- BOTTOM TOGGLE (Aligned Left like image) --- */}
        <div className="mt-16 pl-2 flex items-center gap-4">
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              checked={yearly}
              onChange={() => setYearly(!yearly)}
              className="sr-only peer" 
            />
            <div className="w-12 h-7 bg-gray-800 peer-focus:outline-none rounded-full peer peer-checked:bg-white border border-gray-600 peer-checked:border-white transition-colors duration-300 after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white peer-checked:after:bg-black after:rounded-full after:h-5 after:w-5 after:transition-all after:duration-300 peer-checked:after:translate-x-full"></div>
          </label>
          <span className="text-white text-sm font-medium">Billed Yearly</span>
        </div>
      </div>
    </div>
  );
}

export default Pricing;