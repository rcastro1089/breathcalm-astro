import type { BreathingConfig } from "../components/types";

export const BREATHING_TECHNIQUES: BreathingConfig[] = [
  {
    id: '4-7-8',
    name: 'Técnica 4-7-8 (Primeros Auxilios)',
    description: 'Tranquilizante natural para crisis agudas. Reduce frecuencia cardíaca inmediatamente.',
    inhale: 4,
    hold: 7,
    exhale: 8,
    holdEmpty: 0,
    totalTime: 3
  },
  {
    id: 'diafragmatica',
    name: 'Respiración Diafragmática',
    description: 'Activa el sistema parasimpático. Ideal para bajar el estrés general.',
    inhale: 4,
    hold: 0,
    exhale: 6,
    holdEmpty: 0,
    totalTime: 3
  },
  {
    id: 'box',
    name: 'Respiración Cuadrada',
    description: 'Usada por militares para estabilización rápida y control mental.',
    inhale: 4,
    hold: 4,
    exhale: 4,
    holdEmpty: 4,
    totalTime: 3
  },
  {
    id: 'nasal-alternante',
    name: 'Nasal Alternante (Nadi Shodhana)',
    description: 'Técnica yóguica que equilibra hemisferios cerebrales. Para ansiedad anticipatoria.',
    inhale: 4,
    hold: 2,
    exhale: 4,
    holdEmpty: 0,
    totalTime: 5
  },
  {
    id: 'labios-fruncidos',
    name: 'Labios Fruncidos',
    description: 'Reduce sensación de ahogo. Ideal para dificultad respiratoria por ansiedad.',
    inhale: 2,
    hold: 0,
    exhale: 4,
    holdEmpty: 0,
    totalTime: 3
  }
];

export const DEFAULT_CONFIG = BREATHING_TECHNIQUES[0];

export const TEXTS = {
  hero: {
    title: "Calma tu Crisis de Ansiedad en 3 Minutos",
    subtitle: "Respiración guiada para detener ataques de pánico. Sin registro, funciona ahora mismo.",
    cta: "Calmarme",
    subCta: "Tu alivio está a un clic"
  },
  exercise: {
    inhale: "Inspira suavemente...",
    hold: "Mantén el aire...",
    exhale: "Suelta despacio...",
    holdEmpty: "Pausa en vacío...",
    idle: "Preparado...",
    complete: "Ejercicio completado"
  },
  seo: {
    symptomsTitle: "¿Reconoces estos síntomas de ansiedad?",
    symptoms: [
      "Sensación de ahogo o falta de aire",
      "Corazón acelerado o palpitaciones",
      "Mareos o inestabilidad",
      "Miedo intenso a perder el control",
      "Presión o dolor en el pecho",
      "Hormigueo en manos y pies",
      "Sudoración excesiva",
      "Temblores o sacudidas",
      "Náuseas o malestar estomacal",
      "Sensación de irrealidad",
      "Miedo a morir o volverse loco",
      "Escalofríos o sofocos",
      "Tensión muscular extrema",
      "Dificultad para tragar",
      "Mente acelerada sin control",
      "Sensación de peligro inminente",
      "Visión borrosa o en túnel",
      "Debilidad en las piernas",
      "Insomnio por pensamientos ansiosos",
      "Hiperventilación"
    ],
    explanationTitle: "¿Por qué funciona la respiración?",
    explanation: "Durante una crisis de ansiedad, tendemos a hiperventilar. La técnica 4-7-8 y la respiración diafragmática alargan la exhalación, enviando una señal física a tu nervio vago para reducir la frecuencia cardíaca. El American Institute of Stress confirma que 3 minutos de respiración profunda reducen significativamente el cortisol."
  },
  modal: {
    title: "¡Lo lograste!",
    subtitle: "Cada respiración cuenta. Si esta herramienta te ayudó, estamos trabajando en más recursos gratuitos.",
    emailLabel: "Déjanos tu correo y te avisamos cuando lancemos la guía completa:",
    emailPlaceholder: "tu@email.com",
    submit: "Quiero estar al tanto",
    skip: "Saltar por ahora",
    repeat: "Repetir ejercicio"
  }
};