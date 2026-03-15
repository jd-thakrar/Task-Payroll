import React from "react";
import { Send, Upload, Receipt, Plus } from "lucide-react";

const NewClaimForm = () => {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-sm relative overflow-hidden h-full flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
           <Receipt size={20} />
        </div>
        <div>
           <h4 className="text-[14px] font-bold text-[#042f2e] tracking-tight">File Reimbursement</h4>
           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mt-1">New expense claim</p>
        </div>
      </div>
      
      <form className="space-y-4 flex-1">
        <div className="space-y-1.5">
           <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pl-1">Expense Category</label>
           <select className="w-full bg-slate-50/50 border border-slate-200 rounded-lg px-4 py-2.5 text-[13px] font-bold text-[#042f2e] focus:ring-4 focus:ring-teal-500/5 focus:border-teal-500/30 outline-none transition-all cursor-pointer">
              <option>Travel & Conveyance</option>
              <option>Internet & Utility</option>
              <option>Hardware & Electronics</option>
              <option>Medical & Wellness</option>
           </select>
        </div>

        <div className="space-y-1.5">
           <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pl-1">Claim Amount</label>
           <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-[13px]">₹</span>
              <input 
                type="number" 
                placeholder="0.00"
                className="w-full bg-slate-50/50 border border-slate-200 rounded-lg pl-8 pr-4 py-2.5 text-[13px] font-black text-[#042f2e] outline-none focus:border-teal-500/30 transition-all font-mono" 
              />
           </div>
        </div>

        <div className="space-y-1.5">
           <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pl-1">Supporting Receipt</label>
           <div className="border-2 border-dashed border-slate-200 py-6 rounded-xl bg-slate-50/30 hover:bg-slate-50 hover:border-teal-200 transition-all cursor-pointer flex flex-col items-center justify-center gap-2 group">
              <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-teal-600 group-hover:border-teal-100 shadow-sm transition-all">
                 <Upload size={14} />
              </div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest group-hover:text-teal-600">Click to Upload PDF/JPG</p>
           </div>
        </div>

        <div className="mt-auto pt-4">
           <button className="w-full flex items-center justify-center gap-2.5 py-4 bg-[#042f2e] hover:bg-slate-900 text-white rounded-lg shadow-xl shadow-teal-900/10 transition-all font-bold text-[12px] uppercase tracking-widest active:scale-95 group">
              <Plus size={16} className="group-hover:rotate-90 transition-transform duration-300" />
              Submit Claim
           </button>
        </div>
      </form>
    </div>
  );
};

export default NewClaimForm;
