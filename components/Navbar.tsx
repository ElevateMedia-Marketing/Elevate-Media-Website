"use client";

import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      if (latest > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });

    // Handle clicks outside navbar
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("nav")) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      unsubscribe();
      document.removeEventListener("click", handleClick);
    };
  }, [scrollY]);

  const handleNavItemClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed w-full z-50 py-4 transition-all duration-300 ${
        scrolled
          ? "bg-black/30 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-3 relative group"
            onClick={handleNavItemClick}
          >
            <div className="relative bg-[#FF4D4D] p-[1px] rounded-lg transform transition-transform duration-300 group-hover:scale-105">
              <div className="absolute inset-0 bg-white/10 rounded-lg backdrop-blur-sm"></div>
              <Image
                src="/logo.webp"
                alt="Agency Logo"
                width={40}
                height={40}
                className="w-10 h-10 relative z-10 drop-shadow-lg rounded-md"
              />
            </div>
            <span className="text-2xl font-bold text-white hidden sm:inline group-hover:text-[#FF4D4D] transition-colors duration-300">
              Elevate Media
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-white hover:text-[#FF4D4D] transition-colors duration-300"
              onClick={handleNavItemClick}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-white hover:text-[#FF4D4D] transition-colors duration-300"
              onClick={handleNavItemClick}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-[#FF4D4D] transition-colors duration-300"
              onClick={handleNavItemClick}
            >
              Contact
            </Link>
            <Link
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3oZbXWCXuDBPLyEX2s7QqC1IuJc1TriNypxhgXs5qlT4_hKtASRiuDN1awCbZrowPVE4WB24g8"
              onClick={handleNavItemClick}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FF4D4D] hover:bg-[#FF3333] text-white px-6 py-2 rounded-full transition-colors duration-300"
              >
                Book Now
              </motion.button>
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: mobileMenuOpen ? 1 : 0,
            height: mobileMenuOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-black"
        >
          <div className="pt-4 pb-3 space-y-3">
            <Link
              href="/"
              className="block text-white hover:text-[#FF4D4D] transition-colors duration-300"
              onClick={handleNavItemClick}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block text-white hover:text-[#FF4D4D] transition-colors duration-300"
              onClick={handleNavItemClick}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="block text-white hover:text-[#c21111] transition-colors duration-300"
              onClick={handleNavItemClick}
            >
              Contact
            </Link>
            <Link
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3oZbXWCXuDBPLyEX2s7QqC1IuJc1TriNypxhgXs5qlT4_hKtASRiuDN1awCbZrowPVE4WB24g8"
              className="block mt-8"
              onClick={handleNavItemClick}
            >
              <button className="w-full bg-[#FF4D4D] hover:bg-[#FF3333] text-white px-6 py-2 rounded-full transition-colors duration-300">
                Book Now
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
