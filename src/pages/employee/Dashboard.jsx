import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import EmployeeLayout from "../../layouts/EmployeeLayout";

// Components
import HeroAttendanceCard from "../../components/employee/dashboard/HeroAttendanceCard";
import QuickActionsStrip from "../../components/employee/dashboard/QuickActionsStrip";
import TaskPreviewWidget from "../../components/employee/dashboard/TaskPreviewWidget";
import ApprovalStatusCards from "../../components/employee/dashboard/ApprovalStatusCards";
import LeaveBalanceCard from "../../components/employee/dashboard/LeaveBalanceCard";
import PayrollSnapshotCard from "../../components/employee/dashboard/PayrollSnapshotCard";
import AttendanceTimeline from "../../components/employee/dashboard/AttendanceTimeline";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load and data fetch
    const timer = setTimeout(() => {
      setData({
        employee: {
          firstName: "Chirag",
          lastName: "Parekh",
          role: "Senior Product Designer",
          avatar: "/founders/chirag.png",
        },
        attendance: {
          status: "Clocked In",
          mode: "Office",
          lastPunch: "09:05 AM",
          timer: "06:12:45",
          weeklyStatus: [
            { day: "M", status: "present" },
            { day: "T", status: "late" },
            { day: "W", status: "present" },
            { day: "T", status: "present" },
            { day: "F", status: "today" },
          ],
        },
        tasks: {
          activeCount: 12,
          overdueCount: 2,
          preview: [
            { id: 1, title: "Finalize Payroll UI Revamp", priority: "High", due: "Today" },
            { id: 2, title: "Review Q1 Performance Metrics", priority: "Medium", due: "Tomorrow" },
            { id: 3, title: "Update Component Documentation", priority: "Low", due: "Mar 20" },
            { id: 4, title: "System Security Audit", priority: "High", due: "Mar 22" },
            { id: 5, title: "Cloud Infra Scaling Plan", priority: "Medium", due: "Mar 25" },
            { id: 6, title: "Cloud Infra Scaling Plan", priority: "Medium", due: "Mar 25" },
          ],
        },
        requests: [
          { id: 1, type: "Leave Request", status: "Pending", date: "Mar 12, 2026" },
          { id: 2, type: "Reimbursement", status: "Approved", date: "Mar 10, 2026" },
          { id: 3, type: "Loan Request", status: "Pending", date: "Mar 08, 2026" },
        ],
        leave: {
          remaining: 14,
          total: 24,
          upcoming: { range: "Mar 24 - Mar 28", reason: "Annual Vacation" },
          nextHoliday: "Holi (Mar 25)",
        },
        payroll: {
          lastAmount: "₹84,000",
          lastDate: "Feb 28, 2026",
          loanEMI: "₹12,000",
        },
      });
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

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

  if (isLoading || !data) {
    return (
      <EmployeeLayout title="Dashboard Overview">
        <div className="flex justify-center items-center min-h-[60vh]">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-teal-500/20 border-t-teal-500 rounded-full animate-spin" />
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
              Synchronizing...
            </p>
          </div>
        </div>
      </EmployeeLayout>
    );
  }

  return (
    <EmployeeLayout title="Dashboard Overview">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-4 pb-0"
      >
        <motion.div variants={itemVariants}>
          <HeroAttendanceCard data={data.attendance} employee={data.employee} />
        </motion.div>

        <motion.div variants={itemVariants}>
          <QuickActionsStrip />
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 items-start">
          <div className="xl:row-span-2 space-y-6">
            <motion.div variants={itemVariants}>
              <TaskPreviewWidget tasks={data.tasks} />
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
            <LeaveBalanceCard leave={data.leave} />
          </motion.div>

          <motion.div variants={itemVariants}>
            <ApprovalStatusCards request={data.requests[0]} />
          </motion.div>

          <motion.div variants={itemVariants}>
            <PayrollSnapshotCard payroll={data.payroll} />
          </motion.div>

          <div className="xl:col-span-3">
            <motion.div variants={itemVariants}>
              <AttendanceTimeline status={data.attendance.weeklyStatus} />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </EmployeeLayout>
  );
};

export default Dashboard;
