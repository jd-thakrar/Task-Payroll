import React from "react";
import { ShieldCheck, Key, Smartphone, ChevronRight } from "lucide-react";

const SecuritySettings = () => {
  return (
    <div className="bg-[#042f2e] p-8 rounded-[40px] text-white shadow-2xl shadow-teal-900/20 relative overflow-hidden h-fit">
      <div className="relative z-10">
         <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-teal-400">
               <ShieldCheck size={20} />
            </div>
            <h4 className="text-lg font-black tracking-tight uppercase">Security</h4>
         </div>

         <div className="space-y-4">
            <button className="w-full flex items-center justify-between p-5 rounded-[24px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
               <div className="flex items-center gap-4">
                  <Key size={18} className="text-teal-400" />
                  <div className="text-left">
                     <p className="text-[13px] font-bold leading-none mb-1">Update Password</p>
                     <p className="text-[9px] font-bold text-teal-400/60 uppercase tracking-widest leading-none">Last changed 40 days ago</p>
                  </div>
               </div>
               <ChevronRight size={16} className="text-white/20 group-hover:text-white transition-colors" />
            </button>

            <button className="w-full flex items-center justify-between p-5 rounded-[24px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
               <div className="flex items-center gap-4">
                  <Smartphone size={18} className="text-teal-400" />
                  <div className="text-left">
                     <p className="text-[13px] font-bold leading-none mb-1">2FA Authentication</p>
                     <p className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest leading-none">Active & Verified</p>
                  </div>
               </div>
               <ChevronRight size={16} className="text-white/20 group-hover:text-white transition-colors" />
            </button>
         </div>

         <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-[9px] font-bold text-white/30 uppercase tracking-[0.2em] mb-4">Device Sessions</p>
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  <p className="text-[11px] font-bold text-teal-100 uppercase tracking-widest">Active Mac Session</p>
               </div>
               <p className="text-[9px] font-bold text-white/20 uppercase tracking-widest">Rajkot, IN</p>
            </div>
         </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-teal-400/20 blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none" />
    </div>
  );
};

export default SecuritySettings;
