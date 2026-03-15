import React from "react";
import HeroSection from "../components/common/HeroSection";
import FeatureCard from "../components/common/FeatureCard";
import CTASection from "../components/common/CTASection";
import CentralHubDiagram from "../components/common/CentralHubDiagram";
import FluidFlowDiagram from "../components/common/FluidFlowDiagram";
import {
  ClipboardList,
  Clock,
  DollarSign,
  BarChart3,
  Users,
  Shield,
  ArrowRight,
  CheckCircle2,
  Star,
  Quote,
} from "lucide-react";
import { Link } from "react-router-dom";

/* ── Section label pill ── */
const Label = ({ children }) => (
  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-100 bg-teal-50/30 text-xs font-semibold uppercase tracking-widest text-teal-700 mb-6 shadow-sm">
    {children}
  </div>
);

/* ── Testimonial ── */
const Testimonial = ({ quote, name, role, company, color }) => (
  <div className="bg-white border border-slate-200/50 p-10 rounded-[32px] flex flex-col h-full hover:border-teal-500/20 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-900/5 group cursor-default">
    <div className="mb-8">
      <Quote
        size={28}
        className="text-teal-500/10 group-hover:text-teal-500/20 transition-colors"
        fill="currentColor"
      />
    </div>
    <p className="text-slate-600 leading-relaxed text-lg font-medium mb-12 flex-1 italic group-hover:text-slate-900 transition-colors">
      "{quote}"
    </p>
    <div className="flex items-center gap-4 mt-auto">
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-inner transition-transform duration-500 group-hover:scale-110"
        style={{ background: color }}
      >
        {name[0]}
      </div>
      <div>
        <div className="text-[16px] font-bold text-[#042f2e]">{name}</div>
        <div className="text-[10px] font-bold text-teal-600/50 uppercase tracking-[0.2em] mt-0.5">
          {role} · {company}
        </div>
      </div>
    </div>
  </div>
);

const Home = () => (
  <div className="bg-white">
    <HeroSection />

    {/* ── Logo marquee / social proof ── */}
    <section className="py-14 border-y border-gray-100 bg-gray-50/60">
      <div className="container mx-auto px-6 max-w-6xl">
        <p className="text-center text-[10px] uppercase tracking-[0.22em] font-bold text-teal-600/60 mb-8">
          Trusted by 4,000+ companies
        </p>
        <div className="relative overflow-hidden mask-[linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-fit gap-20 animate-marquee items-center">
            {[
              "Acme Corp",
              "Quantum",
              "Stellar",
              "Globex",
              "Horizon",
              "Nexus",
              "Orbit",
              "Nova",
              "Acme Corp",
              "Quantum",
              "Stellar",
              "Globex",
              "Horizon",
              "Nexus",
              "Orbit",
              "Nova",
            ].map((n, i) => (
              <span
                key={i}
                className="text-xl font-bold text-teal-900/20 tracking-tight whitespace-nowrap select-none"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ── Feature Bento ── */}
    <section className="py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-70 pointer-events-none" />
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Label>Capabilities</Label>
          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              letterSpacing: "-0.03em",
            }}
            className="text-3xl md:text-4xl font-semibold mb-5 leading-tight"
          >
            Everything your HR team has been waiting for.
          </h2>
          <p className="text-md md:text-lg text-slate-500 font-medium leading-relaxed">
            Rearchitected from the ground up — native application speed with
            web-platform reach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <FeatureCard
            icon={Clock}
            accent="teal"
            colSpan
            title="Predictive Time & Attendance"
            description="Geo-fenced mobile check-in with AI anomaly detection. Approve 200 timesheets in the time it used to take to open a spreadsheet."
          />
          <FeatureCard
            icon={ClipboardList}
            accent="teal"
            title="Kanban Task Boards"
            description="Drag-and-drop, blazing fast, always in real-time sync with your entire team."
          />
          <FeatureCard
            icon={DollarSign}
            accent="teal"
            title="Automated Payroll"
            description="Multi-currency pay runs reviewed and approved in a single, unified dashboard."
          />
          <FeatureCard
            icon={BarChart3}
            accent="teal"
            colSpan
            title="Real-time Analytics"
            description="Slice overhead data instantly. Board-ready PDF exports, custom SQL views, and live KPI tracking."
          />
        </div>
      </div>
    </section>

    {/* ── Central Hub Section ── */}
    <CentralHubDiagram />

    {/* ── Stats ── */}
    <section className="py-10 border-b border-gray-100">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "4,000+", label: "companies", note: "trust Task&Payroll" },
            { num: "₹2.4B", label: "payroll", note: "processed monthly" },
            { num: "99.9%", label: "uptime", note: "enterprise SLA" },
            { num: "4.9 ★", label: "rating", note: "on G2 & Capterra" },
          ].map((s, i) => (
            <div key={i} className="group">
              <div
                className="text-4xl md:text-5xl font-semibold text-[#042f2e] mb-1 leading-none group-hover:scale-105 transition-transform inline-block"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  letterSpacing: "-0.04em",
                }}
              >
                {s.num}
              </div>
              <div className="text-sm font-semibold text-teal-800/80 capitalize">
                {s.label}
              </div>
              <div className="text-xs text-teal-600/50 mt-0.5">{s.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Testimonials ── */}
    <section className="py-10 bg-[#f8fafc] border-y border-slate-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-8 max-w-2xl mx-auto">
          <Label>Testimonials</Label>
          <h2
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-4xl md:text-5xl font-semibold tracking-tighter text-[#042f2e] mb-8"
          >
            People genuinely love it.
          </h2>
          <p className="text-sm text-xl font-medium leading-relaxed">
            Join the forward-thinking HR teams that have already made the switch
            to a unified payroll intelligence platform.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <Testimonial
            color="#264653"
            quote="Task&Payroll cut our HR admin time by 80%. The automation is genuinely magical."
            name="Sarah Chen"
            role="VP Operations"
            company="NovaTech"
          />
          <Testimonial
            color="#2a9d8f"
            quote="Finally a platform that connects payroll and task management seamlessly. The dashboard alone is worth it."
            name="Marcus Rivera"
            role="CEO"
            company="Stellar"
          />
          <Testimonial
            color="#e85d4a"
            quote="Implementation took two days. ROI was clear within the first month — world-class support team."
            name="Anya Kapoor"
            role="Head of People"
            company="Quantum Co."
          />
        </div>
      </div>
    </section>

    {/* ── Final CTA ── */}
    <CTASection />
  </div>
);

export default Home;
