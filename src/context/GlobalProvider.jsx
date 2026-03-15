import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext.jsx";
import {
  INITIAL_EMPLOYEES,
  INITIAL_FINANCIALS,
  INITIAL_TASKS,
  INITIAL_ATTENDANCE,
  INITIAL_TEAMS,
  INITIAL_LEAVE_REQUESTS,
} from "./initialData";

export const GlobalProvider = ({ children }) => {
  const [employees, setEmployees] = useState(INITIAL_EMPLOYEES);
  const [financials, setFinancials] = useState(INITIAL_FINANCIALS);
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [attendance, setAttendance] = useState(INITIAL_ATTENDANCE);
  const [teams, setTeams] = useState(INITIAL_TEAMS);
  const [leaveRequests, setLeaveRequests] = useState(INITIAL_LEAVE_REQUESTS);
  const [payrollStatus, setPayrollStatus] = useState({
    isLocked: false,
    cycle: "March 2026",
  });
  const [sidebarCollapsed, setSidebarCollapsed] = useState(window.innerWidth < 1024);

  // Deriving full team object with members for convenience
  const teamsWithMembers = teams.map((t) => ({
    ...t,
    members: employees.filter((e) => e.dept === t.name),
  }));

  const lockPayroll = (val) =>
    setPayrollStatus((prev) => ({ ...prev, isLocked: val }));

  return (
    <GlobalContext.Provider
      value={{
        employees,
        setEmployees,
        financials,
        setFinancials,
        tasks,
        setTasks,
        attendance,
        setAttendance,
        teams,
        setTeams,
        teamsWithMembers,
        leaveRequests,
        setLeaveRequests,
        payrollStatus,
        lockPayroll,
        sidebarCollapsed,
        setSidebarCollapsed,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
