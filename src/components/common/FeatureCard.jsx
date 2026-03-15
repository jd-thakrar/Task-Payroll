import React, { useRef, useState } from "react";

/* Accent palette — matches ParticleCanvas, feels hand-curated */
const ACCENTS = {
  teal: {
    bg: "#2a9d8f",
    light: "#2a9d8f12",
    border: "#2a9d8f22",
    text: "#0d6b62",
  },
  coral: {
    bg: "#e85d4a",
    light: "#e85d4a12",
    border: "#e85d4a22",
    text: "#9e2a1c",
  },
  amber: {
    bg: "#f4a261",
    light: "#f4a26112",
    border: "#f4a26122",
    text: "#8a4f1a",
  },
  violet: {
    bg: "#6d6875",
    light: "#6d687512",
    border: "#6d687522",
    text: "#3d3542",
  },
  sage: {
    bg: "#52b788",
    light: "#52b78812",
    border: "#52b78822",
    text: "#255c3e",
  },
  navy: {
    bg: "#264653",
    light: "#26465312",
    border: "#26465322",
    text: "#0d1e25",
  },
};

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  colSpan = false,
  accent = "teal",
}) => {
  const ref = useRef(null);
  const [spot, setSpot] = useState({ x: "50%", y: "50%", show: false });
  const c = ACCENTS[accent] || ACCENTS.teal;

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    setSpot({
      x: `${e.clientX - r.left}px`,
      y: `${e.clientY - r.top}px`,
      show: true,
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setSpot((s) => ({ ...s, show: false }))}
      className={`feature-card group ${colSpan ? "md:col-span-2" : ""}`}
    >
      {/* Spotlight glow */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-300"
        style={{
          opacity: spot.show ? 1 : 0,
          background: `radial-gradient(380px circle at ${spot.x} ${spot.y}, ${c.light.replace("12", "25")}, transparent 65%)`,
        }}
      />

      {/* Icon */}
      <div
        className="w-11 h-11 rounded-[14px] flex items-center justify-center mb-6 transition-all duration-400 group-hover:scale-110 group-hover:-rotate-3"
        style={{
          background: c.light,
          border: `1px solid ${c.border}`,
          color: c.bg,
        }}
      >
        <Icon size={20} strokeWidth={1.8} />
      </div>

      <h3
        className="text-lg font-bold text-[#042f2e] mb-3 leading-tight tracking-tight"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        {title}
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>

      {/* Bottom line accent on hover */}
      <div
        className="absolute bottom-0 left-8 right-8 h-[1.5px] rounded-t-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${c.bg}60, transparent)`,
        }}
      />
    </div>
  );
};

export default FeatureCard;
