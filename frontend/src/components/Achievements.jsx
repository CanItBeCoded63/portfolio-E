import React from 'react';
import { Award, Trophy, Star, Target } from 'lucide-react';

const Achievements = ({ data }) => {
  const getAchievementIcon = (category) => {
    switch (category.toLowerCase()) {
      case 'sports':
        return <Trophy className="text-yellow-400" size={24} />;
      case 'academic':
        return <Star className="text-blue-400" size={24} />;
      case 'leadership':
        return <Target className="text-green-400" size={24} />;
      default:
        return <Award className="text-purple-400" size={24} />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case 'sports':
        return 'bg-yellow-600/10 border-yellow-600/20 text-yellow-400';
      case 'academic':
        return 'bg-blue-600/10 border-blue-600/20 text-blue-400';
      case 'leadership':
        return 'bg-green-600/10 border-green-600/20 text-green-400';
      default:
        return 'bg-purple-600/10 border-purple-600/20 text-purple-400';
    }
  };

  return (
    <section id="achievements" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Achievements & Awards</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Recognition and accomplishments that highlight my dedication to excellence across various domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((achievement) => (
            <div
              key={achievement.id}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Icon and Category */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gray-900 rounded-lg">
                  {getAchievementIcon(achievement.category)}
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(achievement.category)}`}>
                  {achievement.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">{achievement.title}</h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">{achievement.description}</p>

              {/* Decorative element */}
              <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30"></div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-gray-800 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">8.54</div>
              <div className="text-gray-400">Current GPA</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">3+</div>
              <div className="text-gray-400">Major Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">2</div>
              <div className="text-gray-400">Work Experiences</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">1</div>
              <div className="text-gray-400">State-level Award</div>
            </div>
          </div>
        </div>

        {/* Inspirational Quote */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl p-8 border border-blue-600/20">
            <blockquote className="text-xl text-gray-300 mb-4 italic">
              "Success is not just about individual achievements, but about the positive impact we create through our work and leadership."
            </blockquote>
            <cite className="text-blue-400 font-medium">- Personal Philosophy</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;