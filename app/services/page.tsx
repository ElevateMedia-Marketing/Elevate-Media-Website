"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Targeted Advertising Campaigns",
    description:
      "Unleash the potential of your brand with our tailored digital marketing strategies, expertly designed to enhance engagement and drive growth. Our techniques are crafted to suit your unique market and ensure measurable results.",
    image: "/ads.webp",
    icon: "/target-icon.svg",
  },
  {
    id: 2,
    title: "Pay-Per-Click (PPC) Advertising Solutions",
    description:
      "Optimize your outreach with SmartCampaign Solutions, a comprehensive suite of tools designed to automate marketing processes while enhancing campaign effectiveness. Streamline workflows, personalize customer interactions, and boost engagement seamlessly.",
    image: "/ppc.avif",
    icon: "/ppc-icon.svg",
  },
  {
    id: 3,
    title: "Strategic Marketing Planning",
    description:
      "Drive engagement with expertly crafted content that resonates with your audience. Our team delivers end-to-end content management, ensuring consistency and quality across all digital platforms.",
    image: "/strategy.webp",
    icon: "/strategy-icon.svg",
  },
];

export default function Services() {
  return (
    <main className="bg-black pt-24">
      <div className="max-w-7xl mx-auto sm:px-6 max-sm:px-3">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-[#FF4D4D]">Services</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            At Elevate Media, we provide a full suite of digital marketing
            services tailored to your business needs. Our expert team is
            dedicated to driving results and enhancing your online presence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-24 pb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="relative h-[400px] rounded-2xl overflow-hidden group">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md rounded-xl p-4">
                  <Image
                    src={service.icon}
                    alt={`${service.title} icon`}
                    width={40}
                    height={40}
                  />
                </div> */}
              </div>

              <div className={`${index % 2 === 1 ? "md:pr-12" : "md:pl-12"}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {service.title}
                </h2>
                <p className="text-gray-400 mb-8 text-lg">
                  {service.description}
                </p>
                <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3oZbXWCXuDBPLyEX2s7QqC1IuJc1TriNypxhgXs5qlT4_hKtASRiuDN1awCbZrowPVE4WB24g8">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#FF4D4D] hover:bg-[#FF3333] text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300"
                  >
                    Book Now
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
