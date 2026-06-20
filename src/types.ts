export interface Treatment {
  id: string;
  name: string;
  description: string;
  durationMinutes: number;
  price: number;
  details?: string[];
  recommendFor?: string[];
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  treatments: Treatment[];
}

export interface Booking {
  id: string;
  treatmentId: string;
  treatmentName: string;
  treatmentPrice: number;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  notes?: string;
  createdAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  treatment: string;
}
