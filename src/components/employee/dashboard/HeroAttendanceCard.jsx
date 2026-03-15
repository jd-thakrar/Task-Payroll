import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, LogOut, MapPin, Clock, Coffee } from "lucide-react";

const HeroAttendanceCard = ({ data, employee }) => {
  const [liveTime, setLiveTime] = useState(data.timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveTime(prev => {
        const [h, m, s] = prev.split(':').map(Number);
        let newS = s + 1;
        let newM = m;
        let newH = h;
        if (newS >= 60) { newS = 0; newM += 1; }
        if (newM >= 60) { newM = 0; newH += 1; }
        return `${String(newH).padStart(2, '0')}:${String(newM).padStart(2, '0')}:${String(newS).padStart(2, '0')}`;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const isClockedIn = data.status === "Clocked In";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 md:p-8 rounded-xl border border-slate-200/60 shadow-sm relative overflow-hidden group"
    >
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        {/* Left: Info */}
        <div className="space-y-6 flex-1">
          <div className="space-y-1">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Command Center</p>
            <h1 
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="text-3xl md:text-4xl font-bold text-[#042f2e] tracking-tight"
            >
               Good Morning, <span className="text-teal-600 font-bold">{employee.firstName}</span>
            </h1>
          </div>
          
          <div className="flex flex-wrap items-center gap-6">
             <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-xl">
                <div className={`w-2 h-2 rounded-full ${isClockedIn ? 'bg-emerald-500 animate-pulse' : 'bg-slate-300'}`} />
                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest leading-none">{data.status}</span>
             </div>
             <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <MapPin size={14} className="text-teal-600" /> {data.mode}
             </div>
             <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <Clock size={14} className="text-slate-300" /> Last Punch: {data.lastPunch}
             </div>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8 lg:bg-slate-50/50 lg:p-6 rounded-2xl lg:border lg:border-slate-100">
           <div className="text-center sm:text-right min-w-[120px]">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Today's Session</p>
              <h2 className="text-4xl font-bold text-[#042f2e] tabular-nums tracking-tighter">{liveTime}</h2>
           </div>

           <div className="flex gap-3 w-full sm:w-auto">
             <motion.button 
               whileHover={{ y: -2 }}
               whileTap={{ scale: 0.95 }}
               className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-[11px] uppercase tracking-widest transition-all shadow-sm ${
                 isClockedIn 
                 ? 'bg-rose-500 text-white hover:bg-rose-600' 
                 : 'bg-[#042f2e] text-white hover:bg-slate-900'
               }`}
             >
               {isClockedIn ? <LogOut size={16} /> : <Play size={16} fill="currentColor" />}
               {isClockedIn ? 'Punch Out' : 'Punch In'}
             </motion.button>
             
             <button className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 text-slate-400 hover:text-teal-600 hover:border-teal-500/30 rounded-xl transition-all shadow-sm">
                <Coffee size={20} />
             </button>
           </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroAttendanceCard;
