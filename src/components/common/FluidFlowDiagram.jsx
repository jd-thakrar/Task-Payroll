import React from "react";

const FluidFlowDiagram = () => {
  return (
    <div className="bg-white backdrop-blur-3xl rounded-2xl border border-slate-200 p-6 shadow-md relative order-2 lg:order-1 h-[420px] w-full flex items-center justify-center overflow-hidden group">
      <div className="absolute inset-x-0 -top-px h-px bg-[linear-gradient(to_right,transparent,rgba(59,130,246,0.2),transparent)] dark:bg-[linear-gradient(to_right,transparent,rgba(59,130,246,0.5),transparent)]" />
      <div className="absolute inset-x-0 -bottom-px h-px bg-[linear-gradient(to_right,transparent,rgba(147,51,234,0.2),transparent)] dark:bg-[linear-gradient(to_right,transparent,rgba(147,51,234,0.5),transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(59,130,246,0.05),transparent)] dark:bg-[linear-gradient(to_bottom_right,rgba(59,130,246,0.1),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

      {/* SVG Canvas for Flowing Lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient
            id="flow-gradient-purple"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.8" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Input Lines (Left to Center) */}
        {/* Top left to center */}
        <path
          d="M 0,80 C 150,80 150,210 250,210"
          fill="none"
          stroke="url(#flow-gradient)"
          strokeWidth="3"
          className="fluid-flow-line opacity-60"
          style={{ animationDelay: "0s" }}
        />
        <path
          d="M 0,80 C 150,80 150,210 250,210"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-zinc-200 dark:text-zinc-800 opacity-50"
        />

        {/* Mid left to center */}
        <path
          d="M 0,160 C 120,160 150,210 250,210"
          fill="none"
          stroke="url(#flow-gradient-purple)"
          strokeWidth="4"
          className="fluid-flow-line opacity-60"
          style={{ animationDelay: "1s" }}
        />
        <path
          d="M 0,160 C 120,160 150,210 250,210"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-zinc-200 dark:text-zinc-800 opacity-50"
        />

        {/* Bottom left to center */}
        <path
          d="M 0,280 C 150,280 150,210 250,210"
          fill="none"
          stroke="url(#flow-gradient)"
          strokeWidth="3"
          className="fluid-flow-line opacity-60"
          style={{ animationDelay: "2s" }}
        />
        <path
          d="M 0,280 C 150,280 150,210 250,210"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-zinc-200 dark:text-zinc-800 opacity-50"
        />

        {/* Output Lines (Center to Right) */}
        {/* Center to Top Right */}
        <path
          d="M 250,210 C 350,210 350,100 500,100"
          fill="none"
          stroke="url(#flow-gradient)"
          strokeWidth="4"
          className="fluid-flow-line reverse opacity-60"
          style={{ animationDelay: "0.5s" }}
        />
        <path
          d="M 250,210 C 350,210 350,100 500,100"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-zinc-200 dark:text-zinc-800 opacity-50"
        />

        {/* Center to Bottom Right */}
        <path
          d="M 250,210 C 350,210 350,320 500,320"
          fill="none"
          stroke="url(#flow-gradient-purple)"
          strokeWidth="3"
          className="fluid-flow-line reverse opacity-60"
          style={{ animationDelay: "1.5s" }}
        />
        <path
          d="M 250,210 C 350,210 350,320 500,320"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-zinc-200 dark:text-zinc-800 opacity-50"
        />
      </svg>

      <div className="absolute left-4 top-14 flex flex-col gap-12 z-10 w-32">
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-lg p-3 text-xs font-semibold text-zinc-600 dark:text-zinc-300 shadow-sm flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>{" "}
          HRIS
        </div>
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-lg p-3 text-xs font-semibold text-zinc-600 dark:text-zinc-300 shadow-sm flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse delay-100"></span>{" "}
          ERP
        </div>
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-lg p-3 text-xs font-semibold text-zinc-600 dark:text-zinc-300 shadow-sm flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse delay-200"></span>{" "}
          Finance
        </div>
      </div>

      <div className="absolute right-4 top-20 flex flex-col gap-36 z-10 w-36">
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-lg p-3 text-xs font-semibold text-zinc-600 dark:text-zinc-300 shadow-sm flex items-center justify-center gap-2">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-500"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Global Payouts
        </div>
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-lg p-3 text-xs font-semibold text-zinc-600 dark:text-zinc-300 shadow-sm flex items-center justify-center gap-2">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-emerald-500"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          Tax Docs
        </div>
      </div>

      {/* Central Hub */}
      <div className="relative z-20 flex flex-col items-center justify-center">
        <div className="w-32 h-32 bg-blue-600 rounded-2xl shadow-[0_0_50px_rgba(37,99,235,0.4)] dark:shadow-[0_0_50px_rgba(37,99,235,0.6)] flex items-center justify-center border border-blue-400/50 dark:border-blue-400 relative">
          <div
            className="absolute inset-0 bg-white/20 rounded-2xl"
            style={{ mixBlendMode: "overlay" }}
          />
          <div className="absolute inset-0 bg-blue-500 blur-xl animate-pulse opacity-50 -z-10 rounded-2xl" />
          <span className="text-white font-bold text-lg tracking-tight z-10">
            Task&Payroll
          </span>
        </div>
        <div className="mt-6 bg-zinc-900/50 backdrop-blur border border-white/10 text-xs px-3 py-1 rounded-full text-zinc-300 font-mono tracking-wide">
          processing_hub
        </div>
      </div>
    </div>
  );
};

export default FluidFlowDiagram;
