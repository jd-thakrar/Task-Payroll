import React from "react";
import { motion } from "framer-motion";

const StatCard = ({ label, value, trend, trendUp, icon: Icon, accent = "teal" }) => {
  const accents = {
    teal: { bg: "bg-teal-50", text: "text-teal-600", border: "border-teal-100", spark: "#0d9488" },
    emerald: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-100", spark: "#059669" },
    rose: { bg: "bg-rose-50", text: "text-rose-600", border: "border-rose-100", spark: "#e11d48" },
    amber: { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-100", spark: "#d97706" },
    slate: { bg: "bg-slate-50", text: "text-slate-600", border: "border-slate-100", spark: "#475569" },
  };

  const c = accents[accent] || accents.teal;

  return (
    <motion.div 
      whileHover={{ y: -4, shadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
      className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm transition-all duration-300 group relative overflow-hidden"
    >
      <div className="flex items-start justify-between mb-6">
        <div className={`w-12 h-12 rounded-2xl ${c.bg} flex items-center justify-center border ${c.border} group-hover:scale-105 transition-transform`}>
          <Icon size={22} className={c.text} />
        </div>
        <div className="flex flex-col items-end">
          <div className={`text-[10px] font-black uppercase tracking-widest ${trendUp ? 'text-emerald-500' : 'text-rose-500'}`}>
            {trend}
          </div>
          {/* Sparkline SVG */}
          <svg className="w-16 h-8 mt-1" viewBox="0 0 100 40">
            <path 
              d={trendUp ? "M0,35 Q20,10 40,25 T80,15 T100,5" : "M0,5 Q20,30 40,15 T80,35 T100,38"} 
              fill="none" 
              stroke={c.spark} 
              strokeWidth="2.5" 
              strokeLinecap="round"
              className="opacity-40"
            />
          </svg>
        </div>
      </div>
      
      <div className="space-y-1">
        <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest leading-none">
          {label}
        </div>
        <div style={{ fontFamily: "'Outfit', sans-serif" }} className="text-3xl font-bold text-[#042f2e] tracking-tight">
          {value}
        </div>
      </div>

      {/* Subtle Status Indicator */}
      <div className={`absolute bottom-0 left-0 h-1 transition-all duration-500 w-0 group-hover:w-full ${c.spark === '#0d9488' ? 'bg-teal-500' : c.spark === '#e11d48' ? 'bg-rose-500' : 'bg-gray-400'}`} style={{ backgroundColor: c.spark }} />
    </motion.div>
  );
};

export default StatCard;
