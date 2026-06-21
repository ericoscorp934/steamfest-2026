import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeView from "./components/HomeView";
import ChallengesView from "./components/ChallengesView";
import ChallengeDetailView from "./components/ChallengeDetailView";
import IconsView from "./components/IconsView";
import IconDetailView from "./components/IconDetailView";
import PartnersView from "./components/PartnersView";
import PartnerDetailView from "./components/PartnerDetailView";
import SchoolEventsView from "./components/SchoolEventsView";
import SchoolEventDetailView from "./components/SchoolEventDetailView";
import FaqView from "./components/FaqView";
import RegisterView from "./components/RegisterView";

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash || "#/");

  // Sync hash state with browser location
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || "#/");
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Scroll to top on page navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as any });
  }, [currentHash]);

  // Navigate function that alters window.location.hash
  const navigateTo = (routePath: string) => {
    window.location.hash = routePath;
  };

  // Basic Hash Router Parser
  const renderActiveView = () => {
    const hash = currentHash;

    if (hash === "#/" || hash === "") {
      return <HomeView navigateTo={navigateTo} />;
    }

    if (hash.startsWith("#/challenges/week-")) {
      const match = hash.match(/#\/challenges\/week-(\d+)/);
      const weekId = match ? parseInt(match[1], 10) : null;
      if (weekId) {
        return <ChallengeDetailView challengeId={weekId} navigateTo={navigateTo} />;
      }
    }

    if (hash === "#/challenges") {
      return <ChallengesView navigateTo={navigateTo} />;
    }

    if (hash.startsWith("#/icons/")) {
      const iconId = hash.replace("#/icons/", "");
      if (iconId) {
        return <IconDetailView iconId={iconId} navigateTo={navigateTo} />;
      }
    }

    if (hash === "#/icons") {
      return <IconsView navigateTo={navigateTo} />;
    }

    if (hash.startsWith("#/partners/")) {
      const partnerId = hash.replace("#/partners/", "");
      if (partnerId) {
        return <PartnerDetailView partnerId={partnerId} navigateTo={navigateTo} />;
      }
    }

    if (hash === "#/partners") {
      return <PartnersView navigateTo={navigateTo} />;
    }

    if (hash.startsWith("#/school-events/")) {
      const eventId = hash.replace("#/school-events/", "");
      if (eventId) {
        return <SchoolEventDetailView eventId={eventId} navigateTo={navigateTo} />;
      }
    }

    if (hash === "#/school-events") {
      return <SchoolEventsView navigateTo={navigateTo} />;
    }

    if (hash === "#/faq") {
      return <FaqView navigateTo={navigateTo} />;
    }

    if (hash === "#/register" || hash === "#register" || hash === "#eventbrite") {
      return <RegisterView navigateTo={navigateTo} />;
    }

    // Fallback default
    return <HomeView navigateTo={navigateTo} />;
  };

  // Determine standard route flag to pass to navigation link indicators
  const getRouteFlag = () => {
    const h = currentHash;
    if (h === "#/" || h === "") return "home";
    if (h.startsWith("#/challenges")) return "challenges";
    if (h.startsWith("#/icons")) return "icons";
    if (h.startsWith("#/partners")) return "partners";
    if (h.startsWith("#/school-events")) return "school-events";
    if (h.startsWith("#/faq")) return "faq";
    if (h === "#/register" || h === "#register" || h === "#eventbrite") return "register";
    return "home";
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-gray-900 border-t-8 border-[#E63946]">
      {/* Universal Responsive Navbar */}
      <Navbar currentRoute={getRouteFlag()} navigateTo={navigateTo} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {renderActiveView()}
      </main>

      {/* Universal Footer */}
      <Footer navigateTo={navigateTo} />
    </div>
  );
}
