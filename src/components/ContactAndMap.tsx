import { MapPin, Phone, Clock, Mail, ExternalLink, MessageCircle, Compass } from "lucide-react";
import { INFO_CONTACT } from "../data";

export default function ContactAndMap() {
  const gmapsLink = "https://www.google.com/maps/place/Kosmetik-+Massagestudio+Suchada+Tanomvet/@49.5367631,8.3597042,711m/data=!3m2!1e3!4b1!4m6!3m5!1s0x47963295cfc1fa21:0x4c1b54dd3ca21356!8m2!3d49.5367631!4d8.3597042!16s%2Fg%2F1thpvsdw?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D";

  return (
    <section id="contact" className="py-24 bg-[#EAE4DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-sans tracking-[0.4em] uppercase text-[#8C7E6A] font-bold">Kontakt & Anfahrt</span>
          <h2 className="text-3xl font-serif font-medium text-[#2D2926] tracking-tight">
            Besuchen Sie unser Studio
          </h2>
          <div className="h-[1px] w-12 bg-[#2D2926]/20 mx-auto mt-3" />
          <p className="text-xs sm:text-sm text-[#2D2926]/75 leading-relaxed font-light">
            Wir freuen uns darauf, Sie in unserem Wohlfühlstudio in Frankenthal willkommen zu heißen. Parkplätze stehen Ihnen direkt kostenfrei zur Verfügung.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Business Hours & Direct Contacts List - Col 5 */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-6 flex flex-col justify-between">
            
            <div className="bg-white border border-[#2D2926]/10 rounded-none p-8 space-y-6 shadow-none text-left grow">
              
              {/* Studio Name */}
              <div className="border-b border-[#2D2926]/10 pb-4 space-y-1">
                <h3 className="font-serif text-xl font-medium text-[#2D2926]">Suchada Tanomvet</h3>
                <span className="text-[9px] uppercase tracking-widest text-[#8C7E6A] font-bold">Kosmetik & Wellnessmassagen</span>
              </div>

              {/* Direct Details Grid */}
              <div className="space-y-4">
                
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 sm:p-2.5 bg-[#8C7E6A]/10 text-[#8C7E6A] rounded-none shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase font-sans font-bold tracking-widest text-[#8C7E6A]">Adresse</span>
                    <address className="text-sm not-italic font-light text-[#2D2926] mt-0.5">
                      {INFO_CONTACT.address}
                    </address>
                    <span className="block text-[10px] text-[#2D2926] mt-1.5 font-bold bg-[#8C7E6A]/10 px-2 py-0.5 rounded-none inline-block uppercase tracking-wider">
                      {INFO_CONTACT.parking}
                    </span>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 sm:p-2.5 bg-[#8C7E6A]/10 text-[#8C7E6A] rounded-none shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase font-sans font-bold tracking-widest text-[#8C7E6A]">Telefon & Mobil</span>
                    <a href={`tel:${INFO_CONTACT.phone.replace(/\s+/g, '')}`} className="block text-sm font-bold text-[#2D2926] hover:text-[#8C7E6A] transition-colors mt-0.5">
                      Festnetz: {INFO_CONTACT.phone}
                    </a>
                    <a href={`tel:${INFO_CONTACT.mobile.replace(/\s+/g, '')}`} className="block text-sm text-[#2D2926]/80 hover:text-[#8C7E6A] transition-colors mt-0.5 font-light">
                      Mobil/WhatsApp: {INFO_CONTACT.mobile}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 sm:p-2.5 bg-[#8C7E6A]/10 text-[#8C7E6A] rounded-none shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase font-sans font-bold tracking-widest text-[#8C7E6A]">E-Mail-Adresse</span>
                    <a href={`mailto:${INFO_CONTACT.email}`} className="block text-sm text-[#2D2926] hover:text-[#8C7E6A] transition-colors mt-0.5 font-light underline decoration-1 decoration-[#8C7E6A]/20">
                      {INFO_CONTACT.email}
                    </a>
                  </div>
                </div>

              </div>

              {/* Opening Hours list */}
              <div className="border-t border-[#2D2926]/10 pt-6 space-y-3.5 text-left">
                <h4 className="flex items-center gap-2 font-serif text-base font-bold text-[#2D2926]">
                  <Clock className="w-4.5 h-4.5 text-[#8C7E6A]" />
                  <span>Öffnungszeiten</span>
                </h4>
                
                <div className="space-y-2">
                  {INFO_CONTACT.hours.map((h, i) => (
                    <div key={i} className="flex justify-between items-center text-xs sm:text-sm border-b border-[#2D2926]/5 pb-1 h-8 font-light">
                      <span className="font-semibold text-[#2D2926]/70">{h.day}</span>
                      <span className="font-bold text-[#2D2926]">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Practical Buttons box */}
            <div className="bg-[#2D2926] text-[#FDFBF7] p-6 rounded-none space-y-4 shadow-none text-left">
              <h4 className="font-serif text-lg font-medium tracking-wide flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-[#8C7E6A]" />
                <span>Schnelle Absprache via WhatsApp</span>
              </h4>
              <p className="text-xs text-[#FDFBF7]/85 font-light leading-relaxed">
                Sie möchten spontan anfragen oder einen bestehenden Termin verschieben? Kontaktieren Sie Suchada einfach schnell via WhatsApp-Nachricht.
              </p>
              <a 
                href={`https://wa.me/4917643288192?text=Hallo%20Suchada,%20ich%20hätte%20gerne%20einen%20Termin%20für...`}
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-[#8C7E6A] text-[#2D2926] hover:text-white text-xs font-bold uppercase tracking-widest py-3.5 rounded-full shadow-xs transition-all duration-300 cursor-pointer w-full justify-center"
                id="whatsapp-chat-btn"
              >
                <span>WhatsApp Chat starten</span>
              </a>
            </div>

          </div>

          {/* Map display & Google Directions - Col 7 */}
          <div className="lg:col-span-12 xl:col-span-7 flex flex-col justify-between bg-white border border-[#2D2926]/10 rounded-none overflow-hidden shadow-none">
            
            {/* Elegant Custom Vector Map matching coordinates */}
            <div className="relative bg-[#FDFBF7] h-96 sm:h-[450px] overflow-hidden flex items-center justify-center group" id="leaflet-svg-map">
              
              {/* Google Maps Embed / Style Overlay */}
              <svg className="w-full h-full max-w-full block" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Background Grid Roads */}
                <rect width="800" height="500" fill="#FDFBF7" />
                <rect x="550" y="40" width="230" height="180" fill="#8C7E6A" fillOpacity="0.15" rx="0" /> {/* Strandbad Poolpark */}
                <text x="665" y="130" fill="#2D2926" fillOpacity="0.75" fontSize="11" fontFamily="Inter" fontWeight="bold" textAnchor="middle" letterSpacing="0.05em">STRANDBAD FRANKENTHAL</text>
                
                {/* Secondary Lake Pool detail */}
                <circle cx="690" cy="80" r="25" fill="#8C7E6A" fillOpacity="0.25" />
                <circle cx="630" cy="150" r="18" fill="#8C7E6A" fillOpacity="0.25" />

                {/* Roads lines vector */}
                {/* Main: Mörscher Str */}
                <path d="M50 450 L750 150" stroke="#2D2926" strokeWidth="2" strokeOpacity="0.1" />
                <path d="M50 450 L750 150" stroke="white" strokeWidth="40" strokeLinecap="round" />
                <text x="400" y="325" fill="#8C7E6A" fontSize="10" fontFamily="Inter" fontWeight="bold" transform="rotate(-23, 400, 325)" textAnchor="middle" letterSpacing="0.2em">MÖRSCHER STRASSE</text>

                {/* Path: Am Strandbad */}
                <path d="M450 270 L750 450" stroke="#2D2926" strokeWidth="2" strokeOpacity="0.1" />
                <path d="M450 270 L750 450" stroke="white" strokeWidth="28" strokeLinecap="round" />
                <text x="600" y="375" fill="#8C7E6A" fontSize="9" fontFamily="Inter" fontWeight="bold" transform="rotate(31, 600, 375)" textAnchor="middle" letterSpacing="0.1em">AM STRANDBAD</text>

                {/* Path: Foltzring */}
                <path d="M150 100 L350 430" stroke="#2D2926" strokeWidth="2" strokeOpacity="0.1" />
                <path d="M150 100 L350 430" stroke="white" strokeWidth="24" strokeLinecap="round" />
                <text x="220" y="245" fill="#8C7E6A" fontSize="10" fontFamily="Inter" fontWeight="bold" transform="rotate(59, 220, 245)" textAnchor="middle" letterSpacing="0.2em">FOLTZRING</text>

                {/* Connector/Avenue Lane */}
                <path d="M300 350 L500 250" stroke="#2D2926" strokeWidth="2" strokeOpacity="0.1" />
                <path d="M300 350 L500 250" stroke="white" strokeWidth="18" strokeLinecap="round" />

                {/* Park Grounds & Meadows green */}
                <rect x="360" y="80" width="120" height="120" fill="#8C7E6A" fillOpacity="0.1" rx="0" />
                <text x="420" y="145" fill="#8C7E6A" fillOpacity="0.7" fontSize="9" fontFamily="Inter" fontWeight="semibold" textAnchor="middle" letterSpacing="0.05em">GRÜNANLAGE</text>

                {/* Free Parking spot visual */}
                <rect x="525" y="335" width="45" height="30" fill="#8C7E6A" fillOpacity="0.15" stroke="#2D2926" strokeWidth="1" strokeOpacity="0.1" rx="0" />
                <text x="547" y="355" fill="#2D2926" fontSize="11" fontFamily="Inter" fontWeight="bold" textAnchor="middle">P</text>

                {/* Pin Location Target: Am Strandbad 8 */}
                <g transform="translate(515, 305)" className="cursor-pointer">
                  {/* Ripple pulse ring animation styled */}
                  <circle cx="0" cy="0" r="16" fill="#8C7E6A" fillOpacity="0.2">
                    <animate attributeName="r" values="8;24;8" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.8;0.2;0.8" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="0" cy="0" r="6" fill="#2D2926" />
                  
                  {/* Map Pin marker */}
                  <path d="M0 -30 C-10 -30, -10 -10, 0 0 C10 -10, 10 -30, 0 -30 Z" fill="#2D2926" />
                  <circle cx="0" cy="-20" r="4.5" fill="white" />
                </g>

                {/* Studio Label tooltip on map */}
                <g transform="translate(515, 255)">
                  <rect x="-105" y="0" width="210" height="35" fill="#2D2926" rx="0" />
                  <path d="M0 35 L-6 35 L0 41 L6 35 Z" fill="#2D2926" />
                  <text x="0" y="21" fill="#FDFBF7" fontSize="11" fontFamily="Playfair Display" fontWeight="bold" textAnchor="middle" letterSpacing="0.05em">Suchada Tanomvet</text>
                </g>
              </svg>

              {/* Hover Overlay Instruction Card */}
              <div className="absolute inset-x-4 bottom-4 bg-[#2D2926]/95 backdrop-blur-md rounded-none p-5 text-left border border-[#2D2926]/10 shadow-none">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="space-y-1">
                    <span className="block text-[8px] uppercase tracking-widest text-[#8C7E6A] font-bold">Exakte Position (49.53676, 8.35970)</span>
                    <h5 className="font-serif text-sm font-medium text-white">Am Strandbad 8, Frankenthal</h5>
                    <p className="text-[11px] text-white/70 font-light mt-0.5">Bequeme Anfahrt über Foltzring oder Mörscher Straße. Parkplätze direkt vor dem Studio.</p>
                  </div>
                  
                  <a 
                    href={gmapsLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-[#8C7E6A] hover:bg-white text-white hover:text-[#2D2926] px-5 py-3 rounded-full transition-all duration-300 shrink-0 cursor-pointer flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest w-full sm:w-auto shadow-xs"
                    id="map-directions-btn"
                  >
                    <span>ANFAHRT</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Map Card Foot links */}
            <div className="p-5 bg-[#FDFBF7] border-t border-[#2D2926]/10 text-center text-xs">
              <a 
                href={gmapsLink} 
                target="_blank" 
                rel="noreferrer"
                className="text-[#8C7E6A] hover:text-[#2D2926] font-bold uppercase tracking-widest text-[10px] inline-flex items-center gap-1.5 transition-colors"
              >
                <span>In Google Maps öffnen</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
