import React from "react";

const StatWidget = ({ label, value, trend, icon: Icon, accent = "teal" }) => {
  const accents = {
    teal: {
      bg: "bg-teal-50",
      text: "text-teal-600",
      border: "border-teal-100",
      trend: "text-teal-600",
    },
    emerald: {
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      border: "border-emerald-100",
      trend: "text-emerald-600",
    },
    rose: {
      bg: "bg-rose-50",
      text: "text-rose-600",
      border: "border-rose-100",
      trend: "text-rose-600",
    },
    amber: {
      bg: "bg-amber-50",
      text: "text-amber-600",
      border: "border-amber-100",
      trend: "text-amber-600",
    },
    slate: {
      bg: "bg-slate-50",
      text: "text-slate-600",
      border: "border-slate-100",
      trend: "text-slate-600",
    },
  };

  const c = accents[accent] || accents.teal;

  return (
    <div className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <div
          className={`w-12 h-12 rounded-2xl ${c.bg} flex items-center justify-center border ${c.border} group-hover:scale-110 transition-transform`}
        >
          <Icon size={24} className={c.text} />
        </div>
        {trend && (
          <div
            className={`px-2 py-1 rounded-lg ${c.bg} ${c.trend} text-[10px] font-bold tracking-tight`}
          >
            {trend}
          </div>
        )}
      </div>
      <div className="space-y-1">
        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">
          {label}
        </div>
        <div
          style={{ fontFamily: "'Outfit', sans-serif" }}
          className="text-3xl font-bold text-[#042f2e] tracking-tight"
        >
          {value}
        </div>
      </div>
    </div>
  );
};

export default StatWidget;
