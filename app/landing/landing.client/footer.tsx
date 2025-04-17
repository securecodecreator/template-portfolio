"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { FooterData } from "../landing.data/footer.data";
import { FaBook, FaShieldAlt } from "react-icons/fa";

interface FooterClientProps {
  footerData: FooterData;
}

export default function Footer({ footerData }: FooterClientProps) {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-500 text-sm text-center md:text-left">
            {footerData.copyright}
          </p>
          <div className="flex items-center mt-4 md:mt-0 space-x-6">
            <Link 
              href="/privacy/mentions-legales" 
              className="text-gray-400 hover:text-indigo-400 transition-colors"
              aria-label="Mentions légales"
            >
              <FaBook className="w-5 h-5" />
            </Link>
            <Link 
              href="/privacy" 
              className="text-gray-400 hover:text-indigo-400 transition-colors"
              aria-label="Politique de confidentialité"
            >
              <FaShieldAlt className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
