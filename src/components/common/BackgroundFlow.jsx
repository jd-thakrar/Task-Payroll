import React from 'react';

const BackgroundFlow = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden opacity-20">
      <svg className="w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="glow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.2)" />
            <stop offset="50%" stopColor="rgba(147, 51, 234, 0.2)" />
            <stop offset="100%" stopColor="rgba(16, 185, 129, 0.2)" />
          </linearGradient>
        </defs>
        
        {/* Abstract flow lines */}
        <path 
          d="M-100,200 Q400,100 800,400 T1600,200" 
          fill="none" 
          stroke="url(#glow-grad)" 
          strokeWidth="1" 
          className="fluid-flow-line opacity-30" 
        />
        <path 
          d="M-200,600 Q200,800 600,500 T1400,700" 
          fill="none" 
          stroke="url(#glow-grad)" 
          strokeWidth="1" 
          className="fluid-flow-line reverse opacity-20" 
          style={{ animationDuration: '40s' }}
        />
        <path 
          d="M200,-100 Q600,400 300,900" 
          fill="none" 
          stroke="url(#glow-grad)" 
          strokeWidth="0.5" 
          className="fluid-flow-line opacity-10" 
          style={{ animationDuration: '25s' }}
        />
      </svg>
    </div>
  );
};

export default BackgroundFlow;
