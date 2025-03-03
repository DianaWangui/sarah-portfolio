'use client';
import React, { useState, useEffect } from 'react';
import CloudPBXBlog from '../../blogs/components/CloudPBXBlog';
import NetworkMonitoringBlog from '../../blogs/components/NetworkMonitoringBlog';
import { BookOpen, ChevronRight } from 'lucide-react';
import { Server, Cloud, Phone, Shield, Briefcase } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const Projects = () => {
  const blogs = [
    {
      id: 'cloud-pbx',
      img: '/Images/cloud.png',
      title: 'Cloud PBX BYOI Deployment Solution',
      excerpt: 'Empower your business with a fully customizable, self-hosted P Series Cloud PBX solution. Built from scratch with virtualization, advanced clustering, and seamless networking, our P-Series Cloud PBX has already transformed communication for 180+ extensions since its launch in January 2024.',
      date: 'February 28, 2025',
      learn: 'To learn more on deployment',
      tag: 'Infrastructure',
      component: <CloudPBXBlog />
    },
    {
      id: 'network-monitoring',
      img: '/Images/image.png',
      title: 'Network Monitoring with Zabbix, Prometheus, and Grafana',
      excerpt: 'Effective network monitoring is crucial for maintaining optimal performance and security. In this guide, I will walk you through my project of deploying and configuring Zabbix, Prometheus, and Grafana for real-time network monitoring. By the end of this guide, you will have a robust setup capable of monitoring network traffic, performance, and security events.',
      date: 'February 20, 2025',
      tag: 'Networking',
      component: <NetworkMonitoringBlog />
    }
  ];

  const [selectedBlog, setSelectedBlog] = useState(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
    rootMargin: "-50px 0px"
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    visible: index => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="p-8 bg-transparent pl-[10%] pr-[14%] mt-8 lg:mt-20">
      <motion.h4
        className="text-sm font-light lg:border border-gray-[500]
                    text-[#dddddd] py-2 px-4 lg:mb-12 w-[22%] text-center
                    flex justify-center items-center gap-2
                    hover:border-gray-200 font-Poppins rounded-full"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Briefcase className="h-5 w-5" /> PROJECTS
      </motion.h4>

      <div className="max-w-6xl mx-auto">
        {selectedBlog ? (
          <div>
            <button
              onClick={() => setSelectedBlog(null)}
              className="mb-4 flex items-center text-green-500 hover:text-green-400 transition-colors duration-300"
            >
              <ChevronRight className="transform rotate-180 mr-1" size={16} />
              Back to all posts
            </button>
            {blogs.find(blog => blog.id === selectedBlog)?.component}
          </div>
        ) : (
          <>
            <div ref={ref} className="grid md:grid-cols-2 gap-6">
              {blogs.map((blog, index) => (
                <motion.div
                  key={blog.id}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate={controls}
                  className="bg-transparent rounded-lg border border-gray-500 h-full flex flex-col hover:border-gray-300 transition-all duration-300 hover:shadow-lg hover:shadow-green-900/20"
                >
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-3">
                      <span className="inline-block px-2 py-1 text-xs font-semibold bg-green-900 text-green-300 rounded-md">
                        {blog.tag}
                      </span>
                      <span className="text-sm text-gray-500">{blog.date}</span>
                    </div>

                    <div className="w-full flex justify-center mb-4 flex-grow">
                      <img
                        src={blog.img}
                        alt={blog.title}
                        className="h-40 w-3/4 object-contain"
                      />
                    </div>

                    <h3 className="text-lg font-bold mb-2 text-white">{blog.title}</h3>
                    <p className="text-gray-400 mb-4 text-xs line-clamp-2">{blog.excerpt}</p>
                    <Link href="/blogs/[id]" as={`/blogs/${blog.id}`}>
                      <button
                        className="flex items-center text-green-500 hover:text-green-400 transition-colors duration-300 mt-auto"
                      >
                        <BookOpen size={16} className="mr-1" />
                        Read More
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Projects;