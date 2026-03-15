import React from "react";
import Sidebar from "../components/employee/Sidebar";
import Topbar from "../components/employee/Topbar";
import { useGlobal } from "../context/GlobalContext.jsx";

const EmployeeLayout = ({ children, title }) => {
  const { sidebarCollapsed: collapsed, setSidebarCollapsed: setCollapsed } = useGlobal();

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Fixed Navbar — always on top (z-70) */}
      <Topbar collapsed={collapsed} setCollapsed={setCollapsed} />

      <div className="flex pt-16">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

        <main className="flex-1 flex flex-col transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] min-w-0">
          <div className="flex-1 p-3 sm:p-4 lg:p-8 overflow-y-auto min-h-[calc(100vh-64px)]">
            <div className="max-w-[1600px] mx-auto w-full h-full">
              {/* Page Header — smaller on mobile */}
              {title && (
                <div className="mb-6 sm:mb-8 lg:mb-10 px-1">
                  <h1
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                    className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#042f2e] tracking-tight"
                  >
                    {title}
                  </h1>
                  <div className="h-1 w-12 bg-teal-500 rounded-full mt-2" />
                </div>
              )}
              {children}
            </div>
          </div>
        </main>
      </div>

      {/* 
        Mobile Overlay:
        - z-65: above sidebar (z-60 personally, z-68 for sidebar usually), below topbar (z-70)
      */}
      {!collapsed && (
        <div
          className="fixed inset-0 bg-[#042f2e]/30 backdrop-blur-sm z-65 lg:hidden"
          onClick={() => setCollapsed(true)}
        />
      )}
    </div>
  );
};

export default EmployeeLayout;
