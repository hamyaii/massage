import { useState } from "react";
import { Clock, Check, ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import { SERVICE_CATEGORIES } from "../data";
import { Treatment } from "../types";
import cosmeticsPhoto from "../assets/images/cosmetics_treatment_1781948584007.jpg";
import massagePhoto from "../assets/images/massage_treatment_1781948600053.jpg";

interface ServicesListProps {
  onSelectTreatment: (treatment: Treatment) => void;
}

export default function ServicesList({ onSelectTreatment }: ServicesListProps) {
  const [activeCategory, setActiveCategory] = useState<"massage" | "cosmetics">("massage");
  const [expandedTreatmentId, setExpandedTreatmentId] = useState<string | null>(null);

  const selectedCategory = SERVICE_CATEGORIES.find(cat => cat.id === activeCategory);

  const toggleExpand = (id: string) => {
    if (expandedTreatmentId === id) {
      setExpandedTreatmentId(null);
    } else {
      setExpandedTreatmentId(id);
    }
  };

  const getCategoryImage = () => {
    return activeCategory === "massage" ? massagePhoto : cosmeticsPhoto;
  };

  const getCategoryAlt = () => {
    return activeCategory === "massage" 
      ? "Ausgiebige Hot Oil Thaimassage - Spa Suchada Tanomvet Frankenthal" 
      : "Sanfte Gesichtsbehandlung Wellness - Kosmetik Suchada Tanomvet";
  };

  return (
    <section id="services" className="py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-sans tracking-[0.4em] uppercase text-[#8C7E6A] font-bold">Unser Verwöhnprogramm</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-[#2D2926] tracking-tight" id="services-title">
            Exklusive Behandlungen
          </h2>
          <div className="h-[1px] w-16 bg-[#2D2926]/20 mx-auto mt-4" />
          <p className="text-xs sm:text-sm text-[#2D2926]/75 leading-relaxed font-light">
            Tauchen Sie ein in ein ganzheitliches Erlebnis aus vitalisierender Thaimassage und fein abgestimmter Premiumkosmetik. Wählen Sie eine Behandlung und buchen Sie unkompliziert Ihren Wunschtermin.
          </p>
        </div>

        {/* Category Toggles / Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id as "massage" | "cosmetics");
                setExpandedTreatmentId(null);
              }}
              className={`px-8 py-3 text-xs uppercase tracking-[0.2em] font-sans font-semibold transition-all duration-300 rounded-full cursor-pointer border ${
                activeCategory === cat.id
                  ? "bg-[#2D2926] border-[#2D2926] text-white shadow-xs"
                  : "bg-white border-[#2D2926]/10 text-[#2D2926]/70 hover:border-[#2D2926] hover:text-[#2D2926]"
              }`}
              id={`tab-btn-${cat.id}`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Selected Category Feature Display Block */}
        {selectedCategory && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id={`category-block-${activeCategory}`}>
            
            {/* Category Hero Info Card - Col 5 */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-white border border-[#2D2926]/10 rounded-none overflow-hidden shadow-none group">
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <img
                  src={getCategoryImage()}
                  alt={getCategoryAlt()}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  id={`service-cat-img-${activeCategory}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90" />
              </div>
              <div className="p-8 space-y-4 flex-grow flex flex-col justify-center">
                <h3 className="font-serif text-2xl font-medium text-[#2D2926] tracking-wide">
                  {selectedCategory.name}
                </h3>
                <p className="text-xs font-light text-[#2D2926]/80 leading-relaxed">
                  {selectedCategory.description}
                </p>
                <div className="pt-4 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 bg-[#8C7E6A]/10 text-[#8C7E6A] text-[10px] font-semibold rounded-none uppercase tracking-widest">
                    {activeCategory === "massage" ? "Thailändische Therapeuten" : "Hauttyp-Gerecht"}
                  </span>
                  <span className="px-2.5 py-1 bg-[#2D2926]/5 text-[#2D2926]/70 text-[10px] font-semibold rounded-none uppercase tracking-widest">
                    {activeCategory === "massage" ? "Energieaktivierung" : "Sofort-Effekt"}
                  </span>
                </div>
              </div>
            </div>

            {/* Treatments Detailed List Accordion - Col 7 */}
            <div className="lg:col-span-7 space-y-4">
              {selectedCategory.treatments.map((treatment) => {
                const isExpanded = expandedTreatmentId === treatment.id;

                return (
                  <div
                    key={treatment.id}
                    className={`bg-white border rounded-none transition-all duration-300 p-6 ${
                      isExpanded 
                        ? "border-[#2D2926] shadow-xs" 
                        : "border-[#2D2926]/10 hover:border-[#2D2926]/30 shadow-none"
                    }`}
                    id={`treatment-card-${treatment.id}`}
                  >
                    {/* Header Row */}
                    <div className="flex justify-between items-start gap-4">
                      <div className="space-y-1.5 flex-grow">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="font-serif text-lg font-medium text-[#2D2926] tracking-wide">
                            {treatment.name}
                          </h4>
                          {treatment.id.includes("deluxe") && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#8C7E6A]/10 border border-[#8C7E6A]/20 text-[#8C7E6A] rounded-none text-[9px] font-sans font-bold uppercase tracking-widest">
                              <Sparkles className="w-2.5 h-2.5" />
                              <span>Premium</span>
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-4 text-xs font-sans text-[#2D2926]/60">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-[#8C7E6A]" />
                            <span>{treatment.durationMinutes} Minuten</span>
                          </span>
                        </div>
                      </div>

                      {/* Price Badge */}
                      <div className="text-right">
                        <span className="block text-xl font-serif font-bold text-[#2D2926]">
                          {treatment.price} €
                        </span>
                        <span className="block text-[8px] uppercase tracking-widest text-[#2D2926]/40">inkl. MwSt.</span>
                      </div>
                    </div>

                    {/* Short Description */}
                    <p className="mt-3 text-xs sm:text-sm font-light text-[#2D2926]/80 leading-relaxed">
                      {treatment.description}
                    </p>

                    {/* Expandable Details Container */}
                    {isExpanded && (
                      <div className="mt-5 pt-5 border-t border-[#2D2926]/10 space-y-4 animate-fade-in">
                        {/* Included details */}
                        {treatment.details && (
                          <div className="space-y-2">
                            <span className="block text-[9px] uppercase font-sans font-bold tracking-widest text-[#8C7E6A] mb-1">Was Sie erwartet:</span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {treatment.details.map((detail, index) => (
                                <div key={index} className="flex items-start gap-2 text-xs text-[#2D2926]/80">
                                  <Check className="w-3.5 h-3.5 text-[#8C7E6A] shrink-0 mt-0.5" />
                                  <span>{detail}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Recommend For */}
                        {treatment.recommendFor && (
                          <div className="space-y-1.5">
                            <span className="block text-[9px] uppercase font-sans font-bold tracking-widest text-[#2D2926]/50">Besonders empfohlen bei:</span>
                            <div className="flex flex-wrap gap-1.5">
                              {treatment.recommendFor.map((rec, index) => (
                                <span key={index} className="px-2 py-0.5 bg-[#8C7E6A]/10 text-[#8C7E6A] text-[9px] font-semibold tracking-wide rounded-none uppercase">
                                  {rec}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Footer Buttons Row */}
                    <div className="mt-4 pt-4 border-t border-[#2D2926]/10 flex justify-between items-center">
                      <button
                        onClick={() => toggleExpand(treatment.id)}
                        className="text-[10px] uppercase font-sans tracking-wide text-[#8C7E6A] hover:text-[#2D2926] font-semibold flex items-center gap-1 focus:outline-hidden cursor-pointer"
                        id={`btn-expand-${treatment.id}`}
                      >
                        {isExpanded ? (
                          <>
                            <span>Details ausblenden</span>
                            <ChevronUp className="w-3.5 h-3.5" />
                          </>
                        ) : (
                          <>
                            <span>Details ansehen</span>
                            <ChevronDown className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => onSelectTreatment(treatment)}
                        className="bg-transparent hover:bg-[#2D2926] text-[#2D2926] hover:text-white border border-[#2D2926] text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-300 cursor-pointer shadow-xs"
                        id={`btn-select-book-${treatment.id}`}
                      >
                        Auswählen & Buchen
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
