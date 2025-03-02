'use client';

import React, { useEffect } from 'react';
import { Monitor, Radio, Terminal, Cloud, Share2, Server, Shield, Award } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const specializations = [
  { title: "Network Monitoring & Observability", description: "Zabbix, Grafana, Prometheus, MikroTik Torch", icon: Monitor, color: "#4CAF50" },
  { title: "VoIP & SIP Communications", description: "sngrep, Wireshark, Yeastar", icon: Radio, color: "#1E90FF" },
  { title: "Linux System Administration", description: "Expert in Linux server deployment, security, and automation", icon: Terminal, color: "#FFA500" },
  { title: "Virtualization & Cloud Infrastructure", description: "KVM, Proxmox, ESXi", icon: Cloud, color: "#8A2BE2" },
  { title: "Solution Architecture & Design", description: "Fiber planning, structured cabling, CCTV, biometrics, WiFi 6 & 7", icon: Share2, color: "#F39C12" },
  { title: "Routing, Switching & VPNs", description: "VLANs, MikroTik, Cisco, VPNs (IPsec, WireGuard, OpenVPN)", icon: Server, color: "#DC143C" },
  { title: "Vulnerability Analysis & Incident Response", description: "Security assessment and incident management", icon: Shield, color: "#FF4500" },
];

const SpecializationCard = ({ spec, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });
  const Icon = spec.icon;

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
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group relative"
    >
      <div className="relative border border-gray-700 p-6 rounded-xl
                     bg-gray-800/50 backdrop-blur-sm shadow-lg
                     hover:border-gray-500 transition-all duration-500
                     hover:bg-gray-800/80">
        <div className="flex items-start gap-4">
          <motion.div
            className="p-3 rounded-xl shadow-lg"
            style={{ backgroundColor: `${spec.color}30` }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Icon className="h-6 w-6" style={{ color: spec.color }} />
          </motion.div>

          <div className="flex-1">
            <h3 className="text-lg font-semibold"
                style={{ color: spec.color }}>
              {spec.title}
            </h3>
            <p className="text-sm text-gray-400 mt-2 leading-relaxed
                         group-hover:text-gray-300 transition-colors duration-300">
              {spec.description}
            </p>
          </div>
        </div>

        <motion.div
          className="absolute inset-0 border border-transparent rounded-xl"
          initial={false}
          animate={inView ? { borderColor: `${spec.color}20` } : { borderColor: 'transparent' }}
          transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
        />
      </div>
    </motion.div>
  );
};

const Specializations = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <div className="p-8 bg-transparent pl-[10%] pr-[14%] mt-8 lg:mt-20">
      <motion.h4
        className="text-sm font-light lg:border border-gray-[500]
                     text-[#dddddd] py-2 px-4 lg:mb-12 w-[22%] text-center
                     flex justify-center items-center gap-2
                    hover:border-gray-200 font-Poppins rounded-full"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        ref={ref}
        whileHover={{ scale: 1.03 }}
      >
        <Award className="h-5 w-5" /> SPECIALIZATIONS
      </motion.h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {specializations.map((spec, index) => (
          <SpecializationCard key={index} spec={spec} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Specializations;