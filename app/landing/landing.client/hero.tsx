"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import type { HeroData } from "../landing.data/hero.data";
import { FiArrowRight } from "react-icons/fi";

interface HeroClientProps {
  heroData: HeroData;
}

export default function Hero({ heroData }: HeroClientProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-black/70">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/galaxie.png"
          alt="Fond galaxie"
          fill
          className="object-cover blur-xs"
        />
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between">
          <motion.div 
            className="md:w-3/5 mt-10 md:mt-0 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-[url('/code.png')] bg-cover bg-center bg-clip-text text-transparent saturate-200 brightness-125"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              {heroData.title}
            </motion.h1>
            
            <motion.p 
              className="text-gray-200 mb-8 text-lg max-w-xl mx-auto md:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {heroData.description}
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {heroData.cta.map((button, index) => (
                <Link 
                  key={index}
                  href={button.href}
                  className={`flex items-center ${
                    button.primary 
                      ? "bg-purple-700 text-white shadow-lg shadow-purple-500/30 hover:bg-purple-600 hover:shadow-xl hover:shadow-purple-500/50" 
                      : "bg-transparent border border-purple-600 text-purple-300 shadow-md shadow-purple-900/20 hover:bg-purple-900/30 hover:text-white hover:border-purple-500 hover:shadow-lg hover:shadow-purple-700/40"
                  } px-6 py-3 rounded-lg font-medium transition-all duration-300 ease-in-out`}
                >
                  {button.title}
                  <FiArrowRight className="ml-2" aria-hidden="true" />
                </Link>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-2/5 relative mx-auto md:mx-0 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-indigo-400 to-purple-500 opacity-80 blur-2xl animate-pulse z-11" aria-hidden="true"></div>
              <div className="relative w-full h-full rounded-full shadow-2xl overflow-hidden z-12">
                <Image 
                  src="/avatar.png" 
                  alt="Anthony"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 16rem, 20rem"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
