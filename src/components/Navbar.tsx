import { useState } from "react";
import { Sparkles, Menu, X, Phone, Calendar } from "lucide-react";

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  onBookNow: () => void;
}

export default function Navbar({ onNavigate, onBookNow }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Start", target: "home" },
    { label: "Behandlungen", target: "services" },
    { label: "Wohlfühl-Berater", target: "advisor" },
    { label: "Über uns", target: "about" },
    { label: "Kundenstimmen", target: "testimonials" },
    { label: "Anfahrt & Kontakt", target: "contact" },
  ];

  const handleItemClick = (target: string) => {
    onNavigate(target);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#2D2926]/10 transition-all duration-300">
      {/* Top Notification Bar */}
      <div className="bg-[#2D2926] text-[#FDFBF7] text-[10px] uppercase tracking-widest py-2 px-4 text-center flex items-center justify-center gap-2 font-medium">
        <Sparkles className="w-3 h-3 text-[#8C7E6A] animate-pulse" />
        <span>Gutscheine online oder im Studio erhältlich – Perfekt zum Verschenken!</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo Brand */}
          <div 
            onClick={() => handleItemClick("home")}
            className="flex items-center gap-3 cursor-pointer group"
            id="navbar-logo"
          >
            <div className="w-10 h-10 rounded-full border border-[#2D2926]/20 flex items-center justify-center bg-[#FDFBF7] text-[#2D2926] font-serif font-bold text-base hover:bg-[#2D2926] hover:text-white transition-colors duration-300">
              ST
            </div>
            <div>
              <span className="block font-serif text-lg sm:text-xl font-bold uppercase tracking-tighter text-[#2D2926] group-hover:text-[#8C7E6A] transition-colors duration-300">
                S. Tanomvet
              </span>
              <span className="block text-[9px] tracking-[0.25em] uppercase text-[#8C7E6A] font-semibold font-sans">
                Kosmetik & Massage
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {menuItems.map((item) => (
              <button
                key={item.target}
                onClick={() => handleItemClick(item.target)}
                className="font-sans text-[11px] uppercase tracking-[0.2em] font-medium text-[#2D2926]/60 hover:text-[#2D2926] transition-colors duration-200 cursor-pointer py-2 border-b border-transparent hover:border-[#2D2926] pb-1"
                id={`nav-item-${item.target}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Call to Actions */}
          <div className="hidden md:flex items-center gap-5">
            <a 
              href="tel:+4962334629988" 
              className="flex items-center gap-2 text-[10px] font-sans uppercase tracking-[0.15em] font-bold text-[#8C7E6A] hover:text-[#2D2926] transition-colors duration-200"
              id="cta-nav-phone"
            >
              <Phone className="w-3.5 h-3.5 text-[#8C7E6A]" />
              <span>06233 4629988</span>
            </a>
            <button
              onClick={onBookNow}
              className="bg-[#2D2926] hover:bg-[#8C7E6A] text-white text-[11px] uppercase tracking-widest font-sans font-semibold px-6 py-3 rounded-full transition-all duration-300 cursor-pointer flex items-center gap-1.5 shadow-sm"
              id="cta-nav-book"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Termin buchen</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <a 
              href="tel:+4962334629988"
              className="p-2 text-[#8C7E6A] hover:text-[#2D2926]"
              aria-label="Anrufen"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-none text-[#2D2926] hover:text-[#8C7E6A] hover:bg-[#EAE4DD]/30 transition-colors duration-200 cursor-pointer"
              aria-expanded="false"
              id="mobile-menu-btn"
            >
              <span className="sr-only">Hauptmenü öffnen</span>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FDFBF7] border-b border-[#2D2926]/10 px-4 pt-2 pb-6 space-y-2 animate-fade-in">
          {menuItems.map((item) => (
            <button
              key={item.target}
              onClick={() => handleItemClick(item.target)}
              className="block w-full text-left px-4 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-[#2D2926]/70 hover:text-[#2D2926] hover:bg-[#EAE4DD]/40 rounded-none transition-all"
              id={`nav-item-mobile-${item.target}`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-[#2D2926]/10 flex flex-col gap-3 px-4">
            <a 
              href="tel:+4962334629988" 
              className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#2D2926]/70 hover:text-[#2D2926]"
            >
              <Phone className="w-4 h-4 text-[#8C7E6A]" />
              <span>06233 4629988</span>
            </a>
            <button
              onClick={() => {
                setIsOpen(false);
                onBookNow();
              }}
              className="w-full bg-[#2D2926] hover:bg-[#8C7E6A] text-white py-3 tracking-widest uppercase text-xs font-semibold rounded-full transition-colors flex items-center justify-center gap-2"
              id="cta-nav-mobile-book"
            >
              <Calendar className="w-4 h-4" />
              <span>Termin buchen</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
