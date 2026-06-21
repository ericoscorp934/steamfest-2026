import React, { useState } from "react";
import { Menu, X, Rocket } from "lucide-react";

interface NavbarProps {
  currentRoute: string;
  navigateTo: (route: string) => void;
}

export default function Navbar({ currentRoute, navigateTo }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "#/" },
    { name: "STEAM Challenges", path: "#/challenges" },
    { name: "Malaysia Icons", path: "#/icons" },
    { name: "Partners", path: "#/partners" },
    { name: "School Events", path: "#/school-events" },
    { name: "FAQ", path: "#/faq" },
  ];

  const getIsActive = (path: string) => {
    if (path === "#/") {
      return currentRoute === "home" || currentRoute === "";
    }
    const cleanPath = path.replace("#/", "");
    return currentRoute.startsWith(cleanPath);
  };

  const handleLinkClick = (path: string) => {
    navigateTo(path);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div 
            onClick={() => handleLinkClick("#/")}
            className="flex items-center gap-2 cursor-pointer group"
            id="navbar-logo"
          >
            <div className="w-8 h-8 bg-[#E63946] rounded-lg flex items-center justify-center text-white font-black transition-transform duration-300 group-hover:rotate-12">
              S
            </div>
            <span className="text-xl font-extrabold tracking-tight uppercase text-[#1A1A1A]">
              Steamfest <span className="text-[#E63946]">2026</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6" id="navbar-links">
            {navLinks.map((link) => {
              const active = getIsActive(link.path);
              return (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.path)}
                  className={`text-sm font-semibold transition-colors cursor-pointer ${
                    active
                      ? "text-[#E63946] font-bold"
                      : "text-gray-600 hover:text-[#E63946]"
                  }`}
                  id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {link.name}
                </button>
              );
            })}
          </div>

          {/* CTA & Join button */}
          <div className="hidden lg:flex items-center" id="navbar-cta">
            <button
              onClick={() => handleLinkClick("#/register")}
              className="bg-[#E63946] text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-red-200 hover:scale-105 transition-transform cursor-pointer inline-block"
            >
              Register Now
            </button>
          </div>

          {/* Hamburger button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#1a1a1a] hover:text-[#E63946] p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white/98 backdrop-blur-md absolute top-full left-0 w-full shadow-lg transition duration-200 animate-in fade-in slide-in-from-top-4">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {navLinks.map((link) => {
              const active = getIsActive(link.path);
              return (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.path)}
                  className={`block w-full text-left px-4 py-3 rounded-xl font-semibold text-base transition-all ${
                    active
                      ? "bg-[#FDEDEC] text-[#E63946] font-bold"
                      : "text-gray-700 hover:bg-gray-50 hover:text-[#E63946]"
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
            <div className="pt-4 border-t border-gray-100 px-4">
              <button
                onClick={() => handleLinkClick("#/register")}
                className="block w-full text-center bg-[#E63946] hover:bg-[#D62839] text-white font-bold py-3.5 rounded-full transition-all cursor-pointer"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
