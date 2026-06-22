import React from "react";
import { ArrowLeft, User, CheckCircle, Calendar, Sparkles } from "lucide-react";
import { CHALLENGES, ICONS } from "../data";

interface ChallengeDetailViewProps {
  challengeId: number;
  navigateTo: (route: string) => void;
}

export default function ChallengeDetailView({ challengeId, navigateTo }: ChallengeDetailViewProps) {
  const challenge = CHALLENGES.find((c) => c.id === challengeId);
  if (!challenge) {
    return (
      <div className="bg-white py-20 text-center space-y-4">
        <h2 className="font-display font-bold text-2xl text-gray-800">Challenge Not Found</h2>
        <button
          onClick={() => navigateTo("#/challenges")}
          className="text-[#E63946] border border-[#E63946] px-6 py-2 rounded-full font-bold hover:bg-[#FDEDEC]"
        >
          Back to Challenges
        </button>
      </div>
    );
  }

  // Find the associated icon
  const guestIcon = ICONS.find((icon) => icon.id === challenge.guestIconId || icon.id.startsWith(challenge.guestIconId));

  // Determine category color details
  const getColors = (color: "red" | "teal" | "navy" | "amber") => {
    switch (color) {
      case "red":
        return {
          headerBg: "bg-[#FDEDEC]",
          text: "text-[#E63946]",
          tagBg: "bg-[#E63946]",
          badgeClass: "category-badge-red",
        };
      case "teal":
        return {
          headerBg: "bg-[#E6F7F8]",
          text: "text-[#0FB5BA]",
          tagBg: "bg-[#0FB5BA]",
          badgeClass: "category-badge-teal",
        };
      case "navy":
        return {
          headerBg: "bg-[#ECECF2]",
          text: "text-[#1A1A40]",
          tagBg: "bg-[#1A1A40]",
          badgeClass: "category-badge-navy",
        };
      case "amber":
        return {
          headerBg: "bg-[#FEF8E7]",
          text: "text-[#FBBF24]",
          tagBg: "bg-[#FBBF24]",
          badgeClass: "category-badge-amber",
        };
    }
  };

  const colors = getColors(challenge.categoryColor);

  return (
    <div className="bg-white pb-20">
      {/* Back link bar */}
      <div className="bg-gray-50 border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigateTo("#/challenges")}
            className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-[#E63946] transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to 16 Challenge Stations
          </button>
        </div>
      </div>

      {/* Hero Banner Grid */}
      <section className={`${colors.headerBg}/60 py-16 lg:py-20 border-b border-gray-100`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="font-mono text-xs font-black tracking-widest text-[#E63946] bg-[#FDEDEC] px-3.5 py-1.5 rounded-full inline-block">
            {challenge.week.toUpperCase()} CHALLENGE
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] leading-tight">
            {challenge.title}
          </h1>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 font-semibold font-mono">
            <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${colors.tagBg}`}>
              Category: {challenge.category}
            </span>
            <span>&bull;</span>
            <span className="flex items-center"><Calendar className="h-4 w-4 mr-1 text-[#E63946]" /> 1 weekend</span>
          </div>
        </div>
      </section>

      {/* Core Copywriting Block */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left main text column */}
        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-4">
            <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#1A1A1A] tracking-tight">
              About This Weekend Station
            </h2>
            {challenge.descriptionParagraphs.map((para, i) => (
              <p key={i} className="text-gray-600 text-sm sm:text-base leading-relaxed font-sans">
                {para}
              </p>
            ))}
          </div>

          {/* Activity bullets */}
          <div className="bg-[#FDEDEC]/30 rounded-3xl p-6 sm:p-8 border border-red-50 space-y-6">
            <h3 className="font-display font-extrabold text-lg text-[#1a1a1a] flex items-center">
              <Sparkles className="h-5 w-5 mr-2 text-[#E63946] animate-pulse" /> Included Lab Activities
            </h3>
            <ul className="space-y-4">
              {challenge.activities.map((activity, idx) => {
                const parts = activity.split(": ");
                const title = parts[0];
                const desc = parts[1] || "";
                return (
                  <li key={idx} className="flex items-start space-x-3.5">
                    <CheckCircle className="h-5 w-5 text-[#E63946] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 text-sm sm:text-base">{title}</strong>
                      {desc && <p className="text-gray-500 text-xs sm:text-sm mt-0.5">{desc}</p>}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Right Quick Action Column */}
        <div className="lg:col-span-4 space-y-6">
          {/* Guest Icon box */}
          {guestIcon && (
            <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-xs space-y-4">
              <span className="font-mono text-[10px] font-bold text-gray-400 uppercase tracking-widest block">
                SPECIAL EXPERT GUEST
              </span>
              <div className="flex items-center space-x-3.5">
                <div className="w-12 h-12 rounded-full bg-[#1A1A40] text-white flex items-center justify-center font-display font-black text-xs shrink-0">
                  {guestIcon.name.split(' ').slice(-1)[0]}
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-[#1A1A1A] leading-normal truncate">
                    {guestIcon.name}
                  </h4>
                  <p className="text-[10px] text-gray-500 line-clamp-1">
                    {guestIcon.role}
                  </p>
                </div>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed font-sans line-clamp-3">
                {guestIcon.bioParagraphs[0]}
              </p>
              <button
                onClick={() => navigateTo(`#/icons/${guestIcon.id}`)}
                className="w-full text-center inline-flex items-center justify-center space-x-1 py-2.5 rounded-xl border border-gray-200 hover:border-[#E63946] hover:text-[#E63946] font-bold text-xs text-gray-600 bg-white transition-colors cursor-pointer"
              >
                <User className="h-3.5 w-3.5 mr-1" /> View Full Profile
              </button>
            </div>
          )}

          {/* Quick Registration Widget */}
          <div className="bg-[#1A1A40] text-white rounded-3xl p-6 space-y-4">
            <h4 className="font-display font-bold text-base tracking-wide">
              Attend This Week
            </h4>
            <p className="text-gray-300 text-xs leading-normal">
              Tickets are limited to 120 children per weekend to ensure premium, high-density focus from our coaches.
            </p>
            <div className="py-2.5 border-t border-b border-white/10 text-xs space-y-1.5 font-mono">
              <p className="flex justify-between"><span>Weekend Ticket:</span> <strong className="text-[#0FB5BA]">RM 45</strong></p>
              <p className="flex justify-between"><span>Includes:</span> <strong className="text-white">All kits & journal</strong></p>
            </div>
            <a
              href="#/register"
              className="block w-full text-center bg-[#E63946] hover:bg-[#D62839] text-white font-bold py-3.5 rounded-xl text-sm transition-colors cursor-pointer shadow-md"
            >
              Book Class Slot
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
