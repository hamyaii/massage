import { useState } from "react";
import { Sparkles, Compass, Check, ArrowRight, RotateCcw, ThumbsUp } from "lucide-react";
import { Treatment } from "../types";
import { SERVICE_CATEGORIES } from "../data";

interface TreatmentMatcherProps {
  onRecommend: (treatment: Treatment) => void;
}

interface Question {
  id: number;
  text: string;
  options: {
    key: string;
    label: string;
    desc: string;
    icon: string;
  }[];
}

export default function TreatmentMatcher({ onRecommend }: TreatmentMatcherProps) {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [answers, setAnswers] = useState<{ goal: string; preference: string }>({
    goal: "",
    preference: "",
  });

  const questions: { [key: number]: Question } = {
    1: {
      id: 1,
      text: "Was ist Ihr heute wichtigstes Wohlfühl-Ziel?",
      options: [
        {
          key: "stress",
          label: "Stressabbau & Abschalten",
          desc: "Dem Alltagsstress entfliehen, mentale Ruhe finden und tiefenentspannen.",
          icon: "🌸"
        },
        {
          key: "tension",
          label: "Verspannungen lösen",
          desc: "Akute Rücken- oder Nackenbeschwerden beheben, Muskeln lockern.",
          icon: "💆"
        },
        {
          key: "beauty",
          label: "Frische Haut & Ausstrahlung",
          desc: "Das Hautbild klären, Poren verfeinern und frischen Glanz erhalten.",
          icon: "✨"
        },
        {
          key: "antiaging",
          label: "Falten- & Altersprävention",
          desc: "Gezieltes Lifting von müder Haut, Regeneration und Feuchtigkeitsboost.",
          icon: "🥇"
        },
        {
          key: "legs",
          label: "Belebung & Energie",
          desc: "Schwere Beine entlasten, den Kreislauf ankurbeln und Kraft tanken.",
          icon: "👣"
        }
      ]
    },
    2: {
      id: 2,
      text: "Welche körperliche Intensität oder Hautempfindlichkeit bevorzugen Sie?",
      options: [
        {
          key: "sensitive",
          label: "Sensibel & Vorsichtig",
          desc: "Sehr empfindliche Haut, Rötungen oder Wunsch nach sanfter, rücksichtsvoller Berührung.",
          icon: "🤍"
        },
        {
          key: "pressure",
          label: "Kraftvoll & Sportlich",
          desc: "Tiefgehender Druck, Dehnungen, intensive Muskelbearbeitung.",
          icon: "💪"
        },
        {
          key: "warmth",
          label: "Wärme & Geborgenheit",
          desc: "Erhitzte Steine, warme Öle oder thailändischer Dampfeffekt zum Durchwärmen.",
          icon: "🔥"
        },
        {
          key: "standard",
          label: "Ausgewogen & klassisch",
          desc: "Ein gesundes Mittelmaß – professionelle Pflege und wohlschmeckender Druck.",
          icon: "🌿"
        }
      ]
    }
  };

  const selectGoal = (key: string) => {
    setAnswers({ ...answers, goal: key });
    setCurrentStep(2);
  };

  const selectPreference = (key: string) => {
    setAnswers({ ...answers, preference: key });
    setCurrentStep(3);
  };

  const getRecommendation = (): Treatment => {
    const list = SERVICE_CATEGORIES.flatMap(c => c.treatments);
    
    // Logic mappings based on combinations
    if (answers.goal === "tension") {
      if (answers.preference === "pressure") {
        return list.find(t => t.id === "thai-classic-90") || list[0];
      }
      if (answers.preference === "warmth") {
        return list.find(t => t.id === "hot-stone-75") || list[4];
      }
      return list.find(t => t.id === "back-neck-30") || list[6];
    }
    
    if (answers.goal === "stress") {
      if (answers.preference === "warmth") {
        return list.find(t => t.id === "hot-stone-75") || list[4];
      }
      if (answers.preference === "pressure") {
        return list.find(t => t.id === "thai-classic-60") || list[0];
      }
      return list.find(t => t.id === "aroma-oil-60") || list[2];
    }

    if (answers.goal === "beauty") {
      if (answers.preference === "sensitive") {
        return list.find(t => t.id === "cos-sensitive-60") || list[10];
      }
      return list.find(t => t.id === "cos-classic-60") || list[8];
    }

    if (answers.goal === "antiaging") {
      return list.find(t => t.id === "cos-deluxe-90") || list[9];
    }

    if (answers.goal === "legs") {
      return list.find(t => t.id === "foot-reflex-45") || list[7];
    }

    // Default Fallback
    return list.find(t => t.id === "aroma-oil-60") || list[2];
  };

  const handleReset = () => {
    setAnswers({ goal: "", preference: "" });
    setCurrentStep(1);
  };

  const rec = currentStep === 3 ? getRecommendation() : null;

  return (
    <section id="advisor" className="py-24 bg-[#EAE4DD] relative overflow-hidden">
      {/* Decorative leaf/bubbles layout backgrounds */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-[#8C7E6A]/5 blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-[#8C7E6A]/5 blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Module Box Container */}
        <div className="bg-white border border-[#2D2926]/10 rounded-none shadow-none overflow-hidden" id="advisor-box">
          
          {/* Box Header Accent */}
          <div className="bg-[#2D2926] text-[#FDFBF7] py-8 px-6 sm:px-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 sm:p-3 bg-white/5 rounded-full">
                <Compass className="w-5 h-5 text-[#8C7E6A]" />
              </div>
              <div>
                <span className="block text-[9px] uppercase tracking-widest text-[#8C7E6A] font-bold">Interaktiver Assistent</span>
                <h3 className="font-serif text-xl sm:text-2xl font-medium tracking-wide">Ihr persönlicher Wohlfühl-Finder</h3>
              </div>
            </div>
            
            {/* Step badges */}
            <div className="flex items-center gap-2">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${
                    currentStep === s 
                      ? "bg-[#8C7E6A] text-white" 
                      : currentStep > s 
                        ? "bg-white/10 text-[#FDFBF7]/40 line-through" 
                        : "border border-white/10 text-[#FDFBF7]/30"
                  }`}
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Box Body Area */}
          <div className="p-6 sm:p-10 min-h-[400px] flex flex-col justify-between bg-[#FDFBF7]">
            
            {/* STEP 1: GOALS */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fade-in" id="step-1-content">
                <div className="text-center sm:text-left space-y-1.5">
                  <h4 className="text-lg font-serif font-bold text-[#2D2926]">
                    {questions[1].text}
                  </h4>
                  <p className="text-xs text-[#2D2926]/60">Wählen Sie das Ziel aus, das auf Ihre aktuelle Verfassung am besten zutrifft.</p>
                </div>
                <div className="grid grid-cols-1 gap-3.5">
                  {questions[1].options.map((opt) => (
                    <button
                      key={opt.key}
                      onClick={() => selectGoal(opt.key)}
                      className="flex items-center gap-4 text-left p-4 rounded-xl border border-[#2D2926]/10 hover:border-[#2D2926]/40 hover:bg-[#EAE4DD]/10 transition-all duration-300 cursor-pointer group"
                      id={`opt-goal-${opt.key}`}
                    >
                      <div className="text-xl p-2 bg-[#EAE4DD]/30 rounded-lg group-hover:scale-105 transition-transform duration-200">{opt.icon}</div>
                      <div className="flex-grow">
                        <span className="block font-serif font-semibold text-sm sm:text-base text-[#2D2926] group-hover:text-[#8C7E6A]">
                          {opt.label}
                        </span>
                        <span className="block text-xs text-[#2D2926]/70 font-light mt-0.5">{opt.desc}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#8C7E6A] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2: PREFERENCES */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-fade-in" id="step-2-content">
                <div className="text-center sm:text-left space-y-1.5">
                  <h4 className="text-lg font-serif font-bold text-[#2D2926]">
                    {questions[2].text}
                  </h4>
                  <p className="text-xs text-[#2D2926]/60">Diese Angabe hilft uns, die Intensität für Sie perfekt abzustimmen.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {questions[2].options.map((opt) => (
                    <button
                      key={opt.key}
                      onClick={() => selectPreference(opt.key)}
                      className="flex flex-col text-left p-5 rounded-xl border border-[#2D2926]/10 hover:border-[#2D2926]/40 hover:bg-[#EAE4DD]/10 transition-all duration-300 cursor-pointer group"
                      id={`opt-pref-${opt.key}`}
                    >
                      <div className="text-lg mb-3">{opt.icon}</div>
                      <span className="block font-serif font-semibold text-sm sm:text-base text-[#2D2926] group-hover:text-[#8C7E6A]">
                        {opt.label}
                      </span>
                      <span className="block text-xs text-[#2D2926]/70 font-light mt-1.5 flex-grow">{opt.desc}</span>
                    </button>
                  ))}
                </div>
                <div className="pt-4 border-t border-[#2D2926]/10 flex justify-start">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="text-[10px] uppercase font-sans font-bold tracking-widest text-[#2D2926]/60 hover:text-[#2D2926] flex items-center gap-1.5 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Zurück zu Schritt 1</span>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: RECOMMENDATION */}
            {currentStep === 3 && rec && (
              <div className="space-y-8 animate-fade-in" id="step-3-content">
                <div className="text-center space-y-2">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#8C7E6A]/10 text-[#8C7E6A] rounded-full mb-2">
                    <ThumbsUp className="w-5 h-5 animate-bounce" />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-[#2D2926]">Unsere Empfehlung für Sie</h4>
                  <p className="text-xs text-[#2D2926]/60">Basierend auf Ihren Angaben haben wir die ideale Behandlung ermittelt:</p>
                </div>

                {/* Recommendation Card */}
                <div className="bg-[#FDFBF7] border border-[#2D2926]/10 rounded-none p-6 sm:p-8 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-4">
                    <div className="space-y-2">
                      <span className="text-[9px] uppercase font-sans font-bold tracking-widest text-[#FDFBF7] bg-[#2D2926] px-2.5 py-1 rounded-none">
                        Perfekter Match
                      </span>
                      <h5 className="font-serif text-lg sm:text-xl font-bold text-[#2D2926] pt-1">
                        {rec.name}
                      </h5>
                      <span className="block text-xs text-[#8C7E6A] font-semibold tracking-wide uppercase">{rec.durationMinutes} Minuten Treatment</span>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="block font-serif text-2xl font-bold text-[#2D2926]">{rec.price} €</span>
                      <span className="block text-[8px] uppercase tracking-widest text-[#2D2926]/40">Komplettpreis</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#2D2926]/80 font-light leading-relaxed">
                    {rec.description}
                  </p>

                  {/* Highlights inside */}
                  {rec.details && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-[#2D2926]/10">
                      {rec.details.slice(0, 4).map((det, index) => (
                        <div key={index} className="flex items-center gap-2 text-xs text-[#2D2926]/80">
                          <Check className="w-3.5 h-3.5 text-[#8C7E6A]" />
                          <span>{det}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer Controls */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#2D2926]/10">
                  <button
                    onClick={handleReset}
                    className="text-[10px] uppercase font-sans tracking-widest font-semibold text-[#2D2926]/60 hover:text-[#2D2926] flex items-center justify-center gap-1.5 py-2 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Inquiry neu starten</span>
                  </button>

                  <button
                    onClick={() => onRecommend(rec)}
                    className="w-full sm:w-auto bg-[#2D2926] hover:bg-[#8C7E6A] text-white font-semibold text-xs uppercase tracking-widest px-8 py-3.5 rounded-full transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                    id="btn-recommend-book"
                  >
                    <Sparkles className="w-4 h-4 text-[#8C7E6A]" />
                    <span>Telefonisch anfragen</span>
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
