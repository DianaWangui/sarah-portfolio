'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Server, Cloud, Phone, Shield } from 'lucide-react';

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
    const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });
    const Icon = project.icon;

    useEffect(() => {
      if (inView) {
        controls.start({ opacity: 1, y: 0, scale: 1 });
      } else {
        controls.start({ opacity: 0, y: 50, scale: 0.9 });
      }
    }, [controls, inView]);

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={controls}
        transition={{ duration: 0.8, delay: index * 0.2 }}
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
            transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
          />
        </div>
      </motion.div>
    );
  };

  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <div className="p-8 bg-transparent pl-[10%] pr-[14%] mt-8 lg:mt-20">
      <motion.h4 
        className="text-sm font-light lg:border border-gray-[700]
                   text-[#dddddd] py-2 px-4 mb-12 w-[20%] text-nowrap
                   flex items-center gap-2 decoration-inherit
                   hover:border-gray-200 font-Poppins rounded-full"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        ref={ref}
      >
        PROJECTS
      </motion.h4>

      <div className="flex flex-col gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;