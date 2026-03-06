export interface Product {
  id: string;
  name: string;
  category: "beurres" | "capillaire";
  price: number;
  currency: string;
  description: string;
  ingredients: string;
  ideal_for: string;
  image: string;
}

export interface Service {
  id: string;
  name: string;
  category: "locs" | "tresses" | "coiffure" | "formation";
  price: number;
  duration_hours: number;
  description: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  checkout_url?: string;
}

export interface ChatResponse {
  response: string;
  thread_id: string;
  checkout_url?: string;
}

export interface SalonInfo {
  name: string;
  tagline: string;
  owner: string;
  address: string;
  phone: string;
  email: string;
  hours: Record<string, string>;
  social: Record<string, string>;
  cancellation_policy: string;
  about: string;
}
