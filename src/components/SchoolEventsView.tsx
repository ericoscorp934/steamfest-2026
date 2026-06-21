import React from "react";
import { Calendar, ArrowRight, Award, Megaphone } from "lucide-react";
import { SCHOOL_EVENTS } from "../data";

interface SchoolEventsViewProps {
  navigateTo: (route: string) => void;
}

export default function SchoolEventsView({ navigateTo }: SchoolEventsViewProps) {
  // Map images for the events
  const eventImages: Record<string, string> = {
    "robotics-battle": "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&q=80&w=600",
    "young-inventors": "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=600",
    "talent-night": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=600",
  };

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs font-black tracking-widest text-[#E63946] bg-[#FDEDEC] px-3.5 py-1.5 rounded-full inline-block">
            REGIONAL SCHOOL TOURNAMENTS
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] tracking-tight">
            School Events & Showcases
          </h1>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-sans">
            Three signature stages highlighting Malaysian talent in robotics, engineering, and digital kinetic arts. Gather parent groups and cheer on school leaders!
          </p>
        </div>

        {/* Vertical stacked large cards */}
        <div className="space-y-10 max-w-5xl mx-auto">
          {SCHOOL_EVENTS.map((event) => {
            const hasImg = eventImages[event.id] || "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&q=80&w=600";
            return (
              <div
                key={event.id}
                onClick={() => navigateTo(`#/school-events/${event.id}`)}
                className="bg-white rounded-3xl border border-gray-100 hover:border-indigo-600 p-6 sm:p-8 hover-lift cursor-pointer flex flex-col md:flex-row gap-8 items-center"
              >
                {/* Product Photo */}
                <div className="w-full md:w-2/5 aspect-[4/3] sm:aspect-[16/10] bg-gray-50 rounded-2xl overflow-hidden shrink-0 relative">
                  <img
                    src={hasImg}
                    alt={event.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <span className="absolute bottom-4 left-4 bg-[#1A1A40] text-white font-mono text-[9px] px-3 py-1 rounded-md font-bold uppercase tracking-widest">
                    {event.date.split(' in ')[0] || "October"}
                  </span>
                </div>

                {/* Text credentials */}
                <div className="space-y-4 flex-1">
                  <div className="space-y-1.5">
                    <span className="font-mono text-[10px] font-black tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full inline-block">
                      STAGE CHAMPIONSHIP
                    </span>
                    <h3 className="font-display font-black text-lg sm:text-2xl text-[#1A1A1A]">
                      {event.name}
                    </h3>
                    <p className="font-mono text-xs text-gray-500 flex items-center">
                      <Calendar className="h-4 w-4 text-[#E63946] mr-1.5" /> {event.date} &bull; {event.time.split(' (')[0]}
                    </p>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {event.teaser}
                  </p>
                  <div className="pt-2">
                    <span className="inline-flex items-center text-xs font-bold text-indigo-600 font-mono hover:underline">
                      Learn Entry Guidelines <ArrowRight className="h-4 w-4 ml-1.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick notification footer banner */}
        <div className="mt-20 bg-gray-50 rounded-3xl p-8 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 border border-gray-100">
          <div className="flex items-start space-x-3.5 max-w-md">
            <Megaphone className="h-6 w-6 text-[#E63946] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-display font-bold text-sm text-[#1A1A1A]">Are you a STEAM teacher?</h4>
              <p className="text-gray-500 text-xs mt-1 leading-normal">
                School groups receive subsidized general exhibition passes. Contact our school coordinators at <strong>schools@geniusminds.my</strong> for custom entry procedures.
              </p>
            </div>
          </div>
          <a
            href="mailto:schools@geniusminds.my"
            className="bg-[#1A1A40] hover:bg-slate-850 text-white font-bold text-xs px-6 py-3 rounded-full transition-colors shrink-0 text-center"
          >
            Email Coordinator
          </a>
        </div>
      </div>
    </div>
  );
}
