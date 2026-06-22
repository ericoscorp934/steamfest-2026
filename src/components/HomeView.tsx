import React from "react";
import { ArrowRight, Calendar, Sparkles, Trophy, MapPin, Stars, ShieldCheck } from "lucide-react";
import { CHALLENGES, ICONS } from "../data";

interface HomeViewProps {
  navigateTo: (route: string) => void;
}

export default function HomeView({ navigateTo }: HomeViewProps) {
  // Extract highlighters
  const headliners = ICONS.filter(icon => icon.isHeadliner);

  return (
    <div className="bg-white" id="home-view-container">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-white border-b border-gray-100" id="hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left" id="hero-content">
              <div className="inline-block px-3 py-1 bg-[#FDEDEC] text-[#E63946] text-[10px] font-bold tracking-widest uppercase rounded-full">
                Asia's Longest STEAM Festival
              </div>
              <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-[0.9] tracking-tight text-[#1A1A1A] select-none">
                STEAMFEST <br/><span className="text-[#E63946]">2026</span>
              </h1>
              <p className="font-sans text-xl sm:text-2xl font-bold text-[#1A1A40] opacity-90">
                16 weekends of Innovation, Robotics, Coding & Arts
              </p>
              <p className="text-gray-500 max-w-md leading-relaxed font-sans mx-auto lg:mx-0">
                A hands-on festival where kids explore, experiment, and create — guided by Malaysia's most inspiring icons at Southplace, Tropicana Metropark.
              </p>

              {/* Action and Register */}
              <div className="pt-2 flex flex-col md:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#/register"
                  className="bg-[#E63946] text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-xl shadow-red-100 transition-all hover:scale-102 hover:shadow-red-200 active:scale-98 cursor-pointer inline-block"
                  id="hero-register-btn"
                >
                  Join the Journey
                </a>
                <div className="flex -space-x-3 items-center ml-4 shrink-0" id="hero-registered-avatars">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100"
                    alt="Registered child"
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100"
                    alt="Registered child"
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
                    alt="Registered child"
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                  <span className="pl-6 text-xs font-bold text-gray-400">500+ Registered</span>
                </div>
              </div>
            </div>

            {/* Right Image/Card Column styled in "Sleek Interface" */}
            <div className="lg:col-span-5 relative" id="hero-illustration">
              <div className="w-full max-w-[450px] aspect-[4/3] rounded-[32px] overflow-hidden shadow-xl mx-auto lg:ml-auto group hover-lift transition-all duration-300">
                <img
                  src="/src/assets/images/kids_robotics_1782046561277.jpg"
                  alt="Two happy children building a robotics toy car together"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stat Strip */}
      <section className="bg-white py-6" id="stats-strip-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-6 border-y border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E63946] flex items-center justify-center text-white text-base">📅</div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase">Duration</p>
                <p className="text-sm font-bold text-[#1A1A1A]">16 weekends</p>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:border-l sm:pl-6 border-gray-100">
              <div className="w-10 h-10 rounded-full bg-[#0FB5BA] flex items-center justify-center text-white text-base">🧪</div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase">Themes</p>
                <p className="text-sm font-bold text-[#1A1A1A]">16 Challenges</p>
              </div>
            </div>
            <div className="flex items-center gap-3 lg:border-l lg:pl-6 border-gray-100">
              <div className="w-10 h-10 rounded-full bg-[#FBBF24] flex items-center justify-center text-white text-base">⭐</div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase">Icons</p>
                <p className="text-sm font-bold text-[#1A1A1A]">16 Legends</p>
              </div>
            </div>
            <div className="flex items-center gap-3 lg:border-l lg:pl-6 border-gray-100">
              <div className="w-10 h-10 rounded-full bg-[#1A1A40] flex items-center justify-center text-white text-base">📍</div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase">Location</p>
                <p className="text-sm font-bold text-[#1A1A1A]">Southplace</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Pages Navigation Grid */}
      <section className="py-16 bg-white" id="navigation-bento-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight">
              Embark on Your STEAM Adventure
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              STEAMFEST 2026 is designed as an interactive wonderland. Click on a zone below to plan your child's weekends, explore themes, and register.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div 
              onClick={() => navigateTo("#/challenges")}
              className="group bg-white border-2 border-gray-50 rounded-3xl p-6 flex flex-col justify-between hover:border-[#0FB5BA] transition-all cursor-pointer shadow-xs min-h-[170px]"
              id="bento-card-challenges"
            >
              <div className="w-8 h-8 rounded-full bg-[#0FB5BA]/10 flex items-center justify-center text-[#0FB5BA] font-bold text-sm">01</div>
              <h4 className="font-black text-lg leading-tight group-hover:text-[#0FB5BA] text-[#1A1A1A] mt-4 mb-2">STEAM Challenges</h4>
              <p className="text-gray-500 text-xs leading-normal mb-5">Explore 16 interactive weekly challenge schedules & stamps.</p>
              <p className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-gray-400">Explore Now &rarr;</p>
            </div>

            {/* Card 2 */}
            <div 
              onClick={() => navigateTo("#/icons")}
              className="group bg-white border-2 border-gray-50 rounded-3xl p-6 flex flex-col justify-between hover:border-[#FBBF24] transition-all cursor-pointer shadow-xs min-h-[170px]"
              id="bento-card-icons"
            >
              <div className="w-8 h-8 rounded-full bg-[#FBBF24]/10 flex items-center justify-center text-[#FBBF24] font-bold text-sm">02</div>
              <h4 className="font-black text-lg leading-tight group-hover:text-[#FBBF24] text-[#1A1A1A] mt-4 mb-2">Meet The Icons</h4>
              <p className="text-gray-500 text-xs leading-normal mb-5">Get details about our celebrated celebrity mentors and guides.</p>
              <p className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-gray-400">See All 16 &rarr;</p>
            </div>

            {/* Card 3 */}
            <div 
              onClick={() => navigateTo("#/partners")}
              className="group bg-white border-2 border-gray-50 rounded-3xl p-6 flex flex-col justify-between hover:border-[#1A1A40] transition-all cursor-pointer shadow-xs min-h-[170px]"
              id="bento-card-partners"
            >
              <div className="w-8 h-8 rounded-full bg-[#1A1A40]/10 flex items-center justify-center text-[#1A1A40] font-bold text-sm">03</div>
              <h4 className="font-black text-lg leading-tight group-hover:text-[#1A1A40] text-[#1A1A1A] mt-4 mb-2">Our Partners</h4>
              <p className="text-gray-500 text-xs leading-normal mb-5">Discover international engineering groups supporting the hub.</p>
              <p className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-gray-400">Tech Leaders &rarr;</p>
            </div>

            {/* Card 4 */}
            <div 
              onClick={() => navigateTo("#/school-events")}
              className="group bg-white border-2 border-gray-50 rounded-3xl p-6 flex flex-col justify-between hover:border-[#E63946] transition-all cursor-pointer shadow-xs min-h-[170px]"
              id="bento-card-school"
            >
              <div className="w-8 h-8 rounded-full bg-[#E63946]/10 flex items-center justify-center text-[#E63946] font-bold text-sm">04</div>
              <h4 className="font-black text-lg leading-tight group-hover:text-[#E63946] text-[#1A1A1A] mt-4 mb-2">School Events</h4>
              <p className="text-gray-500 text-xs leading-normal mb-5">Watch regional inter-school tournaments & showcases.</p>
              <p className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-gray-400">Showcases &rarr;</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Star Guest Highlights banner */}
      <section className="py-16 bg-[#FDEDEC]/40 border-t border-b border-red-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="space-y-3.5 max-w-xl text-center md:text-left">
              <span className="inline-flex items-center font-semibold text-xs text-[#E63946] uppercase font-mono tracking-widest">
                <Trophy className="h-4 w-4 mr-1.5 text-amber-500 fill-amber-400" /> Star Headliners Present
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#1A1A1A] tracking-tight">
                Learn Grit & Artistic Expression From global Pioneers
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                We're joined this season by Academy-Award winner <strong>Michelle Yeoh</strong> (Arts) representing creative expression, and world badminton legend <strong>Lee Chong Wei</strong> (Math/Mindset) explaining trajectory math and focus!
              </p>
            </div>
            <div className="flex items-center -space-x-4 shrink-0">
              {headliners.map((hl) => (
                <div 
                  key={hl.id} 
                  onClick={() => navigateTo(`#/icons/${hl.id}`)}
                  className="w-20 h-20 rounded-full border-4 border-white overflow-hidden shadow-md cursor-pointer hover:scale-105 hover:z-10 transition-all"
                  title={`View profile for ${hl.name}`}
                >
                  <div className="w-full h-full bg-[#1A1A40] text-white flex items-center justify-center font-display font-black text-xs text-center p-1.5 leading-tight">
                    {hl.name.split(' ').slice(-2).join(' ')}
                  </div>
                </div>
              ))}
              <div 
                onClick={() => navigateTo("#/icons")}
                className="w-16 h-16 rounded-full border-4 border-white bg-[#E63946] text-white flex items-center justify-center text-xs font-bold leading-tight shadow-md cursor-pointer hover:bg-[#D62839] transition-colors"
              >
                +14 More
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Testimonial Trust Bar */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1A1A40] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-lg z-10">
              <div className="inline-flex items-center space-x-1.5 text-amber-400 text-xs font-mono font-bold uppercase">
                <ShieldCheck className="h-4 w-4" /> <span>Safety-Certified Environment</span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight leading-tight">
                Designed For Families. Built For Safe Discoveries.
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Every weekend session undergoes check-safe security protocol reviews. Kids are guided by trained safety educators from Genius Minds and certified medical practitioners, with children's play kits calibrated specifically for student hands.
              </p>
            </div>
            <div className="shrink-0 flex flex-col items-center bg-white/5 border border-white/10 rounded-2xl p-6 text-center max-w-xs z-10">
              <span className="text-3xl font-extrabold text-[#0FB5BA] mb-2 font-mono">100%</span>
              <p className="text-xs font-semibold text-gray-300 mb-4 leading-normal">
                Hands-on kits for all participants. Every child builds, creates and codes. No passive slides lectures.
              </p>
              <button 
                onClick={() => navigateTo("#/faq")}
                className="text-xs text-white underline font-bold hover:text-[#0FB5BA] transition-colors"
              >
                Read Parents FAQ
              </button>
            </div>
            <div className="absolute top-0 right-0 w-80 h-80 bg-red-500/5 rounded-full blur-3xl transform translate-x-20 -translate-y-20"></div>
          </div>
        </div>
      </section>

      {/* Footer CTA Banner */}
      <section className="py-16 bg-[#FDEDEC]/70 text-center space-y-6">
        <h2 className="font-display font-black text-2xl sm:text-3xl text-[#1A1A1A] tracking-tight">
          Don't Miss STEAMFEST 2026
        </h2>
        <p className="text-[#1A1A40] font-semibold text-sm sm:text-base">
          📍 Southplace, Tropicana Metropark &bull; 📅 24 July to 31 October 2026
        </p>
        <div className="pt-2">
          <a
            href="#/register"
            className="inline-block bg-[#E63946] hover:bg-[#D62839] text-white text-base font-bold px-12 py-4 rounded-full shadow-lg shadow-[#E63946]/10 transition-all cursor-pointer"
          >
            Register Now
          </a>
        </div>
      </section>
    </div>
  );
}
