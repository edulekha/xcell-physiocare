export interface ClinicAddress {
  line1: string;
  line2: string;
  area: string;
  pincode: string;
  mapsUrl: string;
  embedSrc: string;
}

export interface ClinicHours {
  day: string;
  time: string;
}

export interface ClinicBrand {
  primaryColor: string;
  primaryColorDark: string;
  accentColor: string;
  fontHeading: string;
  fontBody: string;
  logoText: string;
  logoImage?: string;
}

export interface ClinicService {
  title: string;
  description: string;
  icon: string;
  priceRange: string;
}

export interface ClinicDoctor {
  name: string;
  qualifications: string;
  experience: string;
  bio: string;
  photo: string;
  specializations?: string[];
  languages?: string[];
}

export interface ClinicTestimonial {
  name: string;
  rating: number;
  text: string;
  source: string;
}

export interface ClinicStats {
  patientsServed: string;
  googleRating: string;
  googleReviews: string;
  yearsExperience: string;
}

export interface ClinicSEO {
  defaultTitle: string;
  defaultDescription: string;
  ogImage: string;
  siteUrl: string;
  keywords: string[];
}

export interface ClinicSocial {
  instagram?: string;
  facebook?: string;
  youtube?: string;
}

export interface ClinicConfig {
  name: string;
  tagline: string;
  category: "dental" | "physio" | "skin";
  established: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: ClinicAddress;
  hours: ClinicHours[];
  brand: ClinicBrand;
  services: ClinicService[];
  doctors: ClinicDoctor[];
  testimonials: ClinicTestimonial[];
  stats: ClinicStats;
  formspreeEndpoint: string;
  seo: ClinicSEO;
  social: ClinicSocial;
}

export const clinic: ClinicConfig = {
  // Basic info
  name: "Xcell Physiocare",
  tagline: "Physiotherapy Centre in South Delhi | Neuro Physiotherapist | Lung Rehabilitation | Pain Treatment",
  category: "physio",
  established: "2010",

  // Contact
  phone: "+91 99998 24495",
  whatsapp: "919999824495",
  email: "info@xcellphysiocare.in",
  address: {
    line1: "S-175, Basement, Greater Kailash-1",
    line2: "Block S, Greater Kailash I",
    area: "New Delhi, Delhi",
    pincode: "110048",
    mapsUrl: "https://maps.google.com/?cid=8701257857666039193",
    embedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.5!2d77.2!3d28.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMwJzAwLjAiTiA3N8KwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1",
  },

  // Hours
  hours: [
    { day: "Mon – Sat", time: "10:00 AM – 8:00 PM" },
    { day: "Sunday", time: "11:00 AM – 4:00 PM" },
  ],

  // Branding
  brand: {
    primaryColor: "#1D4ED8",
    primaryColorDark: "#1E3A8A",
    accentColor: "#FCD34D",
    fontHeading: "'Playfair Display', serif",
    fontBody: "'Inter', sans-serif",
    logoText: "Xcell Physiocare",
    logoImage: "",
  },

  // Services
  services: [
    {
      title: "Neuro Physiotherapy",
      description: "Specialized rehabilitation for neurological conditions including stroke, Parkinson's, and spinal cord injuries to restore mobility and function.",
      icon: "shield",
      priceRange: "₹1,000 – ₹2,500",
    },
    {
      title: "Lung Rehabilitation",
      description: "Comprehensive pulmonary rehabilitation programs designed to improve lung function, reduce breathlessness, and enhance quality of life.",
      icon: "sparkles",
      priceRange: "₹800 – ₹2,000",
    },
    {
      title: "Pain Treatment",
      description: "Advanced pain management techniques using modern modalities and manual therapy for chronic back pain, neck pain, and joint issues.",
      icon: "aligners",
      priceRange: "₹1,000 – ₹3,000",
    },
    {
      title: "Sports Injury Rehab",
      description: "Targeted recovery programs for athletes to safely return to sport, including biomechanical assessment and injury prevention.",
      icon: "implant",
      priceRange: "₹1,500 – ₹3,500",
    },
    {
      title: "Post-Surgical Rehab",
      description: "Structured physical therapy following orthopedic surgeries like joint replacements and ligament repairs to ensure optimal recovery.",
      icon: "cleaning",
      priceRange: "₹1,000 – ₹2,500",
    },
    {
      title: "Manual Therapy",
      description: "Hands-on techniques including joint mobilization and soft tissue manipulation to reduce pain and improve range of motion.",
      icon: "smile",
      priceRange: "₹1,000 – ₹2,000",
    },
  ],

  // Doctors
  doctors: [
    {
      name: "Dr. Aarti Singh",
      qualifications: "BPT, MPT (Neurology)",
      experience: "15 years",
      bio: "Dr. Aarti Singh is a highly experienced neuro physiotherapist dedicated to helping patients regain their independence. With a Master's degree in Neurology, she specializes in stroke rehabilitation and complex neurological conditions. Her evidence-based approach and compassionate care have transformed the lives of countless patients.",
      photo: "/images/doctor-1.jpg",
      specializations: ["Neuro Physiotherapy", "Stroke Rehab", "Pain Management"],
      languages: ["English", "Hindi"],
    },
    {
      name: "Dr. Vikram Sharma",
      qualifications: "BPT, MPT (Cardiopulmonary)",
      experience: "10 years",
      bio: "Dr. Vikram Sharma is an expert in lung rehabilitation and cardiopulmonary physical therapy. He has extensive experience in managing patients with COPD, asthma, and post-COVID complications. His personalized breathing and exercise programs help patients breathe easier and live more active lives.",
      photo: "/images/doctor-2.jpg",
      specializations: ["Lung Rehabilitation", "Cardiopulmonary Rehab", "Post-Surgical Care"],
      languages: ["English", "Hindi"],
    },
  ],

  // Testimonials
  testimonials: [
    {
      name: "Ramesh T.",
      rating: 5,
      text: "Xcell Physiocare completely cured my chronic back pain. Dr. Singh's diagnosis was spot on and the treatment plan worked wonders. The clinic is well-equipped and very clean.",
      source: "Google Reviews",
    },
    {
      name: "Sunita M.",
      rating: 5,
      text: "I came here for lung rehab after a severe chest infection. The exercises and techniques taught by Dr. Sharma helped me regain my lung capacity quickly. Excellent care!",
      source: "Google Reviews",
    },
    {
      name: "Arjun K.",
      rating: 5,
      text: "Recovering from my ACL surgery was tough, but the sports rehab program here got me back on the field. Very professional and encouraging staff.",
      source: "Google Reviews",
    },
    {
      name: "Meera D.",
      rating: 5,
      text: "My mother has Parkinson's and the neuro physiotherapy she receives here has significantly improved her balance and mobility. Highly recommend Xcell Physiocare.",
      source: "Practo",
    },
  ],

  // Stats
  stats: {
    patientsServed: "15,000+",
    googleRating: "4.9",
    googleReviews: "500",
    yearsExperience: "14+",
  },

  // Form submission
  formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID",

  // SEO
  seo: {
    defaultTitle: "Xcell Physiocare | Physiotherapy Centre in South Delhi",
    defaultDescription: "Top-rated Physiotherapy Centre in South Delhi offering Neuro Physiotherapy, Lung Rehabilitation, and Pain Treatment. Book your appointment today.",
    ogImage: "/images/og-image.jpg",
    siteUrl: "https://xcellphysiocare.in",
    keywords: ["physiotherapy South Delhi", "neuro physiotherapist Delhi", "lung rehabilitation", "pain treatment", "best physiotherapist near me", "Xcell Physiocare"],
  },

  // Social
  social: {
    instagram: "",
    facebook: "",
    youtube: "",
  },
} as const;
