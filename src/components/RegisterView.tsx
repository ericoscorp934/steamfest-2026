import React, { useState } from "react";
import { ClipboardCheck, ExternalLink, ShieldCheck, HelpCircle, Loader2 } from "lucide-react";

interface RegisterViewProps {
  navigateTo: (route: string) => void;
}

export default function RegisterView({ navigateTo }: RegisterViewProps) {
  const [loading, setLoading] = useState(true);

  const formUrl = "https://autocrm.ai/widget/form/Mux1Rl4WPMWFjQ4phg9t";

  return (
    <div className="bg-white py-12 sm:py-16" id="register-view-main">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="font-mono text-[10px] font-bold tracking-widest text-[#E63946] bg-[#FDEDEC] px-3.5 py-1.5 rounded-full inline-block">
            SECURE YOUR PASS
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] tracking-tight">
            SteamFest <span className="text-[#E63946]">2026</span> Registration
          </h1>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-sans">
            Complete the form below to secure your child's spot at Malaysia's most collaborative children's STEAM festival. Or, launch the form in a new browser window.
          </p>

          <div className="pt-2 flex justify-center">
            <a
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1A1A40] text-white hover:bg-black font-semibold text-xs px-5 py-2.5 rounded-full shadow-xs hover:scale-102 transition-all cursor-pointer"
              id="register-external-btn"
            >
              <ExternalLink className="h-3.5 w-3.5" /> Launch standard version in new tab
            </a>
          </div>
        </div>

        {/* Form Container Card with Sleek Interface style */}
        <div 
          className="bg-white border-2 border-gray-100 rounded-[32px] overflow-hidden shadow-xl shadow-red-50/20 relative"
          id="embedded-form-card"
        >
          {/* Decorative Top Accent Tag */}
          <div className="bg-gradient-to-r from-[#E63946] to-[#0FB5BA] h-2 w-full"></div>

          {/* Guidelines Banner */}
          <div className="px-6 sm:px-10 py-5 bg-gray-50/50 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2.5 text-gray-600">
              <ShieldCheck className="h-4.5 w-4.5 text-[#0FB5BA] shrink-0" />
              <span>Secure connection powered by <strong>AutoCRM</strong></span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-500">
              <ClipboardCheck className="h-4 w-4 text-[#E63946]" />
              <span>Instant confirmation on submission</span>
            </div>
          </div>

          {/* Embedded Form iframe container */}
          <div className="relative min-h-[500px]" style={{ height: "1000px" }} id="iframe-form-container">
            {loading && (
              <div className="absolute inset-0 bg-white flex flex-col items-center justify-center space-y-3 z-20">
                <Loader2 className="h-8 w-8 text-[#E63946] animate-spin" />
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest font-mono">
                  Loading SteamFest Hub...
                </p>
              </div>
            )}
            <iframe
              src={formUrl}
              style={{ width: "100%", height: "1000px", border: "none" }}
              id="inline-Mux1Rl4WPMWFjQ4phg9t"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="SteamFest Form"
              data-height="983"
              data-layout-iframe-id="inline-Mux1Rl4WPMWFjQ4phg9t"
              data-form-id="Mux1Rl4WPMWFjQ4phg9t"
              title="SteamFest Form"
              onLoad={() => setLoading(false)}
              className="w-full h-full"
            />
          </div>

          {/* Backup Action Footer */}
          <div className="p-6 bg-gray-50/80 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <p className="text-xs font-bold text-[#1A1A1A] flex items-center justify-center sm:justify-start gap-1.5">
                <HelpCircle className="h-4 w-4 text-gray-400 shrink-0" /> Form not rendering correctly?
              </p>
              <p className="text-[11px] text-gray-400 leading-normal">
                Certain strict firewall setups might block layout scripts. Click the button to launch directly.
              </p>
            </div>
            <a
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border hover:border-gray-300 text-gray-700 text-xs font-bold px-4 py-2 rounded-xl transition-all cursor-pointer shadow-xs shrink-0 flex items-center gap-1.5"
            >
              Open Direct Form <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
