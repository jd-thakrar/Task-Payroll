import React, { useState, useEffect } from "react";
import {
  ClipboardCheck,
  Fingerprint,
  Banknote,
  ShieldCheck,
  Globe,
  Zap,
  TrendingUp,
  ChevronRight,
  Layout,
  Clock,
  ArrowRight,
  Search,
  Users,
  Calendar,
  Lock,
  Eye,
  Activity,
} from "lucide-react";
import { Link } from "react-router-dom";
import CTASection from "../components/common/CTASection";

const Label = ({ children }) => (
  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-100 bg-teal-50/30 text-[10px] font-bold uppercase tracking-widest text-teal-700 mb-6 shadow-sm">
    {children}
  </div>
);

const SubNav = () => {
  const [active, setActive] = useState("tasks");

  const links = [
    { id: "tasks", label: "Task ", short: "Tasks" },
    { id: "attendance", label: "Attendance", short: "Attendance" },
    { id: "payroll", label: "Payroll", short: "Payroll" },
    { id: "security", label: "Security", short: "Security" },
  ];

  return (
    <div className="sticky top-20 md:top-24 z-40 flex justify-center px-4 md:px-6 mb-12 md:mb-20 pointer-events-none">
      <div className="bg-white/80 backdrop-blur-xl border border-slate-200/50 p-1 md:p-1.5 rounded-full shadow-xl shadow-slate-200/30 flex items-center gap-1 pointer-events-auto scale-90 md:scale-100">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => {
              setActive(link.id);
              document
                .getElementById(link.id)
                ?.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
            className={`px-3 md:px-6 py-1.5 md:py-2 rounded-full text-[9px] md:text-[11px] font-bold transition-all duration-300 uppercase tracking-widest ${
              active === link.id
                ? "bg-[#042f2e] text-white shadow-lg"
                : "text-slate-500 hover:text-[#042f2e] hover:bg-slate-50"
            }`}
          >
            <span className="hidden md:inline">{link.label}</span>
            <span className="md:hidden">{link.short}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

const SectionHeader = ({ label, title, desc }) => (
  <div className="max-w-3xl mb-10 md:mb-16">
    <Label>{label}</Label>
    <h2
      style={{ fontFamily: "'Outfit', sans-serif" }}
      className="text-4xl md:text-5xl font-semibold text-[#042f2e] mb-6 tracking-tight leading-tight"
    >
      {title}
    </h2>
    <p className="text-lg text-slate-500 font-medium leading-relaxed">{desc}</p>
  </div>
);

const FeatureSmallCard = ({ icon: Icon, title, desc }) => {
  const cardRef = React.useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white border border-slate-200 p-5 md:p-6 rounded-[24px] hover:border-teal-500/20 hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-900/5 transition-all duration-500 group cursor-default relative overflow-hidden"
    >
      {/* Dynamic Spotlight Shade */}
      <div
        className="absolute pointer-events-none transition-opacity duration-300 z-0 bg-[radial-gradient(circle_at_center,rgba(42,157,143,0.15),transparent_70%)]"
        style={{
          width: "300px",
          height: "300px",
          top: mousePos.y - 150,
          left: mousePos.x - 150,
          opacity: isHovered ? 1 : 0,
        }}
      />

      <div className="relative z-10 w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 mb-4 transition-transform duration-500 group-hover:scale-110">
        <Icon size={20} />
      </div>
      <h4 className="relative z-10 text-sm font-bold text-[#042f2e] mb-2">
        {title}
      </h4>
      <p className="relative z-10 text-xs text-slate-500 leading-relaxed">
        {desc}
      </p>
    </div>
  );
};

const MasterCard = ({ icon: Icon, title, label, color = "teal" }) => {
  const cardRef = React.useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-full rounded-[2.5rem] bg-white border border-slate-200 p-6 md:p-10 overflow-hidden flex flex-col hover:border-teal-500/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-500 cursor-default relative group"
    >
      {/* Dynamic Spotlight Shade */}
      <div
        className="absolute pointer-events-none transition-opacity duration-300 z-0 bg-[radial-gradient(circle_at_center,rgba(42,157,143,0.15),transparent_70%)]"
        style={{
          width: "500px",
          height: "500px",
          top: mousePos.y - 250,
          left: mousePos.x - 250,
          opacity: isHovered ? 1 : 0,
        }}
      />

      <div
        className={`relative z-10 w-14 h-14 rounded-2xl bg-${color === " bg-teal-200" ? "[#042f2e]" : "teal-500"} text-white flex items-center justify-center shadow-lg mb-8 transition-transform duration-500 group-hover:scale-105`}
      >
        <Icon size={28} />
      </div>
      <div className="relative z-10 space-y-6">
        <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-mono">
          {label}
        </div>
        <h3 className="text-3xl font-bold text-[#042f2e] tracking-tight leading-tight text-balance">
          {title}
        </h3>
      </div>
    </div>
  );
};

const Product = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="pt-45 pb-10 md:pt-40 md:pb-0 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.4] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(42,157,143,0.1),transparent_60%)]" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10 text-center">
          <h1
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-4xl md:text-6xl lg:text-[72px] font-semibold text-[#042f2e] mb-8 tracking-tighter leading-[0.9] max-w-4xl mx-auto"
          >
            A platform for <br />
            unified operations
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            WorkNest connects every pillar of your business into a single,
            cohesive ecosystem. No more fragmented tools or data silos.
          </p>
        </div>
      </section>

      <SubNav />

      {/* Main Content Sections */}
      <div className="container mx-auto px-6 max-w-7xl space-y-16 md:space-y-24 pb-24 md:pb-48">
        {/* Section: Task Management */}
        <section id="tasks" className="scroll-mt-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-5">
              <MasterCard
                icon={Layout}
                label="Task Infrastructure"
                title="Manage projects at the speed of thought."
              />
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FeatureSmallCard
                icon={Search}
                title="Global Search"
                desc="Instantly find any task, comment, or attachment across all projects."
              />
              <FeatureSmallCard
                icon={Users}
                title="Smart Assignment"
                desc="AI-driven workload balancing to prevent team burnout."
              />
              <FeatureSmallCard
                icon={Calendar}
                title="Priority Matrix"
                desc="Dynamic sorting based on deadlines and business impact."
              />
              <FeatureSmallCard
                icon={Activity}
                title="Live Sync"
                desc="Sub-second updates across all mobile and web nodes."
              />
            </div>
          </div>
        </section>

        {/* Section: Attendance */}
        <section id="attendance" className="scroll-mt-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-5 lg:order-2">
              <MasterCard
                icon={Clock}
                label="Verification Layer"
                title="Zero-fraud identity and location tracking."
              />
            </div>
            <div className="lg:col-span-7 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FeatureSmallCard
                icon={Fingerprint}
                title="Biometric Auth"
                desc="Secure facial and fingerprint verification on mobile devices."
              />
              <FeatureSmallCard
                icon={Globe}
                title="Geo-Fencing"
                desc="Restrict clock-ins to specific office locations or remote job sites."
              />
              <FeatureSmallCard
                icon={Lock}
                title="IP Lockdown"
                desc="Ensure employees are connected to authorized networks only."
              />
              <FeatureSmallCard
                icon={Eye}
                title="Anomaly Detection"
                desc="Automatically flag unusual clock-in patterns and proxy attempts."
              />
            </div>
          </div>
        </section>

        {/* Section: Payroll */}
        <section id="payroll" className="scroll-mt-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-5">
              <MasterCard
                icon={Banknote}
                label="Payment Engine"
                title="Process massive volumes with surgical accuracy."
              />
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FeatureSmallCard
                icon={Zap}
                title="Instant Calculations"
                desc="Gross-to-net math updated in real-time as tasks are completed."
              />
              <FeatureSmallCard
                icon={ShieldCheck}
                title="Compliance Vault"
                desc="Automatic updates for tax laws and labor regulations."
              />
              <FeatureSmallCard
                icon={TrendingUp}
                title="Cost Analytics"
                desc="Deep insights into labor spend and department-wise allocations."
              />
              <FeatureSmallCard
                icon={ArrowRight}
                title="Direct Deposit"
                desc="Automated fund distribution across thousands of partner banks."
              />
            </div>
          </div>
        </section>

        {/* Section: Security */}
        <section id="security" className="scroll-mt-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-5 lg:order-2">
              <MasterCard
                icon={ShieldCheck}
                color="teal"
                label="Compliance Standard"
                title="Built for the most demanding global teams."
              />
            </div>
            <div className="lg:col-span-7 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FeatureSmallCard
                icon={Lock}
                title="AES-256 Encryption"
                desc="Data is encrypted at rest and in transit using military standards."
              />
              <FeatureSmallCard
                icon={ShieldCheck}
                title="Multi-Factor Auth"
                desc="Enforce hardware and software MFA for all administrative actions."
              />
              <FeatureSmallCard
                icon={Activity}
                title="Audit Logging"
                desc="Comprehensive trails for every data access and modification."
              />
              <FeatureSmallCard
                icon={Globe}
                title="Global Residency"
                desc="Choose your data hosting region to comply with local GDPR."
              />
            </div>
          </div>
        </section>
      </div>

      {/* CTA Layer */}
    </div>
  );
};

export default Product;
