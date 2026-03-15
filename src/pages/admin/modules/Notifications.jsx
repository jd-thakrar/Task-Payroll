import React, { useState, useEffect } from "react";
import AdminLayout from "../../../layouts/AdminLayout";
import {
  Bell,
  CheckCircle2,
  Clock,
  Trash2,
  Inbox,
  ShieldAlert,
  RefreshCw,
  Zap,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NOTIFICATIONS_DATA = [
  {
    id: 1,
    type: "success",
    title: "Data Sync Complete",
    desc: "Centralized employee database synchronized with cloud backup successfully.",
    time: "2 mins ago",
    unread: true,
    icon: RefreshCw,
    color: "text-teal-600 bg-teal-50",
  },
  {
    id: 2,
    type: "alert",
    title: "Security Protocol",
    desc: "New administrative access detected from IP 192.168.1.45. Integrity verified.",
    time: "14 mins ago",
    unread: true,
    icon: ShieldAlert,
    color: "text-rose-500 bg-rose-50",
  },
  {
    id: 3,
    type: "success",
    title: "Payroll Validation",
    desc: "Monthly reconciliation for 1,210 personnel completed without discrepancies.",
    time: "1 hour ago",
    unread: false,
    icon: CheckCircle2,
    color: "text-emerald-500 bg-emerald-50",
  },
  {
    id: 4,
    type: "warning",
    title: "Statutory Update",
    desc: "New GST filing regulations detected for FY 2026. System updated.",
    time: "3 hours ago",
    unread: false,
    icon: Zap,
    color: "text-amber-500 bg-amber-50",
  },
  {
    id: 5,
    type: "message",
    title: "Internal Signal",
    desc: "System generated: Attendance logs archived for the previous quarter.",
    time: "5 hours ago",
    unread: false,
    icon: Clock,
    color: "text-gray-500 bg-gray-50",
  },
  {
    id: 6,
    type: "alert",
    title: "Module Integrity",
    desc: "Encryption keys rotated successfully across all administrative modules.",
    time: "Yesterday",
    unread: false,
    icon: ShieldAlert,
    color: "text-rose-500 bg-rose-50",
  },
];

const Notifications = () => {
  const [filter, setFilter] = useState("All");

  // Initialize state directly to avoid useEffect set-state warning
  const [visibleDots, setVisibleDots] = useState(() => {
    const initial = {};
    NOTIFICATIONS_DATA.forEach((n) => {
      if (n.unread) initial[n.id] = true;
    });
    return initial;
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleDots({});
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleAction = (msg) => alert(`${msg} executed!`);

  const filteredNotifications = NOTIFICATIONS_DATA.filter((n) => {
    if (filter === "Unread") return n.unread;
    if (filter === "Archived") return false;
    return true;
  });

  return (
    <AdminLayout title="Intelligence Feed">
      <div className="max-w-4xl mx-auto space-y-6 animate-in pb-12">
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center gap-1.5 p-1 bg-gray-50 border border-gray-100 rounded-xl w-fit">
            {["All", "Unread", "Archived"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${filter === f ? "bg-[#042f2e] text-white" : "text-gray-400 hover:text-[#042f2e]"}`}
              >
                {f}
              </button>
            ))}
          </div>
          <button
            onClick={() => handleAction("Mark All Read")}
            className="text-[9px] font-black text-gray-400 hover:text-teal-600 uppercase tracking-widest transition-colors"
          >
            Clear Unread
          </button>
        </div>

        <div className="bg-white rounded-[32px] border border-gray-100 divide-y divide-gray-50 overflow-hidden shadow-sm">
          {filteredNotifications.map((n) => (
            <div
              key={n.id}
              className="p-4 sm:p-5 flex items-start gap-4 hover:bg-gray-50/50 transition-all group cursor-pointer relative"
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-black/5 ${n.color}`}
              >
                <n.icon size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <div className="flex items-center gap-2">
                    <h4
                      className={`text-sm tracking-tight transition-colors ${n.unread && visibleDots[n.id] ? "font-black text-[#042f2e]" : "font-bold text-gray-600"}`}
                    >
                      {n.title}
                    </h4>
                    <AnimatePresence>
                      {n.unread && visibleDots[n.id] && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          className="w-2 h-2 bg-teal-500 rounded-full"
                        />
                      )}
                    </AnimatePresence>
                  </div>
                  <span className="text-[9px] font-bold text-gray-300 uppercase tracking-tighter">
                    {n.time}
                  </span>
                </div>
                <p className="text-xs text-gray-400 font-medium leading-relaxed line-clamp-1 group-hover:line-clamp-none transition-all">
                  {n.desc}
                </p>
              </div>
              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => handleAction("Archive Item")}
                  className="p-1.5 text-gray-300 hover:text-teal-600 rounded-lg transition-all"
                >
                  <Inbox size={16} />
                </button>
                <button
                  onClick={() => handleAction("Delete Item")}
                  className="p-1.5 text-gray-300 hover:text-rose-500 rounded-lg transition-all"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default Notifications;
