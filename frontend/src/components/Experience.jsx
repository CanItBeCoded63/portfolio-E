import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = ({ data }) => {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey combining research, development, and practical experience in cutting-edge technologies.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gray-700"></div>

          <div className="space-y-12">
            {data.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 border-4 border-gray-900 rounded-full z-10"></div>

                {/* Content card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-all duration-300 transform hover:scale-105">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                        <p className="text-blue-400 font-medium">{exp.company}</p>
                        {exp.project && (
                          <p className="text-gray-300 text-sm mt-1">{exp.project}</p>
                        )}
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                        exp.type === 'Research' 
                          ? 'bg-purple-600/20 text-purple-400' 
                          : 'bg-green-600/20 text-green-400'
                      }`}>
                        {exp.type}
                      </div>
                    </div>

                    {/* Duration */}
                    <div className="flex items-center gap-2 text-gray-400 mb-4">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>

                    {/* Technologies (if applicable) */}
                    {exp.technologies && (
                      <div className="mb-4">
                        <p className="text-gray-300 text-sm font-medium mb-2">Technologies:</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Responsibilities */}
                    <div>
                      <p className="text-gray-300 text-sm font-medium mb-2">Key Responsibilities:</p>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, respIndex) => (
                          <li
                            key={respIndex}
                            className="text-gray-400 text-sm flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Additional info for current position */}
                    {exp.duration.includes('Present') && (
                      <div className="mt-4 p-3 bg-blue-600/10 rounded-lg border border-blue-600/20">
                        <p className="text-blue-400 text-sm font-medium flex items-center gap-2">
                          <Briefcase size={14} />
                          Currently working on this project
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Interested in collaborating?</h3>
            <p className="text-gray-400 mb-6">
              I'm always open to discussing new opportunities, research collaborations, and interesting projects.
            </p>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              <ExternalLink size={18} />
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;