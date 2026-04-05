import React from "react";
import { Mail, Linkedin } from "lucide-react";

import vedant from "../assets/members/images/vedant.jpg";
import aayushman from "../assets/members/images/aayushman.png";
import nishant from "../assets/members/images/nishant.jpeg";
import abhuday from "../assets/members/images/abhuday.jpeg";
import sujai from "../assets/members/images/sujai.jpeg";
import aditya from "../assets/members/images/Aditya.jpg";
import nihar from "../assets/members/images/Nihar.jpg";
import ayush from "../assets/members/images/Ayush.jpg";
import pranav from "../assets/members/images/Pranav.jpg";
import debarun from "../assets/members/images/Debarun.png";

const members = [
  { name: "Vedant Agarwal", role: "President", img: vedant, email: "mailto:vedant.agarwal312@gmail.com", linkedin: "https://www.linkedin.com/in/vedant-agarwal312" },
  { name: "Suhani Patel", role: "Vice President", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80", email: "mailto:suhani@example.com", linkedin: "https://www.linkedin.com/in/suhani-patel-a6957a250/" },
  { name: "Samriddhi Mishra", role: "General Secretary", img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80", email: "mailto:samriddhi@example.com", linkedin: "https://www.linkedin.com/in/samriddhi-mishra-a31166284/" },
  { name: "Aayushman Jain", role: "Treasurer", img: aayushman, email: "mailto:aayushman.mitmpl2023@learner.manipal.edu", linkedin: "https://www.linkedin.com/in/aayushman-jain" },
  { name: "Nishant Dahiya", role: "Head of Operations", img: nishant, email: "mailto:dahiyanishant2405@gmail.com", linkedin: "https://www.linkedin.com/in/nishant-dahiya-3a071424b" },
  { name: "Nihar Madhekar", role: "Quant Head", img: nihar, email: "mailto:niharmadhekar@gmail.com", linkedin: "https://www.linkedin.com/in/niharmadhekar" },
  { name: "Debarun Karmakar", role: "Investment Banking Head", img: debarun, email: "mailto:debarun@example.com", linkedin: "https://www.linkedin.com/in/debarunkarmakar/" },
  { name: "Sujai Murali", role: "InfoSec Head", img: sujai, email: "mailto:velociper5@gmail.com", linkedin: "https://www.linkedin.com/in/sujai-murali" },
  { name: "Kunwar Abhuday Singh", role: "Research Head", img: abhuday, email: "mailto:Abhuday2656@gmail.com", linkedin: "https://www.linkedin.com/in/kunwar-abhuday-singh-280836284" },
  { name: "Pranav G Nayak", role: "Fintech Software Head", img: pranav, email: "mailto:pranav1.mitmpl2023@learner.manipal.edu", linkedin: "https://www.linkedin.com/in/pranav-g-nayak-a68101146/" },
  { name: "Ayush Das", role: "Product Head", img: ayush, email: "mailto:ayush.das0213@gmail.com", linkedin: "https://www.linkedin.com/in/d-ayush/" },
  { name: "Aditya Sharma", role: "Management Head", img: aditya, email: "mailto:adityasharma.variable@gmail.com", linkedin: "https://www.linkedin.com/in/aditya-sharma-4aa716336/" },
];

export default function Board() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        /* Header Eyebrow Styling */
        .board-eyebrow::before {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: rgba(255,255,255,0.33);
          flex-shrink: 0;
        }

        /* Header Typography */
        .board-h2 {
          font-size: clamp(34px, 5.5vw, 88px);
          line-height: 0.91;
          letter-spacing: -0.03em;
        }

        .board-h2-outline {
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(255,255,255,0.27);
        }

        /* Original Card Hover Effects */
        .member-card:hover .member-img {
          transform: scale(1.06);
          filter: brightness(1) saturate(1.05);
        }

        .member-card:hover .member-socials {
          opacity: 1;
          transform: translateY(0);
        }

        .member-card:hover .member-overlay {
          opacity: 1;
        }
      `}</style>

      <section className="relative bg-black text-white min-h-screen py-20 md:py-28 overflow-hidden">
        {/* subtle bg glow */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 55% 45% at 20% 50%, rgba(56,189,248,0.03) 0%, transparent 65%)" }} />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-10 md:px-20">

          {/* NEW HEADER - Matched to Projects Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6 md:gap-10">
            <div>
              <div className="board-eyebrow inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.2em] text-[#89f3ff] uppercase mb-5">
                Executive Board
              </div>
              <h2 className="board-h2 font-extrabold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                Our <span className="board-h2-outline">Team</span> 
              </h2>
            </div>
            <p className="max-w-sm text-sm md:text-base font-light text-white/45 leading-[1.85] pb-1">
              Visionary leaders building across quant, blockchain, and finance.
            </p>
          </div>

          {/* GRID - Original Card Layout */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
            {members.map((member, i) => (
              <MemberCard key={i} {...member} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

// RESTORED: MemberCard from your original code
function MemberCard({ name, role, img, email, linkedin }) {
  return (
    <div
      className="member-card relative rounded-xl md:rounded-2xl overflow-hidden cursor-pointer bg-[#111]"
      style={{ 
          transition: "transform 0.4s cubic-bezier(0.32, 0.72, 0, 1)",
          boxShadow: "0 10px 30px -15px rgba(0,0,0,0.5)" 
      }}
      onMouseEnter={e => e.currentTarget.style.transform = "translateY(-8px)"}
      onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={img} 
          alt={name} 
          className="member-img w-full h-full object-cover"
          onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=" + name.replace(" ", "+"); }}
          style={{ filter: "brightness(0.9) contrast(1.1)", transition: "all 0.5s ease" }} 
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="member-overlay absolute inset-0 opacity-0 bg-blue-600/10 transition-opacity" />

      <div className="absolute bottom-0 p-3 md:p-5 w-full">
        <div className="text-[9px] md:text-[10px] tracking-widest text-white/50 mb-1 uppercase font-medium">{role}</div>
        <h3 className="text-sm md:text-lg font-bold mb-3 leading-tight">{name}</h3>
        
        <div className="member-socials flex gap-2 opacity-0 translate-y-2 transition-all duration-300">
          {email && (
            <a href={email} className="w-8 h-8 flex items-center justify-center border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
              <Mail size={14} />
            </a>
          )}
          {linkedin && linkedin !== "#" && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
              <Linkedin size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}