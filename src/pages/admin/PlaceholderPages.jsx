import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { Construction } from 'lucide-react';

const PagePlaceholder = ({ name }) => (
  <AdminLayout title={name}>
    <div className="bg-gray-50/50 rounded-[40px] border border-gray-100 p-20 flex flex-col items-center text-center gap-6 animate-in">
      <div className="w-20 h-20 rounded-3xl bg-teal-50 flex items-center justify-center text-teal-600 shadow-lg shadow-teal-500/5">
        <Construction size={40} />
      </div>
      <div>
        <h2 style={{ fontFamily: "'Outfit', sans-serif" }} className="text-2xl font-bold text-[#042f2e] mb-2">{name} Module is coming soon</h2>
        <p className="text-sm text-gray-500 font-medium max-w-md mx-auto">
          We are currently architecting the advanced {name.toLowerCase()} features to ensure a premium enterprise experience.
        </p>
      </div>
      <button className="btn-primary py-2.5! px-6! text-sm!">Receive updates</button>
    </div>
  </AdminLayout>
);

export const Attendance = () => <PagePlaceholder name="Attendance" />;
export const Payroll = () => <PagePlaceholder name="Payroll" />;
export const Reports = () => <PagePlaceholder name="Reports" />;
export const Notifications = () => <PagePlaceholder name="Notifications" />;
export const Settings = () => <PagePlaceholder name="Settings" />;
export const Profile = () => <PagePlaceholder name="Profile" />;
