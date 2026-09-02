// Fuente única de textos compartidos (home + layout). En español neutro.

export const SITE = {
  name: 'Calma en 3 Minutos',
  domain: 'https://calmaen3minutos.com',
  contactEmail: 'hola@calmaen3minutos.com', // PENDIENTE: provisionar buzón (Cloudflare Email Routing)
  // Alternativa a la verificación por archivo (que CF Pages rompe con el redirect .html).
  // Pega aquí el content de la etiqueta HTML de GSC ("HTML tag" / "Etiqueta HTML").
  gscVerification: '',
};

export const REVIEWER = {
  name: 'Dra. Claudia López',
  title: 'Doctora en Medicina · Especialista en Neonatología',
  extra: 'Con formación en técnicas de regulación emocional y en atención temprana, y experiencia en educación sanitaria y acompañamiento a familias.',
  linkedin: 'https://www.linkedin.com/in/claudialopezsv/',
  photo: '/dra-claudia-lopez.jpg',
  lastReviewed: '2026-05-02', // confirmado por el cliente
  registration: 'J.V.P.M. 19413', // Junta de Vigilancia de la Profesión Médica (El Salvador)
};

// Líneas de ayuda en crisis. PENDIENTE: verificar vigencia por país antes de publicar.
export const CRISIS_LINES = [
  { country: 'España', value: '024' },
  { country: 'México', value: 'SAPTEL 55 5259 8121' },
  { country: 'Argentina', value: '135 · (011) 5275-1135' },
  { country: 'Colombia', value: 'Línea 106' },
  { country: 'EE.UU.', value: '988' },
];

export const NAV_TECNICAS = [
  { slug: 'respiracion-4-7-8', label: 'Respiración 4-7-8' },
  { slug: 'respiracion-diafragmatica', label: 'Respiración diafragmática' },
  { slug: 'respiracion-cuadrada', label: 'Respiración cuadrada' },
  { slug: 'respiracion-nasal-alternante', label: 'Respiración nasal alternante' },
  { slug: 'respiracion-labios-fruncidos', label: 'Respiración con labios fruncidos' },
];

export const DISCLAIMER =
  'Los ejercicios de respiración son un apoyo para gestionar el estrés y la ansiedad. No sustituyen el diagnóstico ni el tratamiento de un profesional. Si tienes ansiedad severa, ataques de pánico recurrentes o pensamientos de autolesión, busca ayuda profesional de inmediato.';

export const HOME = {
  hero: {
    h1: 'Calma un ataque de ansiedad en 3 minutos',
    sub: 'Respiración guiada para cuando el corazón se acelera y sientes que no te entra el aire. No tienes que contar nada: sigues el círculo y respiras conmigo.',
    micro: 'Sin descargar nada · sin registro · gratis',
  },

  why: {
    h2: 'Por qué la respiración corta un ataque de ansiedad',
    body: [
      'Cuando entras en pánico, respiras rápido y superficial. Eso baja el CO₂ de tu sangre y aparece la sensación de ahogo, el hormigueo y el mareo, aunque esté entrando aire de sobra.',
      'Al alargar la exhalación (soltar el aire más despacio de lo que lo tomas) tu cuerpo recibe una señal física de que estás a salvo: el pulso baja y el ciclo se rompe. No hace falta fuerza de voluntad ni "pensar en cosas bonitas". Solo respirar más lento, guiado.',
    ],
  },

  techniquesIntro: {
    h2: 'Elige la respiración para tu momento',
    items: [
      { slug: 'respiracion-4-7-8', name: 'Respiración 4-7-8', forWhat: 'Cuando sientes que viene un ataque, o cuando no puedes dormir.' },
      { slug: 'respiracion-diafragmatica', name: 'Respiración diafragmática', forWhat: 'Para bajar la tensión acumulada del día. La base de todas.' },
      { slug: 'respiracion-cuadrada', name: 'Respiración cuadrada', forWhat: 'Antes de un examen, una reunión o una decisión difícil.' },
      { slug: 'respiracion-nasal-alternante', name: 'Respiración nasal alternante', forWhat: 'Cuando los pensamientos van en espiral y no paran.' },
      { slug: 'respiracion-labios-fruncidos', name: 'Respiración con labios fruncidos', forWhat: 'Cuando notas que "no te entra el aire".' },
    ],
  },

  symptoms: {
    h2: '¿Reconoces estos síntomas de ansiedad?',
    list: [
      'Sensación de ahogo o falta de aire',
      'Corazón acelerado o palpitaciones',
      'Opresión o dolor en el pecho',
      'Mareos o inestabilidad',
      'Hormigueo en manos y pies',
      'Sudoración, temblores o escalofríos',
      'Náuseas o malestar en el estómago',
      'Sensación de irrealidad o de peligro inminente',
      'Miedo intenso a perder el control o a morir',
      'Mente acelerada que no puedes frenar',
      'Insomnio por pensamientos ansiosos',
      'Hiperventilación',
    ],
    reassurance:
      'Si te suenan varios, no estás en peligro aunque lo parezca. Un ataque de pánico es intenso pero pasa: suele durar entre 10 y 30 minutos y baja solo. Respirar guiado lo acorta.',
  },

  sleepStress: {
    h2: 'La misma respiración, para el estrés y para dormir',
    body: 'No hace falta estar en crisis. La respiración 4-7-8 practicada en la cama te ayuda a dormirte más rápido: es la que se conoce como "técnica militar para dormir". La respiración diafragmática, 5 minutos al día, baja la tensión de fondo.',
  },

  noFriction: {
    h2: 'Sin instalar nada. Sin crear una cuenta.',
    body: 'Calma en 3 Minutos se abre en el navegador y funciona ya, en el teléfono o en el ordenador. No hay app que descargar, ni cuenta, ni versión de pago que te frene a la mitad. Es gratis, en español, y está pensada para el momento de crisis, no para aprender a meditar.',
  },

  faq: [
    { q: '¿Cuánto tarda en hacer efecto?', a: 'El primer alivio suele llegar en la primera exhalación larga. El ejercicio completo dura 3 minutos.' },
    { q: '¿Sirve en pleno ataque, cuando no puedo ni pensar?', a: 'Sí. No tienes que contar ni seguir instrucciones: solo mirar el círculo y respirar a su ritmo. Cuando crece, tomas aire; cuando baja, sueltas.' },
    { q: '¿Y si me mareo?', a: 'Puede pasar si respiras demasiado profundo o rápido al principio. Para, siéntate y usa un ritmo más suave (por ejemplo 4-4-6). La mejor respiración es la que puedes repetir sin esfuerzo ni miedo.' },
    { q: '¿Necesito instalar una app o registrarme?', a: 'No. Funciona en el navegador. El correo es opcional y solo aparece al terminar, si quieres la guía gratuita.' },
    { q: '¿Cuántas veces al día puedo hacerlo?', a: 'Tantas como necesites en una crisis. Como práctica preventiva, 2 o 3 veces al día está bien.' },
    { q: '¿Es seguro?', a: 'Para la mayoría de personas, sí. Si tienes asma o EPOC, no fuerces las retenciones largas durante una crisis. Si estás embarazada o tienes una condición cardíaca o respiratoria, consúltalo con tu médico.' },
    { q: '¿Esto cura la ansiedad?', a: 'No. Es una herramienta para el momento. Para el problema de fondo, la terapia con un profesional es lo que funciona. Abajo tienes líneas de ayuda.' },
  ],
};
