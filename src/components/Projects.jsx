import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import coin from "../assets/FINOVA_COIN.webp";

// ── PROJECT DATA ──────────────────────────────────────────────
const projects = [
  {
    id: 1,
    title: "FINOVA Coin",
    subtitle: "Native digital asset of Finova",
    description:
      "A community-launched digital token on the Solana blockchain representing Finova's foray into crypto. Built to explore tokenomics, DeFi mechanics, and real-world blockchain deployment.",
    status: "Completed",
    date: "May 2024",
    tags: ["Blockchain", "Solana", "DeFi", "Tokenomics"],
    accent: "#A78BFA",
    link: "https://pump.fun/coin/D5MBXJKUTV2pBxdAJ43wrqu9gKZjURgjXjBkoFmhpump",
    image: coin, 
    number: "01",
  },
  {
    id: 2,
    title: "AI Chatbot",
    subtitle: "Financial knowledge agent",
    description:
      "An AI-powered conversational agent trained on financial concepts, market data, and Finova's domain knowledge — helping students explore finance interactively.",
    status: "Completed",
    date: "June 2023",
    tags: ["AI", "LLM", "Finance", "NLP"],
    accent: "#38BDF8",
    link: "https://github.com/Finova-MIT/Trady-FinanceAI_LangGraph",
    image: "https://www.yorosis.com/wp-content/uploads/2025/07/AI-Chatbots-What-They-Are-How-They-Work-01.jpg",
    number: "02",
  },
];

export default function Projects() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .proj-eyebrow::before {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: rgba(255,255,255,0.33);
          flex-shrink: 0;
        }
        .proj-h2 {
          font-size: clamp(34px, 5.5vw, 88px);
          line-height: 0.91;
          letter-spacing: -0.03em;
        }
        .proj-h2-outline {
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(255,255,255,0.27);
        }
        .proj-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          transition: border-color 0.25s, background 0.25s, transform 0.25s;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .proj-card:hover {
          border-color: rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.035);
          transform: translateY(-3px);
        }
        /* RESTORED: Accent glow border animation */
        .proj-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--accent-color, #06B6D4), transparent);
          opacity: 0;
          transition: opacity 0.3s;
          z-index: 2;
        }
        .proj-card:hover::before { opacity: 1; }

        .proj-img-container {
          width: 100%;
          height: 220px;
          overflow: hidden;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          position: relative;
          background: #0a0a0a;
        }
        .proj-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.5;
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .proj-card:hover .proj-img {
          opacity: 0.8;
          transform: scale(1.03);
        }
        .proj-tag {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          padding: 4px 9px;
          border-radius: 100px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.4);
        }
        .proj-status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .proj-status-dot.completed { background: #4ADE80; box-shadow: 0 0 6px rgba(74,222,128,0.5); }
        .proj-status-dot.progress { background: #FCD34D; box-shadow: 0 0 6px rgba(252,211,77,0.5); animation: pulse-dot 2s ease-in-out infinite; }
        
        @keyframes pulse-dot { 0%,100%{opacity:1} 50%{opacity:0.5} }

        .proj-number {
          font-family: 'Syne', sans-serif;
          font-size: 72px;
          font-weight: 800;
          color: rgba(255,255,255,0.04);
          letter-spacing: -0.04em;
          line-height: 1;
          position: absolute;
          bottom: -8px; right: 16px;
          pointer-events: none;
          user-select: none;
        }
        .proj-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 7px 14px;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.55);
          transition: all 0.2s;
          font-family: 'DM Sans', sans-serif;
        }
        .proj-link-btn:hover {
          color: #fff;
          border-color: rgba(255,255,255,0.3);
          background: rgba(255,255,255,0.06);
        }
      `}</style>

      <section id="projects" className="relative bg-black text-white min-h-screen py-20 md:py-28 overflow-hidden" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 55% 45% at 80% 50%, rgba(167,139,250,0.04) 0%, transparent 65%)" }} />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-10 md:px-20">
          
          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6 md:gap-10">
            <div>
              <div className="proj-eyebrow inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.2em] text-[#89f3ff] uppercase mb-5">
                What We Build
              </div>
              <h2 className="proj-h2 font-extrabold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                Our <span className="proj-h2-outline">Projects</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm md:text-base font-light text-white/45 leading-[1.85] pb-1">
              Developing the next generation of financial tools through code and research.
            </p>
          </div>

          {/* PROJECTS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {projects.map((p) => (
              <div key={p.id} className="proj-card" style={{ "--accent-color": p.accent }}>
                
                {/* PROJECT IMAGE */}
                <div className="proj-img-container">
                    {p.image ? (
                        <img src={p.image} alt={p.title} className="proj-img" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-white/10 text-[10px] uppercase tracking-widest">Asset Preview</div>
                    )}
                </div>

                <div className="p-8 md:p-10 relative">
                    <div className="proj-number">{p.number}</div>

                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className={`proj-status-dot ${p.status === "Completed" ? "completed" : "progress"}`} />
                          <span className="text-[10px] font-semibold tracking-[0.18em] uppercase" style={{ color: p.status === "Completed" ? "#4ADE80" : "#FCD34D" }}>
                            {p.status}
                          </span>
                          <span className="text-[10px] text-white/20 tracking-wide">· {p.date}</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.02em" }}>
                          {p.title}
                        </h3>
                      </div>
                      {/* Accent glow dot */}
                      <div className="w-10 h-10 rounded-full flex-shrink-0 opacity-70" style={{ background: `radial-gradient(circle, ${p.accent}40, transparent 70%)`, border: `1px solid ${p.accent}30` }} />
                    </div>

                    <p className="text-xs md:text-sm font-medium text-white/35 mb-2">{p.subtitle}</p>
                    <p className="text-sm font-light text-white/45 leading-[1.7] mb-6 max-w-[95%]">{p.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {p.tags.map((t) => (
                        <span key={t} className="proj-tag">{t}</span>
                      ))}
                    </div>

                    {/* CTA */}
                    {p.link ? (
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className="proj-link-btn">
                        View Project <ArrowUpRight size={11} />
                      </a>
                    ) : (
                      <span className="proj-link-btn opacity-40 cursor-default">Internal Tool</span>
                    )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}