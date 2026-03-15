import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white pt-10 pb-12">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Giant Hero Sign-off */}
        <div className="mb-8 flex flex-col items-center">
          <div className="flex flex-col md:flex-row justify-between w-full relative z-10 gap-12">
            <div className="space-y-6">
              <h3 className="font-bold text-[#000000] text-lg">
                Experience WorkNest.
              </h3>
            </div>

            <div className="grid grid-cols-3 gap-x-4 sm:gap-x-20 gap-y-10">
              <div className="flex flex-col items-center text-center gap-4">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-900/40">
                  Product
                </h4>
                <ul className="flex flex-col items-center gap-2.5">
                  <li>
                    <Link
                      to="/product"
                      className="text-[13px] font-semibold text-slate-500 hover:text-black transition-colors"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/pricing"
                      className="text-[13px] font-semibold text-slate-500 hover:text-black transition-colors"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/resources"
                      className="text-[13px] font-semibold text-slate-500 hover:text-black transition-colors"
                    >
                      Resources
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-center text-center gap-4">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-900/40">
                  Company
                </h4>
                <ul className="flex flex-col items-center gap-2.5">
                  <li>
                    <Link
                      to="/about"
                      className="text-[13px] font-semibold text-slate-500 hover:text-black transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="text-[13px] font-semibold text-slate-500 hover:text-black transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="text-[13px] font-semibold text-slate-500 hover:text-black transition-colors"
                    >
                      Use Cases
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-center text-center gap-4">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-900/40">
                  Social
                </h4>
                <ul className="flex flex-col items-center gap-2.5">
                  <li>
                    <a
                      href="#"
                      className="text-[13px] font-semibold text-slate-500 hover:text-black transition-colors"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[13px] font-semibold text-slate-500 hover:text-black transition-colors"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[13px] font-semibold text-slate-500 hover:text-black transition-colors"
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 w-full">
            <div className="text-[clamp(5rem,18vw,18rem)] font-semibold text-black tracking-tighter leading-none text-center select-none">
              WorkNest
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-2 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="WorkNest"
              className="h-5 brightness-0 opacity-80"
            />
            <span className="text-[10px] font-bold text-slate-900/30 uppercase tracking-[0.2em]">
              © 2026 WorkNest. All rights reserved.
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <Link
              to="/about"
              className="text-[10px] font-bold text-slate-900/40 uppercase tracking-widest hover:text-black transition-colors"
            >
              About
            </Link>
            <Link
              to="#"
              className="text-[10px] font-bold text-slate-900/40 uppercase tracking-widest hover:text-black transition-colors"
            >
              Privacy
            </Link>
            <Link
              to="#"
              className="text-[10px] font-bold text-slate-900/40 uppercase tracking-widest hover:text-black transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
