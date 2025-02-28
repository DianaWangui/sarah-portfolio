'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Server, Cloud, Phone, Shield, Briefcase } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Cloud PBX & VMS',
      description: 'Deployed and sold P-Series Cloud PBX instances across multiple regions. With 176 extensions sold and 15PBXs sold',
      icon: Phone,
      color: '#4CAF50'
    },
    {
      title: 'Data Center Deployments',
      description: 'colocation solutions',
      icon: Server,
      color: '#1E90FF'
    },
    {
      title: 'Secure VPN Solutions',
      description: 'Telephony & CRM Integration: Integrated Yeastar Cloud PBX with CRM, Microsoft Teams, and call center solutions.',
      icon: Cloud,
      color: '#FFA500'
    },
    {
      title: 'Cybersecurity & Network Security',
      description: 'Hands-on experience with packet analysis (Wireshark, sngrep) and vulnerability management.',
      icon: Shield,
      color: '#8A2BE2'
    }
  ];

  const ProjectCard = ({ project, index }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: false,
      threshold: 0.2,
      rootMargin: "-50px 0px" // Makes animation trigger slightly earlier
    });
    const Icon = project.icon;

    useEffect(() => {
      if (inView) {
        controls.start({
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.5, delay: index * 0.2 }
        });
      } else {
        controls.start({
          opacity: 0,
          y: 20, // Reduced from 50 to make it less dramatic
          scale: 0.95, // Less dramatic scale change (was 0.9)
          transition: { duration: 0.3 } // Faster fade out
        });
      }
    }, [controls, inView, index]);

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20, scale: 0.95 }} // Less dramatic initial state
        animate={controls}
        className="group relative w-full"
      >
        <div className="relative border border-gray-700 p-6 rounded-xl
                       bg-gray-800/50 backdrop-blur-sm shadow-lg
                       hover:border-gray-500 transition-all duration-500
                       hover:bg-gray-800/80">
          <div className="flex items-start gap-4">
            <motion.div
              className="p-3 rounded-xl shadow-lg"
              style={{ backgroundColor: `${project.color}30` }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Icon className="h-6 w-6" style={{ color: project.color }} />
            </motion.div>

            <div className="flex-1">
              <h3 className="text-lg font-semibold"
                style={{ color: project.color }}>
                {project.title}
              </h3>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed
                           group-hover:text-gray-300 transition-colors duration-300">
                {project.description}
              </p>
            </div>
          </div>

          <motion.div
            className="absolute inset-0 border border-transparent rounded-xl"
            initial={false}
            animate={inView ? { borderColor: `${project.color}20` } : { borderColor: 'transparent' }}
            transition={{ duration: 1, delay: index * 0.2 + 0.3 }}
          />
        </div>
      </motion.div>
    );
  };

  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <div className="p-8 bg-transparent pl-[10%] pr-[14%] mt-8 lg:mt-20">
      <motion.h4
        className="text-lg font-bold bg-gradient-to-r from-gray-800 to-gray-700 text-white py-2 px-6 inline-flex items-center gap-2 mb-12 font-Poppins rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        ref={ref}
      >
        <Briefcase className="h-5 w-5" /> PROJECTS
      </motion.h4>

      <div className="grid grid-cols-1 gap-6"> {/* Reduced gap from 8 to 6 */}
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;