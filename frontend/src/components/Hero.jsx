import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Hero = ({ data }) => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-1 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center">
            <div className="mb-6">
              <p className="text-blue-400 text-lg font-medium mb-2">Hello, I'm</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                {data.name}
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-300 font-light mb-6">
                {data.title}
              </h2>
            </div>

            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              {data.bio}
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>{data.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a href={`tel:${data.phone}`} className="hover:text-blue-400 transition-colors">
                  {data.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href={`mailto:${data.email}`} className="hover:text-blue-400 transition-colors">
                  {data.email}
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mb-8">
              <a
                href={data.linkedin}
                className="p-3 bg-gray-800 hover:bg-blue-600 text-white rounded-full transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={data.github}
                className="p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
              <a
                href={`mailto:${data.email}`}
                className="p-3 bg-gray-800 hover:bg-green-600 text-white rounded-full transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                View My Work
              </button>
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border border-gray-600 text-white hover:bg-gray-800 font-medium rounded-lg transition-colors"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default Hero;