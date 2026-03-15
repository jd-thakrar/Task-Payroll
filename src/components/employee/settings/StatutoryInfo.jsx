import React, { useState } from "react";
import { FileText, MapPin, Hash, ShieldCheck, Mail, Calendar } from "lucide-react";

/**
 * StatutoryInfo Component
 * Displays compliance and identity records collected during Step 3 (Personal & ID) 
 * of the "Add Employee" process.
 */
const StatutoryInfo = () => {
  const [formData] = useState({
    fatherName: "Suresh Sharma",
    dob: "1992-05-24",
    address: "B-402, Royal Residency, Opp. Central Park, Ahmedabad, Gujarat 380054",
    aadhaar: "XXXX XXXX 5432",
    pan: "ABCDE1234F"
  });

  return (
    <div className="bg-white p-6 sm:p-10 rounded-xl border border-slate-200 shadow-sm overflow-hidden relative group">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#042f2e] flex items-center justify-center text-teal-400">
            <FileText size={20} />
          </div>
          <div>
            <h4 className="text-lg font-black text-[#042f2e] tracking-tight uppercase">Personal & ID Proofs</h4>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mt-1">Compliance & Legal Identification</p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-lg text-[9px] font-black uppercase tracking-widest border border-emerald-100">
           <ShieldCheck size={12} /> SECURE
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {/* Row 1: Legal Names */}
        <div className="space-y-2">
           <div className="flex items-center gap-2 mb-1">
              <Mail size={12} className="text-slate-300" />
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Father's Name</label>
           </div>
           <input 
              type="text"
              defaultValue={formData.fatherName}
              className="w-full px-5 py-3.5 rounded-xl border border-slate-100 bg-slate-50 text-[#042f2e] text-[13px] font-bold outline-none cursor-default"
              readOnly
           />
        </div>

        <div className="space-y-2">
           <div className="flex items-center gap-2 mb-1">
              <Calendar size={12} className="text-slate-300" />
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Date of Birth</label>
           </div>
           <input 
              type="text"
              defaultValue={formData.dob}
              className="w-full px-5 py-3.5 rounded-xl border border-slate-100 bg-slate-50 text-[#042f2e] text-[13px] font-bold outline-none cursor-default"
              readOnly
           />
        </div>

        {/* Row 2: Address (Full Width) */}
        <div className="md:col-span-2 space-y-2">
           <div className="flex items-center gap-2 mb-1">
              <MapPin size={12} className="text-slate-300" />
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Residential Address</label>
           </div>
           <textarea 
              rows={2}
              defaultValue={formData.address}
              className="w-full px-5 py-3.5 rounded-xl border border-slate-100 bg-slate-50 text-[#042f2e] text-[13px] font-bold outline-none cursor-default resize-none leading-relaxed"
              readOnly
           />
        </div>

        {/* Row 3: Statutory IDs */}
        <div className="space-y-2">
           <div className="flex items-center gap-2 mb-1">
              <Hash size={12} className="text-slate-300" />
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Aadhaar Number (Masked)</label>
           </div>
           <div className="relative">
              <input 
                 type="text"
                 defaultValue={formData.aadhaar}
                 className="w-full px-5 py-3.5 rounded-xl border border-slate-100 bg-slate-50 text-[#042f2e] text-[13px] font-bold outline-none cursor-default"
                 readOnly
              />
              <ShieldCheck size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-500" />
           </div>
        </div>

        <div className="space-y-2">
           <div className="flex items-center gap-2 mb-1">
              <Hash size={12} className="text-slate-300" />
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">PAN Card</label>
           </div>
           <input 
              type="text"
              defaultValue={formData.pan}
              className="w-full px-5 py-3.5 rounded-xl border border-slate-100 bg-slate-50 text-[#042f2e] text-[13px] font-bold outline-none cursor-default"
              readOnly
           />
        </div>
      </div>

      {/* Security Footer Notice */}
      <div className="mt-10 pt-6 border-t border-slate-50 flex items-center gap-4">
         <ShieldCheck size={24} className="text-[#042f2e]/10" />
         <p className="text-[10px] font-bold text-slate-400 leading-tight">
            Sensitive statutory data is read-only. To update your residential address or ID proofs, please submit an "Information Change Request" via HR.
         </p>
      </div>
    </div>
  );
};

export default StatutoryInfo;
