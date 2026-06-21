import React from "react";
import { ArrowLeft, ShoppingBag, Sparkles, Star } from "lucide-react";
import { PARTNERS } from "../data";

interface PartnerDetailViewProps {
  partnerId: string;
  navigateTo: (route: string) => void;
}

export default function PartnerDetailView({ partnerId, navigateTo }: PartnerDetailViewProps) {
  const partner = PARTNERS.find((p) => p.id === partnerId);

  if (!partner) {
    return (
      <div className="bg-white py-20 text-center space-y-4">
        <h2 className="font-display font-bold text-2xl text-gray-800">Partner Not Found</h2>
        <button
          onClick={() => navigateTo("#/partners")}
          className="text-[#E63946] border border-[#E63946] px-6 py-2 rounded-full font-bold hover:bg-[#FDEDEC]"
        >
          Back to Partners
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white pb-20">
      {/* Back link bar */}
      <div className="bg-gray-50 border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigateTo("#/partners")}
            className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-[#0FB5BA] transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to partners
          </button>
        </div>
      </div>

      {/* Hero Banner with Brand details */}
      <section className="bg-[#E6F7F8]/40 py-16 border-b border-gray-100 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-3.5">
          <span className="font-mono text-xs font-black tracking-widest text-[#0FB5BA] bg-[#E6F7F8] px-3.5 py-1.5 rounded-full inline-block">
            OFFICIAL KITS DEVELOPER
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A]">
            {partner.name}
          </h1>
          <p className="text-[#0FB5BA] font-mono text-xs uppercase tracking-widest font-extrabold">
            {partner.tagline}
          </p>
        </div>
      </section>

      {/* Core Copy & Product Display Grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
        {/* Intro */}
        <div className="max-w-3xl space-y-4">
          <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#1A1A1A] flex items-center">
            <ShoppingBag className="h-5.5 w-5.5 text-[#0FB5BA] mr-2" /> Brand Role & Collaboration
          </h2>
          {partner.descriptionParagraphs.map((para, idx) => (
            <p key={idx} className="text-gray-600 text-sm sm:text-base leading-relaxed font-sans">
              {para}
            </p>
          ))}
        </div>

        {/* 3 Products cards layout */}
        <div className="space-y-6">
          <h3 className="font-display font-extrabold text-lg text-[#1a1a1a] flex items-center border-b border-gray-100 pb-3">
            <Sparkles className="h-5 w-5 text-amber-500 mr-2" /> Featured Partner Kits in Play Zones
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partner.products.map((p, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-xs hover:border-[#0FB5BA] transition-colors"
              >
                {/* Product image with referrerPolicy */}
                <div className="w-full h-44 bg-gray-50 overflow-hidden relative">
                  <img
                    src={p.imagePlaceholder}
                    alt={p.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-[#1A1A40] text-white font-mono text-[9px] px-2 py-0.5 rounded-md font-semibold">
                    KIT {index + 1}
                  </span>
                </div>
                {/* Product Specs */}
                <div className="p-5 space-y-2">
                  <h4 className="font-display font-bold text-sm sm:text-base text-[#1A1A1A]">
                    {p.name}
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed font-sans">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Bottom banner */}
        <div className="bg-[#E6F7F8]/40 border border-teal-50 rounded-3xl p-8 text-center space-y-6 max-w-3xl mx-auto">
          <h4 className="font-display font-black text-lg sm:text-xl text-[#1a1a1a]">
            Ready to test {partner.name} kits?
          </h4>
          <p className="text-sm text-gray-500 leading-relaxed font-sans max-w-xl mx-auto">
            All robotics boards, modular drone cells, and smart accelerators are supplied directly in the daily workshops. Purchase passes to configure.
          </p>
          <div className="pt-2">
            <a
              href="#/register"
              className="inline-block bg-[#E63946] hover:bg-[#D62839] text-white text-sm font-bold px-8 py-3.5 rounded-full shadow-md shadow-[#E63946]/10 transition-colors cursor-pointer"
            >
              Get Daily Ticket Pass
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
