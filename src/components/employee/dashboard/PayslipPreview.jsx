import React from "react";
import { CreditCard, FileDown, Eye, TrendingUp } from "lucide-react";

const PayslipPreview = () => {
  return (
    <div className="bg-white p-8 rounded-[40px] border border-slate-200/60 shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600">
            <CreditCard size={18} />
          </div>
          <h4 className="text-xl font-bold text-[#042f2e] tracking-tight">Latest Payslip</h4>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-1 bg-teal-50 text-teal-700 rounded-lg text-[9px] font-black uppercase tracking-widest">
           <TrendingUp size={10} /> +₹5,000
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-center py-6 border-b border-slate-100 mb-6">
           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">February 2026</p>
           <h2 className="text-4xl font-black text-[#042f2e] tracking-tighter">₹84,000.00</h2>
           <p className="text-[11px] font-bold text-teal-600 mt-2 bg-teal-50 inline-block px-3 py-1 rounded-full border border-teal-100 uppercase tracking-widest">Disbursed on Feb 28</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
           <button className="flex flex-col items-center justify-center gap-2 p-5 rounded-[24px] bg-slate-50 border border-slate-100 hover:bg-white hover:border-teal-200 hover:shadow-xl hover:shadow-teal-900/5 transition-all group">
              <Eye size={20} className="text-slate-400 group-hover:text-teal-600 transition-colors" />
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-teal-900">View Detail</span>
           </button>
           <button className="flex flex-col items-center justify-center gap-2 p-5 rounded-[24px] bg-slate-50 border border-slate-100 hover:bg-white hover:border-teal-200 hover:shadow-xl hover:shadow-teal-900/5 transition-all group text-teal-600">
              <FileDown size={20} className="group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-teal-900">Download</span>
           </button>
        </div>
      </div>
    </div>
  );
};

export default PayslipPreview;
