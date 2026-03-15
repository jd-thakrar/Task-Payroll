import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQAccordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`mb-4 rounded-2xl bg-white border transition-all duration-300 ${isOpen ? 'border-blue-200 bg-blue-50/30' : 'border-slate-200 hover:border-slate-300'}`}>
      <button 
        className="w-full flex justify-between items-center py-5 px-6 focus:outline-none" 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className={`font-bold text-left transition-colors tracking-tight ${isOpen ? 'text-slate-900' : 'text-slate-600'}`}>{question}</span>
        <ChevronDown 
          className={`transform transition-transform duration-500 shrink-0 ${isOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} 
          size={18} 
        />
      </button>
      <div 
        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'pb-6 opacity-100 max-h-[1000px]' : 'max-h-0 opacity-0 pb-0'}`}
      >
        <p className="text-slate-500 text-sm leading-relaxed border-t border-slate-200 pt-5 font-medium">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FAQAccordion;
