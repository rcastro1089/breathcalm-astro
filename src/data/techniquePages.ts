import type { TechniquePageContent } from './types';

// Fuente única del contenido de las páginas de técnica.
// Revisión médica: Dra. Claudia López, 2026-05-02. Verificar URLs de citations (200 OK) antes de deploy.

export const TECHNIQUE_PAGES: Record<string, TechniquePageContent> = {
  '4-7-8': {
    slug: 'respiracion-4-7-8',
    techniqueId: '4-7-8',
    seo: {
      title: 'Respiración 4-7-8 para la Ansiedad | Calma en 3 Minutos',
      description:
        'La técnica de respiración 4-7-8 del Dr. Andrew Weil para frenar un ataque de pánico o de ansiedad, y para dormir más rápido. Con ejercicio guiado gratis.',
      h1: 'Técnica de Respiración 4-7-8 para Detener un Ataque de Pánico',
    },
    content: {
      intro:
        'Cuando sientes que el corazón se te va a salir y que el aire no entra, necesitas algo que funcione ahora. No mañana, no en una hora. Ahora mismo. La técnica 4-7-8 es eso: un botiquín de primeros auxilios para el momento de crisis.',
      howItWorks:
        'La desarrolló el Dr. Andrew Weil. La clave es que la exhalación (8 segundos) dura el doble que la inhalación (4 segundos). Al soltar el aire mucho más despacio de lo que lo tomas, tu cuerpo recibe una señal física de que estás a salvo: el pulso baja y se corta el ciclo de respiración acelerada típico del pánico. No hace falta contar: en el ejercicio guiado solo sigues el círculo.',
      benefits: [
        'Ayuda a bajar la frecuencia cardíaca en el primer minuto',
        'Corta el ciclo de hiperventilación de los ataques de pánico',
        'Activa el "modo calma" del sistema nervioso (parasimpático)',
        'Funciona aunque sientas que "no puedes respirar"',
        'No necesitas nada más que unos minutos y un sitio donde sentarte',
      ],
      whenToUse:
        'Úsala cuando notes que viene un ataque de pánico, cuando el corazón se acelera sin motivo, antes de una situación estresante (una reunión, un examen) o en la cama cuando los pensamientos ansiosos no te dejan dormir: practicada tumbado es la conocida como "técnica militar para dormir".',
      steps: [
        'Siéntate con la espalda apoyada o quédate de pie apoyado en una pared. Lo importante es empezar.',
        'Suelta todo el aire por la boca haciendo un sonido suave, como un suspiro. Vacía los pulmones.',
        'Cierra la boca e inhala por la nariz mientras cuentas mentalmente hasta 4.',
        'Retén el aire contando hasta 7. Si te agobia, retén solo hasta 4.',
        'Suelta el aire por la boca, despacio, contando hasta 8.',
        'Repite el ciclo 4 veces. En una crisis fuerte puedes llegar hasta 8.',
      ],
      safety:
        'Empieza siempre sentado o tumbado, nunca de pie en mitad de la calle: al principio puede marear. Si tienes asma o EPOC, no fuerces la retención de 7 segundos durante una crisis; usa un ritmo 4-4-6. Si estás embarazada o tienes una condición cardíaca o respiratoria, consúltalo antes con tu médico. Si te mareas, para y respira con normalidad.',
    },
    faq: [
      { q: '¿Cuántos ciclos tengo que hacer?', a: 'Cuatro es lo habitual. En una crisis fuerte puedes hacer hasta ocho. Cuando notes que el pulso baja, para.' },
      { q: '¿Y si no aguanto 7 segundos reteniendo el aire?', a: 'No pasa nada. Retén solo lo que puedas (4 o 5 segundos) y alarga la exhalación. Lo que importa es exhalar más largo que inhalar, no el número exacto.' },
      { q: '¿Sirve para dormir?', a: 'Sí. Practicada tumbado en la cama, con 8 repeticiones, ayuda a dormirse más rápido. Es la que se conoce como "técnica militar para dormir".' },
      { q: '¿Cuántas veces al día puedo hacerla?', a: 'Las que necesites en una crisis. Como práctica preventiva, 2 veces al día está bien.' },
    ],
    citations: [
      { text: 'Weil, A. "Breathing Exercises: 4-7-8 Breath". DrWeil.com', url: 'https://www.drweil.com/videos-features/videos/breathing-exercises-4-7-8-breath/' },
      { text: 'Bupa. "Respiración 4-7-8 para la relajación y el control de la ansiedad"', url: 'https://www.bupasalud.com/salud/respiracion-4-7-8' },
      { text: '"6 ejercicios de respiración para relajarse". Psyciencia', url: 'https://www.psyciencia.com/6-ejercicios-de-respiracion-para-relajarse/' },
    ],
    lastReviewedDate: '2026-05-02',
    cta: { text: 'Practicar la respiración 4-7-8', subtext: 'Ejercicio guiado de 3 minutos' },
  },

  diafragmatica: {
    slug: 'respiracion-diafragmatica',
    techniqueId: 'diafragmatica',
    seo: {
      title: 'Respiración Diafragmática para la Ansiedad | Calma en 3 Minutos',
      description:
        'Cómo hacer la respiración diafragmática (o abdominal) paso a paso para reducir el estrés y la ansiedad. Técnica de base, con ejercicio guiado gratuito.',
      h1: 'Respiración Diafragmática: la Base para Calmar la Ansiedad',
    },
    content: {
      intro:
        'Tu cuerpo ya sabe cómo calmarse. Solo hay que recordárselo. Respirar desde el vientre es la forma más natural de decirle a tu sistema nervioso "estamos a salvo". Así respirabas de bebé, antes de que el estrés te enseñara a respirar con el pecho.',
      howItWorks:
        'Cuando respiras moviendo el abdomen (y no los hombros ni el pecho), la respiración se vuelve más lenta y más profunda de forma automática. Practicada con regularidad, esta forma de respirar se asocia a menor frecuencia cardíaca, menor tensión muscular y menos ansiedad. No es una técnica de emergencia como la 4-7-8: es la base que hace que las demás funcionen mejor.',
      benefits: [
        'Se asocia a niveles más bajos de tensión y de ansiedad con la práctica regular',
        'Mejora la oxigenación y baja la frecuencia cardíaca',
        'Alivia la tensión muscular acumulada en el día',
        'Es la base sobre la que se apoyan el resto de técnicas',
        'Puedes hacerla en cualquier sitio, sin que se note',
      ],
      whenToUse:
        'Para el estrés del día a día, en pausas del trabajo, antes de dormir, o como práctica diaria de 5 a 10 minutos. A diferencia de la 4-7-8, es más para mantenimiento que para el momento de crisis.',
      steps: [
        'Túmbate boca arriba con las rodillas dobladas, o siéntate con la espalda recta.',
        'Pon una mano en el pecho y la otra en el abdomen, sobre el ombligo.',
        'Inhala despacio por la nariz durante unos 4 segundos. Solo debe subir la mano del abdomen; el pecho, quieto.',
        'Nota cómo el vientre se hincha como un globo.',
        'Suelta el aire por la boca durante unos 6 segundos. El vientre baja; el pecho sigue quieto.',
        'Repite durante 5 a 10 minutos, o hasta que notes la calma.',
      ],
      safety:
        'Es una técnica segura para la práctica diaria. Si al principio te mareas, respira menos profundo y más despacio: no hace falta llenar los pulmones al máximo. Si tienes una enfermedad respiratoria crónica, coméntalo con tu médico.',
    },
    faq: [
      { q: '¿Es lo mismo que la respiración abdominal?', a: 'Sí. "Diafragmática", "abdominal" y "respiración con el vientre" son la misma técnica.' },
      { q: '¿Mejor tumbado o sentado?', a: 'Tumbado se aprende antes, porque notas mejor el movimiento del abdomen. Una vez que lo dominas, puedes hacerla sentado en cualquier lado.' },
      { q: '¿Cuánto tiempo al día?', a: 'Con 5 a 10 minutos ya se nota. Para un efecto sostenido sobre el estrés, hay quien recomienda hasta 20 minutos diarios.' },
    ],
    citations: [
      { text: 'The American Institute of Stress. "Take a Deep Breath"', url: 'https://www.stress.org/take-a-deep-breath' },
      { text: 'Bupa Latinoamérica. "Ejercicios de respiración para la ansiedad"', url: 'https://www.bupasalud.com/salud/ejercicios-de-respiracion-para-la-ansiedad' },
      { text: '"6 ejercicios de respiración para relajarse". Psyciencia', url: 'https://www.psyciencia.com/6-ejercicios-de-respiracion-para-relajarse/' },
    ],
    lastReviewedDate: '2026-05-02',
    cta: { text: 'Practicar la respiración diafragmática', subtext: 'Práctica guiada de 3 minutos' },
  },

  box: {
    slug: 'respiracion-cuadrada',
    techniqueId: 'box',
    seo: {
      title: 'Respiración Cuadrada (Box Breathing) | Calma en 3 Minutos',
      description:
        'Cómo hacer la respiración cuadrada o box breathing (4-4-4-4) para recuperar el control antes de una situación de presión. Guía paso a paso y ejercicio gratis.',
      h1: 'Respiración Cuadrada (Box Breathing): Control Bajo Presión',
    },
    content: {
      intro:
        'Control cuando todo parece fuera de control. La respiración cuadrada te da un ritmo al que agarrarte antes de una reunión difícil, un examen o una decisión importante — o cuando los pensamientos no paran.',
      howItWorks:
        'Se llama "cuadrada" porque tiene cuatro fases iguales de 4 segundos: inhalar, mantener, exhalar, mantener sin aire. Ese ritmo lento y simétrico reduce la activación del cuerpo y te obliga a salir del patrón de respiración rápida. Se hizo popular como técnica de entornos militares y de alto rendimiento, donde hace falta mantener la cabeza fría bajo estrés.',
      benefits: [
        'Te devuelve una sensación de control inmediata',
        'Rompe el bucle de pensamientos acelerados',
        'Mejora la concentración antes de una tarea exigente',
        'Reduce los nervios anticipatorios',
        'Es fácil de recordar: todo dura lo mismo',
      ],
      whenToUse:
        'Antes de situaciones de presión (presentaciones, entrevistas, exámenes), cuando necesitas concentrarte, o cuando quieres tomar una decisión con la cabeza despejada. También sirve para volver a la calma después de un susto.',
      steps: [
        'Siéntate con la espalda recta y los pies apoyados en el suelo.',
        'Inhala por la nariz contando hasta 4. Lento y constante.',
        'Mantén el aire dentro contando hasta 4, sin apretar.',
        'Suelta el aire por la boca contando hasta 4.',
        'Mantén los pulmones vacíos contando hasta 4. Esta pausa es la clave.',
        'Repite de 4 a 5 ciclos, o hasta que recuperes el control.',
      ],
      safety:
        'Si mantener los pulmones vacíos 4 segundos te agobia, acorta a un ritmo 3-3-3-3. No la practiques de pie si notas mareo. Si tienes una condición cardíaca o respiratoria, consúltalo con tu médico.',
    },
    faq: [
      { q: '¿Por qué se llama "cuadrada"?', a: 'Porque tiene cuatro fases que duran lo mismo (4 segundos cada una): como los cuatro lados de un cuadrado.' },
      { q: '¿La usan de verdad los militares?', a: 'Es una técnica popularizada en entornos militares y de alto rendimiento. Lo importante no es quién la usa, sino que un ritmo lento y simétrico ayuda a bajar la activación.' },
      { q: '¿Sirve en pleno ataque de pánico?', a: 'Para una crisis aguda con sensación de ahogo suele ir mejor la 4-7-8 o la de labios fruncidos. La cuadrada es más para nervios anticipatorios y recuperar el foco.' },
    ],
    citations: [
      { text: 'Cleveland Clinic. "Box Breathing Benefits"', url: 'https://health.clevelandclinic.org/box-breathing-benefits' },
      { text: 'tupsiquiatra.expert. "Respiración y ansiedad"', url: 'https://tupsiquiatra.expert/blog/2024/08/25/respiracion/' },
    ],
    lastReviewedDate: '2026-05-02',
    cta: { text: 'Practicar la respiración cuadrada', subtext: 'Ejercicio guiado de 3 minutos' },
  },

  'nasal-alternante': {
    slug: 'respiracion-nasal-alternante',
    techniqueId: 'nasal-alternante',
    seo: {
      title: 'Nadi Shodhana: Respiración Nasal Alternante | Calma en 3 Minutos',
      description:
        'Cómo hacer la respiración nasal alternante (Nadi Shodhana) paso a paso para frenar la mente acelerada y los pensamientos en espiral. Ejercicio guiado gratuito.',
      h1: 'Nadi Shodhana: Respiración Nasal Alternante para la Mente Acelerada',
    },
    content: {
      intro:
        'Cuando los pensamientos no paran y la ansiedad anticipatoria no te deja en paz, necesitas algo que te devuelva el equilibrio. Esta técnica de yoga, usada desde hace siglos, impone un ritmo tan lento y deliberado que la mente no tiene más remedio que seguirlo.',
      howItWorks:
        'Consiste en alternar la respiración entre una fosa nasal y la otra, tapándolas con los dedos. El gesto obliga a respirar despacio y a prestar atención a cada paso, lo que ayuda a salir de la rumiación. En estudios sobre pranayama con práctica sostenida durante varias semanas se han observado descensos en los niveles de estrés percibido.',
      benefits: [
        'Frena la mente acelerada y los pensamientos en espiral',
        'Impone un ritmo lento que es difícil de mantener y pensar a la vez',
        'Prepara para dormir o para meditar',
        'Con práctica sostenida se asocia a menos estrés percibido',
        'No necesitas nada, solo tus manos',
      ],
      whenToUse:
        'Para la ansiedad anticipatoria (antes de un evento futuro), cuando notas la cabeza "sobrecargada", o como transición antes de dormir. No es una técnica para la crisis aguda con sensación de ahogo.',
      steps: [
        'Siéntate cómodo, con la espalda recta. Puedes cerrar los ojos.',
        'Tapa la fosa nasal derecha con el pulgar derecho.',
        'Inhala despacio por la fosa izquierda durante unos 4 segundos.',
        'Tapa también la fosa izquierda (con los dedos anular y meñique). Mantén 2 segundos.',
        'Destapa la derecha y suelta el aire por ella durante unos 4 segundos.',
        'Inhala por la derecha, tapa, mantén, y exhala por la izquierda. Ese es un ciclo completo.',
        'Repite durante unos 5 minutos.',
      ],
      safety:
        'Evítala si tienes la nariz muy congestionada. No es una técnica de emergencia: si estás en pleno ataque con sensación de ahogo, usa la 4-7-8 o la de labios fruncidos. Si te mareas, vuelve a respirar con normalidad por las dos fosas.',
    },
    faq: [
      { q: '¿Cómo se pronuncia "Nadi Shodhana"?', a: 'Aproximadamente "nadi shodana". También se la llama "respiración alterna" o "anuloma viloma".' },
      { q: '¿Con qué dedos se tapan las fosas?', a: 'Con la mano derecha: el pulgar para la fosa derecha, y los dedos anular y meñique para la izquierda.' },
      { q: '¿Sirve para dormir?', a: 'Sí, como transición antes de acostarte. Para dormirse rápido, la 4-7-8 suele ser más directa.' },
    ],
    citations: [
      { text: 'psicologiacuevas.es. "Respiración para la ansiedad"', url: 'https://psicologiacuevas.es/respiracion-para-ansiedad/' },
      { text: 'Bupa Latinoamérica. "Ejercicios de respiración para la ansiedad"', url: 'https://www.bupasalud.com/salud/ejercicios-de-respiracion-para-la-ansiedad' },
    ],
    lastReviewedDate: '2026-05-02',
    cta: { text: 'Practicar la respiración nasal alternante', subtext: 'Ejercicio guiado de 5 minutos' },
  },

  'labios-fruncidos': {
    slug: 'respiracion-labios-fruncidos',
    techniqueId: 'labios-fruncidos',
    seo: {
      title: 'Respiración con Labios Fruncidos | Calma en 3 Minutos',
      description:
        'La respiración con labios fruncidos alivia la sensación de ahogo y la falta de aire durante la ansiedad y la hiperventilación. Simple, segura e inmediata.',
      h1: 'Respiración con Labios Fruncidos: Alivio Cuando Sientes que te Ahogas',
    },
    content: {
      intro:
        'Esa sensación de que no puedes respirar, de que el aire no entra, es una de las peores de la ansiedad. Pero la verdad es que el aire sí está entrando: en la hiperventilación entra de sobra. Tu cuerpo te engaña, y esta técnica ayuda a revertirlo controlando la salida del aire.',
      howItWorks:
        'Al fruncir los labios, como para soplar una vela o dar un beso, creas una pequeña resistencia a la salida del aire. Eso hace que la exhalación sea más lenta y controlada, y mantiene las vías respiratorias abiertas un poco más de tiempo. El resultado: sientes que respiras mejor porque controlas el flujo. Es una técnica que se usa también en rehabilitación respiratoria.',
      benefits: [
        'Alivia la sensación de ahogo casi de inmediato',
        'Te devuelve el control sobre algo que parecía incontrolable',
        'Es muy fácil de aprender y se puede hacer en cualquier sitio',
        'Especialmente útil cuando ya estás hiperventilando',
        'Frena la respiración rápida sin que tengas que esforzarte',
      ],
      whenToUse:
        'Cuando notas que te falta el aire, durante un ataque de ansiedad con hiperventilación, si sientes un nudo en la garganta, o cuando llevas un rato respirando rápido sin darte cuenta.',
      steps: [
        'Siéntate erguido. Una postura abierta facilita que entre el aire.',
        'Inhala despacio por la nariz durante unos 2 segundos. No fuerces.',
        'Frunce los labios como si fueras a soplar una vela sin apagarla.',
        'Suelta el aire muy despacio a través de los labios fruncidos durante unos 4 segundos.',
        'Imagina que mueves la llama de la vela sin llegar a apagarla.',
        'Repite durante 5 a 10 minutos, o hasta que notes alivio.',
      ],
      safety:
        'Es una de las técnicas más seguras y suele ir bien incluso en plena hiperventilación. Si aun así el ahogo no cede en unos minutos, o aparece dolor en el pecho que no habías notado antes, busca atención médica.',
    },
    faq: [
      { q: '¿Por qué siento que respiro mejor si el aire sale más despacio?', a: 'Porque frenar la salida del aire mantiene las vías abiertas un poco más y evita que colapsen. Además, al controlar tú el ritmo, se rompe la sensación de descontrol.' },
      { q: '¿Puedo hacerla en público sin que se note?', a: 'Sí. Fruncir un poco los labios y soltar el aire despacio es casi imperceptible.' },
      { q: '¿Es la misma que usan para el EPOC?', a: 'Sí, es la misma técnica (pursed lip breathing). En la ansiedad se aprovecha para cortar la hiperventilación.' },
    ],
    citations: [
      { text: 'Cleveland Clinic. "Pursed Lip Breathing"', url: 'https://my.clevelandclinic.org/health/articles/9443-pursed-lip-breathing' },
      { text: 'American Lung Association. "Pursed Lip Breathing"', url: 'https://www.lung.org/lung-health-diseases/wellness/breathing-exercises' },
      { text: 'Medical News Today (es). "Cómo aumentar la capacidad pulmonar"', url: 'https://www.medicalnewstoday.com/articles/es/como-aumentar-la-capacidad-pulmonar' },
    ],
    lastReviewedDate: '2026-05-02',
    cta: { text: 'Practicar la respiración con labios fruncidos', subtext: 'Ejercicio guiado de 3 minutos' },
  },
};

export const getTechniqueBySlug = (slug: string): string | undefined =>
  Object.keys(TECHNIQUE_PAGES).find((key) => TECHNIQUE_PAGES[key].slug === slug);
