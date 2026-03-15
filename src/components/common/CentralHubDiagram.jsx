import React from "react";
import { Check, Globe2, Building2 } from "lucide-react";

export default function CentralHubDiagram() {
  return (
    <div className="py-10 bg-[#f8fafc] relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-size-[20px_20px] opacity-[0.3]" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gray-200 bg-white text-xs font-bold uppercase tracking-widest text-gray-500 mb-6 shadow-sm">
            Payroll Intelligence
          </div>
          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              letterSpacing: "-0.02em",
            }}
            className="text-3xl md:text-4xl font-semibold text-[#042f2e] mb-5"
          >
            One central payroll hub with WorkNest
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Connect HR spreadsheets, ERP systems, and email chains into one
            intelligent core. We ingest and route your data globally.
          </p>
        </div>

        {/* Unified Responsive Diagram */}
        <div className="relative w-full flex justify-center h-[220px] sm:h-[340px] md:h-[440px] lg:h-[540px] mt-10 overflow-hidden lg:overflow-visible">
          <div className="absolute top-0 w-[1000px] h-[540px] origin-top scale-[0.34] sm:scale-[0.55] md:scale-[0.75] lg:scale-100">
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              viewBox="0 0 1000 540"
              preserveAspectRatio="none"
            >
              {/* Left to Center Connections */}
              <path
                d="M 260 140 C 370 140, 370 270, 440 270"
                stroke="#dbeafe"
                strokeWidth="24"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M 260 400 C 370 400, 370 270, 440 270"
                stroke="#dbeafe"
                strokeWidth="24"
                fill="none"
                strokeLinecap="round"
              />

              {/* Center to Right Connections */}
              <path
                d="M 560 270 C 630 270, 630 140, 740 140"
                stroke="#dbeafe"
                strokeWidth="24"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M 560 270 C 630 270, 630 400, 740 400"
                stroke="#dbeafe"
                strokeWidth="24"
                fill="none"
                strokeLinecap="round"
              />

              {/* Animated Data Arrows */}
              <path d="M-8,-6 L8,0 L-8,6 Z" fill="#3b82f6" opacity="0.7">
                <animateMotion
                  dur="2.5s"
                  repeatCount="indefinite"
                  rotate="auto"
                  path="M 260 140 C 370 140, 370 270, 440 270"
                />
              </path>
              <path d="M-8,-6 L8,0 L-8,6 Z" fill="#3b82f6" opacity="0.7">
                <animateMotion
                  dur="3.2s"
                  repeatCount="indefinite"
                  rotate="auto"
                  path="M 260 400 C 370 400, 370 270, 440 270"
                />
              </path>
              <path d="M-8,-6 L8,0 L-8,6 Z" fill="#0d9488" opacity="0.7">
                <animateMotion
                  dur="2.8s"
                  repeatCount="indefinite"
                  rotate="auto"
                  path="M 560 270 C 630 270, 630 140, 740 140"
                />
              </path>
              <path d="M-8,-6 L8,0 L-8,6 Z" fill="#0d9488" opacity="0.7">
                <animateMotion
                  dur="2.3s"
                  repeatCount="indefinite"
                  rotate="auto"
                  path="M 560 270 C 630 270, 630 400, 740 400"
                />
              </path>
            </svg>

            {/* Floating Pill Labels connecting lines */}
            <div className="absolute left-[340px] top-[140px] -translate-x-1/2 -translate-y-1/2 bg-[#042f2e] text-white text-[10px] uppercase tracking-wider px-4 py-2 rounded-full font-bold shadow-md z-20 whitespace-nowrap">
              Payroll changes
            </div>
            <div className="absolute left-[340px] top-[400px] -translate-x-1/2 -translate-y-1/2 bg-[#042f2e] text-white text-[10px] uppercase tracking-wider px-4 py-2 rounded-full font-bold shadow-md z-20 whitespace-nowrap">
              Payouts & payslips
            </div>
            <div className="absolute right-[340px] top-[140px] translate-x-1/2 -translate-y-1/2 bg-[#042f2e] text-white text-[10px] uppercase tracking-wider px-4 py-2 rounded-full font-bold shadow-md z-20 whitespace-nowrap">
              Payroll cycle data
            </div>
            <div className="absolute right-[340px] top-[400px] translate-x-1/2 -translate-y-1/2 bg-[#042f2e] text-white text-[10px] uppercase tracking-wider px-4 py-2 rounded-full font-bold shadow-md z-20 text-center leading-tight whitespace-nowrap">
              Gross to net,
              <br />
              payslips, tax docs
            </div>

            {/* Left Block: Your Company */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[270px] bg-white rounded-[24px] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-100 z-10">
              <div className="flex flex-col items-center mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <Building2 size={24} />
                </div>
                <h3 className="font-bold text-lg text-[#042f2e]">
                  Your company
                </h3>
              </div>
              <div className="space-y-3">
                {["HRIS / HCM", "ERP", "Finance", "Other"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 px-3.5 py-3 rounded-xl bg-gray-50 border border-gray-100 hover:bg-blue-50 hover:border-blue-100 transition-colors cursor-pointer group"
                  >
                    <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Check size={12} className="text-white" strokeWidth={3} />
                    </div>
                    <span className="text-sm font-semibold text-gray-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Center Block: WorkNest */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] bg-[#042f2e] rounded-[36px] shadow-[0_20px_40px_rgba(4,47,46,0.25)] flex items-center justify-center z-30"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #042f2e 0%, #0f766e 100%)",
              }}
            >
              <img
                src="/logo.png"
                alt="WorkNest"
                className="w-[110px] brightness-0 invert drop-shadow-md"
              />
            </div>

            {/* Right Block: EOR & Payroll Tools */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[270px] bg-white rounded-[24px] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-100 z-10">
              <div className="flex flex-col items-center mb-6">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-4">
                  <Globe2 size={24} />
                </div>
                <h3 className="font-bold text-lg text-[#042f2e]">
                  EOR & Payroll tools
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: "de", label: "Germany" },
                  { id: "ca", label: "Canada" },
                  { id: "in", label: "India" },
                  { id: "gb", label: "UK" },
                  { id: "us", label: "USA" },
                  { id: "za", label: "South Africa" },
                  { id: "br", label: "Brazil" },
                  { icon: "+", label: "130+ More", isMore: true },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-center h-12 rounded-[14px] border ${item.isMore ? "bg-teal-50 border-teal-100 text-teal-700 font-bold text-2xl" : "bg-gray-50 border-gray-100"}`}
                    title={item.label}
                  >
                    {item.isMore ? (
                      <span
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                        className="mb-1"
                      >
                        {item.icon}
                      </span>
                    ) : (
                      <img
                        src={`https://flagcdn.com/w40/${item.id}.png`}
                        alt={item.label}
                        className="w-6 h-auto rounded-sm shadow-[0_0_2px_rgba(0,0,0,0.1)]"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
