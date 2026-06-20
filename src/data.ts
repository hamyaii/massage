import { ServiceCategory, Testimonial } from "./types";

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "massage",
    name: "Massagen",
    description: "Traditionelle thailändische Heilkunst und entspannende Wellness-Massagen für neue Energie und tiefe Regeneration.",
    treatments: [
      {
        id: "thai-classic-60",
        name: "Traditionelle Thaimassage (Ganzkörper)",
        description: "Ganzkörpermassage ohne Öl nach jahrhundertealter thailändischer Heilkunst. Durch Akupressur, Dehnungen und rhythmischen Druck werden Blockaden gelöst, Sehnen gelockert und der Energiefluss aktiviert.",
        durationMinutes: 60,
        price: 55,
        details: ["Mobilisierung der Gelenke", "Akupressur-Drucktechniken", "Dehnungsgriffe (Passives Yoga)", "Inkl. Ruhezeit"],
        recommendFor: ["Muskelsteifheit", "Müdigkeit", "Bewegungsmangel"]
      },
      {
        id: "thai-classic-90",
        name: "Traditionelle Thaimassage (Intensiv)",
        description: "Intensive Ganzkörper-Dehnsitzung für tiefe geistige und körperliche Befreiung. Ideal für Sportler oder Personen mit starker körperlicher Beanspruchung.",
        durationMinutes: 90,
        price: 79,
        details: ["Erweiterte Dehnungsübungen", "Ganzkörper-Akupressur", "Ruhezeit mit thailändischem Kräutertee"],
        recommendFor: ["Tiefenspannung", "Sportler-Regeneration", "Erhöhung der Flexibilität"]
      },
      {
        id: "aroma-oil-60",
        name: "Aromaöl-Wellnessmassage",
        description: "Eine tiefenentspannende Ganzkörpermassage mit sanften Ausstreichungen und warmen, hochwertigen ätherischen Ölen. Der Duft regt die Sinne an, während Ihre Muskeln vollkommen entspannen.",
        durationMinutes: 60,
        price: 59,
        details: ["Warme Bio-Aromaöle", "Sanfte Streichbewegungen", "Kopf- & Nackenmassage inklusive"],
        recommendFor: ["Stressabbau", "Schlafstörungen", "Mentale Erschöpfung"]
      },
      {
        id: "aroma-oil-90",
        name: "Aromaöl-Massage Deluxe",
        description: "Die absolute Verwöhnreise. Genießen Sie eine ausgiebige Massage von Kopf bis Fuß mit warmen Ölen, die Ihre Haut samtweich pflegt und die Gedanken zur Ruhe bringt.",
        durationMinutes: 90,
        price: 84,
        details: ["Individuelle Duftauswahl", "Ganzkörpermassage inkl. Füße", "Gesundheitsberatung", "Kräutertee"],
        recommendFor: ["Maximale Auszeit", "Trockene Haut", "Stresslinderung"]
      },
      {
        id: "hot-stone-75",
        name: "Hot Stone Massage",
        description: "Die faszinierende Verbindung aus wohltuender Massage und der tiefenwirksamen Wärme von auf 55 °C erhitzten Vulkansteinen (Basalt). Löst auch tiefste Muskelverspannungen auf schonende Weise.",
        durationMinutes: 75,
        price: 75,
        details: ["Platzierung der warmen Basaltsteine", "Aktive Massage mit Steinen & Öl", "Tiefenwärme-Therapie"],
        recommendFor: ["Chronische Verspannungen", "Durchblutungsstörungen", "Kältegefühl"]
      },
      {
        id: "herbal-60",
        name: "Kräuterstempel-Massage (Sabai)",
        description: "Traditionelle thailändische Stempelmassage. Erwärmte Leinenbeutel, gefüllt mit thailändischen Heilkräutern, werden in sanftem Klopf- und Streichrhythmus über die Haut geführt. Wirkt durchblutungsfördernd und zellregenerierend.",
        durationMinutes: 60,
        price: 65,
        details: ["Erwärmte thailändische Kräuterstempel", "Aroma-Dampfeffekt", "Hautstraffender & peelender Effekt"],
        recommendFor: ["Immunsystem-Stärkung", "Gewebestraffung", "Muskelkater"]
      },
      {
        id: "back-neck-30",
        name: "Rücken- & Nackenmassage Spezial",
        description: "Spezifische, kraftvolle Teilkörpermassage zur Linderung von typischen büro- und stressbedingten Schmerzen im oberen Rücken, Nacken- und Schulterbereich.",
        durationMinutes: 30,
        price: 35,
        details: ["Fokussierte Triggerpunktbehandlung", "Nacken-Dehnung", "Wärmebalsam-Anwendung"],
        recommendFor: ["Büro-Verspannung", "Spannungskopfschmerz", "Segmentale Blockaden"]
      },
      {
        id: "foot-reflex-45",
        name: "Thailändische Fußmassage (Reflexzonen)",
        description: "Eine Wohltat nach langem Stehen. Über die Reflexzonen der Fußsohle werden sämtliche Organe stimuliert, der Lymphfluss angeregt und ein Zustand tiefer Ausgeglichenheit im ganzen Körper erzeugt.",
        durationMinutes: 45,
        price: 48,
        details: ["Massage mit speziellem Holz-Massagestab", "Belebung der Fuß-Akupunkte", "Inkl. Fußbad"],
        recommendFor: ["Schwere Beine", "Kreislaufanregung", "Innere Unruhe"]
      }
    ]
  },
  {
    id: "cosmetics",
    name: "Kosmetikbehandlungen",
    description: "Professionelle Gesichts- und Körperpflege für ein strahlendes Aussehen, jugendliche Frische und wirksame Hautgesundheit.",
    treatments: [
      {
        id: "cos-classic-60",
        name: "Klassische Gesichtsbehandlung",
        description: "Individuelle, auf Ihren Hauttyp abgestimmte Basispflege. Reinigt tiefenwirksam, nährt die Hautschichten und hinterlässt einen wunderbar frischen, rosigen Teint.",
        durationMinutes: 60,
        price: 59,
        details: ["Hautanalyse & Beratung", "Tiefenreinigung & Peeling", "Schonende Ausreinigung", "Gesichtsmassage", "Beruhigende Gesichtsmaske", "Tagespflege"],
        recommendFor: ["Hautbild-Auffrischung", "Verunreinigungen", "Prävention"]
      },
      {
        id: "cos-deluxe-90",
        name: "Anti-Aging Supreme Deluxe",
        description: "Die hocheffektive Premium-Behandlung bei Fältchen, Festigkeitsverlust und müder Haut. Modernste Lifting-Wirkstoffe dringen tief ein und polstern die Haut sichtbar von innen auf.",
        durationMinutes: 90,
        price: 89,
        details: ["Hautanalyse", "Fruchtsäure-Mandelpeeling", "Premium-Wirkstoffampulle (Hyaluron/Kollagen)", "Sanftes Ultraschall-Lifting", "Lifting-Gesichtsmassage", "Spezial-Vliesmaske", "Augenpflege & Abschlusspflege"],
        recommendFor: ["Fältchen & feine Linien", "Energiearme Haut", "Anspruchsvolle Hautpflege"]
      },
      {
        id: "cos-sensitive-60",
        name: "Sensitiv Balance & Anti-Rötung",
        description: "Extrem sanfte Behandlung für sensible, irritierte oder zu Couperose neigende Haut. Reduziert Rötungen, beruhigt Juckreiz und baut die natürliche Schutzbarriere nachhaltig wieder auf.",
        durationMinutes: 60,
        price: 62,
        details: ["Milde, duftstofffreie Reinigung", "Enzympeeling (ohne Schleifpartikel)", "Beruhigendes Serum (Panthenol & Aloe Vera)", "Lymphstimulierende sanfte Massage", "Kamillen-Kühlmaske"],
        recommendFor: ["Rosacea / Couperose", "Sehr empfindliche Haut", "Allergische Reaktionen"]
      },
      {
        id: "cos-teen-45",
        name: "Teens Purify (bis 19 Jahre)",
        description: "Eine klärende Spezialbehandlung für junge Haut mit Unreinheiten oder Akne. Befreit verstopfte Poren, hemmt Entzündungen und verfeinert das Porenbild spürbar.",
        durationMinutes: 45,
        price: 39,
        details: ["Reinigung mit Salicylsäure", "Bedampfung", "Ausgiebige manuelle Ausreinigung", "Klärende Heilerdemaske", "Mattierende Abschlusspflege"],
        recommendFor: ["Pubertäre Akne", "Ölige Haut", "Entzündliche Stellen"]
      },
      {
        id: "cos-eyes-30",
        name: "Augen-Wohl Spezial",
        description: "Straffende und abschwellende Pflege für die sensible Augenpartie. Müde Augen wirken sofort wacher, strahlender und optimal durchfeuchtet.",
        durationMinutes: 30,
        price: 29,
        details: ["Sanfte Augenreinigung", "Zupfen & Korrektur der Augenbrauen", "Gekühlte Kollagen-Augenpads", "Massage mit kühlenden Rosenquarz-Rollern", "Wirkstoff-Augencreme"],
        recommendFor: ["Augenringe & Fältchen", "Schwellungen", "Müde Augen"]
      }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "rev-1",
    name: "Elena Scherer",
    rating: 5,
    text: "Die traditionelle Thaimassage von Suchada ist einfach phänomenal! Selten habe ich so eine kompetente, kräftige und zugleich einfühlsame Therapeutin erlebt. Meine chronischen Verspannungen im Schulterbereich sind wie weggeblasen. Das Studio ist wunderschön eingerichtet und absolut sauber.",
    date: "Vor 2 Wochen",
    treatment: "Traditionelle Thaimassage"
  },
  {
    id: "rev-2",
    name: "Markus Becker",
    rating: 5,
    text: "Ich habe die Aromaöl-Massage (90 Minuten) genossen. Es war wie ein kleiner Kurzurlaub. Suchada arbeitet mit wunderbaren Ölen, die Liege ist herrlich beheizt und die Atmosphäre beruhigt sofort. Eine echte Bereicherung für Frankenthal! Komme definitiv regelmäßig wieder.",
    date: "Vor 1 Monat",
    treatment: "Aromaöl-Massage Deluxe"
  },
  {
    id: "rev-3",
    name: "Tanja Gärtner",
    rating: 5,
    text: "Meine Kosmetikbehandlung bei Suchada war großartig. Sie hat meine sehr empfindliche Haut mit einer Genauigkeit analysiert und behandelt, die man selten findet. Die anschließende Lymphmassage tat unglaublich gut. Meine Haut strahlt richtig und fühlt sich beruhigt an. 10 von 10 Sternen!",
    date: "Vor 3 Wochen",
    treatment: "Klassische Gesichtsbehandlung"
  },
  {
    id: "rev-4",
    name: "Michael Kunz",
    rating: 5,
    text: "Hervorragende Rücken- und Nackenmassage. Suchada spürt sofort, wo die Verspannungen sitzen, und bearbeitet sie gezielt. Genau die richtige Dosis an Druck. Sehr freundlicher Empfang und nettes Gespräch bei einem thailändischen Kräutertee am Ende. Sehr zu empfehlen!",
    date: "Vor 2 Monaten",
    treatment: "Rücken- & Nackenmassage Spezial"
  }
];

export const INFO_CONTACT = {
  name: "Kosmetik- & Massagestudio Suchada Tanomvet",
  owner: "Suchada Tanomvet",
  address: "Am Strandbad 8, 67227 Frankenthal (Pfalz)", // Mapped closer to coordinate 49.5367631, 8.3597042 which sits right next to the Strandbad / Am Strandbad in Frankenthal
  coordinate: { lat: 49.5367631, lng: 8.3597042 },
  phone: "+49 (0) 6233 4629988",
  mobile: "+49 (0) 176 43288192",
  email: "info@suchada-kosmetik-massage.de",
  hours: [
    { day: "Montag - Freitag", time: "09:00 - 19:30 Uhr" },
    { day: "Samstag", time: "09:00 - 16:00 Uhr" },
    { day: "Sonntag & Feiertage", time: "Geschlossen" }
  ],
  parking: "Kostenfreie Parkplätze direkt vor dem Studio",
  services: [
    "Traditionelle Thaimassage",
    "Aromaölmassage",
    "Hot Stone Massagen",
    "Kräuterstempelmassagen",
    "Professionelle Gesichtsbehandlungen",
    "Hautbildanalyse",
    "Anti-Aging Behandlungen",
    "Gutscheine (ideal zum Verschenken!)"
  ],
  bookingPolicy: "Termine nach vorheriger Vereinbarung über das Formular, per Telefon oder WhatsApp."
};
