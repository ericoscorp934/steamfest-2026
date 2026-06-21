import React from "react";
import { ArrowLeft, Award, Calendar, ExternalLink, Sparkles, User, Briefcase } from "lucide-react";
import { ICONS, CHALLENGES } from "../data";

interface IconDetailViewProps {
  iconId: string;
  navigateTo: (route: string) => void;
}

export default function IconDetailView({ iconId, navigateTo }: IconDetailViewProps) {
  // Gracefully handle Karl Ho machines duplicate matching logic if any, but ID checks will do.
  const icon = ICONS.find((i) => i.id === iconId);

  if (!icon) {
    return (
      <div className="bg-white py-20 text-center space-y-4">
        <h2 className="font-display font-bold text-2xl text-gray-800">Profile Not Found</h2>
        <button
          onClick={() => navigateTo("#/icons")}
          className="text-[#E63946] border border-[#E63946] px-6 py-2 rounded-full font-bold hover:bg-[#FDEDEC]"
        >
          Back to Icons
        </button>
      </div>
    );
  }

  // Find their matching week challenge station
  const matchingChallenge = CHALLENGES.find((ch) => ch.id === icon.weekId);

  return (
    <div className="bg-white pb-20">
      {/* Back link bar */}
      <div className="bg-gray-50 border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigateTo("#/icons")}
            className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-[#E63946] transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Malaysia Icons
          </button>
        </div>
      </div>

      {/* Hero Banner with Circular Avatar Layout */}
      <section className="bg-[#FDEDEC]/40 py-16 border-b border-gray-100 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 relative z-10">
          {/* Circular avatar badge */}
          <div className="w-28 h-28 rounded-full bg-[#1A1A40] text-white flex items-center justify-center font-display font-black text-2xl border-4 border-white shadow-md mx-auto relative overflow-hidden">
            {icon.imagePlaceholder ? (
              <img
                src={icon.imagePlaceholder}
                alt={icon.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            ) : (
              icon.isOrg ? "ORG" : icon.name.split(' ').slice(-1)[0]
            )}
            {icon.isHeadliner && (
              <span className="absolute -top-1 -right-1 bg-amber-500 text-white rounded-full p-1 border-2 border-white shadow-xs z-10">
                <Award className="h-4.5 w-4.5 text-white" />
              </span>
            )}
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs font-black tracking-widest text-[#E63946] bg-[#FDEDEC] px-3.5 py-1.5 rounded-full inline-block">
              {icon.isHeadliner ? "⭐ FESTIVAL HEADLINER" : "GUEST MENTOR"}
            </span>
            <h1 className="font-display font-black text-3xl sm:text-4xl text-[#1A1A1A]">
              {icon.name}
            </h1>
            <p className="text-gray-500 font-medium text-sm sm:text-base max-w-xl mx-auto leading-normal">
              {icon.role}
            </p>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-red-400/5 rounded-full blur-2xl transform -translate-y-1/2"></div>
      </section>

      {/* Core Body Columns */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column - Inspiring bio */}
        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-4">
            <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#1A1A1A] flex items-center">
              <User className="h-5.5 w-5.5 text-[#E63946] mr-2" /> Mentorship Profile & Bio
            </h2>
            {icon.bioParagraphs.map((para, i) => (
              <p key={i} className="text-gray-600 text-sm sm:text-base leading-relaxed font-sans">
                {para}
              </p>
            ))}
          </div>

          {/* Key Achievements */}
          {icon.achievements.length > 0 && (
            <div className="bg-[#E6F7F8]/40 border border-teal-50 rounded-3xl p-6 sm:p-8 space-y-6">
              <h3 className="font-display font-extrabold text-lg text-[#1a1a1a] flex items-center">
                <Award className="h-5 w-5 text-[#0FB5BA] mr-2" /> Key Accomplishments
              </h3>
              <ul className="space-y-4">
                {icon.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex space-x-3.5 items-start">
                    <span className="w-6 h-6 rounded-full bg-[#0FB5BA]/10 text-[#0FB5BA] flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="text-gray-700 text-sm sm:text-base leading-snug">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right Column - Linked Station week & CTA */}
        <div className="lg:col-span-4 space-y-6">
          {matchingChallenge && (
            <div className="bg-[#1A1A40] text-white rounded-3xl p-6 border border-white/5 space-y-4 shadow-sm">
              <span className="text-[10px] font-mono tracking-widest text-[#0FB5BA] uppercase font-bold block">
                SPECIAL EVENT STATION
              </span>
              <h3 className="font-display font-extrabold text-base tracking-tight leading-snug">
                Their Week at STEAMFest:
              </h3>
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10 space-y-2">
                <p className="text-xs text-amber-400 font-mono font-bold">
                  {matchingChallenge.week} - {matchingChallenge.category}
                </p>
                <h4 className="text-sm font-bold text-white leading-normal truncate">
                  {matchingChallenge.title.split(": ")[1] || matchingChallenge.title}
                </h4>
                <p className="text-[11px] text-gray-300 line-clamp-2">
                  {matchingChallenge.teaser}
                </p>
              </div>
              <button
                onClick={() => navigateTo(`#/challenges/week-${matchingChallenge.id}`)}
                className="w-full text-center inline-flex items-center justify-center py-2.5 rounded-xl bg-[#E63946] hover:bg-[#D62839] text-white font-bold text-xs transition-colors cursor-pointer"
              >
                Explore Station Theme <ExternalLink className="h-3.5 w-3.5 ml-1.5" />
              </button>
            </div>
          )}

          {/* Register Callout */}
          <div className="bg-white rounded-3xl border border-gray-100 p-6 space-y-4 text-center">
            <h4 className="font-display font-bold text-sm text-[#1A1A1A]">
              Join the Guest Session
            </h4>
            <p className="text-gray-500 text-xs leading-normal">
              Tickets include general access to challenge stations plus interactive group discussions hosted by this guest leader.
            </p>
            <a
              href="#/register"
              className="block w-full bg-[#E63946] hover:bg-[#D62839] text-white font-bold py-3.5 rounded-xl text-xs transition-colors text-center cursor-pointer shadow-xs shadow-red-100"
            >
              Secure Daily Passes
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
