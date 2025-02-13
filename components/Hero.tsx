"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="pt-24 lg:pt-0"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Transform Your{" "}
                <span className="text-[#FF4D4D]">Digital Presence</span>
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-gray-300 mb-8 max-w-xl"
            >
              We craft innovative digital solutions that help brands stand out
              and achieve remarkable growth in the digital landscape.
            </motion.p>
            <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3oZbXWCXuDBPLyEX2s7QqC1IuJc1TriNypxhgXs5qlT4_hKtASRiuDN1awCbZrowPVE4WB24g8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#FF4D4D] hover:bg-[#FF3333] text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300 max-md:w-full"
                >
                  Get Started
                </motion.button>
              </motion.div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF4D4D]/10 to-transparent rounded-2xl">
              <Image
                src="/hero.png"
                alt="Marketing Illustration"
                fill
                className="object-cover rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
