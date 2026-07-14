export interface User {
  id: number;
  name: string;
  title: string;
  tags: string[];
  contact: Contact;
  about: string;
  experience: Experience[];
  stats: Stats;
  skills: string[];
}

interface Contact {
  email: string;
  phone: string;
  location: string;
  website: string;
  joined: string;
}

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

interface Stats {
  projects: number;
  connections: number;
  reviews: number;
}