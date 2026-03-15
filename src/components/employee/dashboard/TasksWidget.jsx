import React from "react";
import { CheckSquare, ArrowRight, Clock, AlertCircle } from "lucide-react";

const TasksWidget = () => {
  const activeTasks = [
    { title: "Quarterly Audit Report", priority: "High", due: "Today", status: "In Progress" },
    { title: "Team Weekly Sync Prep", priority: "Medium", due: "Tomorrow", status: "Pending" },
  ];

  return (
    <div className="bg-white p-8 rounded-[40px] border border-slate-200/60 shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600">
            <CheckSquare size={20} />
          </div>
          <h4 className="text-xl font-bold text-[#042f2e] tracking-tight">Active Tasks</h4>
        </div>
        <button className="text-teal-600 text-xs font-bold uppercase tracking-widest hover:translate-x-1 transition-transform flex items-center gap-2">
          View All <ArrowRight size={14} />
        </button>
      </div>

      <div className="space-y-4">
        {activeTasks.map((task, i) => (
          <div 
            key={i}
            className="group flex flex-col md:flex-row md:items-center justify-between p-6 rounded-[28px] border border-slate-100 bg-slate-50/30 hover:bg-white hover:border-teal-200 hover:shadow-xl hover:shadow-teal-900/5 transition-all cursor-pointer"
          >
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <div className={`w-2 h-2 rounded-full ${task.priority === 'High' ? 'bg-rose-500 shadow-lg shadow-rose-500/20' : 'bg-amber-400'}`} />
              <div>
                <h5 className="text-[14px] font-bold text-slate-800 tracking-tight group-hover:text-teal-700 transition-colors uppercase">{task.title}</h5>
                <div className="flex items-center gap-4 mt-1">
                   <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                     <Clock size={12} /> {task.due}
                   </div>
                   <div className="text-[10px] text-slate-300 font-bold uppercase tracking-widest">
                     • {task.priority} Priority
                   </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-6">
               <div className="px-3 py-1.5 rounded-xl bg-white border border-slate-100 text-[9px] font-black text-slate-500 uppercase tracking-widest">
                  {task.status}
               </div>
               <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-300 group-hover:border-teal-500 group-hover:text-teal-500 transition-all">
                  <ArrowRight size={14} />
               </div>
            </div>
          </div>
        ))}
        
        {activeTasks.length === 0 && (
          <div className="text-center py-10 space-y-3">
             <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto text-slate-300">
                <CheckSquare size={24} />
             </div>
             <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">No pending tasks for today</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TasksWidget;
