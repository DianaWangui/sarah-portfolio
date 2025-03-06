'use client';

import React from 'react';
import Image from 'next/image';
import About from './components/about';
import Tools from './components/tools';
import Experience from './components/experience';
import Education from './components/education';
import Contact from './components/contact';
import SideCard from './components/sidecard';
import Specializations from './components/specialization';
import Projects from './components/projects'
import Achievements from './components/achievements';
import ToolsGrid from './components/tools2';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Background image from public folder */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/Images/bg.jpg)" }}
      />

      {/* Optional overlay for better contrast */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
};


const Home = () => {
  return (
    <div className="relative min-h-screen bg-black bg-[url(/Images/bg-camera.jpg)] bg-fixed ... bg-opacity-75 bg-blend-multiply bg-cover bg-center bg-no-repeat">
      <AnimatedBackground />
      <div className="relative w-full flex flex-col lg:flex-row">
        <SideCard />
        <div className="w-full lg:w-[76%] lg:ml-[24%]">
          <About />
          <Achievements />
          <Specializations />
          <Tools />
          <ToolsGrid />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;