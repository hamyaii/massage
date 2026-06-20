import { ArrowRight, Compass, Heart, Award } from "lucide-react";
import spaHero from "../assets/images/spa_hero_1781948564580.jpg";

interface HeroProps {
  onExploreTreatments: () => void;
  onBookAppointment: () => void;
  onOpenAdvisor: () => void;
}

export default function Hero({ onExploreTreatments, onBookAppointment, onOpenAdvisor }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen pt-20 flex items-center bg-[#2D2926] text-[#FDFBF7] overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={spaHero}
          alt="Suchada Tanomvet Spa Interior Frankenthal"
          className="w-full h-full object-cover opacity-25 scale-102 filter grayscale-[15%] contrast-[110%]"
          referrerPolicy="no-referrer"
          id="hero-bg-img"
        />
        {/* Gradients to fade nicely to black/beige */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D2926]/95 via-[#2D2926]/80 to-[#2D2926]/40" />
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#2D2926]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FDFBF7] to-transparent z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 space-y-8 max-w-3xl">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 text-[#8C7E6A] text-[10px] sm:text-xs font-sans font-semibold tracking-[0.4em] uppercase animate-fade-in">
              <span>Kosmetik & Wellness Studio</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-7xl md:text-[84px] font-serif leading-[0.95] tracking-tight text-[#FDFBF7] animate-slide-up" id="hero-title">
              Suchada<br/>
              <span className="italic font-light text-[#8C7E6A] ml-8 sm:ml-20">Tanomvet</span>
            </h1>

            {/* Sub-Tagline / description heading */}
            <div className="space-y-1.5 pt-2">
              <span className="block font-sans text-xs uppercase tracking-[0.2em] text-[#8C7E6A] font-semibold">Traditionelle Thaimassage & Kosmetikbehandlungen</span>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#FDFBF7]/80 font-sans leading-relaxed max-w-2xl font-light">
              Eintauchen in eine Welt der Ruhe. Wir kombinieren traditionelle thailändische Heilkunst mit moderner apparativer Kosmetik für Ihr ganzheitliches Wohlbefinden in Frankenthal. Erleben Sie spürbare Regeneration und tiefe Vitalität.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={onBookAppointment}
                className="bg-[#FDFBF7] hover:bg-[#8C7E6A] text-[#2D2926] hover:text-white text-[11px] font-sans font-bold uppercase tracking-widest px-8 py-4 rounded-full shadow-none transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                id="hero-book-btn"
              >
                <span>Termin vereinbaren</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={onExploreTreatments}
                className="border border-[#FDFBF7]/40 hover:border-[#8C7E6A] hover:bg-[#FDFBF7]/5 bg-transparent text-[#FDFBF7] text-[11px] font-sans font-semibold uppercase tracking-widest px-7 py-4 rounded-full transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                id="hero-explore-btn"
              >
                <span>Angebote ansehen</span>
              </button>

              <button
                onClick={onOpenAdvisor}
                className="bg-[#2D2926]/50 border border-[#8C7E6A]/30 hover:border-[#8C7E6A] text-[#8C7E6A] text-[11px] font-sans font-semibold uppercase tracking-widest px-7 py-4 rounded-full transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                id="hero-advisor-btn"
              >
                <Compass className="w-4 h-4 text-[#8C7E6A]" />
                <span>Wohlfühl-Finder</span>
              </button>
            </div>

            {/* Strengths indicators */}
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-[#FDFBF7]/10 max-w-xl">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[#8C7E6A]">
                  <Award className="w-4 h-4" />
                  <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.15em] text-[#8C7E6A]">Zertifiziert</span>
                </div>
                <p className="text-[11px] text-[#FDFBF7]/60">Traditionelle Thaimassage</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[#8C7E6A]">
                  <Heart className="w-4 h-4" />
                  <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.15em] text-[#8C7E6A]">Premium</span>
                </div>
                <p className="text-[11px] text-[#FDFBF7]/60">Schonende Pflegeserien</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[#8C7E6A]">
                  <Compass className="w-4 h-4" />
                  <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.15em] text-[#8C7E6A]">Individuell</span>
                </div>
                <p className="text-[11px] text-[#FDFBF7]/60">Ganzheitliche Pflegepläne</p>
              </div>
            </div>
          </div>

          {/* Quick Info Board side */}
          <div className="lg:col-span-4 lg:block hidden">
            <div className="bg-[#2D2926]/90 backdrop-blur-md border border-[#FDFBF7]/10 rounded-none p-8 space-y-6 shadow-2xl border-[#8C7E6A]/20">
              <h3 className="font-serif text-lg font-medium tracking-wide text-white border-b border-[#FDFBF7]/15 pb-3 uppercase tracking-wider text-[12px] text-[#8C7E6A]">Kontakt</h3>
              <div className="space-y-4">
                <div>
                  <span className="block text-[9px] uppercase font-sans font-bold tracking-[0.25em] text-[#8C7E6A]">Telefon & WhatsApp</span>
                  <a href="tel:+4962334629988" className="block text-base font-semibold text-white hover:text-[#8C7E6A] transition-colors duration-200 mt-1">06233 4629988</a>
                  <a href="tel:+4917643288192" className="block text-xs text-[#FDFBF7]/70 hover:text-[#8C7E6A] transition-colors duration-200">Mobil: 0176 43288192</a>
                </div>
                <div>
                  <span className="block text-[9px] uppercase font-sans font-bold tracking-[0.25em] text-[#8C7E6A]">Studio-Adresse</span>
                  <p className="text-xs font-light text-[#FDFBF7]/90 mt-1">Am Strandbad 8, 67227 Frankenthal</p>
                  <p className="text-[10px] text-[#8C7E6A] font-light mt-0.5">Parkplätze direkt am Haus</p>
                </div>
                <div>
                  <span className="block text-[9px] uppercase font-sans font-bold tracking-[0.25em] text-[#8C7E6A]">Öffnungszeiten</span>
                  <p className="text-xs font-light text-[#FDFBF7]/90 mt-1">Mo — Fr: 09:00 - 19:30 Uhr</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
