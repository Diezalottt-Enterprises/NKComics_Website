// src/components/Layout.jsx
import React, { useState } from 'react';
import { Menu, X, ChevronRight, ChevronLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';


const THEME = {
  colors: {
    sidebar: 'bg-gray-800',
    hover: 'bg-gray-700',
    background: 'bg-gray-900',
    textGradient: 'from-blue-400 to-purple-500',
  },
  transitions: {
    default: 'transition-all duration-300 ease-in-out',
    fast: 'transition-all duration-200 ease-in-out',
  },
};

const navigationItems = [
  { name: 'Home', path: '/' },
  { name: 'Cast', path: '/cast' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Timeline', path: '/timeline' },
  { name: 'Teasers', path: '/teasers' },
  { name: 'Mystery Box', path: '/mystery-box' },
];

// Character backgrounds
const backgroundCharacters = ['Character 1', 'Character 2', 'Character 3'];

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentBackground, setCurrentBackground] = useState(0);
  const location = useLocation();

  const cycleBackground = (direction) => {
    if (direction === 'next') {
      setCurrentBackground((prev) => (prev + 1) % backgroundCharacters.length);
    } else {
      setCurrentBackground((prev) =>
        prev === 0 ? backgroundCharacters.length - 1 : prev - 1
      );
    }
  };

  const isActiveLink = (path) => location.pathname === path;

  return (
    <div className={`min-h-screen ${THEME.colors.background} overflow-hidden`}>
      {/* SIDEBAR */}
      <aside
        className={`
          fixed top-0 left-0 h-full z-50
          ${THEME.colors.sidebar} ${THEME.transitions.default}
          ${isSidebarOpen ? 'w-64' : 'w-20'}
        `}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className={`
            w-full h-16 flex items-center justify-center
            hover:${THEME.colors.hover} ${THEME.transitions.fast}
          `}
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links */}
        <nav className="mt-4">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`
                flex items-center px-4 py-3
                ${THEME.transitions.fast}
                ${
                  isActiveLink(item.path)
                    ? 'bg-blue-600 text-white'
                    : `text-gray-300 hover:${THEME.colors.hover}`
                }
                ${!isSidebarOpen && 'justify-center'}
              `}
            >
              <span className={`${!isSidebarOpen && 'hidden'} ml-2`}>
                {item.name}
              </span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* MAIN CONTENT: shifts left/right based on sidebar */}
      <div className={`${THEME.transitions.default} ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
        {/* HEADER */}
        <header className={`${THEME.colors.sidebar} border-b border-gray-700 h-16`}>
          <div className="max-w-7xl mx-auto px-4 flex items-center h-full">
            <h1
              className={`
                text-2xl font-bold bg-gradient-to-r
                ${THEME.colors.textGradient}
                text-transparent bg-clip-text
              `}
            >
              NK Comics
            </h1>
          </div>
        </header>

        {/* MAIN CONTENT AREA */}
        <main className="max-w-7xl mx-auto px-4 py-8">
          {children}

          {/* CHARACTER SWITCHER */}
          <div className="fixed bottom-8 right-8 z-40">
            <div
              className={`
                ${THEME.colors.sidebar}
                bg-opacity-90 p-6 rounded-xl shadow-2xl
                backdrop-blur-sm border border-gray-700
                ${THEME.transitions.fast} transform hover:scale-105
              `}
            >
              <p className="text-gray-400 mb-2 text-center text-sm uppercase tracking-wider">
                Current Character
              </p>
              <p
                className={`
                  text-2xl font-bold text-center mb-6 text-transparent
                  bg-clip-text bg-gradient-to-r
                  ${THEME.colors.textGradient}
                `}
              >
                {backgroundCharacters[currentBackground]}
              </p>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => cycleBackground('prev')}
                  className={`
                    p-2 ${THEME.colors.sidebar} rounded-full
                    hover:${THEME.colors.hover} ${THEME.transitions.fast}
                    hover:shadow-lg
                  `}
                >
                  <ChevronLeft size={24} className="text-gray-300" />
                </button>
                <button
                  onClick={() => cycleBackground('next')}
                  className={`
                    p-2 ${THEME.colors.sidebar} rounded-full
                    hover:${THEME.colors.hover} ${THEME.transitions.fast}
                    hover:shadow-lg
                  `}
                >
                  <ChevronRight size={24} className="text-gray-300" />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
