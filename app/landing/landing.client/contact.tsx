"use client";

import { motion } from "framer-motion";
import type { ContactData } from "../landing.data/contact.data";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaYoutube, FaPlay } from "react-icons/fa";

interface ContactClientProps {
  contactData: ContactData;
}

export default function Contact({ contactData }: ContactClientProps) {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent inline-block">
            {contactData.title}
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center bg-gray-800 rounded-2xl p-8 shadow-xl"
          >
            <p className="text-gray-300 mb-12 leading-relaxed text-lg max-w-3xl mx-auto">
              {contactData.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="group flex flex-col items-center bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-6 rounded-xl shadow-md border border-gray-700/50 transition-transform duration-300 hover:scale-[1.03] hover:shadow-indigo-500/20 hover:shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white mb-4 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-indigo-500/40">
                  <FiMail size={28} aria-hidden="true" />
                </div>
                <h3 className="text-lg text-white font-semibold mb-2">{contactData.emailSectionTitle}</h3>
                <a 
                  href={`mailto:${contactData.email}`} 
                  className="text-gray-300 hover:text-indigo-400 transition-colors break-all"
                >
                  {contactData.email}
                </a>
              </div>

              <div className="group flex flex-col items-center bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-6 rounded-xl shadow-md border border-gray-700/50 transition-transform duration-300 hover:scale-[1.03] hover:shadow-purple-500/20 hover:shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white mb-4 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/40">
                  <FiPhone size={28} aria-hidden="true" />
                </div>
                <h3 className="text-lg text-white font-semibold mb-2">{contactData.phoneSectionTitle}</h3>
                <a 
                  href={`tel:${contactData.phone.replace(/\s/g, '')}`} 
                  className="text-gray-300 hover:text-indigo-400 transition-colors"
                >
                  {contactData.phone}
                </a>
              </div>
            </div>

            <div className="mt-16 border-t border-gray-700 pt-10">
              <h3 className="text-xl text-white font-semibold mb-8 text-center relative inline-block">
                  {contactData.youtubeSectionTitle}
              </h3>
              
              <div 
                className="max-w-xl mx-auto bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-xl overflow-hidden shadow-lg border border-gray-700"
              >
                <a 
                  href={contactData.youtube.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-8 group flex flex-col items-center transition-all duration-300 hover:bg-gray-800/50"
                >
                  <div className="flex flex-col items-center justify-center text-center gap-5 mb-6">
                    <div className="bg-gradient-to-br from-red-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-red-500/50">
                      <FaYoutube className="text-white text-3xl" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{contactData.youtube.channelName}</h4>
                      <p className="text-sm text-gray-400">{contactData.youtube.subscribers} abonnés</p>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-6 text-center leading-relaxed">{contactData.youtube.description}</p>
                  <div className="flex justify-center">
                    <motion.div 
                      className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 shadow hover:shadow-lg hover:shadow-red-500/50"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaPlay size={14} />
                      <span>{contactData.youtubeButtonText}</span>
                    </motion.div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
