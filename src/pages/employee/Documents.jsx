import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileDown, ShieldAlert, History, Search, Filter, ShieldCheck, Inbox } from "lucide-react";
import EmployeeLayout from "../../layouts/EmployeeLayout";

// Components
import PayslipList from "../../components/employee/documents/PayslipList";
import OfficialDocs from "../../components/employee/documents/OfficialDocs";
import TaxSummary from "../../components/employee/documents/TaxSummary";

const Documents = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <EmployeeLayout title="Records & Compliance">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-6 pb-20"
      >
        {/* ROW 1 — EXECUTIVE SUMMARY CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
           <motion.div variants={itemVariants} className="lg:col-span-1 h-full">
              <TaxSummary />
           </motion.div>
           <motion.div variants={itemVariants} className="lg:col-span-1 h-full">
              <OfficialDocs />
           </motion.div>
           <motion.div variants={itemVariants} className="lg:col-span-1 h-full">
              <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-sm h-full flex flex-col justify-between group overflow-hidden relative">
                 <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                       <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
                          <ShieldCheck size={20} />
                       </div>
                       <div>
                          <h4 className="text-[14px] font-bold text-[#042f2e] tracking-tight">Security & Identity</h4>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mt-1">Digital compliance status</p>
                       </div>
                    </div>
                    <div className="space-y-4">
                       <div className="p-3 bg-slate-50/50 rounded-lg border border-slate-100">
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Verification</p>
                          <p className="text-[12px] font-bold text-slate-600 tracking-tight">E-KYC Completed on Jan 02, 2026</p>
                       </div>
                       <div className="p-3 bg-slate-50/50 rounded-lg border border-slate-100">
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Digital Signatures</p>
                          <p className="text-[12px] font-bold text-teal-600 tracking-tight flex items-center gap-1.5">
                             <ShieldCheck size={14} /> Active & Bound to EMP-120
                          </p>
                       </div>
                    </div>
                 </div>
                 <div className="mt-6 pt-4 border-t border-slate-50 relative z-10">
                    <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#042f2e] hover:text-teal-600 transition-colors">
                       View Credentials Portal →
                    </button>
                 </div>
                 <Inbox className="absolute right-[-20px] bottom-[-20px] text-slate-50 group-hover:text-teal-50/50 transition-colors pointer-events-none" size={140} strokeWidth={1} />
              </div>
           </motion.div>
        </div>

        {/* ROW 2 — SEARCH & ACTION BAR */}
        <motion.div variants={itemVariants} className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
           <div className="flex flex-col sm:flex-row items-center gap-3 w-full xl:w-auto">
              <div className="relative group w-full xl:w-[400px]">
                 <Search size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-teal-600 transition-colors" />
                 <input 
                   type="text" 
                   placeholder="Search through payslips, tax forms..."
                   className="w-full pl-12 pr-6 py-3.5 bg-white border border-slate-200 rounded-xl text-[13px] font-medium text-slate-900 focus:outline-none focus:ring-4 focus:ring-teal-500/5 focus:border-teal-500/30 transition-all shadow-sm"
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                 />
              </div>
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 bg-white border border-slate-200 rounded-xl text-[11px] font-bold text-slate-400 uppercase tracking-widest hover:border-teal-500/30 hover:text-teal-600 transition-all">
                 <Filter size={16} /> Filters
              </button>
           </div>
           
           <button className="flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#042f2e] hover:bg-slate-900 text-white rounded-xl shadow-xl shadow-teal-900/10 transition-all font-bold text-[12px] uppercase tracking-widest active:scale-95 group">
              <FileDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
              Download All Records
           </button>
        </motion.div>

        {/* ROW 3 — PAYSLIP HISTORY */}
        <motion.div variants={itemVariants} className="bg-white rounded-xl border border-slate-200/60 shadow-sm flex flex-col overflow-hidden">
           <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/30">
              <div className="flex items-center gap-3">
                 <div className="w-9 h-9 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600 border border-teal-100">
                    <History size={18} />
                 </div>
                 <div>
                    <h4 className="text-[14px] font-bold text-[#042f2e] tracking-tight">Payslip History</h4>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mt-1">Full breakdown of your monthly earnings</p>
                 </div>
              </div>
              <span className="px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-[10px] font-black text-slate-400 uppercase tracking-tighter">
                 Audit Period: FY 2025-26
              </span>
           </div>
           <PayslipList />
        </motion.div>

      </motion.div>
    </EmployeeLayout>
  );
};

export default Documents;
