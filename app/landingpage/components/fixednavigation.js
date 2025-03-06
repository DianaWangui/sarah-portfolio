'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Home, 
  Target, 
  Wrench, 
  FolderKanban, 
  Briefcase, 
  GraduationCap, 
  MailIcon
} from 'lucide-react';

const FixedNavigation = () => {
  // Track active section
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', icon: <Home size={20} strokeWidth={1.5} />, href: '#home' },
    { id: 'specializations', icon: <Target size={20} strokeWidth={1.5} />, href: '#specializations' },
    { id: 'tools', icon: <Wrench size={20} strokeWidth={1.5} />, href: '#tools' },
    { id: 'projects', icon: <FolderKanban size={20} strokeWidth={1.5} />, href: '#projects' },
    { id: 'experience', icon: <Briefcase size={20} strokeWidth={1.5} />, href: '#experience' },
    { id: 'education', icon: <GraduationCap size={20} strokeWidth={1.5} />, href: '#education' },
    { id: 'contact', icon: <MailIcon size={20} strokeWidth={1.5} />, href: '#contact' }
  ];

  const handleClick = (id) => {
    setActiveSection(id);
    
    // Add smooth scrolling
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
      <div className="bg-black/20 backdrop-blur-md rounded-full py-6 px-3 shadow-xl border border-white/10">
        <ul className="flex flex-col items-center space-y-7">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleClick(item.id)}
                className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'bg-white/20 text-white shadow-md' 
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
                aria-label={`Navigate to ${item.id} section`}
              >
                {item.icon}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FixedNavigation;