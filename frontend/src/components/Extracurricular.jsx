import React from 'react';
import { Users, Megaphone, Dumbbell, Heart, ArrowRight } from 'lucide-react';

const Extracurricular = ({ data }) => {
  const getActivityIcon = (category) => {
    switch (category.toLowerCase()) {
      case 'leadership':
        return <Users className="text-blue-400" size={24} />;
      case 'community service':
        return <Heart className="text-red-400" size={24} />;
      case 'sports':
        return <Dumbbell className="text-green-400" size={24} />;
      default:
        return <Megaphone className="text-purple-400" size={24} />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case 'leadership':
        return 'bg-blue-600/10 border-blue-600/20 text-blue-400';
      case 'community service':
        return 'bg-red-600/10 border-red-600/20 text-red-400';
      case 'sports':
        return 'bg-green-600/10 border-green-600/20 text-green-400';
      default:
        return 'bg-purple-600/10 border-purple-600/20 text-purple-400';
    }
  };

  return (
    <section id="extracurricular" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Extracurricular Activities</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Beyond academics and technical work, I actively engage in leadership, community service, and sports activities that shape my character and skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((activity) => (
            <div
              key={activity.id}
              className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-gray-800 group-hover:bg-gray-700 rounded-lg transition-colors">
                  {getActivityIcon(activity.category)}
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(activity.category)}`}>
                  {activity.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">{activity.title}</h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-4">{activity.description}</p>

              {/* Learn More Button */}
              <button className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm group-hover:gap-3 transition-all">
                Learn More
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Additional Highlights */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {/* Leadership Impact */}
          <div className="bg-gray-900 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Users className="text-blue-400" size={28} />
              Leadership Impact
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Team Members Led</span>
                <span className="text-white font-bold">5+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Content Library Managed</span>
                <span className="text-white font-bold">5,000+ Videos</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Engagement Increase</span>
                <span className="text-green-400 font-bold">+40%</span>
              </div>
            </div>
          </div>

          {/* Community Engagement */}
          <div className="bg-gray-900 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Heart className="text-red-400" size={28} />
              Community Engagement
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                <div>
                  <p className="text-white font-medium">Public Speaking</p>
                  <p className="text-gray-400 text-sm">Regular talks on digital engagement and technology</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                <div>
                  <p className="text-white font-medium">Volunteering</p>
                  <p className="text-gray-400 text-sm">Active contribution to community initiatives</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                <div>
                  <p className="text-white font-medium">Sports Excellence</p>
                  <p className="text-gray-400 text-sm">State-level basketball and recreational ping pong</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Philosophy */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl p-8 border border-blue-600/20">
            <h3 className="text-2xl font-bold text-white mb-4">Personal Philosophy</h3>
            <blockquote className="text-lg text-gray-300 mb-4 italic max-w-3xl mx-auto">
              "I believe that true growth comes from stepping outside our comfort zones and contributing to something larger than ourselves. Whether it's leading a team, serving the community, or pushing physical limits in sports, every experience shapes us into better professionals and human beings."
            </blockquote>
            <cite className="text-blue-400 font-medium">- Yashwardhan Singh Chouhan</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;