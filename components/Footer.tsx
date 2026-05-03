"use client";

import Link from "next/link";
import { QrCode, Phone, Mail, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = {
  Product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Book Demo", href: "/demo" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(245,158,11,0.1)] bg-[#080808] mt-24">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="w-9 h-9 rounded-lg bg-[#F59E0B] flex items-center justify-center">
                <QrCode size={20} className="text-black" />
              </div>
              <span
                className="text-xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Smart<span className="text-gold-gradient">QR</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
              The operating system for modern restaurants. Reduce staff, increase
              efficiency, delight customers.
            </p>
            <div className="flex flex-col gap-2 text-sm text-white/50">
              <a
                href="tel:7430072400"
                className="flex items-center gap-2 hover:text-[#F59E0B] transition-colors"
              >
                <Phone size={14} />
                7430072400
              </a>
              <a
                href="tel:6297200976"
                className="flex items-center gap-2 hover:text-[#F59E0B] transition-colors"
              >
                <Phone size={14} />
                6297200976
              </a>
              <a
                href="mailto:maitresikkim@gmail.com"
                className="flex items-center gap-2 hover:text-[#F59E0B] transition-colors"
              >
                <Mail size={14} />
                maitresikkim@gmail.com
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-xs font-semibold tracking-widest uppercase text-[#F59E0B] mb-5">
                {group}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors hover-underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <p>© 2024 SmartQR Restaurant OS. All rights reserved.</p>
          <p>
            Built for modern restaurants across India.{" "}
            <span className="text-[#F59E0B]">🍽️</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
