import React, { useState } from "react";
import PricingCard from "../components/common/PricingCard";
import FAQAccordion from "../components/common/FAQAccordion";
import { HelpCircle } from "lucide-react";

const Label = ({ children }) => (
  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-100 bg-teal-50/30 text-[10px] font-bold uppercase tracking-widest text-teal-700 mb-6 shadow-sm">
    {children}
  </div>
);

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="pt-45 pb-10 md:pt-40 md:pb-5 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.4] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(42,157,143,0.1),transparent_60%)]" />

        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <h1
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-4xl md:text-6xl lg:text-[72px] font-semibold text-[#042f2e] mb-8 tracking-tighter leading-[0.95]"
          >
            Transparent pricing <br />
            for every team
          </h1>
          <p className="text-lg md:text-xl  text-slate-500 max-w-2xl mx-auto mb-8 font-medium leading-relaxed">
            No hidden fees, no complicated contracts. Choose the plan that fits
            your company size and upgrade anytime easily.
          </p>

          <div className="inline-flex items-center gap-1 bg-slate-50 mb-10 border border-slate-100 rounded-full p-1.5 shadow-sm">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-8 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all ${
                billingCycle === "monthly"
                  ? "bg-[#042f2e] text-white shadow-lg"
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annually")}
              className={`px-8 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all ${
                billingCycle === "annually"
                  ? "bg-[#042f2e] text-white shadow-lg"
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              Annually{" "}
              <span
                className={`ml-1 ${billingCycle === "annually" ? "text-teal-300" : "text-teal-500"} text-[10px]`}
              >
                -20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-15  h-auto">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              tier="Basic"
              price={billingCycle === "monthly" ? "599" : "299"}
              description="Ideal for small startups to track tasks securely."
              features={[
                "Up to 15 team members",
                "Basic Task Management",
                "Manual Attendance Logs",
                "Community Support",
                "10GB Cloud Storage",
              ]}
            />
            <PricingCard
              tier="Professional"
              price={billingCycle === "monthly" ? "999" : "499"}
              description="Perfect for growing teams automating payroll."
              isHighlighted={true}
              features={[
                "Up to 100 team members",
                "Advanced Task Board",
                "Automated Punch-in System",
                "Calculated Payroll Export",
                "Priority Email Support",
                "100GB Cloud Storage",
              ]}
            />
            <PricingCard
              tier="Enterprise"
              price={billingCycle === "monthly" ? "2,999" : "1,599"}
              description="Advanced controls for larger organizations."
              features={[
                "Unlimited team members",
                "Custom Integrations / API",
                "Biometric Attendance Tracking",
                "Direct Deposit Payroll",
                "Dedicated Success Manager",
                "Unlimited Cloud Storage",
              ]}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 bg-slate-50/50 border-y border-slate-100">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-16 px-4">
            <h2
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="text-4xl font-semibold text-[#042f2e] mb-4 tracking-tight"
            >
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 font-medium">
              Everything you need to know about billing and features.
            </p>
          </div>
          <div className="space-y-4">
            <FAQAccordion
              question="Can I upgrade or downgrade my plan at any time?"
              answer="Yes, absolutely! We believe in giving you complete flexibility. If you upgrade, the prorated difference will be charged. If you downgrade, a credit will be applied to your next billing cycle."
            />
            <FAQAccordion
              question="What happens if we cross our team member limit?"
              answer="We'll notify your administrative account when you reach 90% capacity. Once exceeded, you'll be prompted to manually upgrade your tier, or pay a small per-user overage fee to prevent any service interruption."
            />
            <FAQAccordion
              question="Is there a free trial available?"
              answer="We offer a 14-day full-featured free trial for our Professional plan. No credit card is required to start your testing period."
            />
            <FAQAccordion
              question="Do you offer discounts for non-profits?"
              answer="Yes! We provide a 30% lifetime discount to verified non-profit organizations and educational institutions. Please contact our support team with your documentation."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
