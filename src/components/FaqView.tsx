import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare, Sparkles } from "lucide-react";
import { FAQS } from "../data";

interface FaqViewProps {
  navigateTo: (route: string) => void;
}

export default function FaqView({ navigateTo }: FaqViewProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs font-black tracking-widest text-[#E63946] bg-[#FDEDEC] px-3.5 py-1.5 rounded-full inline-block">
            STRESS-FREE GUIDE FOR PARENTS
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-sans">
            Have questions about timings, pricing models, safety constraints, or age groups? Check our guides below, compiled to simplify your planning!
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = expandedIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-xs hover:border-[#E63946] transition-all"
              >
                {/* Accordion Toggle Grid */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-display font-extrabold text-[#1A1A1A] text-sm sm:text-base cursor-pointer hover:bg-[#FDEDEC]/20 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-[#E63946] shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-gray-400 shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 shrink-0" />
                  )}
                </button>

                {/* Accordion Answer Content */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-gray-600 text-xs sm:text-sm font-sans leading-relaxed border-t border-gray-50 bg-[#FDEDEC]/10">
                    <p>{faq.answer}</p>
                    {faq.question.includes("How do I register") && (
                      <div className="mt-3.5 flex items-center">
                        <button
                          onClick={() => navigateTo("#/register")}
                          className="inline-flex items-center text-xs font-bold text-[#E63946] font-mono hover:underline cursor-pointer bg-transparent border-none p-0"
                        >
                          Book Your Ticket Seats <Sparkles className="h-3.5 w-3.5 ml-1 select-none animate-pulse" />
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Facebook message fallback bottom card */}
        <div className="mt-16 bg-[#1A1A40] text-white rounded-3xl p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-md">
            <h4 className="font-display font-extrabold text-lg text-white tracking-tight flex items-center justify-center sm:justify-start">
              <MessageSquare className="h-5 w-5 mr-2 text-[#0FB5BA]" /> Still Have Core Questions?
            </h4>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-sans">
              We're active 24/7! Direct-message us on Facebook to connect with our administrative and pediatric coaches, or secure your general pass.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 font-mono text-center">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="bg-[#0FB5BA] hover:bg-[#0da0a4] text-white font-bold text-xs px-6 py-3 rounded-full transition-colors flex items-center justify-center space-x-1"
            >
              DM on Facebook
            </a>
            <button
              onClick={() => navigateTo("#/register")}
              className="bg-[#E63946] hover:bg-[#D62839] text-white font-bold text-xs px-6 py-3 rounded-full transition-colors flex items-center justify-center cursor-pointer"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
