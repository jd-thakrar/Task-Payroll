import React from "react";
import { Calendar, UserPlus } from "lucide-react";

const UpcomingLeave = () => {
  return (
    <div className="bg-white p-8 rounded-[40px] border border-slate-200/60 shadow-sm h-full flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600">
            <Calendar size={18} />
          </div>
          <h4 className="text-xl font-bold text-[#042f2e] tracking-tight">Time Off</h4>
        </div>
        <div className="px-3 py-1 bg-teal-600 text-white text-[9px] font-black rounded-lg uppercase tracking-widest">
           12 Left
        </div>
      </div>

      <div className="flex-1 space-y-4">
        <div className="flex items-center gap-4 p-5 rounded-[28px] bg-slate-50 border border-slate-100">
           <div className="shrink-0 w-12 h-12 rounded-2xl bg-white border border-slate-100 flex flex-col items-center justify-center shadow-sm">
              <span className="text-[10px] font-black text-slate-300 uppercase leading-none mb-0.5">Mar</span>
              <span className="text-lg font-black text-[#042f2e] leading-none">24</span>
           </div>
           <div>
              <p className="text-[13px] font-bold text-slate-800 leading-none mb-1.5 uppercase">Annual Holiday</p>
              <div className="flex items-center gap-2">
                 <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">4 Days</span>
                 <span className="w-1 h-1 bg-slate-300 rounded-full" />
                 <span className="text-[9px] font-bold text-teal-600 uppercase tracking-widest">Approved</span>
              </div>
           </div>
        </div>

        <button className="w-full flex items-center justify-center gap-3 p-4 rounded-[24px] border border-slate-200 text-[11px] font-bold uppercase tracking-widest text-slate-500 hover:bg-slate-50 transition-all mt-auto">
           <UserPlus size={16} />
           Request Time Off
        </button>
      </div>
    </div>
  );
};

export default UpcomingLeave;
