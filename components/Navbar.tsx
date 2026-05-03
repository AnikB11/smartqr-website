"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { QrCode, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#080808]/95 backdrop-blur-xl border-b border-[rgba(245,158,11,0.12)]"
            : "bg-transparent"
        }`}
        style={{ height: 80 }}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-[#F59E0B] flex items-center justify-center glow-gold-sm transition-all duration-300 group-hover:scale-110">
              <QrCode size={20} className="text-black" />
            </div>
            <span
              className="font-display font-700 text-xl tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
            >
              Smart<span className="text-gold-gradient">QR</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium hover-underline transition-colors duration-200 ${
                    active
                      ? "text-[#F59E0B]"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="text-sm text-white/60 hover:text-white transition-colors px-4 py-2"
            >
              Log in
            </Link>
            <Link
              href="/demo"
              className="text-sm font-semibold bg-[#F59E0B] text-black px-5 py-2.5 rounded-lg hover:bg-[#FBBF24] transition-all duration-200 hover:scale-105 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]"
            >
              Book Demo
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white/70 hover:text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#080808]/98 backdrop-blur-xl flex flex-col pt-24 pb-10 px-8"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    className={`text-2xl font-medium block ${
                      pathname === link.href ? "text-[#F59E0B]" : "text-white/80"
                    }`}
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="mt-auto flex flex-col gap-3">
              <Link
                href="/demo"
                className="text-center font-semibold bg-[#F59E0B] text-black px-6 py-3.5 rounded-xl text-lg"
              >
                Book Demo
              </Link>
              <Link
                href="/contact"
                className="text-center text-white/60 py-3"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
