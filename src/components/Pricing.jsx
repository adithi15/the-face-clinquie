import React, { useState } from "react";

function Pricing() {
  const [yearly, setYearly] = useState(false);

  const plans = [
    {
      name: "Free Plan",
      price: yearly ? "Free" : "Free",
      features: [
        "Send up to 2 transfers per month",
        "Basic transaction history",
        "Email support",
        "Limited currency support (USD, EUR, GBP)",
        "Basic security features",
      ],
    },
    {
      name: "Standard Plan",
      price: yearly ? "$99.99/y" : "$9.99/m",
      features: [
        "Unlimited transfers",
        "Transaction history with export options",
        "Priority email support",
        "Expanded currency support",
        "Advanced security features",
      ],
    },
    {
      name: "Pro Plan",
      price: yearly ? "$199.99/y" : "$19.99/m",
      features: [
        "Unlimited transfers with priority processing",
        "Comprehensive transaction analytics",
        "24/7 priority support",
        "Full currency support",
        "Enhanced security features",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-12">
      <h1 className="text-white text-[4rem] font-bold mb-12 opacity-90">Pricing</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="relative backdrop-blur-md bg-black/40 border border-white/20 rounded-3xl p-8 shadow-lg shadow-white/10 hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-lg font-semibold mb-2 text-white">{plan.name}</h3>
            <h2 className="text-4xl font-bold mb-6 text-white">{plan.price}</h2>

            <ul className="text-sm text-gray-300 space-y-2 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-green-400">✔</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-2 rounded-full font-semibold border border-white/30 backdrop-blur-md bg-black/30 text-white hover:bg-black/50 hover:scale-105 transition-all duration-300">
              Get Started
            </button>
          </div>
        ))}
      </div>

      {/* Billing Toggle */}
      <div className="w-full flex items-center justify-start gap-3 mb-10 mt-10 pl-2">
        <span className="text-sm text-white">Billed Yearly</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={yearly}
            onChange={() => setYearly(!yearly)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all after:duration-300 peer-checked:after:translate-x-full"></div>
        </label>
      </div>
    </div>
  );
}

export default Pricing;
