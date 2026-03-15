import React, { useState } from "react";
import AdminLayout from "../../../layouts/AdminLayout";
import {
  FileText,
  Search,
  Calendar,
  Filter,
  ChevronRight,
  Users,
  Wallet,
  Clock,
  Activity,
  ShieldCheck,
  CreditCard,
  Target,
  FileSpreadsheet,
  FileJson,
  Printer,
  ChevronDown,
  ArrowRightCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ─── MASTER REPORT CATALOG ──────────────────────────────────────────────────
const REPORT_CATALOG = [
  {
    id: "salary-summary",
    name: "Salary reconciliation",
    desc: "Monthly gross to net audit.",
    module: "Payroll",
    icon: Wallet,
  },
  {
    id: "payslip",
    name: "Batch Payslips",
    desc: "Secure document distribution.",
    module: "Payroll",
    icon: FileText,
  },
  {
    id: "tds",
    name: "TDS Registry",
    desc: "Statutory compliance tracking.",
    module: "Compliance",
    icon: ShieldCheck,
  },
  {
    id: "attendance",
    name: "Attendance Matrix",
    desc: "Daily labor presence & leave.",
    module: "Workforce",
    icon: Clock,
  },
  {
    id: "contract",
    name: "Contract Summary",
    desc: "Freelancer expense allocation.",
    module: "Finance",
    icon: CreditCard,
  },
  {
    id: "productivity",
    name: "Capital Efficiency",
    desc: "Task cost vs speed analysis.",
    module: "Insights",
    icon: Activity,
  },
];

const DUMMY_DATA = {
  "salary-summary": {
    cols: [
      "Month",
      "Headcount",
      "Total Gross",
      "Total Deduction",
      "Net Payroll",
    ],
    rows: [
      {
        month: "March 2026",
        count: 10,
        gross: "₹5,00,000",
        deduct: "₹32,000",
        net: "₹4,68,000",
      },
      {
        month: "February 2026",
        count: 10,
        gross: "₹5,00,000",
        deduct: "₹32,000",
        net: "₹4,68,000",
      },
      {
        month: "January 2026",
        count: 8,
        gross: "₹4,00,000",
        deduct: "₹25,600",
        net: "₹3,74,400",
      },
    ],
    insights: [
      {
        label: "Total Net Payroll",
        val: "₹4,68,000",
        icon: Wallet,
        color: "text-teal-600",
      },
      {
        label: "Avg Monthly Pay",
        val: "₹46,800",
        icon: Target,
        color: "text-[#042f2e]",
      },
      {
        label: "Gross Total",
        val: "₹5,00,000",
        icon: Activity,
        color: "text-blue-600",
      },
    ],
  },
  attendance: {
    cols: ["Employee", "Present Days", "Leave Days", "Late Entries"],
    rows: [
      { emp: "Adi Thakrar", p: "22", lv: "2", late: "1" },
      { emp: "Chirag Parekh", p: "24", lv: "0", late: "0" },
      { emp: "Jeet D.", p: "23", lv: "1", late: "3" },
    ],
    insights: [
      {
        label: "Avg Attendance",
        val: "92%",
        icon: Clock,
        color: "text-teal-600",
      },
      {
        label: "Total Leaves",
        val: "14",
        icon: Calendar,
        color: "text-rose-600",
      },
      {
        label: "Late Ratio",
        val: "4.2%",
        icon: Clock,
        color: "text-amber-600",
      },
    ],
  },
};

// ─── COMPONENTS ─────────────────────────────────────────────────────────────

const ReportCard = ({ report, isActive, onClick }) => (
  <motion.button
    whileHover={{ y: -3 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className={`min-w-[240px] p-4 rounded-[24px] border transition-all text-left flex items-start gap-3.5 shrink-0 relative overflow-hidden group ${
      isActive
        ? "bg-[#042f2e] border-[#042f2e] text-white shadow-xl shadow-teal-900/20"
        : "bg-white border-gray-100 text-[#042f2e] hover:border-teal-200 hover:shadow-lg"
    }`}
  >
    <div
      className={`p-3 rounded-xl shrink-0 transition-all duration-300 ${
        isActive ? "bg-white/10 text-white" : "bg-gray-50 text-gray-400"
      }`}
    >
      <report.icon size={18} />
    </div>
    <div className="flex-1 min-w-0 z-10">
      <span
        className={`text-[8px] font-black uppercase tracking-[0.2em] mb-1 block ${isActive ? "text-teal-400" : "text-gray-400"}`}
      >
        {report.module}
      </span>
      <h3
        className={`text-[14px] font-semibold leading-snug transition-colors ${
          isActive ? "!text-white" : "!text-[#042f2e]"
        }`}
      >
        {report.name}
      </h3>
    </div>
  </motion.button>
);

const FilterInput = ({ label, icon: Icon, type = "select", options = [] }) => (
  <div className="space-y-2 flex-1 min-w-[180px]">
    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
      {label}
    </label>
    <div className="relative group">
      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
        <Icon
          size={14}
          className="text-gray-400 group-focus-within:text-teal-600 transition-colors"
        />
      </div>
      {type === "select" ? (
        <select className="w-full pl-11 pr-4 py-2.5 bg-gray-50/50 border border-gray-100 rounded-[20px] text-xs font-bold text-[#042f2e] focus:outline-none focus:ring-4 focus:ring-teal-500/5 focus:border-teal-200 transition-all appearance-none cursor-pointer">
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          placeholder={`Search...`}
          className="w-full pl-11 pr-4 py-2.5 bg-gray-50/50 border border-gray-100 rounded-[20px] text-xs font-bold text-[#042f2e] focus:outline-none focus:ring-4 focus:ring-teal-500/5 focus:border-teal-200 transition-all"
        />
      )}
      {type === "select" && (
        <ChevronDown
          size={12}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        />
      )}
    </div>
  </div>
);

const Reports = () => {
  const [selectedId, setSelectedId] = useState("salary-summary");
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasData, setHasData] = useState(false);

  const selectedReport = REPORT_CATALOG.find((r) => r.id === selectedId);
  const displayData = DUMMY_DATA[selectedId] || DUMMY_DATA["salary-summary"];

  const handleGenerate = () => {
    setIsGenerating(true);
    setHasData(false);
    setTimeout(() => {
      setIsGenerating(false);
      setHasData(true);
    }, 1200);
  };

  return (
    <AdminLayout title="Reports center">
      <div className="space-y-8 pb-10 w-full animate-in">
        {/* CATALOG SELECTOR */}
        <div className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-500 shadow-lg shadow-teal-500/50" />
              <h2
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-lg font-bold text-[#042f2e]"
              >
                Inventory & Analytics
              </h2>
            </div>
          </div>
          <div className="flex gap-5 overflow-x-auto pb-6 no-scrollbar -mx-3 px-3 lg:mx-0 lg:px-0">
            {REPORT_CATALOG.map((r) => (
              <ReportCard
                key={r.id}
                report={r}
                isActive={selectedId === r.id}
                onClick={() => {
                  setSelectedId(r.id);
                  setHasData(false);
                }}
              />
            ))}
          </div>
        </div>

        {/* CONFIG & ENGINE PANEL */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Primary Engine Control */}
          <section className="xl:col-span-3 bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm relative overflow-hidden group">
            <div className="flex flex-col md:flex-row gap-10 items-start justify-between relative z-10">
              <div className="flex-1 w-full space-y-8">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-[22px] bg-teal-50 text-teal-600 flex items-center justify-center shadow-inner border border-teal-100/50">
                    <selectedReport.icon size={28} />
                  </div>
                  <div>
                    <h3
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                      className="text-2xl font-bold text-[#042f2e] tracking-tight"
                    >
                      {selectedReport.name}
                    </h3>
                    <p className="text-xs font-bold text-gray-400 mt-1 uppercase tracking-widest">
                      {selectedReport.desc}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-50">
                  <FilterInput
                    label="Reporting Period"
                    icon={Calendar}
                    options={["March 2026", "February 2026", "January 2026"]}
                  />
                  <FilterInput
                    label="Department"
                    icon={Users}
                    options={["Engineering", "Design", "Product", "HR"]}
                  />
                  <FilterInput
                    label="Search Entity"
                    icon={Search}
                    type="text"
                  />
                </div>
              </div>

              <div className="w-full md:w-auto flex flex-col gap-4 min-w-[220px]">
                <button
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="w-full flex items-center justify-center gap-2 px-5 py-2.5 bg-[#042f2e] text-white rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-teal-900 transition-all shadow-md disabled:opacity-50"
                >
                  {isGenerating ? (
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      Wait...
                    </div>
                  ) : (
                    <>
                      Extract Report <ArrowRightCircle size={14} />
                    </>
                  )}
                </button>

                <div className="grid grid-cols-3 gap-2">
                  {["PDF", "XLS", "CSV"].map((ext) => (
                    <button
                      key={ext}
                      disabled={!hasData || isGenerating}
                      className="py-2.5 bg-gray-50 text-[#042f2e] rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-teal-50 hover:text-teal-600 transition-all disabled:opacity-30 border border-transparent shadow-sm"
                    >
                      {ext}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Quick Insights Summary */}
          <section className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm flex flex-col justify-center space-y-6">
            {displayData.insights.map((ins, i) => (
              <div key={i} className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center ${ins.color} shadow-sm`}
                >
                  <ins.icon size={16} />
                </div>
                <div>
                  <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">
                    {ins.label}
                  </p>
                  <p
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                    className="text-lg font-black text-[#042f2e]"
                  >
                    {ins.val}
                  </p>
                </div>
              </div>
            ))}
          </section>
        </div>

        {/* PREVIEW ENGINE */}
        <AnimatePresence mode="wait">
          {isGenerating ? (
            <motion.div
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-80 bg-gray-50/50 rounded-[48px] border-2 border-dashed border-gray-100 flex items-center justify-center"
            >
              <div className="text-center">
                <div className="w-10 h-10 border-4 border-teal-500/20 border-t-teal-500 rounded-full animate-spin mx-auto mb-4" />
                <p className="text-[10px] font-black text-[#042f2e] uppercase tracking-[0.2em]">
                  Structuring documentation...
                </p>
              </div>
            </motion.div>
          ) : hasData ? (
            <motion.div
              key="table"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden"
            >
              <div className="px-8 py-6 border-b border-gray-50 flex items-center justify-between bg-white">
                <div className="flex items-center gap-3">
                  <FileText size={18} className="text-teal-500" />
                  <h4
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                    className="text-lg font-black text-[#042f2e]"
                  >
                    Structure Preview
                  </h4>
                </div>
                <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-teal-600 hover:text-teal-700">
                  <Printer size={14} /> Full Print
                </button>
              </div>
              <div className="overflow-x-auto thin-scroll">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-50/50">
                      {displayData.cols.map((c) => (
                        <th
                          key={c}
                          className="px-8 py-4 text-[9px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-100"
                        >
                          {c}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {displayData.rows.map((row, i) => (
                      <tr
                        key={i}
                        className="hover:bg-gray-50/50 transition-colors"
                      >
                        {Object.values(row).map((val, j) => (
                          <td
                            key={j}
                            className="px-8 py-5 text-xs font-bold text-[#042f2e]"
                          >
                            {val}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          ) : (
            <div className="bg-white border-2 border-dashed border-gray-100 rounded-[48px] py-20 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-[28px] bg-gray-50 flex items-center justify-center text-gray-200 mb-6">
                <FileText size={32} />
              </div>
              <p className="text-sm font-black text-[#042f2e] uppercase tracking-widest">
                No Extraction Active
              </p>
              <p className="text-xs text-gray-400 mt-1 font-bold">
                Select documentation from the catalog to begin.
              </p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </AdminLayout>
  );
};

export default Reports;
