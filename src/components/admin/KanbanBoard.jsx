import React from 'react';
import { Flag, Calendar, Users, MoreHorizontal, Plus } from 'lucide-react';

// ─── CONFIG ───────────────────────────────────────────────────────────────────
const COLUMNS = [
  {
    id: 'Pending',
    title: 'Pending',
    dot: 'bg-gray-400',
    bar: 'bg-gray-200',
    filled: 'bg-gray-400',
    headerBg: 'bg-gray-50',
    badge: 'bg-gray-100 text-gray-500',
  },
  {
    id: 'In Progress',
    title: 'In Progress',
    dot: 'bg-teal-500',
    bar: 'bg-teal-100',
    filled: 'bg-teal-500',
    headerBg: 'bg-teal-50/50',
    badge: 'bg-teal-100 text-teal-600',
  },
  {
    id: 'Completed',
    title: 'Completed',
    dot: 'bg-emerald-500',
    bar: 'bg-emerald-100',
    filled: 'bg-emerald-500',
    headerBg: 'bg-emerald-50/50',
    badge: 'bg-emerald-100 text-emerald-600',
  },
];

const PRIORITY_STYLES = {
  Critical: 'bg-rose-50   text-rose-600',
  High:     'bg-orange-50 text-orange-600',
  Medium:   'bg-amber-50  text-amber-600',
  Low:      'bg-gray-50   text-gray-500',
};

// ─── KANBAN CARD ─────────────────────────────────────────────────────────────
const KanbanCard = ({ task, allTeams, onStatusChange, onClick }) => {
  const allMembers = (allTeams || []).flatMap(t => t.members);
  const resolved = (task.memberIds || task.members || [])
    .map(id => allMembers.find(m => m.id === id))
    .filter(Boolean);
  const visible = resolved.slice(0, 3);
  const extra   = resolved.length - 3;

  const isOverdue = task.endDate && task.status !== 'Completed' && task.endDate < new Date().toISOString().split('T')[0];

  return (
    <div
      onClick={() => onClick && onClick(task)}
      className="bg-white p-4 rounded-[20px] border border-gray-100 shadow-sm hover:shadow-md hover:border-teal-200 transition-all cursor-pointer group"
    >
      {/* Top row – priority + options */}
      <div className="flex items-center justify-between mb-2.5">
        <span className={`px-2 py-0.5 rounded-md text-[8px] font-bold uppercase tracking-widest flex items-center gap-1 ${PRIORITY_STYLES[task.priority] || PRIORITY_STYLES.Low}`}>
          <Flag size={8} /> {task.priority}
        </span>
        <MoreHorizontal size={14} className="text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Task name */}
      <p className="text-sm font-bold text-[#042f2e] leading-snug mb-2 group-hover:text-teal-700 transition-colors line-clamp-2">
        {task.name}
      </p>

      {/* Team tag */}
      {task.teamName && (
        <span className="inline-block px-2 py-0.5 bg-teal-50 text-teal-600 text-[8px] font-bold uppercase tracking-widest rounded-md mb-3">
          {task.teamName}
        </span>
      )}

      {/* Due date */}
      {task.endDate && (
        <div className={`flex items-center gap-1 mb-3 text-[10px] font-bold ${isOverdue ? 'text-rose-500' : 'text-gray-400'}`}>
          <Calendar size={10} />
          <span>{isOverdue ? 'Overdue · ' : ''}{task.endDate}</span>
        </div>
      )}

      {/* Footer: avatars + status mover */}
      <div className="flex items-center justify-between border-t border-gray-50 pt-3">
        {/* Avatar stack */}
        <div className="flex items-center -space-x-1.5">
          {visible.map(m => (
            <div key={m.id} title={m.name} className="w-6 h-6 rounded-lg border-2 border-white overflow-hidden bg-gray-100 shadow-sm">
              <img src={m.avatar} alt={m.name} />
            </div>
          ))}
          {extra > 0 && (
            <div className="w-6 h-6 rounded-lg border-2 border-white bg-gray-100 flex items-center justify-center text-[7px] font-bold text-gray-500">
              +{extra}
            </div>
          )}
          {resolved.length === 0 && (
            <div className="w-6 h-6 rounded-lg border border-dashed border-gray-200 flex items-center justify-center"><Users size={10} className="text-gray-300" /></div>
          )}
        </div>

        {/* Status mover buttons */}
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity" onClick={e => e.stopPropagation()}>
          {COLUMNS.filter(c => c.id !== task.status).map(col => (
            <button
              key={col.id}
              title={`Move to ${col.title}`}
              onClick={() => onStatusChange(task.id, col.id)}
              className={`px-2 py-1 rounded-lg text-[7px] font-bold uppercase tracking-widest transition-all border ${col.badge} border-current/20 hover:opacity-80`}
            >
              → {col.title === 'In Progress' ? 'Progress' : col.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// ─── KANBAN BOARD ─────────────────────────────────────────────────────────────
const KanbanBoard = ({ tasks = [], allTeams = [], onStatusChange, onTaskClick, onAddTask }) => {
  return (
    <div className="flex gap-5 overflow-x-auto pb-4 -mx-8 px-8">
      {COLUMNS.map(col => {
        const colTasks = tasks.filter(t => t.status === col.id);
        return (
          <div key={col.id} className="min-w-[300px] w-[300px] flex flex-col gap-3 shrink-0">

            {/* Column Header */}
            <div className={`flex items-center justify-between px-4 py-3 rounded-2xl ${col.headerBg} border border-gray-100/80`}>
              <div className="flex items-center gap-2.5">
                <span className={`w-2 h-2 rounded-full ${col.dot}`} />
                <h3 style={{ fontFamily: "'Outfit',sans-serif" }} className="text-sm font-bold text-[#042f2e]">
                  {col.title}
                </h3>
                <span className={`px-2 py-0.5 rounded-lg text-[9px] font-bold ${col.badge}`}>
                  {colTasks.length}
                </span>
              </div>
              <button
                onClick={() => onAddTask && onAddTask(col.id)}
                className="p-1 text-gray-300 hover:text-teal-600 transition-colors"
              >
                <Plus size={15} />
              </button>
            </div>

            {/* Progress bar */}
            {tasks.length > 0 && (
              <div className={`h-1 w-full rounded-full ${col.bar} overflow-hidden`}>
                <div
                  className={`h-full rounded-full transition-all duration-500 ${col.filled}`}
                  style={{ width: `${Math.round((colTasks.length / tasks.length) * 100)}%` }}
                />
              </div>
            )}

            {/* Cards */}
            <div className="space-y-3">
              {colTasks.map(task => (
                <KanbanCard
                  key={task.id}
                  task={task}
                  allTeams={allTeams}
                  onStatusChange={onStatusChange}
                  onClick={onTaskClick}
                />
              ))}

              {colTasks.length === 0 && (
                <div className="py-10 flex flex-col items-center gap-2 text-gray-300 border-2 border-dashed border-gray-100 rounded-[20px]">
                  <span className={`w-8 h-8 rounded-full ${col.bar} flex items-center justify-center`}>
                    <span className={`w-3 h-3 rounded-full ${col.dot} opacity-40`} />
                  </span>
                  <p className="text-[10px] font-bold uppercase tracking-widest">No tasks</p>
                </div>
              )}

              {/* Add task shortcut */}
              <button
                onClick={() => onAddTask && onAddTask(col.id)}
                className="w-full py-3 border-2 border-dashed border-gray-100 rounded-[20px] flex items-center justify-center gap-2 text-gray-300 hover:border-teal-200 hover:text-teal-500 transition-all"
              >
                <Plus size={14} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Add Task</span>
              </button>
            </div>

          </div>
        );
      })}
    </div>
  );
};

export default KanbanBoard;
