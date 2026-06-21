import React from "react";
import { ArrowRight, Sparkles, ShoppingBag } from "lucide-react";
import { PARTNERS } from "../data";

interface PartnersViewProps {
  navigateTo: (route: string) => void;
}

export default function PartnersView({ navigateTo }: PartnersViewProps) {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs font-black tracking-widest text-[#E63946] bg-[#FDEDEC] px-3.5 py-1.5 rounded-full inline-block">
            WORLD-CLASS BRAND CO-LABS
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] tracking-tight">
            Our STEAM Partners
          </h1>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-sans">
            We collaborate with industry leaders in computing and robotic kits. These award-winning products populate our weekly stations, putting safe tech directly into student hands.
          </p>
        </div>

        {/* 6 Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PARTNERS.map((partner) => {
            // Find a representing product image
            const leadProductImg = partner.products[0]?.imagePlaceholder;
            return (
              <div
                key={partner.id}
                onClick={() => navigateTo(`#/partners/${partner.id}`)}
                className="bg-white rounded-3xl border border-gray-100 hover:border-[#0FB5BA] p-6 hover-lift cursor-pointer flex flex-col justify-between group h-96"
              >
                <div>
                  {/* Visual Product representation space */}
                  <div className="w-full h-40 bg-gray-50 rounded-2xl overflow-hidden mb-5 relative">
                    <img
                      src={leadProductImg}
                      alt={`${partner.name} materials context`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[9px] font-mono font-bold text-gray-700 uppercase tracking-widest">
                      {partner.name}
                    </span>
                  </div>

                  {/* Partner specs */}
                  <h3 className="font-display font-black text-base sm:text-lg text-[#1A1A1A] group-hover:text-[#0FB5BA] transition-colors leading-normal mb-1">
                    {partner.name}
                  </h3>
                  <p className="text-[#0FB5BA] font-mono text-[10px] uppercase tracking-wider font-bold mb-3">
                    {partner.tagline}
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                    {partner.descriptionTeaser}
                  </p>
                </div>

                {/* Disc Button */}
                <div className="pt-4 border-t border-gray-50 flex items-center justify-between text-xs font-bold text-gray-400 font-mono">
                  <span>Explore Product Kits</span>
                  <span className="text-[#0FB5BA] group-hover:translate-x-1.5 transition-transform inline-flex items-center">
                    Discover <ArrowRight className="h-3.5 w-3.5 ml-1" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
