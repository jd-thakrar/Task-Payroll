import React from "react";
import EmployeeLayout from "../../layouts/EmployeeLayout";
import { Save } from "lucide-react";

// Components
import PersonalInfo from "../../components/employee/settings/PersonalInfo";
import StatutoryInfo from "../../components/employee/settings/StatutoryInfo";
import BankDetails from "../../components/employee/settings/BankDetails";
import NotificationSettings from "../../components/employee/settings/NotificationSettings";
import SecuritySettings from "../../components/employee/settings/SecuritySettings";

const Settings = () => {
  return (
    <EmployeeLayout title="Account & Portal Settings">
      <div className="space-y-8 pb-20">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">
           {/* Main Column: Identity & Legal Data */}
           <div className="xl:col-span-2 space-y-8">
              <PersonalInfo />
              <StatutoryInfo />
              <BankDetails />
           </div>

           {/* Sidebar Column: Security & Preferences */}
           <div className="xl:col-span-1 space-y-8">
              <SecuritySettings />
              <NotificationSettings />
              
              {/* Portal Disclaimer */}
              <div className="p-6 rounded-xl border border-dashed border-slate-200 bg-slate-50/50">
                <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest leading-none mb-3 text-center">Data Integrity Notice</p>
                <p className="text-[12px] font-bold text-slate-400 text-center leading-relaxed">
                  Your profile data is strictly synchronized with your core employment records. For statutory name changes, please consult the Legal & Compliance department.
                </p>
              </div>
           </div>
        </div>

        {/* Global Save Trigger — Moved to the end of content instead of fixed */}
        <div className="mt-12 flex justify-end pb-8">
           <button className="flex items-center gap-4 px-12 py-6 bg-[#042f2e] text-white rounded-2xl shadow-xl hover:scale-105 hover:bg-slate-900 active:scale-95 transition-all font-black text-[14px] uppercase tracking-[0.2em] group border border-teal-500/10">
              <Save size={22} className="group-hover:rotate-12 transition-all" />
              Sync Portal Settings
           </button>
        </div>
      </div>
    </EmployeeLayout>
  );
};

export default Settings;
