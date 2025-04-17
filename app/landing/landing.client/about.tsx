"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiLayout, FiServer, FiDatabase } from "react-icons/fi";
import type { IconType } from "react-icons";
import type { AboutData, CardData } from "../landing.data/about.data";
import "../landing.style/about.style.css";

const iconMap: { [key: string]: IconType } = {
  FiLayout: FiLayout,
  FiDatabase: FiDatabase,
  FiServer: FiServer,
};

const borderColors = ["border-green", "border-orange", "border-purple"];
const iconBgColors = [
  "bg-gradient-to-br from-teal-900/30 to-cyan-900/30 text-teal-400",
  "bg-gradient-to-br from-orange-900/30 to-red-900/30 text-orange-400",
  "bg-gradient-to-br from-purple-900/30 to-indigo-900/30 text-purple-400",
];

interface AboutClientProps {
  aboutData: AboutData;
  cardData: CardData[];
}

export default function About({ aboutData, cardData }: AboutClientProps) {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent inline-block">
            {aboutData.title}
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:w-5/12 w-full max-w-md mx-auto"
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg shadow-indigo-900/30">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/dev.png"
                  alt="Anthony Marandon - Développeur web indépendant"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:w-7/12 text-center lg:text-left"
          >
            <h3 
              className="relative text-2xl font-semibold mb-6 italic 
                         bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-400 
                         animate-gradient bg-clip-text text-transparent glitch"
              data-text={aboutData.subtitle}
            >
              {aboutData.subtitle}
            </h3>
            <div className="space-y-5">
              {aboutData.description.map((paragraph, index) => (
                <p key={index} className="text-gray-300 leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {cardData.map((card, index) => {
            const IconComponent = iconMap[card.icon];
            const borderColor = borderColors[index % borderColors.length];
            const iconBgColor = iconBgColors[index % iconBgColors.length];

            return (
              <div
                key={index}
                className={`animated-border-card ${borderColor} shadow-md transition-shadow duration-300 text-center transform`}
              >
                <div className="card-content">
                  <div className={`w-16 h-16 mx-auto mb-5 ${iconBgColor} rounded-full flex items-center justify-center ring-4 ring-gray-800`}>
                    {IconComponent && <IconComponent size={28} aria-hidden="true" />}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{card.title}</h3>
                  <p className="text-gray-400 text-sm">{card.subtitle}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
