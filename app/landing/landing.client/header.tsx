"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { HeaderData } from "../landing.data/header.data";
import { FiMenu, FiX } from "react-icons/fi";

interface HeaderClientProps {
  headerData: HeaderData;
}

export default function Header({ headerData }: HeaderClientProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-gray-900/90 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <Link href="/" className="text-2xl font-bold text-white/80">
                {headerData.logo}
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden md:flex items-center space-x-8"
            >
              <ul className="flex space-x-8">
                {headerData.menu.map((item, index) => (
                  <li key={index}>
                    <Link 
                      href={item.href}
                      className="text-gray-300 hover:text-indigo-400 transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              
            </motion.div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-indigo-400 focus:outline-none z-50 relative"
                aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={isOpen}
              >
                {isOpen ? <FiX size={24} aria-hidden="true" /> : <FiMenu size={24} aria-hidden="true" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-gray-900/70 backdrop-blur-xs z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Content */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          y: isOpen ? 0 : -20,
          pointerEvents: isOpen ? "auto" : "none"
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-20 left-0 right-0 z-40 md:hidden"
      >
        {isOpen && (
          <div className="bg-gray-800/80 backdrop-blur-sm mx-4 rounded-xl shadow-2xl p-6">
            <ul className="space-y-4 text-center">
              {headerData.menu.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="block py-2 px-4 text-gray-200 hover:text-indigo-400 text-lg font-medium transition-colors rounded-lg hover:bg-gray-700"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            
          </div>
        )}
      </motion.div>
    </>
  );
}
