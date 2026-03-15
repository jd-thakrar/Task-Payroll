import React from "react";
import { Wallet, ArrowRight, History } from "lucide-react";

const ClaimsWidget = () => {
  return (
    <div className="bg-white p-8 rounded-[40px] border border-slate-200/60 shadow-sm h-full flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600">
            <Wallet size={18} />
          </div>
          <h4 className="text-xl font-bold text-[#042f2e] tracking-tight">Claims</h4>
        </div>
        <History size={18} className="text-slate-300" />
      </div>

      <div className="flex-1 space-y-6">
        <div className="p-5 rounded-[28px] bg-slate-50 border border-slate-100 flex items-center justify-between group cursor-pointer hover:bg-white hover:border-teal-200 transition-all">
           <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Travel Reimbursement</p>
              <p className="text-lg font-black text-[#042f2e]">₹2,450.00</p>
           </div>
           <div className="px-3 py-1.5 rounded-xl bg-amber-50 text-amber-600 border border-amber-100 text-[9px] font-black uppercase tracking-widest">
              Reviewing
           </div>
        </div>
        
        <div className="p-5 rounded-[28px] border border-dashed border-slate-200 flex flex-col items-center justify-center gap-2 group cursor-pointer hover:bg-teal-50 transition-all py-8">
           <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-teal-100 group-hover:text-teal-600 transition-all">
              <ArrowRight size={18} className="-rotate-45" />
           </div>
           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-teal-700">New Claim</p>
        </div>
      </div>
    </div>
  );
};

export default ClaimsWidget;
