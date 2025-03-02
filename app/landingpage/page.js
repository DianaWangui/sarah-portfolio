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
import InfiniteScrollAnimation from './components/tools2';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#181818] to-[#383838] animate-gradient-slow" />

      {/* Overlay with animated opacity */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#001f3f]/80 to-transparent" />

      {/* Animated dots overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-[length:20px_20px] animate-stars" />
        <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-[length:30px_30px] [animation-delay:0.2s] animate-stars" />
        <div className="absolute inset-0 bg-[radial-gradient(white_2px,transparent_2px)] bg-[length:40px_40px] [animation-delay:0.4s] animate-stars" />
      </div>
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
          <InfiniteScrollAnimation />
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