"use client";

import { motion } from "framer-motion";
import type { SkillItem, SkillsSectionData } from "../landing.data/skills.data";
import { FaReact, FaGithub } from "react-icons/fa";
import { SiPrisma, SiTypescript } from "react-icons/si";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { DiPostgresql } from "react-icons/di";
import React, { useState, useEffect } from "react";

const iconComponents: { [key: string]: React.ReactElement } = {
  "FaReact": <FaReact size={32} />,
  "TbBrandNextjs": <TbBrandNextjs size={32} />,
  "TbBrandTailwind": <TbBrandTailwind size={32} />,
  "DiPostgresql": <DiPostgresql size={32} />,
  "FaGithub": <FaGithub size={32} />,
  "SiPrisma": <SiPrisma size={32} />,
  "SiTypescript": <SiTypescript size={32} />,
};

interface SkillsClientProps {
  mainStack: SkillItem[];
  GLOW_INTERVAL: number;
  skillsSection: SkillsSectionData;
}

export default function Skills({ mainStack, GLOW_INTERVAL, skillsSection }: SkillsClientProps) {
  const [glowingIndex, setGlowingIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGlowingIndex((prevIndex) => (prevIndex + 1) % mainStack.length);
    }, GLOW_INTERVAL);

    return () => clearInterval(intervalId);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section id="skills" className="py-24 bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent inline-block">
            {skillsSection.title}
          </h2>
          <p className="text-gray-300 max-w-full mx-auto mb-4">
            {skillsSection.description}
          </p>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full mb-16"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {mainStack.map((tech, index) => {
            const isGlowing = index === glowingIndex;
            return (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                className={`
                  group relative p-6 rounded-xl
                  bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg
                  border border-transparent
                  hover:border-purple-500/50
                  transition-all duration-300 ease-in-out
                  transform hover:-translate-y-1
                  ${isGlowing ? 'ring-2 ring-teal-400/60 shadow-teal-400/10' : ''}
                `}
              >
                {isGlowing && (
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-xl blur opacity-20 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                )}
                <div className={`relative flex flex-col items-center justify-center space-y-3 ${tech.color}`}>
                  {iconComponents[tech.iconName] && (
                    <span className="transition-transform duration-300 group-hover:scale-110">
                      {iconComponents[tech.iconName]}
                    </span>
                  )}
                  <span className="font-semibold text-gray-200 text-sm sm:text-base">{tech.name}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
