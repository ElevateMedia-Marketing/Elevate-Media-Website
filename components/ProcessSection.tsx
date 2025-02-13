"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const processes = [
  {
    id: 1,
    title: "Discovery",
    description:
      "We dive deep into understanding your brand, goals, and target audience to create a tailored strategy.",
    image: "/discovery.jpg",
  },
  {
    id: 2,
    title: "Strategy",
    description:
      "Our team develops a comprehensive plan aligned with your business objectives and market positioning.",
    image: "/strategy.webp",
  },
  {
    id: 3,
    title: "Execution",
    description:
      "We bring your vision to life with cutting-edge technology and creative excellence.",
    image: "/execution.webp",
  },
];

const ProcessSection = () => {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How We <span className="text-[#FF4D4D]">Work</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our proven process ensures consistent results and exceptional
            delivery for every project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <motion.div
              key={process.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-zinc-900/50 rounded-2xl overflow-hidden h-full backdrop-blur-sm border border-white/5 hover:border-[#FF4D4D]/20 transition-all duration-300">
                <div className="relative h-64 w-full">
                  <Image
                    src={process.image}
                    alt={process.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                </div>
                <div className="p-6 relative">
                  <div className="absolute -top-20 left-6 w-12 h-12 bg-[#FF4D4D] rounded-full flex items-center justify-center text-xl font-bold text-white">
                    {process.id}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {process.title}
                  </h3>
                  <p className="text-gray-400">{process.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
