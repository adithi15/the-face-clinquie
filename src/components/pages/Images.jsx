import React, { useState } from 'react';
import { 
  Zap, 
  BarChart2, 
  PieChart, 
  Users, 
  History, 
  ArrowLeftRight, 
  Mail 
} from 'lucide-react';

const features = [
  {
    id: 1,
    title: "Live Pricing",
    description: "Experience truly live pricing with Ray. Unlike other tools, there are no delays—get instant, real-time quotes every time.",
    linkText: "Preview live pricing",
    icon: <Zap size={20} />
  },
  {
    id: 2,
    title: "Analyst estimates",
    description: "Dive into comprehensive analyst data. Compare historical ratings, multi-year forecasts, and price targets in one intuitive view.",
    linkText: "Preview analyst estimates",
    icon: <BarChart2 size={20} />
  },
  {
    id: 3,
    title: "Company financials",
    description: "Unlock the full picture with Ray. Access key stats, income statements, balance sheets, cash flow, and more at your fingertips.",
    linkText: "Preview financials",
    icon: <PieChart size={20} />
  },
  {
    id: 4,
    title: "Peer analysis",
    description: "Compare and contrast with Ray's Peer Analysis. Evaluate pivots, spot trends, and benchmark against industry standards.",
    linkText: "Preview peer analysis",
    icon: <Users size={20} />
  },
  {
    id: 5,
    title: "Historical earnings",
    description: "Uncover trends with our comprehensive historical earnings data. Track past EPS and performance to support future strategies.",
    linkText: "Preview historical earnings",
    icon: <History size={20} />
  },
  {
    id: 6,
    title: "Insider transactions",
    description: "See what the insiders are doing. Track buying and selling activity from company executives to gauge internal sentiment.",
    linkText: "Preview insider transactions",
    icon: <ArrowLeftRight size={20} />
  },
  {
    id: 7,
    title: "Email updates",
    description: "Busy schedule? Email Updates bring your watchlist summaries directly to you every Monday morning. Stay informed effortlessly.",
    linkText: "Preview email updates",
    icon: <Mail size={20} />
  }
];

const FeatureCard = ({ feature, isActive, onHover }) => {
  return (
    <div
      onMouseEnter={() => onHover(feature.id)}
      className={`relative h-[450px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 ease-in-out cursor-pointer overflow-hidden ${
        isActive ? 'flex-[3] bg-white/10' : 'flex-[1] hover:bg-white/10'
      }`}
    >
      {/* Expanded Content */}
      <div
        className={`absolute inset-0 p-8 flex flex-col justify-between transition-opacity duration-500 ${
          isActive ? 'opacity-100 delay-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div>
          <h3 className="text-xl font-semibold text-white mb-4 whitespace-nowrap">
            {feature.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-[280px]">
            {feature.description}
          </p>
        </div>
        
        <button className="flex items-center gap-2 text-white text-sm font-medium group">
           <div className="p-1 rounded bg-white/10 group-hover:bg-white/20 transition-colors">
            {feature.icon}
           </div>
           {feature.linkText}
        </button>
      </div>

      {/* Collapsed Content (Vertical Text) */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-between py-6 transition-opacity duration-300 ${
          isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <span 
          className="text-white/70 font-medium whitespace-nowrap tracking-wide"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          {feature.title}
        </span>
        <div className="text-white/50">
          {feature.icon}
        </div>
      </div>
    </div>
  );
};

function Images() {
  const [activeId, setActiveId] = useState(1);

  return (
    // CHANGED: Added 'pt-32' (padding-top) and changed 'p-8' to 'px-8 pb-8'
    // This pushes the content down so it clears the fixed navbar
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-8 pb-8 pt-22 relative overflow-hidden">
      
      {/* Background Ambience (Abstract Wave Effect) */}
      <div className="absolute bottom-0 left-0 right-0 h-[60vh] bg-gradient-to-t from-gray-900 to-black pointer-events-none z-0">
        <div className="absolute bottom-[-100px] left-0 right-0 h-[400px] opacity-60 blur-[80px] bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 rounded-[100%]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            <span className="line-through decoration-gray-600 text-gray-500 mr-3">One</span>
            <span>a few more things.</span>
          </h1>
          <p className="text-gray-400 max-w-lg mx-auto text-sm md:text-base">
            There's even more to discover. Ray brings you a collection of advanced tools designed to refine and elevate your workflow.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="flex flex-row gap-2 w-full h-[450px]">
          {features.map((feature) => (
            <FeatureCard 
              key={feature.id} 
              feature={feature} 
              isActive={activeId === feature.id} 
              onHover={setActiveId}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Images;