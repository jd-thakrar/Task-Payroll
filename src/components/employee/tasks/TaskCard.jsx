import React from "react";
import { Clock, Calendar, ArrowRight, Timer, MoreHorizontal, CheckCircle2 } from "lucide-react";

const TaskCard = ({ task, viewMode }) => {
  const isGrid = viewMode === "grid";

  return (
    <div
      className={`
      bg-white rounded-xl border border-slate-200/60 shadow-sm hover:shadow-xl hover:shadow-teal-900/5 hover:border-teal-500/20 transition-all group overflow-hidden
      ${isGrid ? "p-6 flex flex-col h-full" : "p-4 px-6 flex items-center justify-between"}
    `}
    >
      <div className={isGrid ? "flex-1" : "flex items-center gap-6 flex-1"}>
        <div className="flex items-center justify-between mb-4">
          <div
            className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest border ${
              task.priority === "High"
                ? "bg-rose-50 text-rose-600 border-rose-100"
                : "bg-amber-50 text-amber-600 border-amber-100"
            }`}
          >
            {task.priority}
          </div>
          {isGrid && (
            <button className="text-slate-300 hover:text-slate-600 transition-colors p-1">
              <MoreHorizontal size={16} />
            </button>
          )}
        </div>

        <div className={isGrid ? "" : "flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4"}>
          <div>
            <h4 className="text-[14px] font-bold text-[#042f2e] mb-2 group-hover:text-teal-700 transition-colors leading-tight">
              {task.title}
            </h4>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-bold uppercase tracking-widest">
                <Calendar size={12} strokeWidth={2.5} /> {task.due}
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-teal-600 font-bold uppercase tracking-widest">
                <Timer size={12} strokeWidth={2.5} /> {task.time}
              </div>
            </div>
          </div>

          {!isGrid && (
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-lg border-2 border-white bg-slate-50 flex items-center justify-center text-[10px] font-bold text-slate-400"
                  >
                    U{i}
                  </div>
                ))}
              </div>
              <div className="w-px h-6 bg-slate-100 hidden sm:block" />
              <button className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#042f2e] text-white shadow-lg shadow-teal-900/10 hover:scale-105 active:scale-95 transition-all">
                <ArrowRight size={14} />
              </button>
            </div>
          )}
        </div>
      </div>

      {isGrid && (
        <div className="mt-8 pt-5 border-t border-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-lg border-2 border-white bg-slate-50 flex items-center justify-center text-[10px] font-bold text-slate-400 shadow-sm"
                >
                  U{i}
                </div>
              ))}
            </div>
            <div className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Collaborators</div>
          </div>

          <button className="flex items-center justify-center p-2 rounded-lg bg-teal-50 text-teal-600 hover:bg-[#042f2e] hover:text-white transition-all shadow-sm">
            <CheckCircle2 size={18} />
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
