import React, { useState, useRef } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogCard = ({ category, date, title, excerpt, imagePlaceholder }) => {
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
      className="bg-white rounded-[32px] border border-slate-200 overflow-hidden hover:border-teal-500/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-500 flex flex-col group relative"
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

      <div className="h-48 bg-slate-50 w-full relative overflow-hidden flex items-center justify-center border-b border-slate-100">
        <div className="absolute inset-0 bg-teal-500/0 group-hover:bg-teal-500/5 transition-colors duration-700" />
        <span className="text-slate-400 font-bold text-[10px] tracking-[0.2em] uppercase z-10 group-hover:text-teal-600 transition-colors duration-500">{imagePlaceholder}</span>
      </div>
      
      <div className="p-8 flex flex-col flex-1 relative z-10">
        <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 mb-5 uppercase tracking-widest">
          <span className="text-teal-600">{category}</span>
          <span className="flex items-center gap-1.5"><Calendar size={12} /> {date}</span>
        </div>
        <h3 
          style={{ fontFamily: "'Outfit', sans-serif" }}
          className="text-xl font-bold text-[#042f2e] mb-4 group-hover:text-teal-700 transition-colors line-clamp-2 tracking-tight leading-tight"
        >
          {title}
        </h3>
        <p className="text-slate-500 text-xs mb-8 line-clamp-3 leading-relaxed font-medium">
          {excerpt}
        </p>
        <div className="mt-auto">
          <Link to="#" className="inline-flex items-center gap-2 text-[10px] font-bold text-slate-700 tracking-widest uppercase hover:text-teal-600 transition-colors">
            Read article
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
