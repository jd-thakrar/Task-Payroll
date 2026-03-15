import React from "react";
import { Check, X, Clock, FileText, ExternalLink } from "lucide-react";

const ClaimsHistory = () => {
  const claims = [
    { id: "CLM-902", category: "Travel", amount: "₹4,500", date: "Mar 12, 2026", status: "Approved", note: "Client Onsite Visit" },
    { id: "CLM-895", category: "Internet", amount: "₹1,200", date: "Mar 05, 2026", status: "Pending", note: "WFH Monthly Bill" },
    { id: "CLM-884", category: "Medical", amount: "₹6,700", date: "Feb 28, 2026", status: "Approved", note: "Routine Checkup" },
    { id: "CLM-872", category: "Hardware", amount: "₹18,000", date: "Feb 15, 2026", status: "Rejected", note: "Monitor Upgrade" },
  ];

  return (
    <div className="overflow-x-auto thin-scroll">
      <table className="w-full text-left">
        <thead>
          <tr className="bg-slate-50/50 border-b border-slate-100">
             <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">ID & Category</th>
             <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Amount</th>
             <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Timestamp</th>
             <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
             <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest text-right">Receipt</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50">
          {claims.map((claim, i) => (
            <tr key={claim.id} className="group hover:bg-slate-50/50 transition-colors">
              <td className="px-6 py-5">
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600 border border-teal-100 text-[10px] font-black">
                       {claim.id.split('-')[1]}
                    </div>
                    <div>
                       <p className="text-[13px] font-bold text-[#042f2e] tracking-tight">{claim.category}</p>
                       <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">{claim.note}</p>
                    </div>
                 </div>
              </td>
              <td className="px-6 py-5">
                 <span className="text-[14px] font-black text-[#042f2e]">
                    {claim.amount}
                 </span>
              </td>
              <td className="px-6 py-5 text-slate-600 font-bold text-[12px]">
                 {claim.date}
              </td>
              <td className="px-6 py-5">
                 <span className={`
                    inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest border
                    ${claim.status === 'Approved' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 
                      claim.status === 'Pending' ? 'bg-amber-50 text-amber-600 border-amber-100' : 
                      'bg-rose-50 text-rose-600 border-rose-100'}
                 `}>
                    {claim.status === 'Approved' ? <Check size={12} strokeWidth={3} /> : 
                     claim.status === 'Pending' ? <Clock size={12} strokeWidth={3} /> : 
                     <X size={12} strokeWidth={3} />}
                    {claim.status}
                 </span>
              </td>
              <td className="px-6 py-5 text-right">
                 <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-50 text-slate-300 hover:bg-teal-50 hover:text-teal-600 transition-all border border-transparent hover:border-teal-100">
                    <FileText size={16} />
                 </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClaimsHistory;
