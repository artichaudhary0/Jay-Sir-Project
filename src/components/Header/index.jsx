import React, { useState, useEffect } from "react";
import { LogOut } from "lucide-react";

const Header = () => {
  const [activeTab, setActiveTab] = useState("About");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { name: "About Us", img: "/images/info.png" },
    { name: "Art information", img: "/images/artInfo.png" },
    { name: "Achievements", img: "/images/achievementmenu.png" },
    { name: "Art Gallery", img: "/images/gallary.png" },
    { name: "Contact", img: "/images/contact.png" },
  ];

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const bgImage = "/images/head.png";

  return (
    <header className="relative md:h-screen h-[327px]">
      {/* Desktop Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-75 hidden md:block"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Mobile Background Image */}
      <div
        className={`absolute top-[72px] h-[255px] mx-4 rounded-3xl bg-cover bg-center brightness-75 md:hidden ${
          isMenuOpen ? 'hidden' : ''
        }`}
        style={{ 
          backgroundImage: `url(${bgImage})`,
          width: 'calc(100% - 2rem)'
        }}
      />

      {/* Mobile Action Buttons */}
      <div className="absolute bottom-4 left-8 flex flex-col gap-2 md:hidden z-10">
        <button className="bg-white/30 p-3 rounded-lg backdrop-blur-sm">
          <img src="/images/icon.png" className="w-6 h-6" alt="Icon 1" />
        </button>
        <button className="bg-white/30 p-3 rounded-lg backdrop-blur-sm">
          <img src="/images/Vector.png" className="w-6 h-6" alt="Icon 2" />
        </button>
        <button className="bg-white/30 p-3 rounded-lg backdrop-blur-sm">
          <img src="/images/licon.png" className="w-6 h-6" alt="Icon 3" />
        </button>
      </div>

      {/* Navigation Bar */}
      <div
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-6 py-4 z-20 ${
          isMenuOpen
            ? "bg-white text-black shadow-md"
            : "bg-transparent text-black"
        }`}
      >
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img
            src="/images/image.png"
            className="w-12 h-12 object-contain"
            alt="Logo"
          />
          <a href="/" className="text-2xl font-bold sm:text-black md:sm:text-white">
            John Art
          </a>
        </div>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:block bg-white px-6 py-2 rounded-full shadow-lg">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => {
                    setActiveTab(item.name);
                    scrollToSection(
                      item.name.toLowerCase().replace(/\s+/g, "-")
                    );
                  }}
                  className={`relative px-3 py-1.5 text-[16px] font-medium transition-colors ${
                    activeTab === item.name
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-500"
                  }`}
                >
                  {item.name}
                  {activeTab === item.name && (
                    <div className="absolute bottom-0 left-0 h-[2px] w-full bg-blue-600 rounded-md" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Logout Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            className="flex items-center gap-2 rounded-lg px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm"
            onClick={() => console.log("Logout clicked")}
          >
            <span className="text-[18px] font-semibold">Logout</span>
            <LogOut className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-3xl"
        >
          &#9776;
        </button>
      </div>

      {/* Mobile Sidebar */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          <div className="p-4 md:p-6">
            {/* Logo and Close Button */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <img
                  src="/images/image.png"
                  className="w-12 h-12 object-contain"
                  alt="Logo"
                />
                <h2 className="text-2xl font-semibold">John Doe</h2>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            {/* Profile Section */}
            <div className="flex items-center gap-4 mt-2">
              <img
                src="/images/userprofile.png"
                className="w-20 h-20 object-cover rounded-full"
                alt="Profile"
              />
              <div>
                <p className="text-xl font-semibold">John Doe</p>
                <p className="text-gray-500">@johndoe</p>
              </div>
            </div>

            {/* Navigation Items */}
            <div className="mt-6">
              <h3 className="text-lg font-bold mb-4">Features</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
                    onClick={() => {
                      setActiveTab(item.name);
                      scrollToSection(
                        item.name.toLowerCase().replace(/\s+/g, "-")
                      );
                    }}
                  >
                    <img
                      src={item.img}
                      className="w-8 h-8 object-contain"
                      alt={item.name}
                    />
                    <span className="text-gray-700 font-medium">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Logout Button */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
              <button
                className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => console.log("Logout clicked")}
              >
                <img
                  src="/images/logout.png"
                  className="h-6 w-6 object-contain"
                  alt="Logout"
                />
                <span className="text-lg font-semibold text-gray-700">
                  Logout
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;