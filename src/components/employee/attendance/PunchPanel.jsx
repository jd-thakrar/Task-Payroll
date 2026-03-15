import React, { useState, useEffect } from "react";
import { Play, Coffee, LogOut } from "lucide-react";

const PunchPanel = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { hour12: false }));

  useEffect(() => {
    const timer = setInterval(() => {
        setTime(new Date().toLocaleTimeString('en-US', { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-sm relative overflow-hidden group">
      <div className="flex flex-col items-center text-center space-y-6">
        <div>
           <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3 leading-none">Real-time Clock</p>
           <h1 className="text-4xl font-bold text-[#042f2e] tracking-tighter tabular-nums" style={{ fontFamily: "'Outfit', sans-serif" }}>
             {time}
           </h1>
        </div>

        <div className="w-full space-y-3">
          <button className="w-full flex items-center justify-center gap-3 py-4 bg-[#042f2e] hover:bg-slate-900 text-white rounded-xl transition-all font-bold text-[13px] uppercase tracking-widest active:scale-95 shadow-lg shadow-teal-900/10">
            <Play fill="currentColor" size={16} />
            Immediate Punch In
          </button>
          
          <div className="grid grid-cols-2 gap-3">
             <button className="flex items-center justify-center gap-2 py-3.5 bg-white hover:bg-amber-50 text-amber-600 rounded-xl border border-slate-100 transition-all font-bold text-[11px] uppercase tracking-widest">
                <Coffee size={14} /> Break
             </button>
             <button className="flex items-center justify-center gap-2 py-3.5 bg-white text-slate-300 rounded-xl border border-slate-100 transition-all font-bold text-[11px] uppercase tracking-widest cursor-not-allowed">
                <LogOut size={14} /> Punch Out
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PunchPanel;
