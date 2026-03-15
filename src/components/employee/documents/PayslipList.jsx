import React from "react";
import { FileDown, Eye, BadgeCheck, TrendingUp } from "lucide-react";

const PayslipList = () => {
  const payslips = [
    {
      month: "February 2026",
      amount: "₹84,000",
      date: "Feb 28, 2026",
      status: "Disbursed",
    },
    {
      month: "January 2026",
      amount: "₹82,500",
      date: "Jan 31, 2026",
      status: "Disbursed",
    },
    {
      month: "December 2025",
      amount: "₹82,500",
      date: "Dec 31, 2025",
      status: "Disbursed",
    },
    {
      month: "November 2025",
      amount: "₹82,500",
      date: "Nov 30, 2025",
      status: "Disbursed",
    },
  ];

  return (
    <div className="divide-y divide-slate-50">
      {payslips.map((p, i) => (
        <div
          key={i}
          className="px-10 py-8 flex items-center justify-between group hover:bg-slate-50/50 transition-colors"
        >
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-white group-hover:text-teal-600 group-hover:shadow-lg group-hover:shadow-teal-900/5 transition-all">
              <FileDown size={22} />
            </div>
            <div>
              <h5 className="text-[15px] font-bold text-slate-900 tracking-tight uppercase leading-none mb-2">
                {p.month}
              </h5>
              <div className="flex items-center gap-3">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                  {p.date}
                </p>
                <div className="w-1 h-1 bg-slate-200 rounded-full" />
                <div className="flex items-center gap-1 text-[10px] font-black text-emerald-600 uppercase tracking-widest">
                  <BadgeCheck size={12} /> {p.status}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="text-right hidden sm:block">
              <p className="text-[14px] font-black text-[#042f2e]">
                {p.amount}
              </p>
              <div className="flex items-center justify-end gap-1 text-[9px] font-bold text-teal-600 uppercase">
                <TrendingUp size={10} /> Full Pay
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-3 text-slate-300 hover:text-teal-600 hover:bg-teal-50 rounded-xl transition-all">
                <Eye size={20} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PayslipList;
