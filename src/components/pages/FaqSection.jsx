import React, { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";

const dentalQuestions = [
  {
    id: 1,
    question: "Does professional teeth whitening damage enamel?",
    answer:
      "No, when performed by a professional, teeth whitening is safe. We use medical-grade gels that lift stains without eroding your enamel. Unlike abrasive over-the-counter charcoal pastes, our clinical treatments preserve your tooth structure while enhancing brightness.",
  },
  {
    id: 2,
    question: "What is the difference between Veneers and Crowns?",
    answer:
      "Veneers are thin porcelain shells that cover only the front surface of the tooth (ideal for aesthetics), while Crowns cover the entire tooth like a cap (ideal for strength and aesthetics). We recommend Veneers for smile makeovers and Crowns for restoring damaged teeth.",
  },
  {
    id: 3,
    question: "Is the smile makeover process painful?",
    answer:
      "Modern aesthetic dentistry is virtually painless. We use advanced local anesthesia and minimally invasive techniques. For anxious patients, we offer sedation options to ensure a completely relaxing and comfortable experience.",
  },
  {
    id: 4,
    question: "How long do dental implants last?",
    answer:
      "With proper care and oral hygiene, dental implants are a lifetime solution. The crown attached to the implant may need replacement after 10-15 years due to normal wear, but the titanium screw itself is permanent.",
  },
  {
    id: 5,
    question: "How often should I get a Dento-facial checkup?",
    answer:
      "For maintaining optimal aesthetic and oral health, we recommend a visit every 6 months. This allows us to monitor your gum health, clean plaque buildup, and ensure your cosmetic restorations remain in perfect condition.",
  },
];

const FAQItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/10 last:border-none group">
      <button
        onClick={onClick}
        className="w-full text-left py-3 px-6 flex items-center justify-between focus:outline-none transition-all duration-300 hover:bg-white/5"
      >
        <span
          className={`text-lg font-medium tracking-wide transition-colors duration-300 ${
            isOpen ? "text-blue-300" : "text-gray-200 group-hover:text-white"
          }`}
        >
          {item.question}
        </span>
        <div
          className={`p-2 rounded-full bg-white/5 border border-white/10 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
            isOpen
              ? "rotate-180 bg-white/20 shadow-[0_0_15px_rgba(255,255,255,0.3)]"
              : "rotate-0"
          }`}
        >
          <ChevronDown className="w-5 h-5 text-white" />
        </div>
      </button>

      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 pb-6"
            : "grid-rows-[0fr] opacity-0 pb-0"
        }`}
      >
        <div className="overflow-hidden px-6">
          <p className="text-gray-400 leading-relaxed text-sm md:text-base border-l-2 border-white/20 pl-4">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function DentalFAQ() {
  const [openIndex, setOpenIndex] = useState(0); // First one open by default

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative min-h-[80vh] w-full flex items-center justify-center py-20 bg-black font-poppins px-4 overflow-hidden">
      {/* --- Ambient Background Glows --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none opacity-60" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none opacity-40" />

      <div className="relative z-10 w-full max-w-3xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-sm">
            <Sparkles size={14} className="text-blue-400" />
            <span className="text-xs font-medium text-blue-200 uppercase tracking-widest">
              Patient Queries
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-4">
            Common Questions
          </h2>
          <p className="text-gray-400 max-w-md mx-auto">
            Everything you need to know about our procedures, safety, and
            aesthetic results.
          </p>
        </div>

        {/* --- The Liquid Glass Container --- */}
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden relative">
          {/* Glossy Overlay (Shine) */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50" />

          {/* FAQ List */}
          <div className="relative z-10">
            {dentalQuestions.map((item, index) => (
              <FAQItem
                key={item.id}
                item={item}
                isOpen={openIndex === index}
                onClick={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm mb-4">Still have questions?</p>
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all duration-300 hover:scale-105">
            Book a Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
