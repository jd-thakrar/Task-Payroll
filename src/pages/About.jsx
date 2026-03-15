import React, { useState } from "react";
import {
  Target,
  Users,
  Zap,
  Shield,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

const Label = ({ children }) => (
  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-100 bg-teal-50/30 text-[10px] font-bold uppercase tracking-widest text-teal-700 mb-6 shadow-sm">
    {children}
  </div>
);

const FounderCard = ({ name, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col items-center group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Speech Bubble / Talkie */}
      <div
        className={`absolute -top-20 left-1/2 -translate-x-1/2 transition-all duration-500 transform z-30 ${
          isHovered
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        }`}
      >
        <div className="bg-white/90 backdrop-blur-xl border border-teal-500/40 px-6 py-4 rounded-[24px] shadow-2xl shadow-teal-900/10 relative  flex items-center gap-3 min-w-[180px] justify-center">
          <div className="w-8 h-8 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-600">
            <MessageCircle
              size={18}
              fill="currentColor"
              className="opacity-20"
            />
          </div>
          <span
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-sm font-bold text-[#042f2e] tracking-tight"
          >
            Hi! I'm {name}
          </span>
          {/* Bubble Tail */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/90 border-r border-b border-teal-500/10 rotate-45" />
        </div>
      </div>

      {/* Image Frame - Portrait Rectangle */}
      <div className="w-64 h-80 md:w-72 md:h-96 rounded-[32px] overflow-hidden border border-slate-200 bg-slate-50 transition-all duration-700 group-hover:border-teal-500/40 group-hover:shadow-2xl group-hover:shadow-teal-900/10 group-hover:-translate-y-3 relative">
        <img
          src={`/founders/${image}.png`}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#042f2e]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* Subtle Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          <div className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-[10px] text-white font-bold uppercase tracking-widest">
            Founder
          </div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="pt-40 pb-20 md:pt-40 md:pb-10 text-center relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.4] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(42,157,143,0.1),transparent_60%)]" />

        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <h1
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-4xl md:text-6xl lg:text-[72px] font-semibold text-[#042f2e] mb-8 tracking-tighter leading-[0.95]"
          >
            Building software <br className="hidden md:block" />
            that puts people first
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-3xl mx-auto">
            WorkNest brings workforce management into one seamless platform — so
            teams can spend less time managing tools and more time building
            growth and culture.
          </p>
        </div>
      </section>

      {/* Mission Section - New Centered Style   */}
      <section className=" pb-4  md:pb-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-50/30 pointer-events-none" />
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          {/* Mission Features Grid - Small Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-3xl bg-white shadow-lg shadow-teal-900/5 flex items-center justify-center text-teal-600 mb-6 border border-slate-50">
                <Users size={28} />
              </div>
              <h4 className="font-bold text-xl mb-2 tracking-tight">
                Human Centric
              </h4>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">
                Design driven by empathy for managers.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-3xl bg-white shadow-lg shadow-teal-900/5 flex items-center justify-center text-emerald-600 mb-6 border border-slate-50">
                <Zap size={28} />
              </div>
              <h4 className="font-bold text-xl mb-2 tracking-tight">
                Zero Lag
              </h4>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">
                Performance that never keeps you waiting.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-3xl bg-white shadow-lg shadow-teal-900/5 flex items-center justify-center text-rose-600 mb-6 border border-slate-50">
                <Shield size={28} />
              </div>
              <h4 className="font-bold text-xl mb-2 tracking-tight">
                Safe & Secure
              </h4>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">
                Bank-grade data protection built-in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership / Founders */}
      <section className="py-10 md:py-32 relative overflow-hidden bg-white">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-4xl md:text-5xl font-semibold text-[#042f2e] mb-6 tracking-tight"
          >
            Meet the innovators.
          </h2>
          <p className="text-slate-500 text-lg mb-24 max-w-2xl mx-auto font-medium">
            A small team of deep engineering experts dedicated to rewriting the
            future of workforce productivity.
          </p>

          {/* Founder Sequence Grid: Chirag, Jeet, Adi */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 justify-items-center">
            <FounderCard name="Chirag" image="chirag" />
            <FounderCard name="Jeet" image="jeet" />
            <FounderCard name="Adi" image="adi" />
          </div>
        </div>
      </section>

      {/* Final CTA Strip */}
    </div>
  );
};

export default About;
