'use client';

import React from 'react';
import { motion } from 'framer-motion';
import type { AIProgrammerData, CardTheme } from '../landing.data/aiprogrammer.data';
import { FiCpu, FiCode, FiZap } from 'react-icons/fi';
import '../landing.style/aiprogrammer.style.css';

const iconComponents: { [key: string]: React.ElementType } = {
  Code: FiCode,
  Brain: FiCpu,
  Sparkles: FiZap,
  Default: FiCpu,
};

interface AIProgrammerClientProps {
  aiProgrammerData: AIProgrammerData;
  cardThemes: CardTheme[];
}

export default function AIProgrammer({ aiProgrammerData, cardThemes }: AIProgrammerClientProps) {
  const data: AIProgrammerData = aiProgrammerData;

  return (
    <section id={data.id} className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/galaxie.png')] bg-cover bg-center brightness-30 blur-xs"></div>
        <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-gradient-to-br from-emerald-600/10 to-transparent rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-80 h-80 bg-gradient-to-tl from-emerald-500/10 to-transparent rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent inline-block">
            {data.title}
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            {data.subtitle}
          </p>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mt-5 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {data.collaborationPoints.map((point, index) => {
            const IconComponent = iconComponents[point.icon] || iconComponents.Default;
            const theme: CardTheme = cardThemes[index % cardThemes.length];
            const colorClass = [`aip-border-indigo`, `aip-border-teal`, `aip-border-rose`][index % cardThemes.length];
            const animationClass = index === 0 ? 'aip-animation-fast' : 'aip-animation-normal';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`aip-animated-border-card ${colorClass} ${animationClass} rounded-xl p-6 text-center shadow-lg transition-all duration-300 transform hover:-translate-y-1 relative`}
              >
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${theme.gradient} rounded-full flex items-center justify-center ${theme.textColor} ring-4 ring-gray-800 transition-all duration-300 relative z-10`}>
                  <IconComponent size={28} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white relative z-10">{point.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed relative z-10">{point.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 