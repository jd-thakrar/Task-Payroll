import React, { useState, useRef } from "react";
import BlogCard from "../components/common/BlogCard";
import {
  BookOpen,
  Video,
  HelpCircle,
  ArrowUpRight,
  Search,
  Mail,
  ArrowRight,
} from "lucide-react";

const Label = ({ children }) => (
  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-100 bg-teal-50/30 text-[10px] font-bold uppercase tracking-widest text-teal-700 mb-6 shadow-sm">
    {children}
  </div>
);

const CategoryCard = ({ icon: Icon, title, sub, color, bg }) => {
  const cardRef = useRef(null);
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
      className="bg-white border border-slate-200 p-8 md:p-10 rounded-[40px] text-left hover:border-teal-500/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-500 group cursor-pointer relative overflow-hidden"
    >
      {/* Dynamic Spotlight Shade */}
      <div
        className="absolute pointer-events-none transition-opacity duration-300 z-0 bg-[radial-gradient(circle_at_center,rgba(42,157,143,0.1),transparent_70%)]"
        style={{
          width: "400px",
          height: "400px",
          top: mousePos.y - 200,
          left: mousePos.x - 200,
          opacity: isHovered ? 1 : 0,
        }}
      />

      <div
        className={`relative z-10 w-14 h-14 rounded-2xl ${bg} flex items-center justify-center ${color} mb-8 border border-slate-100 shadow-sm transition-transform duration-500 group-hover:scale-110`}
      >
        <Icon size={24} />
      </div>
      <h3 className="relative z-10 text-2xl font-bold text-[#042f2e] mb-2 tracking-tight">
        {title}
      </h3>
      <p className="relative z-10 text-slate-500 text-sm font-medium leading-relaxed mb-8">
        {sub}
      </p>
      <div
        className={`relative z-10 inline-flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest ${color}`}
      >
        Explore{" "}
        <ArrowUpRight
          size={14}
          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
        />
      </div>
    </div>
  );
};

const Resources = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="pt-40 pb-24 md:pt-40  md:pb-38 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.4] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(42,157,143,0.1),transparent_60%)]" />

        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <h1
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-4xl md:text-6xl lg:text-[72px] font-semibold text-[#042f2e] mb-8 tracking-tighter leading-[0.9] text-balance mx-auto"
          >
            Insights for the <br className="hidden md:block" />
            modern workforce.
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium mb-12">
            Read up on industry best practices, watch tutorials, or get answers
            to your most pressing HR compliance questions.
          </p>
        </div>
      </section>

      {/* Category Quick Links */}
      <section className="-mt-12 md:-mt-32 relative z-20 pb-12">
        <div className="mx-auto px-4 md:px-8 lg:px-12 max-w-[1440px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mx-auto">
            <CategoryCard
              icon={BookOpen}
              title="Documentation"
              sub="Technical API and config guides."
              color="text-teal-600"
              bg="bg-teal-50/50"
            />
            <CategoryCard
              icon={Video}
              title="Video Academy"
              sub="Master workflows in minutes."
              color="text-emerald-600"
              bg="bg-emerald-50/50"
            />
            <CategoryCard
              icon={HelpCircle}
              title="Help Center"
              sub="FAQ and rapid troubleshooting."
              color="text-rose-600"
              bg="bg-rose-50/50"
            />
          </div>
        </div>
      </section>

      {/* Latest Knowledge */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="text-4xl md:text-5xl font-semibold text-[#042f2e] tracking-tight leading-tight mb-8"
            >
              Latest Knowledge for builders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <BlogCard
              category="HR Strategy"
              date="Nov 12, 2024"
              title="Remote Work Productivity: The Ultimate Guide for Managers"
              excerpt="Learn how to effectively manage remote teams and keep them engaged."
              imagePlaceholder="Remote Work"
            />
            <BlogCard
              category="Compliance"
              date="Nov 08, 2024"
              title="2025 Payroll Tax Updates You Need to Know"
              excerpt="Breakdown of the major tax law changes happening over the next fiscal year."
              imagePlaceholder="Compliance"
            />
            <BlogCard
              category="Product"
              date="Oct 29, 2024"
              title="Introducing Advanced Biometric Geofencing"
              excerpt="Deep dive into the technology powering real-time punch verification."
              imagePlaceholder="Update"
            />
            <BlogCard
              category="Culture"
              date="Oct 15, 2024"
              title="Prevent Burnout in Fast-Paced Environments"
              excerpt="Recognize signs of burnout and learn actionable strategies to mitigate stress."
              imagePlaceholder="Burnout"
            />
            <BlogCard
              category="Strategy"
              date="Oct 01, 2024"
              title="Onboarding 101: Creating Memorable First Days"
              excerpt="Why the first day sets the tone for an employee's entire tenure."
              imagePlaceholder="Onboarding"
            />
            <BlogCard
              category="Enterprise"
              date="Sep 22, 2024"
              title="Case Study: Automating Payroll for 5,000 Drivers"
              excerpt="How Stellar Logistics dropped manual accounting time from 4 days to 2 hours."
              imagePlaceholder="Case Study"
            />
          </div>

          <div className="text-center">
            <div className="inline-block p-1 bg-slate-50 border border-slate-100 rounded-[24px]">
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  className={`px-8 py-3 rounded-xl font-bold text-sm transition-all ${
                    page === 1
                      ? "bg-white text-[#042f2e] shadow-sm"
                      : "text-slate-400 hover:text-slate-900"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
    </div>
  );
};

export default Resources;
