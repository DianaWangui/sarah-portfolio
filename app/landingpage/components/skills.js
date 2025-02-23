"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import LinuxIcon from "@mui/icons-material/Terminal";
import ZabbixIcon from "@mui/icons-material/Storage";
import GrafanaIcon from "@mui/icons-material/BarChart";
import WiresharkIcon from "@mui/icons-material/NetworkCheck";
import MikroTikIcon from "@mui/icons-material/Router";
import PrometheusIcon from "@mui/icons-material/Speed";
import KVMIcon from "@mui/icons-material/Cloud";
import SngrepIcon from "@mui/icons-material/Visibility";

const skillsData = [
  { name: "Linux", percentage: 99, icon: <LinuxIcon className="text-[#FFA500] text-5xl" /> },
  { name: "Zabbix", percentage: 80, icon: <ZabbixIcon className="text-[#DC143C] text-5xl" /> },
  { name: "Grafana", percentage: 80, icon: <GrafanaIcon className="text-[#F39C12] text-5xl" /> },
  { name: "Wireshark", percentage: 80, icon: <WiresharkIcon className="text-[#1E90FF] text-5xl" /> },
  { name: "MikroTik OS Router", percentage: 85, icon: <MikroTikIcon className="text-[#4CAF50] text-5xl" /> },
  { name: "Prometheus", percentage: 75, icon: <PrometheusIcon className="text-[#FF4500] text-5xl" /> },
  { name: "KVM / Proxmox", percentage: 90, icon: <KVMIcon className="text-[#8A2BE2] text-5xl" /> },
  { name: "sngrep", percentage: 80, icon: <SngrepIcon className="text-[#FF69B4] text-5xl" /> },
];

const Skills = () => {
  return (
    <div className="p-8 bg-transparent pl-[10%] pr-[14%] mt-8 lg:mt-20">
      <h4 className="text-sm font-light lg:border border-gray-[700]
                     text-[#dddddd] py-2 px-4 mb-12 w-[20%] text-nowrap
                     flex items-center gap-2 decoration-inherit
                     hover:border-gray-200 font-Poppins rounded-full">
        TOOLS & PROFICIENCY
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
        {skillsData.map((skill, index) => (
          <SkillProgress key={index} skill={skill} index={index} />
        ))}
      </div>
    </div>
  );
};

const SkillProgress = ({ skill, index }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start({ value: skill.percentage, transition: { duration: 2 } });
      let current = 0;
      const interval = setInterval(() => {
        current += 1;
        if (current >= skill.percentage) {
          clearInterval(interval);
        }
        setProgress(current);
      }, 20);
    } else {
      setProgress(0);
    }
  }, [inView, controls, skill.percentage]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center relative"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <div className="relative w-32 h-32 flex items-center justify-center">
        <CircularProgressbar
          value={progress}
          styles={buildStyles({
            textColor: "#fff",
            pathColor: "#4CAF50",
            trailColor: "#374151",
            textSize: "0px", // Hide default text
          })}
        />
        <div className="absolute flex flex-col items-center">
          {skill.icon}
          <p className="text-white text-lg font-bold mt-1">{progress}%</p>
        </div>
      </div>
      <p className="text-sm mt-2 text-gray-300">{skill.name}</p>
    </motion.div>
  );
};

export default Skills;
