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

  return (
    <header className="" style={{ height: "100vh" }}>
      <div
        className={`absolute top-[72px] left-0 w-full h-[270px] bg-cover bg-center brightness-75 ${
          !isMenuOpen
            ? "md:top-0 md:h-full md:bg-[url('images/head.png')] bg-[url('images/head.png')]"
            : ""
        } mx-[20px] my-[20px] md:m-0 rounded-[32px] md:rounded-none`}
      >
        {/* Transparent Buttons - Visible Only on Mobile */}
        <div className="absolute bottom-4 left-4 flex flex-col gap-2 md:hidden">
          <button className="bg-white/30 p-3">
            <img src="/images/icon.png" className="w-6 h-6" alt="Icon 1" />
          </button>
          <button className="bg-white/30 p-3">
            <img src="/images/Vector.png" className="w-6 h-6" alt="Icon 2" />
          </button>
          <button className="bg-white/30 p-3">
            <img src="/images/licon.png" className="w-6 h-6" alt="Icon 3" />
          </button>
        </div>
      </div>

      {/* Navigation Bar */}
      <div
        className={`absolute top-0 left-0 w-full flex items-center justify-between px-6 py-4 ${
          isMenuOpen
            ? "bg-white text-black shadow-md"
            : "md:bg-transparent text-white"
        }`}
      >
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img
            src="/images/image.png"
            className="w-12 h-12 object-contain"
            alt="Logo"
          />
          <a href="/" className="text-2xl text-white font-bold">
            John Art
          </a>
        </div>

        {/* Navigation Menu for Desktop */}
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

        {/* Logout Button for Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <button
            className="flex items-center gap-2 rounded-lg px-4 py-2 bg-white/10 hover:bg-white/20"
            onClick={() => console.log("Logout clicked")}
          >
            <span className="text-[18px] font-semibold">Logout</span>
            <LogOut className="h-5 w-5" />
          </button>
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black text-3xl"
          >
            &#9776; {/* Hamburger Icon */}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-white bg-cover bg-center shadow-xl z-50 p-6 flex flex-col md:hidden"
          style={{ backgroundImage: "url('/images/mobileview.jpg')" }} // Replace with your image path
        >
          {/* Logo and Username */}
          <div className="flex items-center gap-3 pb-4">
            <img
              src="/images/image.png"
              className="w-12 h-12 object-contain"
              alt="Logo"
            />
            <h2 className="text-3xl font-semibold">John Doe</h2>
          </div>

          {/* Profile Section with adjusted margin-top */}
          <div className="flex items-center gap-3 mt-[270px]"> {/* Adjusted margin-top */}
            <img
              src="/images/userprofile.png"
              className="w-34 p-2 object-contain"
              alt="Logo"
            />
            <div>
              <p className="text-3xl font-semibold">John Doe</p>
              <p className="text-gray-500">@johndoe</p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-b my-4 py-2"></div>
          <h3 className="text-lg font-bold">Features</h3>

          {/* Mobile Navigation with Images */}
          <ul className="space-y-3 flex-grow">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="flex items-center gap-3 p-2 border rounded-lg hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setActiveTab(item.name);
                  scrollToSection(item.name.toLowerCase().replace(/\s+/g, "-"));
                }}
              >
                <img
                  src={item.img}
                  className="w-10 h-10 object-contain"
                  alt={item.name}
                />
                <span className="text-gray-700 font-medium">{item.name}</span>
              </li>
            ))}
          </ul>
          {/* 🚀 Logout Button at Bottom */}
          <div
            className="mt-auto flex gap-3 p-4 rounded-lg cursor-pointer hover:bg-gray-300"
            onClick={() => console.log("Logout clicked")}
          >
            <img
              src="/images/logout.png"
              className="h-6 w-6 object-contain"
              alt="Logout"
            />
            <span className="text-lg font-semibold text-gray-700">Logout</span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
