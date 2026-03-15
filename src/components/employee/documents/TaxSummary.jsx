import React from "react";
import { TrendingUp, ArrowRight, ShieldCheck, PieChart } from "lucide-react";

const TaxSummary = () => {
  return (
    <div className="bg-[#042f2e] p-6 rounded-xl !text-white relative overflow-hidden shadow-xl shadow-teal-900/10 h-full flex flex-col">
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-teal-400 border border-white/10 shadow-inner">
              <PieChart size={20} />
            </div>
            <div>
              <h4 className="text-[14px] font-bold !text-white tracking-tight">
                Tax Radar
              </h4>
              <p className="text-[10px] font-bold text-teal-400/80 uppercase tracking-widest leading-none mt-1">
                Financial Year Estimate
              </p>
            </div>
          </div>
          <span className="text-[9px] font-black bg-white/10 px-2 py-0.5 rounded text-teal-300 border border-white/5 uppercase tracking-[0.1em]">
            FY 2025-26
          </span>
        </div>

        <div className="space-y-6 mb-8">
          <div>
            <p className="text-[10px] font-bold text-teal-400/60 uppercase tracking-widest leading-none mb-2">
              Estimated TDS
            </p>
            <h2 className="text-3xl font-bold !text-white  tracking-tighter tabular-nums">
              ₹1,42,800.00
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
            <div>
              <p className="text-[10px] font-bold text-teal-400/40 uppercase tracking-widest leading-none mb-1.5">
                Investments
              </p>
              <p className="text-[13px] font-black text-teal-100 flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-teal-400" /> Verified
              </p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-teal-400/40 uppercase tracking-widest leading-none mb-1.5">
                Regime
              </p>
              <p className="text-[13px] font-black text-teal-100 uppercase">
                New (115BAC)
              </p>
            </div>
          </div>
        </div>

        <button className="mt-auto w-full flex items-center justify-center gap-2.5 py-4 bg-teal-500 hover:bg-teal-400 text-white rounded-lg shadow-xl shadow-teal-500/10 transition-all font-bold text-[11px] uppercase tracking-widest group">
          Preview Form 16
          <ArrowRight
            size={14}
            className="group-hover:translate-x-1 transition-transform"
          />
        </button>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none" />
    </div>
  );
};

export default TaxSummary;
