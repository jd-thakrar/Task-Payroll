import React from "react";
import { CheckSquare, ArrowRight, Clock, AlertCircle } from "lucide-react";

const TaskPreviewWidget = ({ tasks }) => {
  return (
    <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-sm transition-all group h-full flex flex-col justify-between">
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 border border-slate-100">
              <CheckSquare size={16} />
            </div>
            <div>
              <h4 
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-lg font-bold text-[#042f2e] tracking-tight"
              >
                Active Tasks
              </h4>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mt-0.5">Deliverables</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
             <div className="px-2 py-0.5 bg-slate-50 border border-slate-100 rounded-md flex items-center gap-1.5">
                <div className="w-1 h-1 rounded-full bg-teal-500" />
                <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest leading-none">{tasks.activeCount} Active</span>
             </div>
          </div>
        </div>

        <div className="border border-slate-100 rounded-lg overflow-hidden divide-y divide-slate-100">
          {tasks.preview.map((task, i) => (
            <div 
              key={i}
              className="group flex items-center justify-between p-3.5 bg-white hover:bg-slate-50 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3">
                 <div className={`w-1 h-1 rounded-full ${task.priority === 'High' ? 'bg-rose-500' : 'bg-amber-400'}`} />
                 <div>
                    <h5 className="text-[13px] font-bold text-slate-700 tracking-tight leading-tight">{task.title}</h5>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1 leading-none">{task.due}</p>
                 </div>
              </div>
              <ArrowRight size={14} className="text-slate-300 group-hover:text-teal-600 transition-colors" />
            </div>
          ))}
        </div>
      </div>

      <button className="w-full mt-6 py-3 rounded-lg border border-slate-100 text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-teal-600 hover:bg-slate-50 transition-all">
         View Full Pipeline
      </button>
    </div>
  );
};

export default TaskPreviewWidget;
