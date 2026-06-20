import { Sparkles, Award, Heart, Check } from "lucide-react";
import spaHeroImg from "../assets/images/spa_hero_1781948564580.jpg";

export default function AboutUs() {
  const values = [
    {
      title: "Authentizität",
      desc: "Unsere Massagen beruhen auf der echten, über Generationen weitergegebenen thailändischen Heilkunst."
    },
    {
      title: "Medizinische Präzision",
      desc: "Die Wirkstoffkosmetik wird präzise auf Ihren Hauttyp – von sensibel bis reif – angepasst."
    },
    {
      title: "Hygiene & Reinheit",
      desc: "Höchste deutsche Standards kombiniert mit einer herzlichen, thailändischen Gastfreundschaft."
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#FDFBF7] relative overflow-hidden border-t border-[#2D2926]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Aesthetic Image Composition - Column 5 */}
          <div className="lg:col-span-5 relative space-y-6">
            
            {/* Visual Frame */}
            <div className="relative rounded-3xl overflow-hidden border border-[#2D2926]/10 shadow-xs group">
              <img
                src={spaHeroImg}
                alt="Suchada Tanomvet Kosmetik und Massage Frankenthal"
                className="w-full h-96 object-cover scale-102 group-hover:scale-105 transition-transform duration-1000 filter grayscale-[5%]"
                referrerPolicy="no-referrer"
                id="about-photo-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2926]/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white text-left space-y-1">
                <span className="text-[9px] uppercase tracking-widest text-[#8C7E6A] font-bold">Inhaberin & Therapeutin</span>
                <h4 className="font-serif text-lg font-medium tracking-wide">Suchada Tanomvet</h4>
              </div>
            </div>

            {/* Certifications Card Badge overlaid */}
            <div className="absolute -bottom-6 -right-6 bg-[#FDFBF7] border border-[#2D2926]/15 rounded-2xl p-5 shadow-xs max-w-xs shrink-0 z-10 hidden sm:flex items-start gap-3">
              <div className="p-2.5 bg-[#8C7E6A]/10 text-[#8C7E6A] rounded-xl mt-0.5">
                <Award className="w-5 h-5" />
              </div>
              <div className="space-y-1 text-left">
                <span className="block font-serif text-sm font-bold text-[#2D2926]">Zertifiziertes Fachstudio</span>
                <p className="text-[10px] text-[#2D2926]/75 leading-relaxed">Ausgebildet im renommierten Wat Pho Institut, Thailand, sowie staatlich geprüfte Fachkosmetikerin.</p>
              </div>
            </div>

          </div>

          {/* Texts narrative section - Column 7 */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-3">
              <span className="text-xs font-sans tracking-[0.4em] uppercase text-[#8C7E6A] font-bold">Die Gründerin</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium text-[#2D2926] tracking-tight">
                Herzlich willkommen bei Suchada Tanomvet
              </h2>
              <div className="h-[1px] w-12 bg-[#2D2926]/20 mt-3" />
            </div>

            <div className="space-y-4 text-xs sm:text-sm font-light text-[#2D2926]/80 leading-relaxed">
              <p>
                Mein Name ist <strong className="font-bold text-[#2D2926]">Suchada Tanomvet</strong>. Seit vielen Jahren verhelfe ich Menschen im Herzen von Frankenthal zu ganzheitlicher Erholung, schmerzfreier Beweglichkeit und gesunder, strahlender Haut.
              </p>
              <p>
                In Thailand aufgewachsen, durfte ich die Kraft der traditionellen thailändischen Heilkunde – das Lindern von Gelenk- und Muskelschmerzen durch sanften, gezielten Druck – von Kindesbeinen an erlernen. Diese Passion habe ich durch anerkannte kosmetische Fachqualifikationen in Deutschland ergänzt.
              </p>
              <p>
                Mein oberster Anspruch ist es, dass jedes Treatment zu einem unvergleichlichen Moment der Ruhe wird. Jedes Detail im Studio – von der Raumtemperatur über das gedimmte Kerzenlicht bis hin zur Auswahl naturreiner Öle – ist fein orchestriert, um Ihren Körper und Geist in Einklang zu bringen.
              </p>
            </div>

            {/* Core Pillars Lists */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#2D2926]/15">
              {values.map((v, i) => (
                <div key={i} className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-[#8C7E6A]">
                    <Check className="w-4 h-4 text-[#8C7E6A]" />
                    <h5 className="font-serif font-bold text-sm text-[#2D2926]">{v.title}</h5>
                  </div>
                  <p className="text-[11px] text-[#2D2926]/75 leading-normal font-light">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
