import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/mock';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Achievements from './Achievements';
import Extracurricular from './Extracurricular';
import Contact from './Contact';
import Footer from './Footer';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'achievements', 'extracurricular', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio">
      <Header activeSection={activeSection} />
      <main>
        <Hero data={portfolioData.personalInfo} />
        <About data={portfolioData} />
        <Skills data={portfolioData.skills} />
        <Experience data={portfolioData.experience} />
        <Projects data={portfolioData.projects} />
        <Achievements data={portfolioData.achievements} />
        <Extracurricular data={portfolioData.extracurricular} />
        <Contact data={portfolioData.contact} />
      </main>
      <Footer data={portfolioData.personalInfo} />
    </div>
  );
};

export default Portfolio;