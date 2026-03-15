import React from "react";
import { Clock, AlertCircle } from "lucide-react";

const DeadlinesWidget = () => {
  const deadlines = [
    {
      title: "Project: Login Auth API",
      date: "Today (Overdue)",
      urgency: "Critical",
      color: "text-rose-600",
      bg: "bg-rose-50",
    },
    {
      title: "Task: AWS Security Patch",
      date: "Today (02:00 PM)",
      urgency: "High",
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
    {
      title: "Task: DB Optimization",
      date: "Today (06:00 PM)",
      urgency: "Normal",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      title: "Task: Payroll Module V2",
      date: "Today (09:00 PM)",
      urgency: "Pending",
      color: "text-[#042f2e]",
      bg: "bg-gray-100",
    },
    {
      title: "Design: UI Refinement",
      date: "Today (11:00 PM)",
      urgency: "Pending",
      color: "text-[#042f2e]",
      bg: "bg-gray-100",
    },
  ];

  return (
    <div className="space-y-4">
      {deadlines.map((item, i) => (
        <div
          key={i}
          className="bg-gray-50/50 p-5 rounded-[24px] border border-gray-100 flex items-center justify-between group hover:bg-white transition-all shadow-xs"
        >
          <div className="flex items-center gap-4">
            <div
              className={`w-2 h-8 rounded-full ${item.bg === "bg-rose-50" ? "bg-rose-500" : item.bg === "bg-amber-50" ? "bg-amber-500" : "bg-emerald-500"}`}
            />
            <div>
              <h4 className="text-sm font-bold text-[#042f2e]">{item.title}</h4>
              <div className="flex items-center gap-1.5 mt-1">
                <Clock size={12} className="text-gray-400" />
                <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">
                  {item.date}
                </span>
              </div>
            </div>
          </div>
          <div
            className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border ${item.bg} ${item.color}`}
          >
            {item.urgency}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DeadlinesWidget;
