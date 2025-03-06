'use client';

import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Target, 
  Wrench, 
  FolderKanban, 
  Briefcase, 
  GraduationCap, 
  MailIcon,
  Menu,
  X
} from 'lucide-react';

const FixedNavigation = () => {
  // Track active section
  const [activeSection, setActiveSection] = useState('home');
  // Track if mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    
    // Closing menu on mobile after clicking
    if (window.innerWidth < 768) {
      setIsMenuOpen(false);
    }
    
    // Adding smooth scrolling
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Hamburger button for mobile */}
      <button 
        onClick={toggleMenu}
        className="md:hidden fixed right-4 top-4 z-50 bg-black/30 backdrop-blur-md rounded-full p-3 text-white border border-white/10 shadow-lg"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation menu */}
      <div className={`fixed z-40 transition-all duration-300 ease-in-out ${
        isMenuOpen 
          ? 'right-0 opacity-100' // Open state
          : 'md:right-8 -right-20 md:opacity-100 opacity-0' // Closed state (hidden on mobile, visible on desktop)
      } md:top-1/2 top-16 md:transform md:-translate-y-1/2`}>
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
    </>
  );
};

export default FixedNavigation;