import React, { useState } from 'react';
import { LogOut } from 'lucide-react';

const Header = () => {
  const [activeTab, setActiveTab] = useState('About');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["About", "Art information", "Achievements", "Art Gallery", "Contact"];

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="" style={{ height: '100vh' }}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center sm:bg-contain sm:bg-center md:bg-cover md:bg-center brightness-75"
        style={{ backgroundImage: 'url(images/header.png)' }}
      />

      {/* Navigation Bar */}
      <div className="absolute top-0 left-0 w-full flex items-center justify-between px-6 py-4 text-white">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img 
            src="/images/image.png" 
            className="w-12 h-12 sm:w-8 sm:h-8 object-contain" 
            alt="Logo" 
          />
          <a href="/" className="text-2xl font-bold">John Art</a>
        </div>

        {/* Navigation Menu for Desktop */}
        <nav className="hidden md:block bg-white px-6 py-2 rounded-full shadow-lg">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => {
                    setActiveTab(item);
                    scrollToSection(item.toLowerCase().replace(/\s+/g, '-'));
                  }}
                  className={`relative px-3 py-1.5 text-[16px] font-medium transition-colors
                    ${activeTab === item ? 'text-blue-600' : 'text-gray-700 hover:text-blue-500'}`}
                >
                  {item}
                  {activeTab === item && (
                    <div className="absolute bottom-0 left-0 h-[2px] w-full bg-blue-600 rounded-md" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout Button for Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            className="flex items-center gap-2 rounded-lg px-4 py-2 transition-all bg-white/10 hover:bg-white/20"
            onClick={() => console.log('Logout clicked')}
          >
            <span className="text-[18px] font-semibold">Logout</span>
            <LogOut className="h-5 w-5" />
          </button>
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-3xl"
          >
            &#9776; {/* Hamburger Icon */}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white text-black shadow-lg">
          <ul className="flex flex-col items-center gap-4 py-4">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => {
                    setActiveTab(item);
                    scrollToSection(item.toLowerCase().replace(/\s+/g, '-'));
                    setIsMenuOpen(false); // Close the menu when an item is selected
                  }}
                  className={`px-4 py-2 text-[18px] font-medium transition-colors
                    ${activeTab === item ? 'text-blue-600' : 'text-gray-700 hover:text-blue-500'}`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
