import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, Image, Clock, Sparkles, Box } from 'lucide-react';

// CUSTOMIZATION: Modify feature cards content and styling
const FEATURES = [
  {
    icon: Users,
    title: 'Meet the Cast',
    description: 'Get to know our unique and diverse cast of characters, each with their own story to tell.',
    link: '/cast',
    gradient: 'from-blue-500 to-purple-500'
  },
  {
    icon: Image,
    title: 'Art Gallery',
    description: 'Browse through our collection of artwork, sketches, and comic panels.',
    link: '/gallery',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Clock,
    title: 'Timeline',
    description: 'Follow the story chronologically and see how events unfold.',
    link: '/timeline',
    gradient: 'from-pink-500 to-red-500'
  },
  {
    icon: Sparkles,
    title: 'Teasers',
    description: 'Get sneak peeks of upcoming content and behind-the-scenes material.',
    link: '/teasers',
    gradient: 'from-red-500 to-yellow-500'
  },
  {
    icon: Box,
    title: 'Mystery Box',
    description: 'Discover hidden content and special surprises!',
    link: '/mystery-box',
    gradient: 'from-yellow-500 to-green-500'
  }
];

// CUSTOMIZATION: Modify card component styling
const FeatureCard = ({ icon: Icon, title, description, link, gradient }) => (
  <Link 
    to={link} 
    className="group block p-6 bg-black bg-opacity-50 rounded-xl
      hover:bg-opacity-70 transition-all duration-300 transform 
      hover:-translate-y-1 border border-gray-800 relative overflow-hidden"
  >
    {/* Animated gradient background on hover */}
    <div className={`absolute inset-0 bg-gradient-to-r ${gradient} 
      opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
    
    {/* Card content */}
    <div className="relative z-10">
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-3 bg-gray-800 rounded-lg group-hover:scale-110 
          transition-transform duration-300">
          <Icon className="h-6 w-6 text-blue-400" />
        </div>
        <h3 className="text-xl font-bold text-gray-100">{title}</h3>
      </div>
      <p className="text-gray-400 group-hover:text-gray-300 
        transition-colors duration-300">{description}</p>
    </div>
  </Link>
);

const Home = () => {
  return (
    <div className="min-h-screen py-12 relative">
      {/* CUSTOMIZATION: Hero section - modify background patterns and animations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      {/* CUSTOMIZATION: Hero content - modify text and styling */}
      <div className="text-center mb-16 relative">
        <h1 className="text-6xl font-bold mb-6 text-transparent bg-clip-text 
          bg-gradient-to-r from-blue-400 to-purple-500
          animate-gradient">
          Welcome to NK Comics
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Explore an amazing world of original characters, compelling stories, 
          and artistic creativity!
        </p>
      </div>

      {/* CUSTOMIZATION: Features grid - modify layout and spacing */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 
        max-w-6xl mx-auto relative">
        {FEATURES.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
        
        {/* CUSTOMIZATION: Latest update card - modify styling and content */}
        <div className="relative p-6 bg-gradient-to-br from-blue-500 to-purple-600 
          rounded-xl overflow-hidden group hover:shadow-2xl 
          transition-shadow duration-300">
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-4">Latest Update</h3>
            <p className="text-gray-100 mb-4">
              Check out our newest content and stay up to date with the latest adventures!
            </p>
            <Star className="h-6 w-6 text-yellow-300 group-hover:rotate-180 
              transition-transform duration-500" />
          </div>
          <div className="absolute inset-0 bg-black opacity-20 
            group-hover:opacity-30 transition-opacity duration-300" />
        </div>
      </div>
    </div>
  );
};

export default Home;