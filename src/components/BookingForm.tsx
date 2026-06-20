import React, { useState, useEffect } from "react";
import { Calendar, Clock, CheckCircle2, Phone, Sparkles, Trash2, Mail, User, Info, ArrowRight } from "lucide-react";
import { Treatment, Booking } from "../types";
import { SERVICE_CATEGORIES, INFO_CONTACT } from "../data";

interface BookingFormProps {
  selectedTreatment: Treatment | null;
  onClearSelectedTreatment: () => void;
}

export default function BookingForm({ selectedTreatment, onClearSelectedTreatment }: BookingFormProps) {
  const allTreatments = SERVICE_CATEGORIES.flatMap((cat) => cat.treatments);
  
  // Local state
  const [treatmentId, setTreatmentId] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [successBooking, setSuccessBooking] = useState<Booking | null>(null);
  const [savedBookings, setSavedBookings] = useState<Booking[]>([]);

  // Time Slot options
  const timeSlots = ["09:00", "10:30", "12:00", "13:30", "15:00", "16:30", "18:00"];

  // Populate pre-selected treatment if provided
  useEffect(() => {
    if (selectedTreatment) {
      setTreatmentId(selectedTreatment.id);
    }
  }, [selectedTreatment]);

  // Load bookings on mount
  useEffect(() => {
    const raw = localStorage.getItem("suchada_bookings");
    if (raw) {
      try {
        setSavedBookings(JSON.parse(raw));
      } catch (e) {
        console.error("Could not parse saved bookings", e);
      }
    }
  }, []);

  const handleSelectTreatment = (id: string) => {
    setTreatmentId(id);
    if (onClearSelectedTreatment) {
      onClearSelectedTreatment();
    }
  };

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!treatmentId) tempErrors.treatment = "Bitte wählen Sie eine Behandlung aus.";
    if (!date) tempErrors.date = "Bitte wählen Sie ein Datum aus.";
    
    // Check if Sunday is picked
    if (date) {
      const selectedDay = new Date(date).getDay();
      if (selectedDay === 0) {
        tempErrors.date = "Sonntags ist unser Studio geschlossen. Bitte wählen Sie einen anderen Tag.";
      }
    }

    if (!time) tempErrors.time = "Bitte wählen Sie eine Uhrzeit aus.";
    if (!name.trim()) tempErrors.name = "Bitte tragen Sie Ihren Namen ein.";
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) tempErrors.email = "Bitte tragen Sie eine gültige E-Mail-Adresse ein.";
    
    if (!phone.trim() || phone.length < 6) tempErrors.phone = "Bitte tragen Sie Ihre Telefonnummer ein (für Absprachen).";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const matchedTreatment = allTreatments.find(t => t.id === treatmentId);
    if (!matchedTreatment) return;

    const newBooking: Booking = {
      id: "book-" + Math.random().toString(36).substr(2, 9),
      treatmentId,
      treatmentName: matchedTreatment.name,
      treatmentPrice: matchedTreatment.price,
      date,
      time,
      name,
      email,
      phone,
      notes: notes.trim() || undefined,
      createdAt: new Date().toISOString()
    };

    const updated = [newBooking, ...savedBookings];
    setSavedBookings(updated);
    localStorage.setItem("suchada_bookings", JSON.stringify(updated));
    setSuccessBooking(newBooking);

    // Reset inputs except personal particulars for convenience
    setTreatmentId("");
    setDate("");
    setTime("");
    setNotes("");
    if (onClearSelectedTreatment) {
      onClearSelectedTreatment();
    }
  };

  const handleCancelBooking = (id: string) => {
    const filtered = savedBookings.filter(b => b.id !== id);
    setSavedBookings(filtered);
    localStorage.setItem("suchada_bookings", JSON.stringify(filtered));
  };

  const getMinDateString = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  const matchedSelectedTreatment = allTreatments.find(t => t.id === treatmentId);

  return (
    <section id="bookings" className="py-24 bg-[#FDFBF7] relative border-t border-[#2D2926]/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-sans tracking-[0.4em] uppercase text-[#8C7E6A] font-bold">Wohlfühlzeit anfragen</span>
          <h2 className="text-3xl font-serif font-medium text-[#2D2926] tracking-tight">
            Ihren Wunschtermin reservieren
          </h2>
          <div className="h-[1px] w-12 bg-[#2D2926]/20 mx-auto mt-3" />
          <p className="text-xs sm:text-sm text-[#2D2926]/75 leading-relaxed font-light">
            Senden Sie uns unkompliziert Ihre unverbindliche Terminanfrage. Wir prüfen die Belegungszeiten und melden uns innerhalb kürzester Zeit telefonisch oder per WhatsApp zur Bestätigung bei Ihnen.
          </p>
        </div>

        {/* Dynamic Display of Success or Form */}
        {successBooking ? (
          <div className="bg-white border border-[#2D2926] rounded-none p-8 text-center space-y-6 shadow-none animate-fade-in" id="booking-success-box">
            <div className="w-16 h-16 bg-[#8C7E6A]/10 text-[#8C7E6A] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-medium text-[#2D2926]">Anfrage erfolgreich gesendet!</h3>
              <p className="text-xs sm:text-sm text-[#2D2926]/80 max-w-lg mx-auto leading-relaxed">
                Vielen Dank, <strong className="font-semibold text-[#2D2926]">{successBooking.name}</strong>. Ihre Anfrage für das Treatment <strong className="font-semibold text-[#2D2926]">"{successBooking.treatmentName}"</strong> am <strong>{new Date(successBooking.date).toLocaleDateString('de-DE')}</strong> um <strong>{successBooking.time} Uhr</strong> ist bei Suchada eingegangen.
              </p>
            </div>

            {/* Instruction Warning Card */}
            <div className="bg-[#EAE4DD] border border-[#2D2926]/10 rounded-none p-5 max-w-xl mx-auto flex gap-4 items-start text-left">
              <Info className="w-5 h-5 text-[#8C7E6A] shrink-0 mt-0.5" />
              <div className="space-y-1.5">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-[#8C7E6A]">Wie es weitergeht:</span>
                <p className="text-xs text-[#2D2926]/80 leading-relaxed font-light">
                  Da jede Behandlung individuell eingeteilt wird, rufen wir Sie unter Ihrer Nummer <strong className="font-medium">{successBooking.phone}</strong> an oder schreiben Ihnen eine WhatsApp-Nachricht, um den Termin final freizugeben.
                </p>
              </div>
            </div>

            <button
              onClick={() => setSuccessBooking(null)}
              className="bg-[#2D2926] hover:bg-[#8C7E6A] text-[#FDFBF7] text-[11px] uppercase tracking-widest font-sans font-bold px-8 py-3 rounded-full transition-all duration-300 cursor-pointer shadow-xs"
              id="success-dismiss-btn"
            >
              Weitere Anfrage stellen
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* INPUT FORM BLOCK - Column 7 */}
            <form onSubmit={handleSubmit} className="lg:col-span-12 bg-white border border-[#2D2926]/10 rounded-none p-6 sm:p-8 space-y-6 shadow-none leading-relaxed" id="booking-form">
              
              {/* Treatment Selection */}
              <div className="space-y-2">
                <label className="block text-[10px] uppercase tracking-widest font-bold text-[#8C7E6A] font-sans">
                  Wählen Sie Ihr Treatment:
                </label>
                <select
                  value={treatmentId}
                  onChange={(e) => handleSelectTreatment(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-[#2D2926]/10 rounded-none text-sm text-[#2D2926] focus:outline-hidden focus:ring-1 focus:ring-[#8C7E6A] focus:border-[#8C7E6A]"
                  id="form-treatment-select"
                >
                  <option value="" disabled>-- Bitte Behandlung auswählen --</option>
                  {SERVICE_CATEGORIES.map((cat) => (
                    <optgroup key={cat.id} label={cat.name}>
                      {cat.treatments.map((t) => (
                        <option key={t.id} value={t.id}>
                          {t.name} ({t.durationMinutes} Min. — {t.price} €)
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
                {errors.treatment && <p className="text-xs text-red-600 mt-1 font-medium">{errors.treatment}</p>}
                
                {/* Dynamically display active treatment summary block */}
                {matchedSelectedTreatment && (
                  <div className="mt-2.5 p-3.5 bg-[#EAE4DD]/30 text-xs border border-[#2D2926]/15 text-[#2D2926] rounded-none flex items-center justify-between gap-4">
                    <span>
                      Dauer: <strong>{matchedSelectedTreatment.durationMinutes} Minuten</strong> | Preis: <strong>{matchedSelectedTreatment.price} €</strong>
                    </span>
                    <span className="text-[9px] text-[#8C7E6A] uppercase tracking-widest font-bold">Vorausgewählt</span>
                  </div>
                )}
              </div>

              {/* Date & Time selection Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Date Input */}
                <div className="space-y-2">
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-[#8C7E6A] font-sans">
                    Wunsch-Datum auswählen:
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      min={getMinDateString()}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-[#2D2926]/10 rounded-none text-sm text-[#2D2926] focus:outline-hidden focus:ring-1 focus:ring-[#8C7E6A] focus:border-[#8C7E6A]"
                      id="form-booking-date"
                    />
                  </div>
                  {errors.date && <p className="text-xs text-red-600 mt-1 font-medium">{errors.date}</p>}
                  <p className="text-[10px] text-[#2D2926]/50">Hinweis: Sonntags geschlossen.</p>
                </div>

                {/* Time Selection Slots */}
                <div className="space-y-2">
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-[#8C7E6A] font-sans">
                    Bevorzugte Uhrzeit:
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setTime(slot)}
                        className={`text-[11px] py-1.5 px-3 rounded-full border text-center transition-all cursor-pointer ${
                          time === slot
                            ? "bg-[#2D2926] border-[#2D2926] text-[#FDFBF7] font-semibold"
                            : "bg-white border-[#2D2926]/10 text-[#2D2926] hover:border-[#8C7E6A]"
                        }`}
                        id={`time-slot-${slot}`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                  {errors.time && <p className="text-xs text-red-600 mt-1 font-medium">{errors.time}</p>}
                </div>

              </div>

              {/* Personal Information */}
              <div className="space-y-4 pt-4 border-t border-[#2D2926]/15">
                <span className="block text-[10px] font-bold uppercase tracking-widest text-[#8C7E6A]">Ihre Kontaktdaten:</span>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs text-[#2D2926]/70">
                      <User className="w-3.5 h-3.5 text-[#8C7E6A]" />
                      <span>Vollständiger Name:</span>
                    </div>
                    <input
                      type="text"
                      placeholder="z.B. Maria Schneider"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white border border-[#2D2926]/10 rounded-none text-sm text-[#2D2926] focus:outline-hidden focus:border-[#2D2926]"
                      id="form-user-name"
                    />
                    {errors.name && <p className="text-xs text-red-600 mt-1 font-medium">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs text-[#2D2926]/70">
                      <Mail className="w-3.5 h-3.5 text-[#8C7E6A]" />
                      <span>E-Mail-Adresse:</span>
                    </div>
                    <input
                      type="email"
                      placeholder="maria@online.de"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white border border-[#2D2926]/10 rounded-none text-sm text-[#2D2926] focus:outline-hidden focus:border-[#2D2926]"
                      id="form-user-email"
                    />
                    {errors.email && <p className="text-xs text-red-600 mt-1 font-medium">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs text-[#2D2926]/70">
                      <Phone className="w-3.5 h-3.5 text-[#8C7E6A]" />
                      <span>Telefon / Handy-Nr:</span>
                    </div>
                    <input
                      type="tel"
                      placeholder="z.B. 0176 1234567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white border border-[#2D2926]/10 rounded-none text-sm text-[#2D2926] focus:outline-hidden focus:border-[#2D2926]"
                      id="form-user-phone"
                    />
                    {errors.phone && <p className="text-xs text-red-600 mt-1 font-medium">{errors.phone}</p>}
                  </div>
                </div>
              </div>

              {/* Special wishes */}
              <div className="space-y-2">
                <label className="block text-[10px] uppercase tracking-widest font-bold text-[#8C7E6A] font-sans">
                  Spezielle Wünsche oder Hinweise (optional):
                </label>
                <textarea
                  placeholder="z.B. Schwangerschaft, Allergien gegen Öle, Verspannung im Lendenwirbelbereich oder Wunsch nach Gutschein-Einlösung..."
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-[#2D2926]/10 rounded-none text-sm text-[#2D2926] focus:outline-hidden focus:border-[#2D2926]"
                  id="form-user-notes"
                />
              </div>

              {/* Booking Policy notice */}
              <p className="text-[11px] text-[#2D2926]/60 font-light italic leading-normal">
                {INFO_CONTACT.bookingPolicy} Mit dem Absenden stimmen Sie zu, dass wir Sie zwecks Terminabsprache kontaktieren dürfen.
              </p>

              {/* Submit button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#2D2926] hover:bg-[#8C7E6A] text-white font-bold py-3.5 rounded-full text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 shadow-xs"
                  id="form-submit-btn"
                >
                  <Sparkles className="w-4 h-4 text-[#8C7E6A]" />
                  <span>Terminanfrage absenden</span>
                </button>
              </div>

            </form>

          </div>
        )}

        {/* PERSISTED BOOKING FEEDBACK VIEW - ONLY IF ITEMS PRESENT */}
        {savedBookings.length > 0 && (
          <div className="mt-16 pt-12 border-t border-[#2D2926]/10 space-y-6" id="persisted-bookings-box">
            <h3 className="font-serif text-lg font-bold text-[#2D2926] text-center sm:text-left flex items-center justify-center sm:justify-start gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8C7E6A]" />
              <span>Ihre anstehenden Wohlfühl-Termine</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {savedBookings.map((b) => (
                <div 
                  key={b.id} 
                  className="bg-white border border-[#2D2926]/10 hover:border-[#2D2926]/30 rounded-xl p-5 flex items-center justify-between gap-4 shadow-none"
                >
                  <div className="space-y-1.5 text-left">
                    <span className="block font-serif font-semibold text-[#2D2926] text-sm break-words max-w-xs">{b.treatmentName}</span>
                    <div className="flex items-center gap-3 text-xs text-[#2D2926]/80">
                      <span className="flex items-center gap-1 text-[#8C7E6A] font-bold uppercase tracking-wider text-[10px]">
                        <Calendar className="w-3.5 h-3.5 text-[#8C7E6A]" />
                        <span>{new Date(b.date).toLocaleDateString('de-DE')}</span>
                      </span>
                      <span className="flex items-center gap-1 text-[11px]">
                        <Clock className="w-3.5 h-3.5 text-[#8C7E6A]" />
                        <span>{b.time} Uhr</span>
                      </span>
                    </div>
                    <span className="text-[9px] text-[#8C7E6A] bg-[#8C7E6A]/10 rounded-none px-2.5 py-0.5 inline-block font-bold uppercase tracking-widest">Status: In Bearbeitung</span>
                  </div>

                  <button
                    onClick={() => handleCancelBooking(b.id)}
                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all cursor-pointer"
                    title="Anfrage stornieren"
                    id={`cancel-booking-${b.id}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
            <p className="text-center text-[11px] text-[#2D2926]/50 leading-relaxed font-light">
              Hier sehen Sie die Anfragen, die in Ihrem Browser-Speicher hinterlegt sind. Für kurzfristige Stornierungen (unter 24 Std.) bitten wir um telefonische Benachrichtigung unter <a href="tel:+4962334629988" className="underline font-semibold hover:text-[#8C7E6A]">06233 4629988</a>.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
