"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 py-4 px-6 backdrop-blur-md shadow-lg transition ${
        scrolled ? "bg-blue-500 bg-opacity-90" : "bg-blue-300 bg-opacity-80"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white tracking-widest">
          AJC DroneWorks
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Nav Links */}
        <div
          className={`flex-col md:flex-row md:flex gap-6 text-white text-lg absolute md:static top-full left-0 w-full md:w-auto bg-blue-300 md:bg-transparent bg-opacity-95 md:bg-opacity-100 p-6 md:p-0 transition-all duration-300 ease-in-out ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          <Link href="/" className="hover:text-cyan-400 transition">Home</Link>
          <Link href="/services" className="hover:text-cyan-400 transition">Services</Link>
          <Link href="/portfolio" className="hover:text-cyan-400 transition">Portfolio</Link>
          <Link href="/contact" className="hover:text-cyan-400 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
