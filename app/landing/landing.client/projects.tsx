"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { projectsUtils } from "../landing.data/projects.data";
import type { ProjectsData } from "../landing.data/projects.data";
import { FiExternalLink, FiSmartphone } from "react-icons/fi";

interface ProjectsClientProps {
  projectsData: ProjectsData;
}

export default function Projects({ projectsData }: ProjectsClientProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      const handleScroll = () => 
        projectsUtils.updateActiveIndex(carouselRef, activeIndex, setActiveIndex);
      
      carousel.addEventListener("scroll", handleScroll, { passive: true });
      return () => carousel.removeEventListener("scroll", handleScroll);
    }
  }, [activeIndex]);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/galaxie.png')] bg-cover bg-center brightness-30 blur-xs"></div>
        <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-gradient-to-bl from-purple-600/10 to-transparent rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4 w-80 h-80 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-full blur-3xl opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent inline-block">
            {projectsData.title}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {projectsData.subtitle}
          </p>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="mb-8">
          <div
            ref={carouselRef}
            className="flex snap-x snap-mandatory overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projectsData.projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="min-w-full w-full snap-center px-4"
              >
                <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col">
                  <div className="relative w-full aspect-video">
                    <Image
                      src={project.image} 
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="100vw"
                      priority={index === 0}
                    />
                  </div>
                  
                  <div className="w-full p-8 flex flex-col items-center">
                    <div>
                      <h3 className="text-2xl font-semibold mb-3 text-white text-center">{project.title}</h3>
                      <p className="text-gray-300 mb-5 text-sm md:text-base text-center">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6 justify-center">
                        {project.tech.map((tech) => (
                          <span 
                            key={tech} 
                            className="px-3 py-1 bg-indigo-900/30 text-indigo-300 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      {project.demo !== "#" ? (
                        <Link 
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium transition-colors shadow-md hover:shadow-lg active:scale-98"
                        >
                          {project.buttonIconKey === 'external' && <FiExternalLink className="mr-2" aria-hidden="true" />}
                          {project.buttonIconKey === 'app' && <FiSmartphone className="mr-2" aria-hidden="true" />}
                          {project.buttonText}
                        </Link>
                      ) : (
                        <span
                          className="inline-flex items-center px-5 py-2.5 rounded-lg bg-indigo-600 text-white text-sm font-medium shadow-md select-none"
                        >
                          {project.buttonIconKey === 'app' && <FiSmartphone className="mr-2" aria-hidden="true" />}
                          {project.buttonText}
                        </span>
                      )}
                    </div>
                    {project.message && (
                      <div className="mt-6 max-w-full mx-auto p-3 rounded-lg bg-purple-500/20 backdrop-blur-sm border border-purple-300/30">
                        <p className="text-white text-center font-semibold italic text-xs">{project.message}</p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-2">
          {projectsData.projects.map((_, index) => (
            <button
              key={index}
              onClick={() => projectsUtils.scrollToProject(carouselRef, index, projectsData.projects.length)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                activeIndex === index 
                  ? 'bg-indigo-600 w-6' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Aller au projet ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
