import React from "react";
import { ArrowLeft, Clock, Calendar, CheckSquare, Trophy, ShieldAlert, ArrowRight } from "lucide-react";
import { SCHOOL_EVENTS } from "../data";

interface SchoolEventDetailViewProps {
  eventId: string;
  navigateTo: (route: string) => void;
}

export default function SchoolEventDetailView({ eventId, navigateTo }: SchoolEventDetailViewProps) {
  const event = SCHOOL_EVENTS.find((e) => e.id === eventId);

  if (!event) {
    return (
      <div className="bg-white py-20 text-center space-y-4">
        <h2 className="font-display font-bold text-2xl text-gray-800">Event Not Found</h2>
        <button
          onClick={() => navigateTo("#/school-events")}
          className="text-[#E63946] border border-[#E63946] px-6 py-2 rounded-full font-bold hover:bg-[#FDEDEC]"
        >
          Back to School Events
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white pb-20">
      {/* Back Link Bar */}
      <div className="bg-gray-50 border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigateTo("#/school-events")}
            className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-indigo-600 transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to School Events
          </button>
        </div>
      </div>

      {/* Hero Banner with event names */}
      <section className="bg-[#ECECF2]/50 py-16 border-b border-gray-150">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="font-mono text-xs font-black tracking-widest text-[#E63946] bg-[#FDEDEC] px-3.5 py-1.5 rounded-full inline-block">
            SIGNATURE FESTIVAL STAGE
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A]">
            {event.name}
          </h1>
          <p className="text-gray-500 font-semibold font-mono text-xs sm:text-sm flex items-center justify-center space-x-1">
            <span>📅 {event.date}</span>
            <span>&bull;</span>
            <span>📍 Main Arena Stage</span>
          </p>
        </div>
      </section>

      {/* Detail Layout */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column Description */}
        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-4">
            <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#1A1A1A] flex items-center">
              <Trophy className="h-5.5 w-5.5 text-indigo-600 mr-2" /> Event Overview & Structure
            </h2>
            {event.descriptionParagraphs.map((para, i) => (
              <p key={i} className="text-gray-600 text-sm sm:text-base leading-relaxed font-sans">
                {para}
              </p>
            ))}
          </div>

          {/* Guidelines on How to join */}
          <div className="bg-[#ECECF2]/30 rounded-3xl p-6 sm:p-8 border border-gray-150/50 space-y-6">
            <h3 className="font-display font-extrabold text-lg text-[#1a1a1a] flex items-center">
              <CheckSquare className="h-5 w-5 text-indigo-600 mr-2" /> How to Participate
            </h3>
            <ul className="space-y-4">
              {event.howToParticipate.map((step, index) => {
                const parts = step.split(": ");
                const header = parts[0];
                const text = parts[1] || "";
                return (
                  <li key={index} className="flex space-x-3.5 items-start">
                    <span className="w-6 h-6 rounded-full bg-indigo-600/10 text-indigo-600 font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <div>
                      <strong className="text-gray-950 text-sm sm:text-base">{header}</strong>
                      {text && <p className="text-gray-500 text-xs sm:text-sm mt-0.5">{text}</p>}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Right Info block */}
        <div className="lg:col-span-4 space-y-6">
          {/* Schedule stats block */}
          <div className="bg-[#1A1A40] text-white rounded-3xl p-6 space-y-4 shadow-sm">
            <span className="text-[10px] font-mono tracking-widest text-[#0FB5BA] uppercase font-bold block">
              SCHEDULE CHECKLIST
            </span>
            <div className="space-y-3">
              <div className="flex items-start space-x-2.5">
                <Calendar className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-gray-300 uppercase font-mono">Date</h4>
                  <p className="text-sm text-white font-extrabold mt-0.5">{event.date.split(' in ')[0] || "September/October"}</p>
                </div>
              </div>
              <div className="flex items-start space-x-2.5">
                <Clock className="h-4 w-4 text-[#0FB5BA] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-gray-300 uppercase font-mono">Timing</h4>
                  <p className="text-xs text-white font-semibold mt-0.5">{event.time}</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-center">
              <a
                href="#/register"
                className="block w-full bg-[#E63946] hover:bg-[#D62839] text-white font-bold py-3 rounded-lg text-xs transition-colors cursor-pointer"
              >
                Register School Team
              </a>
            </div>
          </div>

          {/* Safety note / FAQ block */}
          <div className="bg-white rounded-3xl border border-gray-100 p-6 space-y-3 text-center">
            <h4 className="font-display font-medium text-xs text-amber-500 uppercase font-mono tracking-widest">
              IMPORTANT NOTE
            </h4>
            <p className="text-gray-505 text-xs font-sans leading-relaxed">
              School registrations are processed on a first-come, first-served basis. Limited to a maximum of 3 teams from a single school division.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
