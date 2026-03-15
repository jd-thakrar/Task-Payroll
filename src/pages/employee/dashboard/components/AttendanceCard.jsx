import React from "react";
import { Clock, Play, LogOut, Coffee } from "lucide-react";
import { motion } from "framer-motion";

const AttendanceCard = () => {
  return (
    <div className="bg-white p-8 rounded-[40px] border border-slate-200/60 shadow-sm relative overflow-hidden group">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600">
              <Clock size={20} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">
                Status
              </p>
              <h4 className="text-xl font-bold text-slate-900 leading-none">
                Currently Punched Out
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-8 pl-1">
            <div className="space-y-1">
              <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">
                Entry Time
              </p>
              <p className="text-sm font-bold text-slate-600">--:--</p>
            </div>
            <div className="w-px h-8 bg-slate-100" />
            <div className="space-y-1">
              <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">
                Shift Total
              </p>
              <p className="text-sm font-bold text-slate-600">0h 0m</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-3 px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-[24px] shadow-xl shadow-teal-500/20 transition-all font-bold text-[13px] group/btn active:scale-95">
            <Play size={18} fill="currentColor" />
            Punch In
          </button>

          <button className="w-14 h-14 flex items-center justify-center text-slate-400 hover:text-amber-500 bg-slate-50 hover:bg-amber-50 border border-slate-100 rounded-[20px] transition-all group/coffee">
            <Coffee
              size={20}
              className="group-hover/coffee:scale-110 transition-transform"
            />
          </button>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 blur-3xl rounded-full -mr-32 -mt-32 pointer-events-none" />
    </div>
  );
};

export default AttendanceCard;
