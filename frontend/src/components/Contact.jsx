import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, ExternalLink } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (mock behavior)
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactMethods = [
    {
      icon: <Mail className="text-blue-400" size={24} />,
      label: 'Email',
      value: data.email,
      href: `mailto:${data.email}`,
      color: 'bg-blue-600/10 border-blue-600/20'
    },
    {
      icon: <Phone className="text-green-400" size={24} />,
      label: 'Phone',
      value: data.phone,
      href: `tel:${data.phone}`,
      color: 'bg-green-600/10 border-green-600/20'
    },
    {
      icon: <MapPin className="text-red-400" size={24} />,
      label: 'Location',
      value: data.location,
      href: '#',
      color: 'bg-red-600/10 border-red-600/20'
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      href: data.linkedin,
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      icon: <Github size={20} />,
      label: 'GitHub',
      href: data.github,
      color: 'bg-gray-700 hover:bg-gray-600'
    },
    {
      icon: <Mail size={20} />,
      label: 'Email',
      href: `mailto:${data.email}`,
      color: 'bg-green-600 hover:bg-green-700'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm always interested in new opportunities, collaborations, and interesting projects. Let's connect and discuss how we can work together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Let's Connect</h3>
            
            {/* Contact Methods */}
            <div className="space-y-6 mb-8">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-4 rounded-lg border ${method.color} hover:bg-gray-800 transition-colors`}
                >
                  <div className="p-2 bg-gray-800 rounded-lg">
                    {method.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{method.label}</p>
                    {method.href !== '#' ? (
                      <a
                        href={method.href}
                        className="text-white font-medium hover:text-blue-400 transition-colors"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{method.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Find me on</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 ${social.color} text-white rounded-lg transition-colors`}
                  >
                    {social.icon}
                    <span className="hidden sm:inline">{social.label}</span>
                    <ExternalLink size={14} className="opacity-60" />
                  </a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-gray-800 rounded-lg">
              <h4 className="text-lg font-semibold text-white mb-3">Current Status</h4>
              <div className="space-y-2 text-gray-300">
                <p>🎓 Final year CS student at IIIT Sri City</p>
                <p>🔬 Working on Vision-Language Models research</p>
                <p>💼 Open to internship and full-time opportunities</p>
                <p>🚀 Available for freelance projects</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                  placeholder="Tell me about your project, opportunity, or just say hello!"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white font-medium rounded-lg transition-colors"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Send size={18} />
                )}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            <p className="text-gray-400 text-sm mt-4">
              * All fields are required. I typically respond within 24-48 hours.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl p-8 border border-blue-600/20">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to collaborate?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Whether you're looking for a passionate developer, a research collaborator, or just want to discuss technology and innovation, I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${data.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                <Mail size={18} />
                Email Me Directly
              </a>
              <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors"
              >
                <Linkedin size={18} />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;