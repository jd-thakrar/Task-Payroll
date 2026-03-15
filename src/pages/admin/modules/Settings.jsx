import React, { useState } from 'react';
import AdminLayout from '../../../layouts/AdminLayout';
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  Hash, 
  Link2,
  Save,
  CheckCircle2,
  Globe
} from 'lucide-react';

const InputField = ({ label, icon: Icon, value, onChange, type = "text" }) => (
  <div className="space-y-2">
    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">{label}</label>
    <div className="relative group">
      {Icon && <Icon size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-teal-500 transition-colors" />}
      <input 
        type={type}
        value={value}
        onChange={onChange}
        className={`w-full ${Icon ? 'pl-12' : 'px-5'} pr-5 py-3.5 bg-gray-50/50 border border-gray-100 rounded-2xl outline-none focus:ring-4 focus:ring-teal-500/5 focus:border-teal-500 transition-all text-sm font-bold text-[#042f2e]`}
      />
    </div>
  </div>
);

const Settings = () => {
  const [formData, setFormData] = useState({
    companyName: 'WorkNest Global Solutions Private Limited',
    email: 'connect@worknest.co',
    phone: '+91 98765 43210',
    website: 'https://worknest.co',
    address: '12th Floor, Marwadi Hub, University Road, Rajkot',
    city: 'Rajkot',
    pinCode: '360005',
    gstNo: '24AAAAA0000A1Z5',
    tanNo: 'MUMB00000A',
    cinNo: 'U72900GJ2026PTC123456',
    udyamNo: 'UDYAM-GJ-00-1234567',
    aadhaar: '1234 5678 9012',
    cstNo: 'CST-00-123456'
  });

  const handleSave = () => {
    alert('Company details updated successfully!');
  };

  const handleChange = (name) => (e) => {
    setFormData(prev => ({ ...prev, [name]: e.target.value }));
  };

  return (
    <AdminLayout title="Company Registration">
      <div className="max-w-4xl mx-auto space-y-8 animate-in pb-20">
        
        <div className="bg-white rounded-[40px] border border-gray-100 p-8 lg:p-12 shadow-sm space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-gray-50 pb-8">
             <div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif" }} className="text-2xl font-bold text-[#042f2e] tracking-tight">Main Entity Profile</h3>
                <p className="text-sm text-gray-400 font-medium tracking-tight">Manage your legal registration and identification details.</p>
             </div>
             <button 
              onClick={handleSave}
              className="flex items-center justify-center gap-2 px-8 py-3 bg-[#042f2e] text-white rounded-[20px] text-[10px] font-black uppercase tracking-widest shadow-xl shadow-teal-900/10 hover:bg-teal-900 transition-all w-full sm:w-auto"
             >
                <Save size={16} />
                Update Profile
             </button>
          </div>

          <div className="space-y-10">
              <div className="grid grid-cols-1 gap-6">
                 <InputField label="Entity Full Legal Name" icon={Building2} value={formData.companyName} name="companyName" onChange={handleChange("companyName")} />
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField label="Company Email" icon={Mail} value={formData.email} name="email" type="email" onChange={handleChange("email")} />
                    <InputField label="Mobile Number" icon={Phone} value={formData.phone} name="phone" type="tel" onChange={handleChange("phone")} />
                 </div>
                 <InputField label="Website URL" icon={Link2} value={formData.website} name="website" type="url" onChange={handleChange("website")} />
              </div>

              <div className="pt-10 border-t border-gray-50 space-y-6">
                 <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Registered Office Address</label>
                    <div className="relative">
                        <MapPin size={18} className="absolute left-5 top-5 text-gray-300" />
                        <textarea 
                          rows={2}
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          className="w-full pl-12 pr-6 py-4 bg-gray-50/50 border border-gray-100 rounded-2xl outline-none focus:ring-4 focus:ring-teal-500/5 focus:border-teal-500 transition-all text-sm font-bold text-[#042f2e] resize-none"
                        />
                    </div>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField label="City" icon={Globe} value={formData.city} name="city" onChange={handleChange("city")} />
                    <InputField label="Pin Code" icon={Hash} value={formData.pinCode} name="pinCode" onChange={handleChange("pinCode")} />
                 </div>
              </div>

              <div className="pt-10 border-t border-gray-50">
                 <h4 className="text-[10px] font-black text-teal-600 uppercase tracking-widest mb-6 px-1">Legal Compliance & IDs</h4>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
                    <InputField label="GST Number" icon={Hash} value={formData.gstNo} name="gstNo" onChange={handleChange("gstNo")} />
                    <InputField label="TAN Number" icon={Hash} value={formData.tanNo} name="tanNo" onChange={handleChange("tanNo")} />
                    <InputField label="CIN Number" icon={Hash} value={formData.cinNo} name="cinNo" onChange={handleChange("cinNo")} />
                    <InputField label="Udyam Registration No." icon={Hash} value={formData.udyamNo} name="udyamNo" onChange={handleChange("udyamNo")} />
                    <InputField label="Aadhaar / Individual PAN" icon={Hash} value={formData.aadhaar} name="aadhaar" onChange={handleChange("aadhaar")} />
                    <InputField label="CST Number" icon={Hash} value={formData.cstNo} name="cstNo" onChange={handleChange("cstNo")} />
                 </div>
              </div>
          </div>

          <div className="bg-amber-50 border border-amber-100 p-6 rounded-[28px] flex items-start gap-4">
             <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/20">
                <CheckCircle2 size={24} className="text-white" />
             </div>
             <div>
                <h4 className="text-sm font-bold text-amber-900 mb-1">Administrative Audit</h4>
                <p className="text-xs text-amber-800/60 font-medium leading-relaxed">Changes to legal registration will be logged in the system audit trail for compliance verification.</p>
             </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Settings;
