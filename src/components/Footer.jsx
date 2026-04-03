import { Instagram, Linkedin, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/finova_logo.png";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/#about" },
  { name: "Domains", path: "/#domains" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" }
];

const socials = [
  { icon: <Instagram size={18} />, label: "Instagram", href: "https://www.instagram.com/finova.manipal/" },
  { icon: <Linkedin size={18} />, label: "LinkedIn", href: "https://www.linkedin.com/company/finova-mit-manipal/" },
  { icon: <Github size={18} />, label: "GitHub", href: "https://github.com/Finova-MIT" },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Team", path: "/team" },
  { name: "Events", path: "/events" },
];

export default function Footer() {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .footer-link {
          position: relative;
          display: inline-block;
          color: rgba(0, 20, 30, 0.85);
          font-size: 16px; 
          font-weight: 400;
          text-decoration: none;
          transition: color 0.25s ease;
          padding: 2px 0;
        }

        .footer-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 1px;
          background: rgba(0, 10, 20, 0.9);
          transition: width 0.25s ease;
        }

        .footer-link:hover {
          color: rgba(0, 10, 20, 1);
        }

        .footer-link:hover::after {
          width: 100%;
        }

        .footer-social:hover .footer-social-icon {
          background: rgba(0,0,0,0.2);
          border-color: rgba(0,0,0,0.35);
          color: rgba(0,10,20,0.95);
        }
      `}</style>

      <footer
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #A5F3FC 0%, #67E8F9 100%)", /* 🎨 CHANGE THIS */
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-black/10" />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(0,0,0,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-12 md:px-20 py-12 md:py-18">
          {/* Changed grid-cols-2 to grid-cols-1 for mobile responsiveness */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-14">

            {/* Quick Links */}
            <div>
              <div className="text-[12px] font-bold tracking-[0.25em] uppercase mb-5 text-black/80">
                Quick Links
              </div>
              <ul className="flex flex-col gap-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} onClick={handleLinkClick} className="footer-link">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nav Links */}
            <div>
              <div className="text-[12px] font-bold tracking-[0.25em] uppercase mb-5 text-black/80">
                Nav Links
              </div>
              <ul className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} onClick={handleLinkClick} className="footer-link">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div>
              <div className="text-[12px] font-bold tracking-[0.25em] uppercase mb-5 text-black/80">
                Socials
              </div>
              <ul className="flex flex-col gap-4">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-social flex items-center gap-3"
                    >
                      <span
                        className="footer-social-icon w-9 h-9 rounded-full border border-black/20 flex items-center justify-center transition-all duration-200"
                        style={{ color: "rgba(0,20,30,0.9)" }}
                      >
                        {s.icon}
                      </span>
                      <span className="footer-link">{s.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Brand + Contact */}
            <div className="col-span-1 md:col-span-1 flex flex-col gap-6">
              <Link to="/" onClick={handleLinkClick} className="flex items-center gap-3 w-fit">
                <img src={logo} alt="Finova" className="w-10" />
                <span
                  className="text-lg md:text-xl font-extrabold tracking-[0.12em] uppercase"
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    color: "rgba(0,10,20,0.95)",
                  }}
                >
                  FINOVA
                </span>
              </Link>

              <div>
                <div className="text-[13px] font-medium mb-3 tracking-wide text-black/80">
                  For any enquiries, contact:
                </div>
                <div className="flex flex-col gap-3">
                  <ContactLine phone="+91 97113 90266" name="Vedant Agarwal" role="President" />
                  <ContactLine phone="+91 91041 47937" name="Suhani Patel" role="Vice President" />
                </div>
              </div>

              <Link
                to="/contact"
                onClick={handleLinkClick}
                className="flex items-center gap-2 text-[13px] font-bold tracking-[0.2em] uppercase w-fit group text-black/85"
              >
                Apply Now
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-black/10">
          <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 md:px-20 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">

            <p className="text-[13px] font-medium tracking-wide text-black/85">
              Designed by{" "}
              <span className="space-x-1">
                <a href="https://www.linkedin.com/in/danielle-gonsalves7/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                  Danielle Lynn Gonsalves
                </a>
                <span>&</span>
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                  Shivom Ludhiarich
                </a>
              </span>
            </p>

            <p className="text-[13px] text-black/75">
              Manipal Institute of Technology · Karnataka, India
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

function ContactLine({ phone, name, role }) {
  return (
    <div className="flex flex-wrap items-baseline gap-2">
      <span
        className="text-[15px] font-bold"
        style={{
          color: "rgba(0,10,20,0.95)",
          fontFamily: "'Syne', sans-serif",
        }}
      >
        {phone}
      </span>
      <span className="text-[13px] text-black/75">
        {name} – {role}
      </span>
    </div>
  );
}