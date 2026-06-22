import React from "react";
import { Sparkles, Calendar, BookOpen } from "lucide-react";
import { CHALLENGES } from "../data";

interface ChallengesViewProps {
  navigateTo: (route: string) => void;
}

export default function ChallengesView({ navigateTo }: ChallengesViewProps) {
  // Helper to resolve category classes
  const getCategoryThemeClass = (color: "red" | "teal" | "navy" | "amber") => {
    switch (color) {
      case "red":
        return {
          bg: "bg-[#FDEDEC]",
          text: "text-[#E63946]",
          border: "border-red-100 hover:border-[#E63946]",
          badge: "bg-[#E63946] text-white",
        };
      case "teal":
        return {
          bg: "bg-[#E6F7F8]",
          text: "text-[#0FB5BA]",
          border: "border-teal-100 hover:border-[#0FB5BA]",
          badge: "bg-[#0FB5BA] text-white",
        };
      case "navy":
        return {
          bg: "bg-[#ECECF2]",
          text: "text-[#1A1A40]",
          border: "border-indigo-100 hover:border-[#1A1A40]",
          badge: "bg-[#1A1A40] text-white",
        };
      case "amber":
        return {
          bg: "bg-[#FEF8E7]",
          text: "text-[#FBBF24]",
          border: "border-amber-100 hover:border-[#FBBF24]",
          badge: "bg-[#FBBF24] text-[#1a1a1a]",
        };
    }
  };

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs font-black tracking-widest text-[#E63946] bg-[#FDEDEC] px-3.5 py-1.5 rounded-full inline-block">
            16 WEEKENDS &bull; 16 THEMES
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] tracking-tight">
            16 STEAM Challenge Stations
          </h1>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Every weekend is a new gateway to technology and arts. Find single themes matching your child's interests or unlock the general scholar calendar!
          </p>
        </div>

        {/* 16 Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {CHALLENGES.map((ch) => {
            const theme = getCategoryThemeClass(ch.categoryColor);
            return (
              <div
                key={ch.id}
                onClick={() => navigateTo(`#/challenges/week-${ch.id}`)}
                className={`bg-white rounded-3xl border ${theme.border} p-6 hover-lift cursor-pointer flex flex-col justify-between h-72`}
              >
                <div>
                  {/* Top Badge strip */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`w-10 h-10 rounded-full font-mono font-black text-xs flex items-center justify-center shadow-xs ${theme.badge}`}>
                      W{ch.id}
                    </span>
                    <span className={`text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded-full ${theme.bg} ${theme.text}`}>
                      {ch.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-extrabold text-base sm:text-lg text-[#1A1A1A] line-clamp-2 leading-snug mb-2">
                    {ch.title.split(": ")[1] || ch.title}
                  </h3>
                  
                  {/* Teaser */}
                  <p className="text-gray-500 text-xs sm:text-sm line-clamp-3 leading-normal font-sans">
                    {ch.teaser}
                  </p>
                </div>

                {/* Card CTA link */}
                <div className="pt-4 border-t border-gray-50 flex items-center justify-between text-xs font-bold text-gray-400 font-mono">
                  <span>Explore Details</span>
                  <span className={`${theme.text}`}>&rarr;</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Final CTA Banner */}
        <div className="mt-20 bg-[#FDEDEC]/50 border border-red-50 rounded-3xl p-8 text-center max-w-4xl mx-auto space-y-6">
          <BookOpen className="h-8 w-8 text-[#E63946] mx-auto animate-pulse" />
          <h3 className="font-display font-black text-xl sm:text-2xl text-[#1a1a1a]">
            Want to attend all 16 challenge weeks?
          </h3>
          <p className="text-sm text-gray-600 max-w-xl mx-auto leading-relaxed">
            The <strong>Mega-STEAM Scholar Pass</strong> includes a personal physical Inventor Journal, weekly stamp badges, and saves you over RM 240 on individual standard weekend tickets.
          </p>
          <div className="pt-2">
            <a
              href="#/register"
              className="inline-block bg-[#E63946] hover:bg-[#D62839] text-white text-sm font-bold px-8 py-3.5 rounded-full shadow-md shadow-[#E63946]/10 transition-colors cursor-pointer"
            >
              Get Mega Pass
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
