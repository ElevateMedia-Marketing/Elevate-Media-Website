"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const social = [
  {
    icon: "facebook.png",
    link: "https://www.facebook.com/profile.php?id=61554706495086#",
  },
  {
    icon: "linkedin.png",
    link: "https://www.linkedin.com/company/elevatemedia-marketing/?viewAsMember=true",
  },
  {
    icon: "Instagram.png",
    link: "#",
  },
  {
    icon: "x.svg",
    link: "#",
  },
];

const Footer = () => {
  return (
    <footer className="bg-zinc-950 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.webp"
                alt="Agency Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold text-white">
                Elevate Media
              </span>
            </Link>
            <p className="text-gray-400">
              Transforming brands through innovative digital solutions.
            </p>
            <div className="flex space-x-4">
              {social.map((social) => (
                <motion.a
                  key={social.icon}
                  href={`${social.link}`}
                  target={
                    social.icon === "Instagram.png" || social.icon === "x.svg"
                      ? ""
                      : "_blank"
                  }
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="text-gray-400 hover:text-[#FF4D4D] transition-colors duration-300"
                >
                  <Image
                    src={`/${social.icon}`}
                    alt={social.icon}
                    width={24}
                    height={24}
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {["Home", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`${item === "Home" ? "/" : item.toLowerCase()}`}
                    className="text-gray-400 hover:text-[#FF4D4D] transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              {[
                "Targeted Advertising Campaigns",
                "Pay-Per-Click (PPC) Advertising",
                "Strategic Marketing Planning",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-[#FF4D4D] transition-colors duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <ul className="space-y-4 text-gray-400">
              {/* <li>123 Business Street</li>
              <li>New York, NY 10001</li> */}
              <li>info@elevatemedia-marketing.com</li>
              {/* <li>+1 (555) 123-4567</li> */}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Elevate Media. All rights reserved.
            </p>
            {/* <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-[#FF4D4D] text-sm transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-[#FF4D4D] text-sm transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
