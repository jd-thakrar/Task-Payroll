import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-12 bg-white relative">
      <div className="container mx-auto px-6 md:px-10 max-w-6xl">
        <div className="relative overflow-hidden bg-[#042f2e] rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-20 text-center shadow-2xl shadow-teal-950/20">
          {/* Decorative Elements */}
          <div className="absolute inset-0 bg-dot-pattern opacity-[0.05] pointer-events-none" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(42,157,143,0.15),transparent_50%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(42,157,143,0.15),transparent_50%)]" />

          {/* Corner Strips with Random Features */}
          <div className="absolute -top-24 -left-24 w-32 h-[600px] bg-white/5 -rotate-45 pointer-events-none blur-3xl" />
          <div className="absolute -top-24 -left-32 w-20 h-[600px] bg-teal-500/10 -rotate-45 pointer-events-none flex flex-col items-center justify-around py-20 overflow-hidden">
            {[
              "AUTOMATED_PAYROLL",
              "GLOBAL_EOR",
              "AI_COMPLIANCE",
              "SMART_TASKS",
              "SYNC_ENGINE",
            ].map((f, i) => (
              <span
                key={i}
                className="text-[10px] font-bold text-teal-400/20 tracking-[0.3em] font-mono rotate-90 whitespace-nowrap"
              >
                {f}
              </span>
            ))}
          </div>

          <div className="absolute -bottom-24 -right-24 w-32 h-[600px] bg-white/5 -rotate-45 pointer-events-none blur-3xl" />
          <div className="absolute -bottom-24 -right-40 w-24 h-[600px] bg-teal-500/5 -rotate-45 pointer-events-none flex flex-col items-center justify-around py-20 overflow-hidden">
            {[
              "KOL_ROUTING",
              "MULTI_CURRENCY",
              "AUDIT_TRAIL",
              "SECURE_VAULT",
            ].map((f, i) => (
              <span
                key={i}
                className="text-[9px] font-bold text-teal-400/10 tracking-[0.4em] font-mono rotate-90 whitespace-nowrap"
              >
                {f}
              </span>
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/10 text-xs font-bold uppercase tracking-widest text-teal-400 mb-8">
              Start your journey
            </div>
            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",
                letterSpacing: "-0.03em",
              }}
              className="text-4xl md:text-6xl font-semibold mb-6 !text-white leading-tight"
            >
              Ready to build a smarter,
              <br />
              faster team?
            </h2>
            <p className="text-xl text-teal-50/60 font-medium mb-10 leading-relaxed max-w-2xl mx-auto">
              Join 4,000+ businesses. No implementation fees, no year-long
              setup, no spreadsheet chaos.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/register"
                className="btn-primary w-full sm:w-auto px-10 py-5 h-auto text-base hover:scale-105 transition-transform flex items-center justify-center"
              >
                Start for free — 14 days{" "}
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-10 py-5 rounded-full border border-teal-500/30 text-white font-bold text-base hover:bg-white/5 transition-all active:scale-95 flex items-center justify-center"
              >
                Talk to sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
