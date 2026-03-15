import React, { useState } from "react";
import { Bell } from "lucide-react";

const NotificationSettings = () => {
  const [toggles, setToggles] = useState({
    payout: true,
    tasks: true,
    announcements: false,
    security: true
  });

  const Toggle = ({ active, onToggle }) => (
    <button 
      onClick={onToggle}
      className={`relative w-11 h-6 rounded-full transition-all duration-300 ${active ? 'bg-teal-600' : 'bg-slate-200'}`}
    >
      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 ${active ? 'left-6' : 'left-1'}`} />
    </button>
  );

  return (
    <div className="bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm overflow-hidden h-fit">
      <div className="flex items-center gap-3 mb-8">
         <div className="w-10 h-10 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600">
            <Bell size={18} />
         </div>
         <h4 className="text-lg font-black text-[#042f2e] tracking-tight uppercase">Notifications</h4>
      </div>

      <div className="space-y-6">
         {[
           { key: 'payout', label: 'Payout Alerts', desc: 'Notify on salary disbursement' },
           { key: 'tasks', label: 'Task Assignments', desc: 'New tasks & deadlines' },
           { key: 'announcements', label: 'Company News', desc: 'Global townhall updates' },
           { key: 'security', label: 'Security Logs', desc: 'New logins & IP detected' },
         ].map((t) => (
            <div key={t.key} className="flex items-center justify-between group">
               <div className="pr-4">
                  <p className="text-[13px] font-bold text-slate-800 leading-none mb-1.5">{t.label}</p>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{t.desc}</p>
               </div>
               <Toggle 
                 active={toggles[t.key]} 
                 onToggle={() => setToggles({...toggles, [t.key]: !toggles[t.key]})} 
               />
            </div>
         ))}
      </div>
    </div>
  );
};

export default NotificationSettings;
