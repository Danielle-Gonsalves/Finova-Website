import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/AboutUs";
import Domains from "./components/Domains";
import Board from "./components/Board";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Domains />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-black text-white">
      
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Board />} />
          <Route path="/events" element={<Events />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}