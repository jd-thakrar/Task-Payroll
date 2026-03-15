import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialCard = ({ quote, author, role, company }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
      <Quote className="text-secondary/20 mb-6" size={40} />
      <p className="text-gray-600 mb-8 flex-1 italic leading-relaxed text-lg">"{quote}"</p>
      <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-50">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex flex-col items-center justify-center font-bold text-primary text-xl">
          {author.charAt(0)}
        </div>
        <div>
          <h4 className="font-semibold text-[#042f2e] leading-tight">{author}</h4>
          <p className="text-xs text-gray-500 mt-1">{role}{company ? `, ${company}` : ''}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
