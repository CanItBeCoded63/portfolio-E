import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const About = ({ data }) => {
  const { personalInfo, education, personalStatement } = data;

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Statement */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Personal Statement</h3>
            <div className="text-gray-300 leading-relaxed space-y-4">
              {personalStatement.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gray-800 rounded-lg">
              <h4 className="text-xl font-semibold text-white mb-4">Quick Facts</h4>
              <div className="grid sm:grid-cols-2 gap-4 text-gray-300">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-blue-400" />
                  <span>Based in {personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap size={16} className="text-blue-400" />
                  <span>CS Student at IIIT</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={16} className="text-blue-400" />
                  <span>GPA: 8.54/10</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-blue-400" />
                  <span>Graduating 2027</span>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.id} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">{edu.degree}</h4>
                      <p className="text-blue-400 font-medium">{edu.institution}</p>
                    </div>
                    <span className="text-green-400 text-sm font-medium px-3 py-1 bg-green-400/10 rounded-full">
                      {edu.status}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-gray-300 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award size={14} />
                      <span>GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Resume Download */}
            <div className="mt-8">
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;