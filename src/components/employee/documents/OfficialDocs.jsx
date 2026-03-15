import React from "react";
import { FileText, ShieldAlert, BadgeCheck, Download } from "lucide-react";

const OfficialDocs = () => {
  const docs = [
    { title: "Offer Letter", type: "PDF", size: "1.2MB" },
    { title: "Employment Contract", type: "PDF", size: "2.4MB" },
    { title: "Organization Policy", type: "PDF", size: "0.8MB" },
  ];

  return (
    <div className="bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm">
      <h4 className="text-lg font-black text-[#042f2e] tracking-tight mb-8 flex items-center gap-3 uppercase">
        <ShieldAlert size={18} className="text-teal-600" />
        Organization Docs
      </h4>

      <div className="space-y-4">
        {docs.map((doc, i) => (
          <div
            key={i}
            className="group p-5 rounded-[24px] bg-slate-50 border border-slate-100 flex items-center justify-between hover:bg-white hover:border-teal-200 hover:shadow-xl hover:shadow-teal-900/5 transition-all cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-teal-600 transition-colors shadow-sm">
                <FileText size={20} />
              </div>
              <div>
                <p className="text-[13px] font-bold text-slate-800 tracking-tight leading-none mb-1 uppercase">
                  {doc.title}
                </p>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                  {doc.type} • {doc.size}
                </p>
              </div>
            </div>
            <Download
              size={16}
              className="text-slate-300 group-hover:text-teal-600 transition-colors"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfficialDocs;
