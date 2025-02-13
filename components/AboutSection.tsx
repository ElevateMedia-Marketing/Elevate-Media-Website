"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="bg-zinc-950 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-2xl overflow-hidden"
          >
            <Image
              src="/logo.webp"
              alt="About Us"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pl-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Elevating Brands Through
              <span className="text-[#FF4D4D]"> Digital Excellence</span>
            </h2>

            <div className="space-y-4 text-gray-400">
              <p>
                We're more than just a marketing agency – we're your strategic
                partner in digital transformation. With years of experience and
                a passion for innovation, we help businesses thrive in the
                digital landscape.
              </p>
              <p>
                Our team of experts combines creativity with data-driven
                insights to deliver exceptional results that drive real business
                growth.
              </p>
            </div>

            {/* <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <h3 className="text-4xl font-bold text-[#FF4D4D] mb-2">150+</h3>
                <p className="text-white">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-[#FF4D4D] mb-2">98%</h3>
                <p className="text-white">Client Satisfaction</p>
              </div>
            </div> */}

            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 bg-[#FF4D4D] hover:bg-[#FF3333] text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300"
            >
              Learn More
            </motion.button> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
