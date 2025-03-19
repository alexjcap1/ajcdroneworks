import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
      scrolled ? "bg-black bg-opacity-80 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"
    }`}>
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white tracking-widest">
          AJC DroneWorks
        </Link>

        {/* Nav Links */}
        <div className="flex gap-6 text-white text-lg">
          <Link href="/" className="hover:text-cyan-400 transition">Home</Link>
          <Link href="/services" className="hover:text-cyan-400 transition">Services</Link>
          <Link href="/portfolio" className="hover:text-cyan-400 transition">Portfolio</Link>
          <Link href="/contact" className="hover:text-cyan-400 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
