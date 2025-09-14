import React, { useState } from 'react';
import { Code, Database, Brain, Settings, Monitor, Terminal } from 'lucide-react';

const Skills = ({ data }) => {
  const [activeCategory, setActiveCategory] = useState('programmingLanguages');

  const skillCategories = [
    {
      id: 'programmingLanguages',
      name: 'Programming Languages',
      icon: <Code size={20} />,
      skills: data.programmingLanguages,
      color: 'blue'
    },
    {
      id: 'frameworks',
      name: 'Frameworks & Libraries',
      icon: <Settings size={20} />,
      skills: data.frameworks,
      color: 'green'
    },
    {
      id: 'aiML',
      name: 'AI & Machine Learning',
      icon: <Brain size={20} />,
      skills: data.aiML,
      color: 'purple'
    },
    {
      id: 'databases',
      name: 'Databases & Backend',
      icon: <Database size={20} />,
      skills: data.databases,
      color: 'orange'
    },
    {
      id: 'tools',
      name: 'Tools & Platforms',
      icon: <Monitor size={20} />,
      skills: data.tools,
      color: 'cyan'
    },
    {
      id: 'coreCompetencies',
      name: 'Core Competencies',
      icon: <Terminal size={20} />,
      skills: data.coreCompetencies,
      color: 'red'
    }
  ];

  const getColorClasses = (color, isActive = false) => {
    const colors = {
      blue: isActive ? 'bg-blue-600 text-white' : 'bg-blue-600/10 text-blue-400 hover:bg-blue-600/20',
      green: isActive ? 'bg-green-600 text-white' : 'bg-green-600/10 text-green-400 hover:bg-green-600/20',
      purple: isActive ? 'bg-purple-600 text-white' : 'bg-purple-600/10 text-purple-400 hover:bg-purple-600/20',
      orange: isActive ? 'bg-orange-600 text-white' : 'bg-orange-600/10 text-orange-400 hover:bg-orange-600/20',
      cyan: isActive ? 'bg-cyan-600 text-white' : 'bg-cyan-600/10 text-cyan-400 hover:bg-cyan-600/20',
      red: isActive ? 'bg-red-600 text-white' : 'bg-red-600/10 text-red-400 hover:bg-red-600/20'
    };
    return colors[color] || colors.blue;
  };

  const activeSkillCategory = skillCategories.find(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across various domains of computer science and software development.
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                getColorClasses(category.color, activeCategory === category.id)
              }`}
            >
              {category.icon}
              <span className="hidden sm:inline">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="bg-gray-900 rounded-2xl p-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className={`p-3 rounded-lg ${getColorClasses(activeSkillCategory.color, true)}`}>
                {activeSkillCategory.icon}
              </div>
              <h3 className="text-2xl font-bold text-white">{activeSkillCategory.name}</h3>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {activeSkillCategory.skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-800 hover:bg-gray-700 rounded-lg p-4 text-center transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-white font-medium text-sm">{skill}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Total Skills in {activeSkillCategory.name}: 
              <span className="text-white font-bold ml-2">{activeSkillCategory.skills.length}</span>
            </p>
          </div>
        </div>

        {/* Operating Systems */}
        <div className="mt-12 text-center">
          <h4 className="text-xl font-semibold text-white mb-4">Operating Systems</h4>
          <div className="flex justify-center gap-4">
            {data.operatingSystems.map((os, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
              >
                {os}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;