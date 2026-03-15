import React from "react";
import { Wallet, Landmark, Receipt, CreditCard } from "lucide-react";

const FinanceSummaryStrip = () => {
  const stats = [
    {
      label: "Next Payout",
      value: "₹84,000",
      icon: Wallet,
      color: "text-teal-600",
      detail: "30 Mar 2026",
    },
    {
      label: "Loan Balance",
      value: "₹1,24,500",
      icon: Landmark,
      color: "text-blue-600",
      detail: "EMI: ₹12,000",
    },
    {
      label: "Pending Claims",
      value: "03",
      icon: Receipt,
      color: "text-amber-600",
      detail: "₹12,400",
    },
    {
      label: "Approved (YTD)",
      value: "₹2,45,000",
      icon: CreditCard,
      color: "text-emerald-600",
      detail: "Taxable Income",
    },
  ];

  return (
    <div className="bg-white p-2 rounded-xl border border-slate-200/60 shadow-sm flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-100 overflow-hidden">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="flex-1 flex items-center justify-between p-4 px-6 hover:bg-slate-50/50 transition-colors cursor-default"
        >
          <div className="space-y-1">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-none">
              {stat.label}
            </p>
            <div className="flex items-baseline gap-2">
              <h3 className="text-2xl font-bold text-[#042f2e] tracking-tight">
                {stat.value}
              </h3>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">
                {stat.detail}
              </span>
            </div>
          </div>
          <div
            className={`w-10 h-10 rounded-lg bg-white border border-slate-100 flex items-center justify-center ${stat.color} shadow-sm hidden sm:flex`}
          >
            <stat.icon size={18} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FinanceSummaryStrip;
