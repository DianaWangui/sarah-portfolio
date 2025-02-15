"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import DataObjectIcon from "@mui/icons-material/DataObject";
import "react-circular-progressbar/dist/styles.css";

const skillsData = [
  { name: "SIP & VoIP", percentage: 85 },
  { name: "Systems (Yeastar, Yealink, Fanvil)", percentage: 90 },
  { name: "FTTH Solutions & Fiber Planning", percentage: 98 },
  { name: "Virtualization (KVM, ESXi)", percentage: 95 },
  { name: "Vulnerability Analysis & Network Monitoring", percentage: 96 },
];

const Skills = () => {
  return (
    <div className="p-8 bg-transparent pl-[10%] pr-[14%] mt-8 lg:mt-20">
      <h4 className="text-sm font-light lg:border border-gray-[700]
                     text-[#dddddd] py-2 px-4 mb-12 w-[20%] text-nowrap
                     flex items-center gap-2 decoration-inherit
                     hover:border-gray-200 font-Poppins rounded-full">
        <DataObjectIcon className="text-[#D70654]" />
        MY CRAFT
      </h4>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
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
      className="flex flex-col relative"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <div className="w-24 h-24 relative group">
        <CircularProgressbar
          value={progress}
          text={`${progress}%`}
          styles={buildStyles({
            textColor: "#fff",
            pathColor: "#FFEFC8",
            trailColor: "#374151",
            textSize: "16px",
          })}
        />

        {/* Chat Bubble Tooltip (Right Side) */}
        <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2
                        opacity-0 group-hover:opacity-100 transition-all
                        duration-300 bg-gray-800 text-white text-sm
                        p-3 rounded-lg shadow-lg whitespace-normal
                        w-[180px] max-w-xs z-50
                        before:content-[''] before:absolute
                        before:top-1/2 before:-translate-y-1/2 before:-left-2
                        before:border-8 before:border-transparent
                        before:border-r-gray-800">
          {skill.name}
        </div>
      </div>
      <p className="text-sm mt-2 text-gray-300">{skill.name}</p>
    </motion.div>
  );
};

export default Skills;
