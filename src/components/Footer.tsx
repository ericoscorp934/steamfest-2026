import React from "react";
import { Mail, Facebook, Heart, GraduationCap, ArrowUp } from "lucide-react";

interface FooterProps {
  navigateTo: (route: string) => void;
}

export default function Footer({ navigateTo }: FooterProps) {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-50 text-gray-600 border-t border-gray-100" id="universal-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-200/50 pb-12">
          {/* Main Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2.5 mb-4">
              <div className="w-8 h-8 bg-[#E63946] rounded-lg flex items-center justify-center text-white font-black">
                S
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight text-[#1a1a1a] uppercase">
                STEAMFEST <span className="text-[#E63946]">2026</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm max-w-sm mb-6 leading-relaxed">
              Malaysia's longest and most immersive children's STEAM festival. 16 consecutive weekends of technology coding, robotic challenges, and arts designed to empower global thinkers.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-gray-200 hover:bg-[#E63946] hover:text-white flex items-center justify-center text-gray-500 transition-all duration-200"
                aria-label="Facebook Page"
                id="footer-facebook-btn"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@geniusminds.my"
                className="w-10 h-10 rounded-full bg-gray-200 hover:bg-[#E63946] hover:text-white flex items-center justify-center text-gray-500 transition-all duration-200"
                aria-label="Contact Email"
                id="footer-email-btn"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
 
          {/* Quick Navigation */}
          <div>
            <h4 className="font-display font-bold text-[#1a1a1a] text-sm uppercase tracking-wider mb-4">
              Festival Map
            </h4>
            <ul className="space-y-3.5 text-sm font-semibold">
              <li>
                <button
                  onClick={() => navigateTo("#/")}
                  className="text-gray-500 hover:text-[#E63946] transition-colors cursor-pointer"
                  id="footer-nav-home"
                >
                  Home Dashboard
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo("#/challenges")}
                  className="text-gray-500 hover:text-[#E63946] transition-colors cursor-pointer"
                  id="footer-nav-challenges"
                >
                  16 Challenge Stations
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo("#/icons")}
                  className="text-gray-500 hover:text-[#E63946] transition-colors cursor-pointer"
                  id="footer-nav-icons"
                >
                  Meet Malaysia Icons
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo("#/partners")}
                  className="text-gray-500 hover:text-[#E63946] transition-colors cursor-pointer"
                  id="footer-nav-partners"
                >
                  Tech Partners
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo("#/school-events")}
                  className="text-gray-500 hover:text-[#E63946] transition-colors cursor-pointer"
                  id="footer-nav-school"
                >
                  School Showcases
                </button>
              </li>
            </ul>
          </div>
 
          {/* Contact Details & Location */}
          <div>
            <h4 className="font-display font-bold text-[#1a1a1a] text-sm uppercase tracking-wider mb-4">
              The Venue
            </h4>
            <p className="text-gray-500 text-sm mb-4 leading-relaxed font-semibold">
              <strong>Southplace Residences</strong><br />
              Tropicana Metropark,<br />
              Subang Jaya, Selangor, Malaysia
            </p>
            <p className="text-gray-500 text-sm font-semibold">
              <strong>Email:</strong><br />
              <span className="text-[#0FB5BA]">steamfest@geniusminds.edu.my</span>
            </p>
          </div>
        </div>
 
        {/* Bottom Panel */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
          <p className="mb-4 sm:mb-0">
            &copy; 100% Organised by{" "}
            <a
              href="https://geniusminds.my"
              target="_blank"
              rel="noreferrer"
              className="text-[#0FB5BA] hover:underline"
            >
              Genius Minds
            </a>
            &bull; 2026
          </p>
          <div className="flex items-center space-x-6">
            <span>
              Tropicana Metropark, Malaysia
            </span>
            <button
              onClick={handleScrollTop}
              className="p-2 bg-gray-200/50 hover:bg-gray-200 text-gray-500 rounded-full cursor-pointer hover:text-white transition-colors"
              title="Scroll to top"
              id="footer-scroll-top-btn"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
