"use client";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Instagram, Linkedin, Github, Menu, X } from "lucide-react";
import logo from "../assets/finova_logo.png";

const links = [
  { name: "HOME", path: "/" },
  { name: "TEAM", path: "/team" },
  { name: "EVENTS", path: "/events" },
  { name: "PROJECTS", path: "/projects" },
  { name: "CONTACT", path: "/contact" },
];

const socials = [
  { icon: <Instagram size={18} strokeWidth={2} />, href: "https://www.instagram.com/finova.manipal" },
  { icon: <Linkedin size={18} strokeWidth={2} />, href: "https://www.linkedin.com/company/finova-mit-manipal" },
  { icon: <Github size={18} strokeWidth={2} />, href: "https://github.com/Finova-MIT" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Scroll to top whenever the path changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setOpen(false); // Close mobile menu on navigation
  }, [pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@800&family=Archivo+Black&display=swap');

        .nav-glass {
          background: rgba(0, 20, 30, 0.4);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.5);
        }

        .nav-item {
          position: relative;
          color: rgba(255, 255, 255, 0.7);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          letter-spacing: 0.15em;
        }

        .nav-item:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(34, 211, 238, 0.3);
          box-shadow: inset 0 0 12px rgba(34, 211, 238, 0.1);
          transform: translateY(-1px);
        }

        .social-btn {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.6);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .social-btn:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(34, 211, 238, 0.4);
          box-shadow: 0 0 20px rgba(34, 211, 238, 0.15);
          transform: translateY(-2px);
        }

        /* Active Link State */
        .active-link {
          color: #fff !important;
          background: rgba(255, 255, 255, 0.1) !important;
          border: 1px solid rgba(34, 211, 238, 0.5) !important;
        }
      `}</style>

      <header className="fixed top-0 inset-x-0 z-[60] flex items-center justify-between px-6 md:px-12 py-4 md:py-6">
        {/* Glass Background Layer */}
        <div className="absolute inset-0 nav-glass -z-10 h-full w-full pointer-events-none" />

        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 z-50">
          <div className="h-8 w-8 md:h-12 md:w-12 flex items-center justify-center">
            <img src={logo} alt="Finova" className="w-full h-full object-contain" />
          </div>
          <span 
            className="text-sm md:text-lg font-extrabold tracking-[0.1em] uppercase" 
            style={{ fontFamily: "'Syne', sans-serif", color: "rgba(255, 255, 255, 0.95)" }}
          >
            FINOVA
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 nav-glass rounded-full px-2 py-1.5 gap-1">
          {links.map((l) => (
            <Link 
              key={l.name} 
              to={l.path}
              className={`nav-item text-[11px] font-black px-6 py-2.5 rounded-full border border-transparent ${pathname === l.path ? 'active-link' : ''}`}
              style={{ fontFamily: "'Archivo Black', sans-serif" }}
            >
              {l.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Socials & Mobile Toggle */}
        <div className="flex items-center gap-3 z-50">
          <div className="hidden md:flex gap-3">
            {socials.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="social-btn w-10 h-10 rounded-xl">
                {s.icon}
              </a>
            ))}
          </div>
          
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-white/20 text-white bg-white/10 backdrop-blur-xl"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div className={`fixed inset-0 z-[55] flex flex-col items-center justify-center gap-8 transition-all duration-700 md:hidden ${open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`} 
           style={{ 
             background: "radial-gradient(circle at center, rgba(0, 30, 45, 0.98), rgba(0, 0, 0, 1))", 
             backdropFilter: "blur(20px)", 
             WebkitBackdropFilter: "blur(20px)" 
           }}>
        
        <nav className="flex flex-col items-center gap-4">
          {links.map((l, index) => (
            <Link 
              key={l.name} 
              to={l.path} 
              className={`text-3xl font-extrabold transition-all duration-500 tracking-tight uppercase ${pathname === l.path ? 'text-cyan-400' : 'text-white'}`}
              style={{ 
                fontFamily: "'Syne', sans-serif",
                opacity: open ? 1 : 0,
                transform: open ? 'translateY(0)' : 'translateY(40px)',
                transitionDelay: `${index * 70}ms` 
              }}>
              {l.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Socials */}
        <div className="flex gap-4 mt-8" style={{ opacity: open ? 1 : 0, transitionDelay: '450ms', transform: open ? 'scale(1)' : 'scale(0.8)', transition: 'all 0.5s ease' }}>
          {socials.map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
              className="social-btn w-12 h-12 rounded-xl border-white/10 bg-white/5">
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}