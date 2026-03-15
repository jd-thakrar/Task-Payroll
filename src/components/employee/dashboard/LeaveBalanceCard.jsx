import { TreePalm, ArrowUpRight } from "lucide-react";

const LeaveBalanceCard = ({ leave }) => {
  return (
    <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-sm transition-all group h-full flex flex-col justify-between">
      <div className="flex items-center justify-between mb-4">
        <div>
           <h4 
             style={{ fontFamily: "'Outfit', sans-serif" }}
             className="text-lg font-bold text-[#042f2e] tracking-tight"
           >
             Time Off
           </h4>
           <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mt-0.5">Available Credits</p>
        </div>
        <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-teal-600 border border-slate-100">
           <TreePalm size={16} />
        </div>
      </div>

      <div className="space-y-4">
        <div>
           <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Days Left</p>
           <h2 
             style={{ fontFamily: "'Outfit', sans-serif" }}
             className="text-xl font-bold text-[#042f2e] tracking-tight flex items-baseline gap-1"
           >
              {leave.remaining}
              <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">Available</span>
           </h2>
           
           <div className="w-full h-1 bg-slate-100 rounded-full mt-3 overflow-hidden">
              <div 
                className="h-full bg-teal-500 rounded-full transition-all duration-1000" 
                style={{ width: `${(leave.remaining / (leave.total || 30)) * 100}%` }} 
              />
           </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
           <div>
              <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest mb-1">Next Holiday</p>
              <p className="text-[11px] font-bold text-slate-700">{leave.nextHoliday || "Mar 25"}</p>
           </div>
           <button className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white border border-slate-100 rounded-lg text-[8px] font-bold uppercase tracking-widest text-slate-600 hover:bg-slate-50 transition-all shadow-sm">
              Book <ArrowUpRight size={10} />
           </button>
        </div>
      </div>
    </div>
  );
};

export default LeaveBalanceCard;
