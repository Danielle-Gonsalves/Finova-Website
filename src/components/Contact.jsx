import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Instagram, Linkedin, Github, Mail, ArrowRight, Send, MapPin, Info, Phone } from "lucide-react";
import { GlowCard } from "./ui/spotlight-card";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const socials = [
    { icon: <Instagram size={22} />, label: "INSTAGRAM", handle: "@finova.manipal", link: "https://instagram.com/finova.manipal" },
    { icon: <Linkedin size={22} />, label: "LINKEDIN", handle: "Finova Manipal", link: "https://www.linkedin.com/company/finova-mit-manipal" },
    { icon: <Github size={22} />, label: "GITHUB", handle: "Finova-MIT", link: "https://github.com/Finova-MIT" },
    { icon: <Mail size={22} />, label: "EMAIL", handle: "finova.mit.manipal@gmail.com", link: "mailto:finova.mit.manipal@gmail.com" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          reply_to: form.email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500;700&display=swap');
        .contact-eyebrow::before { content: ''; display: block; width: 28px; height: 1px; background: rgba(255,255,255,0.33); flex-shrink: 0; }
        .contact-h2 { font-size: clamp(34px, 5.5vw, 88px); line-height: 0.91; letter-spacing: -0.03em; }
        .contact-h2-outline { color: transparent; -webkit-text-stroke: 1.5px rgba(255,255,255,0.27); }
        .input-field { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; padding: 16px; width: 100%; outline: none; color: white; font-family: 'DM Sans', sans-serif; transition: border-color 0.3s; }
        .input-field:focus { border-color: #06B6D4; }
        .cyan-footer-btn { background: #7DE7FF; color: #000; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; font-size: 11px; display: flex; align-items: center; justify-content: center; gap: 10px; border-radius: 12px; transition: all 0.3s ease; font-family: 'DM Sans', sans-serif; border: none; }
        .cyan-footer-btn:hover { opacity: 0.85; transform: translateY(-1px); }
        .social-card { transition: all 0.25s; border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.02); }
        .social-card:hover { border-color: rgba(6, 182, 212, 0.4); background: rgba(6, 182, 212, 0.05); }
        .info-header { font-size: 14px; font-weight: 700; letter-spacing: 0.2em; color: white; text-transform: uppercase; display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
        .phone-link { color: rgba(255,255,255,0.5); font-weight: 500; font-size: 0.800rem; letter-spacing: 0.05em; transition: color 0.2s; text-decoration: none; }
        .phone-link:hover { color: #06B6D4; }
      `}</style>

      <section id="contact" className="relative bg-black text-white min-h-screen py-20 md:py-28 overflow-hidden">
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-10 md:px-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-10">
            <div>
              <div className="contact-eyebrow inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.2em] text-[#89f3ff] uppercase mb-5">Get In Touch</div>
              <h2 className="contact-h2 font-extrabold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                Contact <span className="contact-h2-outline">Us</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm md:text-base font-light text-white/45 leading-[1.85]">
              Have a question, collab idea, or just want to say hello? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
            <div className="lg:col-span-3 flex flex-col gap-6">
              <GlowCard className="p-9 md:p-10 rounded-2xl border border-white/10 bg-black/40">
                <div className="text-[14px] font-bold tracking-[0.22em] text-white/70 uppercase mb-8">Send a Message</div>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input className="input-field" placeholder="Name" name="name" value={form.name} onChange={handleChange} required />
                    <input className="input-field" placeholder="Email" type="email" name="email" value={form.email} onChange={handleChange} required />
                  </div>
                  <textarea className="input-field" rows={10} placeholder="Message" name="message" value={form.message} onChange={handleChange} required />
                  <button type="submit" disabled={isSending} className="cyan-footer-btn w-full py-4">
                    {isSending ? "Sending..." : "Send Message"} <Send size={14} />
                  </button>
                  {status && <p className="text-sm text-[#89f3ff]">{status}</p>}
                </form>
              </GlowCard>

              <GlowCard className="p-9 rounded-2xl border border-white/10 bg-black/40 flex-grow">
                <div className="flex flex-col h-full">
                  <div>
                    <div className="info-header"><Info size={18} className="text-[#89f3ff]" /> <div className="text-[14px] font-bold tracking-[0.22em] text-white/70 uppercase">About FINOVA</div></div>
                    <p className="text-lg font-light text-white/55 leading-relaxed">A student-driven community at MIT Manipal merging finance and technology through specialized research and innovation.</p>
                  </div>
                  <div className="h-px bg-white/10 w-full my-8" />
                  <div className="mt-auto">
                    <div className="info-header"><MapPin size={18} className="text-[#89f3ff]" /> <div className="text-[14px] font-bold tracking-[0.22em] text-white/70 uppercase">Location</div></div>
                    <p className="text-lg font-light text-white/55 leading-relaxed">Manipal Institute of Technology,<br />Karnataka - 576104, India</p>
                  </div>
                </div>
              </GlowCard>
            </div>

            <div className="lg:col-span-2 flex flex-col gap-6">
              <GlowCard className="p-8 md:p-10 rounded-2xl border border-white/10 bg-black/40">
                <div className="text-[14px] font-bold tracking-[0.22em] text-white/70 uppercase mb-8">Find Us Online</div>
                <div className="space-y-4">
                  {socials.map((s, i) => (
                    <a key={i} href={s.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-5 rounded-xl social-card group">
                      <div className="flex items-center gap-5">
                        <span className="text-[#89f3ff] group-hover:text-cyan-400 transition-colors">{s.icon}</span>
                        <div>
                          <div className="text-[11px] font-bold text-white/40 uppercase tracking-widest mb-1">{s.label}</div>
                          <div className="text-base md:text-lg font-bold text-white/90 group-hover:text-white transition-colors tracking-tight">{s.handle}</div>
                        </div>
                      </div>
                      <ArrowRight size={18} className="text-white/10 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </a>
                  ))}
                </div>
              </GlowCard>

              <GlowCard className="p-9 md:p-10 rounded-2xl border border-white/10 bg-black/40 flex-grow min-h-[400px]">
                <div className="flex items-center gap-3 mb-10"><Phone size={18} className="text-[#89f3ff]" /><div className="text-[14px] font-bold tracking-[0.22em] text-white/70 uppercase">Direct Contact</div></div>
                <div className="flex flex-col h-[calc(100%-60px)]">
                  <div>
                    <div className="text-[11px] font-bold text-[#89f3ff] uppercase tracking-[0.2em] mb-3">President</div>
                    <div className="text-1xl font-extrabold text-white mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>Vedant Agarwal</div>
                    <a href="tel:+919711390266" className="phone-link">+91 97113 90266</a>
                  </div>
                  <div className="h-px bg-white/10 w-full my-8" />
                  <div className="mt-auto">
                    <div className="text-[11px] font-bold text-[#89f3ff] uppercase tracking-[0.2em] mb-3">Vice President</div>
                    <div className="text-1xl font-extrabold text-white mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>Suhani Patel</div>
                    <a href="tel:+919104147937" className="phone-link">+91 91041 47937</a>
                  </div>
                </div>
              </GlowCard>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
