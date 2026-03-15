import React from "react";
import EmployeeLayout from "../../layouts/EmployeeLayout";
import { motion } from "framer-motion";

// Components
import PunchPanel from "../../components/employee/attendance/PunchPanel";
import TodayTimeline from "../../components/employee/attendance/TodayTimeline";
import MonthlyAttendance from "../../components/employee/attendance/MonthlyAttendance";
import StatusChips from "../../components/employee/attendance/StatusChips";

const Attendance = () => {
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
    <EmployeeLayout title="Attendance & Time Tracking">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-4 pb-0"
      >
        {/* ZONE 1 — PRIMARY ACTION & STATS (Unified) */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 items-stretch">
          <motion.div variants={itemVariants} className="xl:col-span-1">
            <PunchPanel />
          </motion.div>

          <motion.div variants={itemVariants} className="xl:col-span-3">
            <div className="bg-white p-2 rounded-xl border border-slate-200/60 shadow-sm h-full flex items-center">
              <StatusChips />
            </div>
          </motion.div>
        </div>

        {/* ZONE 3 — MAIN TRACKING GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 items-start">
          {/* Column 1: Activity Stream */}
          <div className="xl:col-span-1">
            <motion.div variants={itemVariants}>
              <TodayTimeline />
            </motion.div>
          </div>

          {/* Column 2-4: Monthly Log */}
          <div className="xl:col-span-3">
            <motion.div variants={itemVariants}>
              <MonthlyAttendance />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </EmployeeLayout>
  );
};

export default Attendance;
