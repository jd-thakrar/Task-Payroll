import React from "react";
import { TreePalm, HeartPulse, ShieldCheck, Sun } from "lucide-react";

const LeaveBalanceCards = () => {
  const balances = [
    { label: "Annual Leave", count: 12, total: 15, icon: TreePalm, color: "text-teal-600", bg: "bg-teal-50" },
    { label: "Sick Leave", count: 4, total: 8, icon: HeartPulse, color: "text-rose-600", bg: "bg-rose-50" },
    { label: "Casual Leave", count: 2, total: 5, icon: Sun, color: "text-amber-600", bg: "bg-amber-50" },
    { label: "Comp Off", count: 1, total: 3, icon: ShieldCheck, color: "text-blue-600", bg: "bg-blue-50" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {balances.map((b, i) => (
        <div 
          key={i}
          className="bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm group hover:border-teal-500/30 transition-all cursor-default relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col items-center text-center">
             <div className={`w-14 h-14 rounded-2xl ${b.bg} flex items-center justify-center ${b.color} mb-4 group-hover:scale-110 transition-transform`}>
                <b.icon size={28} />
             </div>
             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-3">{b.label}</p>
             <h3 className="text-3xl font-black text-[#042f2e] tracking-tight mb-1">{b.count}</h3>
             <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest leading-none">Days Available</p>
          </div>
          
          {/* Subtle Progress Bar Bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-50">
             <div className={`h-full ${b.color.replace('text', 'bg')}`} style={{ width: `${(b.count/b.total)*100}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeaveBalanceCards;
