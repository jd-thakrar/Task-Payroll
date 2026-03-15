import React from "react";
import { Check, X, Clock, FileText } from "lucide-react";

const LeaveHistoryTable = () => {
  const history = [
    { type: "Annual Leave", from: "Mar 24", to: "Mar 28", days: 4, reason: "Family Vacation", status: "Approved" },
    { type: "Sick Leave", from: "Feb 10", to: "Feb 10", days: 1, reason: "Fever", status: "Approved" },
    { type: "Casual Leave", from: "Jan 15", to: "Jan 15", days: 1, reason: "Personal Work", status: "Rejected" },
  ];

  return (
    <div className="overflow-x-auto thin-scroll">
      <table className="w-full text-left">
        <thead>
          <tr className="bg-slate-50/50 border-b border-slate-100">
             <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Leave Type</th>
             <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Duration</th>
             <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Period</th>
             <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
             <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest text-right">Invoice</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50">
          {history.map((h, i) => (
            <tr key={i} className="group hover:bg-slate-50/50 transition-colors">
              <td className="px-6 py-5">
                 <p className="text-[13px] font-bold text-[#042f2e] tracking-tight">{h.type}</p>
                 <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">Note: {h.reason}</p>
              </td>
              <td className="px-6 py-5">
                 <span className="text-[12px] font-bold px-2 py-0.5 bg-slate-100 rounded-md text-slate-600">
                    {h.days} Day
                 </span>
              </td>
              <td className="px-6 py-5">
                 <p className="text-[12px] font-bold text-slate-600 tracking-tight">
                    {h.from} — {h.to}
                 </p>
              </td>
              <td className="px-6 py-5">
                 <span className={`
                    inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest border
                    ${h.status === 'Approved' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-rose-50 text-rose-600 border-rose-100'}
                 `}>
                    {h.status === 'Approved' ? <Check size={12} strokeWidth={3} /> : <X size={12} strokeWidth={3} />}
                    {h.status}
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

export default LeaveHistoryTable;
