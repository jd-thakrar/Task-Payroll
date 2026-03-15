import React from "react";
import { TreePalm, HeartPulse, ShieldCheck, Sun } from "lucide-react";

const LeaveSummaryStrip = () => {
  const balances = [
    { label: "Annual Leave", count: 12, total: 15, icon: TreePalm, color: "text-teal-600", detail: "Days Available" },
    { label: "Sick Leave", count: 4, total: 8, icon: HeartPulse, color: "text-rose-600", detail: "Available" },
    { label: "Casual Leave", count: 2, total: 5, icon: Sun, color: "text-amber-600", detail: "Personal" },
    { label: "Comp Off", count: 1, total: 3, icon: ShieldCheck, color: "text-blue-600", detail: "Overtime" },
  ];

  return (
    <div className="bg-white p-2 rounded-xl border border-slate-200/60 shadow-sm flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-100 overflow-hidden">
      {balances.map((b, i) => (
        <div 
          key={i}
          className="flex-1 flex items-center justify-between p-4 px-6 hover:bg-slate-50/50 transition-colors cursor-default"
        >
          <div className="space-y-1">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-none">{b.label}</p>
            <div className="flex items-baseline gap-2">
              <h3 className="text-2xl font-bold text-[#042f2e] tracking-tight">{b.count}</h3>
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-tight">{b.detail}</span>
            </div>
          </div>
          <div className={`w-10 h-10 rounded-lg bg-white border border-slate-100 flex items-center justify-center ${b.color} shadow-sm hidden sm:flex`}>
             <b.icon size={18} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeaveSummaryStrip;
