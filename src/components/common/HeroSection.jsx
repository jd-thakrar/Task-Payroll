import React from "react";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-white">
    {/* Abstract Background Accents */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden opacity-30">
      <div className="absolute top-[10%] left-[10%] w-64 h-64 bg-teal-200/20 blur-[100px] rounded-full" />
      <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-blue-200/20 blur-[120px] rounded-full" />
    </div>

    <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
      {/* Update Badge */}

      <h1
        style={{ fontFamily: "'Outfit', sans-serif" }}
        className="text-4xl md:text-6xl lg:text-[72px] font-bold text-[#042f2f] mb-6 mt-12 tracking-tighter leading-[1.05]"
      >
        The smarter way
        <br />
        to run your team.
      </h1>

      <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-5 font-medium leading-relaxed">
        Tasks, attendance, and payroll — unified in one platform that actually
        gets out of your way.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
        <button className="flex items-center gap-2 px-8 py-3 bg-[#0c3b3b] text-white text-sm font-semibold rounded-full shadow-lg shadow-[#042f2e]/20 hover:bg-teal-900 transition-all active:scale-95">
          Get started free <ArrowRight size={16} />
        </button>
        <button className="flex items-center gap-2.5 px-6 py-3 rounded-full border border-gray-300 hover:bg-gray-50 transition-all text-sm font-semibold text-[#042f2e]">
          <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
            <Play size={10} fill="currentColor" />
          </div>
          Watch the demo
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-5 text-[11px] text-gray-400 font-semibold uppercase tracking-widest">
        {[
          "No credit card required",
          "Free 14-day trial",
          "SOC-2 certified",
        ].map((t) => (
          <div key={t} className="flex items-center gap-1.5">
            <CheckCircle2 size={13} className="text-teal-500" />
            {t}
          </div>
        ))}
      </div>

      {/* Dashboard Mockup Preview */}
      <div className="mt-24 relative w-full mx-auto px-4 lg:px-8 group max-w-[1600px] float-slow cursor-pointer">
        {/* Animated Glow */}
        <div className="absolute -inset-4 bg-teal-500/20 blur-3xl rounded-[60px] opacity-60 pointer-events-none group-hover:opacity-80 transition-opacity duration-1000 animate-pulse" />
        <div className="relative rounded-[32px] md:rounded-[48px] border border-gray-200/60 bg-white/50 backdrop-blur-sm shadow-2xl shadow-teal-900/20 overflow-hidden ring-1 ring-black/5 p-2 lg:p-4 transition-all duration-700">
          <div className="rounded-[24px] md:rounded-[36px] overflow-hidden border border-gray-100 bg-white shadow-sm relative group-hover:shadow-xl transition-all duration-700">
            <img
              src="/dashboard.png"
              alt="WorkNest Dashboard"
              className="w-full h-auto object-cover object-top filter brightness-[0.98] contrast-[1.02] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
