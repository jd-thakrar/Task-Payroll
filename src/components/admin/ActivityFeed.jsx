import React from "react";
import { UserPlus, CheckCircle2, Layout, Wallet, CalendarDays, ArrowRight } from "lucide-react";

const ActivityFeed = () => {
  const activities = [
    { type: 'task', text: 'Task Complete: Adi Thakrar finished "Login Auth API"', time: '12m ago', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { type: 'payroll', text: 'Payroll Sync: ?250k Batch disbursed to 10 employees', time: '45m ago', icon: Wallet, color: 'text-[#042f2e]', bg: 'bg-gray-100' },
    { type: 'employee', text: 'Entry Log: Jeet D. checked in at 08:45 AM (On Time)', time: '2h ago', icon: UserPlus, color: 'text-teal-600', bg: 'bg-teal-50' },
    { type: 'task', text: 'Priority Shift: Chirag P. moved "DB Schema" to In-Progress', time: '4h ago', icon: Layout, color: 'text-amber-600', bg: 'bg-amber-50' },
    { type: 'leave', text: 'System Alert: 3 Tasks remain due before Midnight', time: '5h ago', icon: CalendarDays, color: 'text-rose-600', bg: 'bg-rose-50' },
  ];

  return (
    <div className="space-y-6">
      {activities.map((act, i) => (
        <div key={i} className="flex items-start gap-4 group cursor-pointer">
          <div className={`w-10 h-10 rounded-xl ${act.bg} flex items-center justify-center shrink-0 border border-black/5 group-hover:scale-110 transition-transform`}>
            <act.icon size={18} className={act.color} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-[#042f2e] leading-snug group-hover:text-teal-600 transition-colors">{act.text}</p>
            <p className="text-[10px] font-black uppercase text-gray-300 tracking-widest mt-1">{act.time}</p>
          </div>
          <ArrowRight size={14} className="text-gray-200 group-hover:text-teal-500 transition-all opacity-0 group-hover:opacity-100 group-hover:translate-x-1" />
        </div>
      ))}
      <button className="w-full py-4 mt-4 border-t border-gray-50 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-teal-600 transition-colors">
        View All Operational Logs
      </button>
    </div>
  );
};

export default ActivityFeed;
