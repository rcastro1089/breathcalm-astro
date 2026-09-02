export enum AppView {
  LANDING = 'LANDING',
  EXERCISE = 'EXERCISE',
  SUMMARY = 'SUMMARY'
}

export enum BreathingPhase {
  IDLE = 'IDLE',
  INHALE = 'INHALE',
  HOLD = 'HOLD',
  EXHALE = 'EXHALE',
  HOLD_EMPTY = 'HOLD_EMPTY'
}

export interface BreathingConfig {
  id: string;
  name: string;
  description: string;
  inhale: number; // seconds
  hold: number;   // seconds
  exhale: number; // seconds
  holdEmpty?: number; // seconds (optional, for box breathing)
  totalTime: number; // minutes
}

export interface SessionData {
  date: string;
  durationSeconds: number;
  completed: boolean;
}

export interface UserStats {
  totalSessions: number;
  totalMinutes: number;
  sessions: SessionData[];
}

export interface Citation {
  text: string;
  url: string;
}

export interface TechniquePageContent {
  slug: string;
  techniqueId: string; // clave en BREATHING_TECHNIQUES (para lanzar el ejercicio con su patrón)
  seo: {
    title: string;
    description: string;
    h1: string;
  };
  content: {
    intro: string;
    howItWorks: string;
    benefits: string[];
    whenToUse: string;
    steps: string[];
    safety: string; // cuándo NO forzar la técnica (YMYL)
  };
  faq: { q: string; a: string }[];
  citations: Citation[];
  lastReviewedDate: string; // ISO, revisión médica
  cta: {
    text: string;
    subtext: string;
  };
}