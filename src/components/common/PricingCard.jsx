import React from "react";
import { Check } from "lucide-react";

const PricingCard = ({
  tier,
  price,
  description,
  features,
  isHighlighted = false,
}) => {
  return (
    <div
      className={`relative flex flex-col p-8 rounded-[32px] bg-white border transition-all duration-500 group h-full shadow-sm ${isHighlighted ? "border-teal-500 shadow-teal-100 shadow-xl" : "border-slate-200 hover:border-slate-300 hover:shadow-md"}`}
    >
      {isHighlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#042f2e] text-white text-[10px] font-bold tracking-[0.2em] uppercase py-1.5 px-4 rounded-full shadow-[0_0_20px_rgba(4,47,46,0.3)]">
          Most Popular
        </span>
      )}
      <div className="mb-10 mt-4">
        <h3
          className={`text-2xl font-bold mb-3 tracking-tight ${isHighlighted ? "text-slate-900" : "text-slate-600"}`}
        >
          {tier}
        </h3>
        <p className="text-slate-400 text-sm mb-6 font-medium leading-relaxed">
          {description}
        </p>
        <div className="flex items-baseline gap-1">
          <span className="text-5xl font-bold text-slate-900 tracking-tighter">
            ₹{price}
          </span>
          <span className="text-slate-400 font-medium tracking-tight ml-1">
            /mo
          </span>
        </div>
      </div>
      <ul className="flex flex-col gap-5 mb-10 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-4 group/item">
            <div
              className={`mt-1 w-4 h-4 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                isHighlighted
                  ? "bg-teal-50 text-teal-600"
                  : "bg-slate-50 text-slate-400"
              }`}
            >
              <Check size={10} strokeWidth={4} />
            </div>
            <span className="text-slate-600 text-[13px] leading-relaxed font-bold group-hover/item:text-slate-900 transition-colors">
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-4 px-6 rounded-2xl font-bold tracking-wide transition-all duration-300 mt-auto active:scale-[0.98] ${
          isHighlighted
            ? "bg-[#042f2e] text-white hover:bg-[#0d9488] shadow-lg shadow-teal-900/10"
            : "bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-100"
        }`}
      >
        Start with {tier}
      </button>
    </div>
  );
};

export default PricingCard;
