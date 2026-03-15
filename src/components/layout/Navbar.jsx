import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleLocationChange = () => {
      setOpen(false);
    };
    handleLocationChange();
  }, [location.pathname]);

  const links = [
    { label: "Product", to: "/product" },
    { label: "Pricing", to: "/pricing" },
    { label: "Resources", to: "/resources" },
    { label: "About", to: "/about" },
  ];

  return (
    <div
      className={`fixed inset-x-0 top-0 z-100 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none ${
        scrolled ? "pt-3 px-6" : "pt-5 px-8"
      }`}
    >
      <header
        className={`pointer-events-auto mx-auto w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-between bg-white ${
          scrolled
            ? "max-w-6xl h-14 px-6 shadow-xl shadow-gray-200/50 border border-gray-200 rounded-full"
            : "max-w-7xl h-[68px] px-7 shadow-md shadow-gray-200/20 border border-gray-200 rounded-[24px]"
        }`}
      >
        <Link
          to="/"
          className="flex items-center gap-3 group select-none shrink-0"
        >
          <img
            src="/logo.png"
            alt="WorkNest"
            className="h-9 transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Middle: Navigation */}
        <nav className="hidden lg:flex items-center gap-1 p-1">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-6 py-2 rounded-full text-[11px] font-semibold uppercase tracking-[0.15em] transition-all duration-300 ${
                location.pathname === link.to
                  ? "text-teal-700 bg-white shadow-sm"
                  : "text-slate-500 hover:text-teal-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="hidden lg:flex items-center gap-2">
          <Link
            to="/contact"
            className="px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-700 hover:text-teal-700 transition-colors"
          >
            Contact
          </Link>
          <Link
            to="/login"
            className="flex items-center gap-2 px-6 py-3.5 bg-[#042f2e] text-white text-[10px] font-semibold uppercase tracking-[0.2em] rounded-full shadow-lg shadow-[#042f2e]/20 hover:bg-teal-900 transition-all active:scale-95"
          >
            Log in
          </Link>
        </div>

        {/* Mobile: Hamburger */}
        <button
          className="lg:hidden p-3 rounded-2xl text-gray-500 hover:bg-gray-50 transition-colors"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden absolute top-20 left-6 right-6 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] bg-white rounded-[32px] border border-gray-200 shadow-2xl pointer-events-auto ${
          open
            ? "max-h-[500px] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-4"
        }`}
      >
        <div className="p-8 space-y-2">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className={`block px-6 py-4 rounded-2xl text-[11px] font-semibold uppercase tracking-widest transition-colors ${
                location.pathname === l.to
                  ? "bg-teal-50 text-teal-600"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              {l.label}
            </Link>
          ))}
          {/* Mobile-only Contact Link */}
          <Link
            to="/contact"
            className={`block px-6 py-4 rounded-2xl text-[11px] font-semibold uppercase tracking-widest transition-colors ${
              location.pathname === "/contact"
                ? "bg-teal-50 text-teal-600"
                : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            Contact
          </Link>
          <div className="pt-6 mt-4 border-t border-gray-50 flex flex-col gap-3">
            <Link
              to="/login"
              className="px-6 py-4 rounded-2xl text-[11px] font-semibold uppercase tracking-widest text-center bg-gray-950 text-white"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
