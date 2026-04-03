import React from "react";
import { Mail, Linkedin } from "lucide-react";

// IMPORTANT: Ensure these files exist in your folder or the build will fail!
import vedant from "../assets/members/images/vedant.jpg";
import aayushman from "../assets/members/images/aayushman.png";
import nishant from "../assets/members/images/nishant.jpeg";
import abhuday from "../assets/members/images/abhuday.jpeg";
import sujai from "../assets/members/images/sujai.jpeg";

const members = [
  { name: "Vedant Agarwal", role: "President", img: vedant, email: "mailto:vedant.agarwal312@gmail.com", linkedin: "https://www.linkedin.com/in/vedant-agarwal312" },
  { name: "Suhani Patel", role: "Vice President", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80", email: "mailto:suhani@example.com", linkedin: "https://www.linkedin.com/in/suhani-patel-a6957a250/" },
  { name: "Samriddhi Mishra", role: "General Secretary", img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80", email: "mailto:samriddhi@example.com", linkedin: "https://www.linkedin.com/in/samriddhi-mishra-a31166284/" },
  { name: "Aayushman Jain", role: "Treasurer", img: aayushman, email: "mailto:aayushman.mitmpl2023@learner.manipal.edu", linkedin: "https://www.linkedin.com/in/aayushman-jain" },
  { name: "Nishant Dahiya", role: "Head of Operations", img: nishant, email: "mailto:dahiyanishant2405@gmail.com", linkedin: "https://www.linkedin.com/in/nishant-dahiya-3a071424b" },
  { name: "Nihar Madhekar", role: "Quant Head", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80", email: "niharmadhekar@gmail.com", linkedin: "https://www.linkedin.com/in/niharmadhekar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  { name: "Debarun Karmakar", role: "Investment Banking Head", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80", email: "mailto:debarun@example.com", linkedin: "https://www.linkedin.com/in/debarunkarmakar/" },
  { name: "Mohammed Hadi", role: "Blockchain & Web3 Head", img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&q=80", email: "mailto:hadi@example.com", linkedin: "https://www.linkedin.com/in/mohammed-hadi-ab1820251/" },
  { name: "Sujai Murali", role: "InfoSec Head", img: sujai, email: "mailto:velociper5@gmail.com", linkedin: "https://www.linkedin.com/in/sujai-murali" },
  { name: "Kunwar Abhuday Singh", role: "Research Head", img: abhuday, email: "mailto:Abhuday2656@gmail.com", linkedin: "https://www.linkedin.com/in/kunwar-abhuday-singh-280836284" },
  { name: "Pranav G Nayak", role: "Fintech Software Head", img: "https://ui-avatars.com/api/?name=Pranav+Nayak&background=0077b5&color=fff", email: "mailto:pranav1.mitmpl2023@learner.manipal.edu", linkedin: "https://www.linkedin.com/in/pranav-g-nayak-a68101146/" },
  { name: "Ayush Das", role: "Product Head", img: "https://ui-avatars.com/api/?name=Ayush+Das&background=00aaff&color=fff", email: "mailto:ayush.das0213@gmail.com", linkedin: "https://www.linkedin.com/in/d-ayush/" },
  { name: "Aditya Sharma", role: "Management Head", img: "https://drive.google.com/u/3/open?usp=forms_web&id=1w7_kt8WkU1MaxPpWi0nQ2z4aUaK1W2UY", email: "mailto:adityasharma.variable@gmail.com", linkedin: "https://www.linkedin.com/in/aditya-sharma-4aa716336/" },
];

export default function Board() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .board-h2-outline {
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(255,255,255,0.27);
        }

        .board-h2 {
          font-size: clamp(34px, 5vw, 72px);
          line-height: 0.95;
          letter-spacing: -0.03em;
        }

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
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-10 md:px-20">

          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-6 md:gap-10">
            <h2 className="board-h2 font-extrabold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
              A Team of <span className="board-h2-outline">FinTech</span><br />Leaders
            </h2>
            <p className="max-w-md text-sm md:text-base font-light text-white/45 leading-[1.85] pb-1">
              Visionary leaders building across quant, blockchain, and finance.
            </p>
          </div>

          {/* GRID */}
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