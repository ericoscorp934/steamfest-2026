import React from "react";
import { Star, ShieldAlert, Award, Grid, ArrowUpRight, Sparkles, Building2, User } from "lucide-react";
import { ICONS } from "../data";

interface IconsViewProps {
  navigateTo: (route: string) => void;
}

export default function IconsView({ navigateTo }: IconsViewProps) {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs font-black tracking-widest text-[#E63946] bg-[#FDEDEC] px-3.5 py-1.5 rounded-full inline-block">
            16 CELEBRITY MENTORS
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] tracking-tight animate-fade-in">
            Meet the Malaysia Icons
          </h1>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-sans">
            16 celebrated researchers, leaders, and artists joining sub-panels throughout our 16 Sundays, inspiring kids with real-life grit and victory.
          </p>
        </div>

        {/* Icons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {ICONS.map((icon) => {
            return (
              <div
                key={icon.id}
                onClick={() => navigateTo(`#/icons/${icon.id}`)}
                className="bg-white rounded-3xl border border-gray-100 hover:border-[#E63946] p-6 hover-lift cursor-pointer flex flex-col items-center text-center relative group min-h-80 justify-between"
              >
                {/* Corner Headliner Badge */}
                {icon.isHeadliner && (
                  <span className="absolute top-4 right-4 bg-amber-500 text-white rounded-full p-1.5 shadow-md flex items-center justify-center animate-bounce duration-1000" title="Star Headliner">
                    <Star className="h-4.5 w-4.5 fill-current" />
                  </span>
                )}

                <div className="flex flex-col items-center space-y-4">
                  {/* Avatar Circle Container */}
                  <div className="relative w-24 h-24 rounded-full bg-[#1A1A40] flex items-center justify-center border-4 border-gray-50 group-hover:border-[#FDEDEC] transition-all overflow-hidden shadow-sm">
                    {icon.imagePlaceholder ? (
                      <img
                        src={icon.imagePlaceholder}
                        alt={icon.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : icon.isOrg ? (
                      <div className="flex flex-col items-center justify-center text-center p-2 text-white">
                        <Building2 className="h-8 w-8 text-[#0FB5BA] mb-1" />
                        <span className="text-[9px] font-mono leading-none tracking-widest uppercase">CORP</span>
                      </div>
                    ) : (
                      <div className="text-white flex flex-col items-center justify-center text-center p-2">
                        <User className="h-8 w-8 text-[#E63946] mb-1" />
                        <span className="text-[10px] font-mono leading-none font-bold">EXPERT</span>
                      </div>
                    )}
                  </div>

                  {/* Identity */}
                  <div>
                    <h3 className="font-display font-black text-sm sm:text-base text-[#1A1A1A] group-hover:text-[#E63946] transition-colors leading-tight">
                      {icon.name}
                    </h3>
                    <p className="font-mono text-[9px] text-[#0FB5BA] uppercase tracking-wider font-bold mt-1 inline-block bg-[#E6F7F8] px-2.5 py-0.5 rounded-full">
                      {icon.category}
                    </p>
                    <p className="text-gray-500 text-xs mt-3 leading-snug line-clamp-2 max-w-xs font-sans">
                      {icon.role}
                    </p>
                  </div>
                </div>

                {/* Arrow up right hover trigger */}
                <span className="text-xs text-gray-400 font-bold font-mono group-hover:text-[#E63946] transition-colors pt-4 border-t border-gray-50/80 w-full flex items-center justify-center space-x-1">
                  <span>View Bio</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
