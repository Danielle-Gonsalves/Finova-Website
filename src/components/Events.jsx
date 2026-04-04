import { useState } from "react";
import { Calendar, Clock, MapPin, Users, ArrowRight, ChevronDown, ChevronUp, Info } from "lucide-react";

const events = [
  { id: "01", title: "General Body Meeting", type: "Introduction", status: "Completed", date: "February 24, 2025", duration: "3 hours", location: "MV Seminar Hall", participants: "Max 170 participants", description: "The genesis of Finova. We unveiled our strategic roadmap, introduced the lead architects, and engaged the community with a high-stakes finance quiz.", highlights: ["Strategic Roadmap Unveiling", "Board Introduction", "Interactive Quiz"], tags: ["Genesis", "Network"], accent: "#38BDF8", photos: "#" },
  { id: "02", title: "Softlaunch Hackathon", type: "Build", status: "Completed", date: "April 18, 2025", duration: "2 Days", location: "Innovation Centre", participants: "Max 240 participants", description: "A high-velocity sprint combining business fundamentals with 'vibe coding'. Teams transformed raw concepts into viable fintech prototypes in 48 hours.", highlights: ["Vibe Coding Methodology", "Rapid Prototyping", "Pitch Deck Sprints"], tags: ["Build", "Hackathon"], accent: "#00FFD1", photos: "#" },
  { id: "03", title: "IP & Research Workshop", type: "Workshop", status: "Completed", date: "March 28, 2025", duration: "Full Day", location: "Digital Hub", participants: "Max 50 participants", description: "Deep dive into the architecture of intellectual property. Mastering the transition from a problem statement to a published research paper and patent.", highlights: ["IP Strategy", "Academic Rigor", "Publication Pipelines"], tags: ["Research", "IP"], accent: "#A78BFA" },
  { id: "04", title: "Smart Trading Lab", type: "Trading", status: "Completed", date: "April 13, 2025", duration: "2 Days", location: "MIT Trading Lab", participants: "Max 50 participants", description: "Stress-testing strategies in a simulated environment. We bridged Fundamental and Technical analysis to execute high-probability trade setups.", highlights: ["Alpha Generation", "Backtesting", "Risk Management"], tags: ["Quant", "Alpha"], accent: "#FFD166" },
  { id: "05", title: "Quant Finance Summit", type: "Summit", status: "Completed", date: "July 5, 2025", duration: "1 Day", location: "Finance Block", participants: "Max 120 participants", description: "Decoding institutional-grade finance. Covering algorithmic frameworks, statistical arbitrage, and the HFT stacks used by global hedge funds.", highlights: ["HFT Frameworks", "Statistical Arbitrage", "Hedge Fund Panels"], tags: ["Institutional", "Data"], accent: "#F43F5E" },
  { id: "06", title: "FinTech Product Sprint", type: "Sprint", status: "Completed", date: "August 22, 2025", duration: "48 Hours", location: "Innovation Centre", participants: "Max 200 participants", description: "The ultimate build-to-pitch cycle. Design, deploy, and defend a fintech product across payments, lending, or decentralized wealth management.", highlights: ["Live Deployment", "Investor Scrutiny", "Market Ready"], tags: ["MVP", "Venture"], accent: "#4ADE80" },
];

export default function Events() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Completed", "Upcoming"];
  const filtered = filter === "All" ? events : events.filter((e) => e.status === filter);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .ev-eyebrow::before {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: rgba(255,255,255,0.33);
          flex-shrink: 0;
        }

        .ev-h2-outline {
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(255,255,255,0.27);
        }

        .ev-h2 {
          font-size: clamp(34px, 5.5vw, 88px);
          line-height: 0.91;
          letter-spacing: -0.03em;
        }

        .ev-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: transform 0.4s cubic-bezier(0.32, 0.72, 0, 1), border-color 0.3s;
        }

        .ev-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 255, 255, 0.15);
          background: rgba(255, 255, 255, 0.04);
        }

        .ev-card:hover .ev-card-accent { opacity: 1; }

        /* RESTORED: Original Big Numbers */
        .ev-number-bg {
          font-family: 'Syne', sans-serif;
          font-size: 110px;
          font-weight: 800;
          position: absolute;
          top: -20px;
          right: -10px;
          opacity: 0.03;
          pointer-events: none;
        }

        .ev-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at var(--x, 50%) var(--y, 50%), var(--glow-color) 0%, transparent 50%);
          opacity: 0;
          transition: opacity 0.5s;
          pointer-events: none;
        }
        .ev-card:hover .ev-glow { opacity: 0.08; }
      `}</style>

      <section className="relative bg-black text-white min-h-screen py-20 md:py-28 overflow-hidden" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-10 md:px-20">

          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-6 md:gap-10">
            <div>
              <div className="ev-eyebrow inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.2em] text-[#89f3ff] uppercase mb-5">
                WHAT WE DO
              </div>
              <h2 className="ev-h2 font-extrabold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                Our <span className="ev-h2-outline">Events</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm md:text-base font-light text-white/45 leading-[1.85] pb-1">
              Architecting the next generation of financial systems through code, research, and collaborative excellence.
            </p>
          </div>

          {/* FILTERS */}
          <div className="flex items-center gap-2 md:gap-3 mb-12 flex-wrap">
            {filters.map((f) => (
              <button key={f} onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-[10px] md:text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-200 border ${
                  filter === f ? "bg-white text-black border-white" : "bg-transparent text-white/30 border-white/10 hover:border-white/40 hover:text-white"
                }`}>
                {f}
              </button>
            ))}
          </div>

          {/* GRID OR EMPTY STATE */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {filtered.map((ev, i) => <EventCard key={i} ev={ev} />)}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 border border-white/5 bg-white/[0.01] rounded-3xl text-center">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 text-white/20">
                    <Info size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>No Upcoming Events</h3>
                <p className="text-white/40 text-sm max-w-xs">We're currently architecting our next deployment. Check back soon for new summits and hackathons.</p>
            </div>
          )}

        </div>
      </section>
    </>
  );
}

function EventCard({ ev }) {
  const [expanded, setExpanded] = useState(false);

  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - top}px`);
  };

  return (
    <div
      className="ev-card relative rounded-3xl overflow-hidden flex flex-col p-7 md:p-9"
      onMouseMove={handleMouseMove}
      style={{ "--glow-color": ev.accent }}
    >
      <div className="ev-number-bg">{ev.id}</div>
      <div className="ev-glow" />

      <div className="ev-card-accent absolute top-0 left-0 right-0 opacity-0 transition-opacity duration-300"
        style={{ height: "2px", background: `linear-gradient(90deg, transparent, ${ev.accent}, transparent)` }} />

      <div className="flex items-center justify-between mb-8">
        <span className="text-[9px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/40">
          {ev.type}
        </span>
        <span className={`text-[9px] font-bold tracking-[0.2em] uppercase text-white/20`}>
          /// {ev.status.toUpperCase()}
        </span>
      </div>

      <h3 className="text-xl md:text-2xl font-extrabold text-white mb-4 leading-tight relative z-10" style={{ fontFamily: "'Syne', sans-serif" }}>
        {ev.title}
      </h3>

      <p className="text-sm font-light text-white/40 leading-relaxed mb-8">
        {expanded ? ev.description : ev.description.slice(0, 95) + "..."}
      </p>

      <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-8 pt-6 border-t border-white/5">
        {[
          { icon: <Calendar size={12} />, text: ev.date },
          { icon: <MapPin size={12} />, text: ev.location },
          { icon: <Users size={12} />, text: ev.participants },
          { icon: <Clock size={12} />, text: ev.duration },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-[11px] text-white/30 font-medium">
            <span style={{ color: ev.accent }} className="opacity-70">{item.icon}</span>
            <span className="truncate">{item.text}</span>
          </div>
        ))}
      </div>

      {expanded && (
        <div className="mb-8 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="text-[10px] font-bold tracking-widest text-white/20 uppercase mb-2">Highlights</div>
          {ev.highlights.map((h, i) => (
            <div key={i} className="flex items-start gap-3 text-[12px] text-white/50 bg-white/5 p-3 rounded-xl border border-white/5">
              <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: ev.accent }} />
              {h}
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-2 mt-auto pt-2 mb-6">
        {ev.tags.map((tag, i) => (
          <span key={i} className="text-[9px] font-bold tracking-[0.1em] uppercase px-2 py-1 rounded bg-white/[0.03] border border-white/[0.05] text-white/25">
            #{tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-6 border-t border-white/10">
        <button onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-[11px] font-bold tracking-[0.15em] uppercase text-white/40 hover:text-white transition-all">
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          {expanded ? "Less" : "Details"}
        </button>
        
        {ev.photos && ev.photos !== "#" && (
          <a href={ev.photos} target="_blank" rel="noopener noreferrer" 
             className="flex items-center gap-1.5 text-[11px] font-bold tracking-[0.15em] uppercase hover:opacity-70 transition-opacity"
             style={{ color: ev.accent }}>
             Gallery <ArrowRight size={13} />
          </a>
        )}
      </div>
    </div>
  );
}