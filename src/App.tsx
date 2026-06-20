import { useState, useEffect } from "react";
import { ArrowUp, Heart, Sparkles, Phone, Mail, MapPin, Compass, Gift, Calendar } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesList from "./components/ServicesList";
import TreatmentMatcher from "./components/TreatmentMatcher";
import AboutUs from "././components/AboutUs";
import Testimonials from "./components/Testimonials";
import ContactAndMap from "./components/ContactAndMap";
import { Treatment } from "./types";
import { INFO_CONTACT } from "./data";

export default function App() {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll for "Back to top" button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    // Redirect booking navigation requests straight to the contact section
    const targetId = sectionId === "bookings" ? "contact" : sectionId;
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSelectTreatmentToBook = (treatment: Treatment) => {
    setSelectedTreatment(treatment);
    // Smoothly scroll down to the contact section
    setTimeout(() => {
      handleNavigate("contact");
    }, 100);
  };

  const handleClearSelectedTreatment = () => {
    setSelectedTreatment(null);
  };

  const handleBookNowCTA = () => {
    handleNavigate("contact");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col text-[#2D2926] font-sans antialiased text-left leading-relaxed">
      {/* 1. Header Navigation */}
      <Navbar 
         onNavigate={handleNavigate} 
         onBookNow={handleBookNowCTA} 
      />

      {/* 2. Main Page Content Sections */}
      <main className="flex-grow">
         
        {/* Hero Section */}
        <Hero 
          onExploreTreatments={() => handleNavigate("services")} 
          onBookAppointment={handleBookNowCTA}
          onOpenAdvisor={() => handleNavigate("advisor")}
        />

        {/* Services & Treatment Options List */}
        <ServicesList 
          onSelectTreatment={handleSelectTreatmentToBook} 
        />

        {/* Interactive Wohlfühl-Berater Questionnaire */}
        <TreatmentMatcher 
          onRecommend={handleSelectTreatmentToBook} 
        />

        {/* About the studio & Qualification */}
        <AboutUs />

        {/* Guest Reviews Carousel */}
        <Testimonials />

        {/* Contacts, Opening Hours timetable and custom Vector map with selected treatment info */}
        <ContactAndMap 
          selectedTreatment={selectedTreatment}
          onClearSelectedTreatment={handleClearSelectedTreatment}
        />

      </main>

      {/* 3. Elegantly Styled Footer for Local Legal/Corporate Compliance */}
      <footer className="bg-[#2D2926] text-[#FDFBF7]/80 border-t border-[#2D2926]/10 py-16 text-xs leading-normal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 sm:gap-8 pb-12 border-b border-[#FDFBF7]/10 text-left">
            
            {/* Footer Column 1: Editorial Philosophy */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border border-[#8C7E6A]/30 flex items-center justify-center bg-white/5 text-[#8C7E6A] font-serif font-bold text-sm">
                  ST
                </div>
                <div>
                  <span className="block font-serif text-sm font-semibold tracking-wide text-white">Suchada Tanomvet</span>
                  <span className="block text-[9px] tracking-wider uppercase text-[#8C7E6A] font-sans">Kosmetik & Massage</span>
                </div>
              </div>
              <p className="text-[11px] text-[#FDFBF7]/60 font-light max-w-xs leading-relaxed">
                Unsere Philosophie ist die harmonische Kombination aus ursprünglichen thailändischen Massagetechniken und anspruchsvoller, moderner Hautpflege. Für spürbar mehr Ausgeglichenheit und Vitalität im Alltag.
              </p>
              <div className="flex items-center gap-1.5 text-[#8C7E6A] font-medium text-[11px]">
                <Heart className="w-3.5 h-3.5 text-[#8C7E6A] fill-[#8C7E6A]" />
                <span>Auszeit für Körper und Geist</span>
              </div>
            </div>

            {/* Footer Column 2: Direct Navigation */}
            <div className="space-y-4">
              <h4 className="font-serif text-sm font-semibold text-white tracking-wider uppercase">Navigation</h4>
              <ul className="space-y-2.5 text-[11px] font-sans font-light">
                <li>
                  <button onClick={() => handleNavigate("home")} className="hover:text-[#8C7E6A] transition-colors cursor-pointer">
                    Startseite
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigate("services")} className="hover:text-[#8C7E6A] transition-colors cursor-pointer">
                    Behandlungsübersicht
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigate("advisor")} className="hover:text-[#8C7E6A] transition-colors cursor-pointer">
                    Wohlfühl-Finder (Quiz)
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigate("about")} className="hover:text-[#8C7E6A] transition-colors cursor-pointer">
                    Über das Studio Suchada
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigate("contact")} className="hover:text-[#8C7E6A] transition-colors cursor-pointer text-[#8C7E6A] font-medium">
                    Jetzt anrufen & buchen
                  </button>
                </li>
              </ul>
            </div>

            {/* Footer Column 3: Contact overview */}
            <div className="space-y-4 text-left">
              <h4 className="font-serif text-sm font-semibold text-white tracking-wider uppercase">Kontakt</h4>
              <div className="space-y-3 font-sans text-[11px] font-light">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#8C7E6A] shrink-0" />
                  <span>Am Strandbad 8, 67227 Frankenthal (Pfalz)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-[#8C7E6A] shrink-0" />
                  <div>
                    <span className="block">Festnetz: {INFO_CONTACT.phone}</span>
                    <span className="block">Handy: {INFO_CONTACT.mobile}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="w-4 h-4 text-[#8C7E6A] shrink-0" />
                  <span>info@suchada-kosmetik-massage.de</span>
                </div>
              </div>
            </div>

            {/* Footer Column 4: Booking Termine info */}
            <div className="space-y-4">
              <h4 className="font-serif text-sm font-semibold text-white tracking-wider uppercase flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#8C7E6A]" />
                <span>Termin vereinbaren</span>
              </h4>
              <p className="text-[11px] text-[#FDFBF7]/60 font-light leading-relaxed">
                Um Ihnen Ihren Wunschtermin zu sichern und eine entspannte Atmosphäre zu garantieren, bitten wir um vorherige Kontaktaufnahme. Rufen Sie uns einfach an!
              </p>
              <a
                href="tel:+4962334629988"
                className="bg-[#8C7E6A]/15 hover:bg-[#8C7E6A] border border-[#8C7E6A]/40 text-[#8C7E6A] hover:text-[#2D2926] text-[10px] uppercase font-bold tracking-widest px-4 py-3 rounded-full transition-all duration-300 cursor-pointer w-full text-center block"
              >
                Studio jetzt anrufen
              </a>
            </div>

          </div>

          {/* Legal references (German Impressum & Datenschutz labels) */}
          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-[#FDFBF7]/45 font-light">
            <p>
              &copy; {new Date().getFullYear()} Suchada Tanomvet - Kosmetik- & Massagestudio Frankenthal. Alle Rechte vorbehalten. 
            </p>
            <div className="flex gap-4">
              <a href="#about" className="hover:text-white hover:underline">Impressum</a>
              <span>|</span>
              <a href="#contact" className="hover:text-white hover:underline">Datenschutz</a>
              <span>|</span>
              <a href="#services" className="hover:text-white hover:underline">AGB & Stornierung</a>
            </div>
          </div>

        </div>
      </footer>

      {/* Floating Action Button (Goes back up) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-[#2D2926] hover:bg-[#8C7E6A] text-white rounded-none shadow-none transition-all duration-300 hover:-translate-y-1 z-40 cursor-pointer animate-fade-in"
          aria-label="Nach oben scrollen"
          id="btn-scroll-top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}
