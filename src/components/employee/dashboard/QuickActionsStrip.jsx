import React from "react";
import {
  Calendar,
  CheckSquare,
  Wallet,
  FileText,
  Plus,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

const QuickActionsStrip = () => {
  const actions = [
    { label: "Apply Leave", icon: Calendar, color: "bg-white text-[#042f2e] border-slate-200/60" },
    { label: "Launch Task", icon: CheckSquare, color: "bg-white text-[#042f2e] border-slate-200/60" },
    { label: "Reimbursement", icon: Wallet, color: "bg-white text-[#042f2e] border-slate-200/60" },
    { label: "My Payslip", icon: FileText, color: "bg-white text-[#042f2e] border-slate-200/60" },
  ];

  return (
    <div className="overflow-x-auto pb-2 -mb-2 no-scrollbar">
      <div className="flex items-center gap-3 min-w-max">
        {actions.map((action, i) => (
          <motion.button
            key={i}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-xl border ${action.color} shadow-sm transition-all group whitespace-nowrap`}
          >
            <action.icon size={16} className="text-teal-600 group-hover:scale-110 transition-transform" />
            <span className="text-[10px] font-bold uppercase tracking-widest leading-none">{action.label}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default QuickActionsStrip;
