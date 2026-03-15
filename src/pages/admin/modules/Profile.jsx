import React from 'react';
import AdminLayout from '../../../layouts/AdminLayout';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Github, 
  Twitter, 
  Linkedin, 
  Camera,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';

const Profile = () => {
  const handleAction = (msg) => alert(`${msg} engaged!`);

  return (
    <AdminLayout title="My Profile">
      <div className="max-w-6xl mx-auto space-y-8 animate-in">
        
        {/* Profile Card Header */}
        <div className="bg-white rounded-[40px] border border-gray-100 p-10 shadow-sm relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/5 blur-[80px] rounded-full -mr-32 -mt-32"></div>
           
           <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
              <div className="relative">
                 <div className="w-32 h-32 rounded-[40px] bg-[#042f2e] border-4 border-gray-50 overflow-hidden shadow-xl shadow-teal-900/10">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=JD" alt="User" />
                 </div>
                 <button onClick={() => handleAction('Change Photo')} className="absolute -bottom-2 -right-2 p-3 bg-teal-500 text-white rounded-2xl shadow-lg hover:scale-110 transition-transform">
                    <Camera size={18} />
                 </button>
              </div>

              <div className="flex-1 text-center md:text-left space-y-4">
                 <div>
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-1">
                       <h2 style={{ fontFamily: "'Outfit', sans-serif" }} className="text-3xl font-bold text-[#042f2e]">JD Thakrar</h2>
                       <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold rounded-full border border-emerald-100 uppercase tracking-widest">Verified Admin</span>
                    </div>
                    <p className="text-gray-500 font-medium">Senior Product Manager • HQ London</p>
                 </div>

                 <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-gray-400 bg-gray-50 px-4 py-2 rounded-xl">
                       <Mail size={14} className="text-teal-600" />
                       jd.thakrar@worknest.com
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-gray-400 bg-gray-50 px-4 py-2 rounded-xl">
                       <MapPin size={14} className="text-teal-600" />
                       London, UK
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-gray-400 bg-gray-50 px-4 py-2 rounded-xl">
                       <Clock size={14} className="text-teal-600" />
                       10:13 PM UTC
                    </div>
                 </div>
              </div>

              <div className="flex flex-wrap justify-center md:justify-end gap-3 min-w-[200px]">
                 <button onClick={() => handleAction('Edit Profile')} className="px-8 py-3 bg-[#042f2e] text-white rounded-2xl text-sm font-bold shadow-xl shadow-teal-900/10 hover:bg-teal-900 transition-all">Edit Details</button>
                 <button onClick={() => handleAction('View Hierarchy')} className="p-3 bg-white border border-gray-100 rounded-2xl text-gray-400 hover:text-teal-600 transition-all shadow-sm">
                    <ArrowUpRight size={20} />
                 </button>
              </div>
           </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
           
           <div className="bg-white rounded-[40px] border border-gray-100 p-10 shadow-sm space-y-10">
              <div>
                 <h3 style={{ fontFamily: "'Outfit', sans-serif" }} className="text-xl font-bold text-[#042f2e] mb-2 tracking-tight">Biography</h3>
                 <p className="text-gray-500 font-medium leading-relaxed">
                    Lead Product Architect at WorkNest with over 8 years of experience in designing high-performance payroll and task management systems. Passionate about human-centric SaaS products and architectural design patterns.
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-gray-50">
                 <div className="space-y-4">
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Contact Information</h4>
                    <div className="space-y-3">
                       <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Phone</span>
                          <span className="font-bold text-[#042f2e]">+44 7700 900000</span>
                       </div>
                       <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Website</span>
                          <span className="font-bold text-teal-600 hover:underline cursor-pointer">thakrar.design</span>
                       </div>
                       <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Timezone</span>
                          <span className="font-bold text-[#042f2e]">Greenwich Mean Time</span>
                       </div>
                    </div>
                 </div>
                 <div className="space-y-4">
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Professional Socials</h4>
                    <div className="flex gap-4">
                       <button onClick={() => handleAction('Link GitHub')} className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#042f2e] transition-all">
                          <Github size={20} />
                       </button>
                       <button onClick={() => handleAction('Link LinkedIn')} className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-blue-600 transition-all">
                          <Linkedin size={20} />
                       </button>
                       <button onClick={() => handleAction('Link Twitter')} className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-sky-500 transition-all">
                          <Twitter size={20} />
                       </button>
                    </div>
                 </div>
              </div>
           </div>

           <div className="space-y-8">
              <div className="bg-[#042f2e] p-8 rounded-[40px] text-white shadow-xl shadow-teal-900/10">
                 <div className="flex items-center gap-3 mb-6">
                    <ShieldCheck size={20} className="text-teal-400" />
                    <h4 className="text-sm font-bold uppercase tracking-widest">Access Control</h4>
                 </div>
                 <div className="space-y-4">
                    {[
                      { l: 'Full Admin', s: true },
                      { l: 'Payroll Process', s: true },
                      { l: 'Task Override', s: true },
                      { l: 'Bulk Deletion', s: false },
                    ].map((p, i) => (
                      <div key={i} className="flex items-center justify-between text-xs">
                        <span className="font-medium text-teal-100/60">{p.l}</span>
                        {p.s ? <CheckCircle2 size={14} className="text-teal-400" /> : <div className="w-3.5 h-3.5 rounded-full border border-white/10"></div>}
                      </div>
                    ))}
                 </div>
                 <button onClick={() => handleAction('Request Permissions')} className="w-full mt-8 py-3 bg-white/5 border border-white/5 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all">Request Elevate</button>
              </div>

              <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm">
                 <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6 leading-none">Account Integrity</h4>
                 <div className="space-y-4">
                    <div className="flex items-center justify-between">
                       <span className="text-xs font-bold text-[#042f2e]">2FA Status</span>
                       <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[8px] font-bold uppercase rounded shadow-xs">Enhanced</span>
                    </div>
                    <div className="flex items-center justify-between">
                       <span className="text-xs font-bold text-[#042f2e]">Last Login</span>
                       <span className="text-[10px] font-medium text-gray-400">Today, 2:14 PM</span>
                    </div>
                 </div>
              </div>
           </div>

        </div>

      </div>
    </AdminLayout>
  );
};

export default Profile;
