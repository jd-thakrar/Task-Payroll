import React from "react";
import { motion } from "framer-motion";

const ChartContainer = ({ title, subtitle, children, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`bg-white rounded-[40px] border border-gray-100 p-8 shadow-sm group hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-700 ${className}`}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div className="space-y-1">
          <h3
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-xl font-bold text-[#042f2e] tracking-tight"
          >
            {title}
          </h3>
          {subtitle && (
            <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest">
              {subtitle}
            </p>
          )}
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
          <span className="text-[8px] font-black text-gray-300 uppercase tracking-widest">
            Live Analysis Active
          </span>
        </div>
      </div>
      <div className="relative">{children}</div>
    </motion.div>
  );
};

export default ChartContainer;
