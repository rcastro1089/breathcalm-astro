import { TechniquePageContent } from './types';

export const TECHNIQUE_PAGES: Record<string, TechniquePageContent> = {
    '4-7-8': {
        slug: 'respiracion-4-7-8',
        seo: {
            title: 'Técnica 4-7-8: Calma tu Ansiedad en 60 Segundos | BreathCalm',
            description: 'Aprende la técnica de respiración 4-7-8 del Dr. Andrew Weil para detener ataques de pánico y crisis de ansiedad. Guía paso a paso con ejercicio interactivo gratis.',
            h1: 'Técnica de Respiración 4-7-8 para Detener Ataques de Pánico'
        },
        content: {
            intro: 'Cuando sientes que el corazón se te va a salir del pecho y el aire no entra, necesitas algo que funcione *ahora*. No mañana, no en una hora. Ahora mismo. La técnica 4-7-8 es exactamente eso: tu botiquín de primeros auxilios para momentos de crisis.',
            howItWorks: 'Desarrollada por el Dr. Andrew Weil, esta técnica actúa como un tranquilizante natural sobre tu sistema nervioso. Al alargar la exhalación (8 segundos) respecto a la inhalación (4 segundos), envías una señal directa a tu nervio vago para que baje las pulsaciones. Es biología pura: cuando exhalas más lento, tu cuerpo interpreta que estás a salvo.',
            benefits: [
                'Reduce la frecuencia cardíaca en menos de 1 minuto',
                'Corta el ciclo de hiperventilación típico de los ataques de pánico',
                'Activa el sistema nervioso parasimpático (modo "calma")',
                'Funciona incluso cuando sientes que "no puedes respirar"',
                'No necesitas nada más que tu cuerpo'
            ],
            whenToUse: 'Usa esta técnica cuando sientas que viene un ataque de pánico, cuando tu corazón se acelera sin motivo, antes de una situación estresante (reunión, examen), o cuando los pensamientos ansiosos no te dejan dormir.',
            steps: [
                'Siéntate o quédate de pie con la espalda apoyada. No importa la postura, lo importante es empezar.',
                'Exhala completamente por la boca haciendo un sonido "whoosh". Vacía los pulmones.',
                'Cierra la boca e inhala silenciosamente por la nariz contando mentalmente hasta 4.',
                'Mantén la respiración contando hasta 7. Sí, 7 segundos. Puedes hacerlo.',
                'Exhala completamente por la boca (sonido "whoosh") contando hasta 8.',
                'Repite el ciclo 4 veces. En crisis aguda, puedes hacer hasta 8 ciclos.'
            ]
        },
        cta: {
            text: 'Calmar mi ansiedad ahora',
            subtext: 'Ejercicio guiado de 3 minutos'
        }
    },

    'diafragmatica': {
        slug: 'respiracion-diafragmatica',
        seo: {
            title: 'Respiración Diafragmática para Ansiedad: Guía Paso a Paso | BreathCalm',
            description: 'Domina la respiración diafragmática para reducir el estrés y la ansiedad. Técnica avalada por el American Institute of Stress. Ejercicio interactivo gratuito.',
            h1: 'Respiración Diafragmática: La Base para Controlar la Ansiedad'
        },
        content: {
            intro: 'Tu cuerpo ya sabe cómo calmarse. Solo necesita que le recuerdes cómo hacerlo. La respiración desde el vientre es la forma más natural de decirle a tu sistema nervioso: "estamos a salvo". No es magia, es la forma en que respirabas cuando eras bebé, antes de que el estrés te enseñara a respirar con el pecho.',
            howItWorks: 'Cuando respiras con el diafragma (el músculo debajo de tus pulmones), activas directamente el nervio vago, que es el "interruptor de pausa" de tu sistema nervioso. El American Institute of Stress recomienda 20-30 minutos diarios de esta técnica para reducciones significativas de cortisol, la hormona del estrés.',
            benefits: [
                'Reduce los niveles de cortisol (hormona del estrés)',
                'Mejora la oxigenación de todo tu cuerpo',
                'Baja la presión arterial de forma natural',
                'Alivia la tensión muscular acumulada',
                'Mejora la calidad del sueño con práctica regular'
            ],
            whenToUse: 'Es ideal para el estrés general del día a día, antes de dormir para mejorar el sueño, durante pausas del trabajo, o como práctica diaria preventiva. A diferencia de la 4-7-8, esta es más para mantenimiento que para emergencias.',
            steps: [
                'Acuéstate boca arriba o siéntate cómodamente con la espalda recta.',
                'Coloca una mano en tu pecho y otra en tu abdomen (sobre el ombligo).',
                'Inhala lentamente por la nariz durante 4 segundos. Solo la mano del abdomen debe subir; el pecho quieto.',
                'Siente cómo tu vientre se expande como un globo que se infla.',
                'Exhala suavemente por la boca durante 6 segundos. El vientre baja, el pecho sigue quieto.',
                'Repite durante 5-10 minutos, o hasta que sientas la calma.'
            ]
        },
        cta: {
            text: 'Aprender a respirar mejor',
            subtext: 'Práctica guiada de 3 minutos'
        }
    },

    'box': {
        slug: 'respiracion-cuadrada',
        seo: {
            title: 'Respiración Cuadrada (Box Breathing): Técnica de Navy SEALs | BreathCalm',
            description: 'Aprende la respiración cuadrada usada por Navy SEALs y atletas de élite para mantener la calma bajo presión extrema. Ejercicio interactivo gratuito.',
            h1: 'Respiración Cuadrada (Box Breathing): Control Mental Bajo Presión'
        },
        content: {
            intro: 'Si esta técnica funciona para los Navy SEALs en situaciones de combate, puede funcionar para ti en una reunión difícil, un examen importante, o cuando los pensamientos acelerados no paran. La respiración cuadrada te da control cuando todo parece fuera de control.',
            howItWorks: 'Se llama "cuadrada" porque tiene 4 fases iguales: inhalar, mantener, exhalar, mantener. Este patrón simétrico crea un ritmo que sincroniza tu corazón y tu mente. Los militares la usan porque funciona incluso cuando el estrés es extremo. La clave está en la retención después de exhalar, que rompe el patrón de respiración acelerada.',
            benefits: [
                'Proporciona control mental inmediato bajo presión',
                'Rompe el ciclo de pensamientos acelerados',
                'Mejora la concentración y el enfoque',
                'Reduce la ansiedad anticipatoria',
                'Desarrolla disciplina mental con la práctica'
            ],
            whenToUse: 'Perfecta antes de situaciones de alta presión (presentaciones, entrevistas, exámenes), cuando los pensamientos no paran, para recuperar el enfoque durante el trabajo, o cuando necesitas tomar decisiones claras en momentos difíciles.',
            steps: [
                'Siéntate con la espalda recta. Los pies apoyados en el suelo te ayudarán a sentirte anclado/a.',
                'Inhala por la nariz contando hasta 4. Lento y constante.',
                'Mantén el aire dentro contando hasta 4. Sin tensión, simplemente espera.',
                'Exhala por la boca contando hasta 4. Vacía los pulmones completamente.',
                'Mantén sin aire contando hasta 4. Esta pausa es la clave de la técnica.',
                'Repite 4-5 ciclos completos, o hasta que recuperes el control.'
            ]
        },
        cta: {
            text: 'Recuperar el control',
            subtext: 'Ejercicio guiado de 3 minutos'
        }
    },

    'nasal-alternante': {
        slug: 'respiracion-nasal-alternante',
        seo: {
            title: 'Respiración Nasal Alternante (Nadi Shodhana): Equilibra tu Mente | BreathCalm',
            description: 'Técnica yóguica Nadi Shodhana para calmar la mente acelerada y reducir la ansiedad anticipatoria. Estudio científico avala reducción de estrés en 12 semanas.',
            h1: 'Nadi Shodhana: La Técnica Yóguica que Calma la Mente Acelerada'
        },
        content: {
            intro: 'Cuando los pensamientos no paran y la ansiedad anticipatoria no te deja en paz, necesitas algo que equilibre. Esta técnica milenaria, usada en yoga durante miles de años, literalmente reconecta los dos hemisferios de tu cerebro. No es misticismo: un estudio científico demostró que 12 semanas de práctica reducen significativamente los niveles de estrés.',
            howItWorks: 'Al alternar la respiración entre las fosas nasales, estimulas ambos hemisferios cerebrales de forma alternada. Esto crea un efecto de "reinicio" en tu sistema nervioso. La fosa nasal izquierda está conectada con el hemisferio derecho (calma, creatividad) y la derecha con el izquierdo (lógica, acción). Al alternar, encuentras el equilibrio.',
            benefits: [
                'Equilibra la actividad de ambos hemisferios cerebrales',
                'Reduce significativamente los niveles de estrés (estudio de 12 semanas)',
                'Calma la mente acelerada y los pensamientos en espiral',
                'Mejora la claridad mental y la toma de decisiones',
                'Prepara para meditación o sueño profundo'
            ],
            whenToUse: 'Ideal para ansiedad anticipatoria (antes de eventos futuros), cuando los pensamientos no paran, como preparación para meditar o dormir, o cuando sientes que tu mente está "sobrecargada".',
            steps: [
                'Siéntate cómodamente con la espalda recta. Puedes cerrar los ojos.',
                'Usa el pulgar derecho para cerrar la fosa nasal derecha.',
                'Inhala lentamente por la fosa nasal izquierda durante 4 segundos.',
                'Cierra la fosa izquierda con los dedos anular y meñique. Ambas cerradas.',
                'Mantén 2 segundos, suelta la derecha y exhala por ella durante 4 segundos.',
                'Inhala por la derecha, cierra, mantén, exhala por la izquierda. Eso es un ciclo.',
                'Repite durante 5 minutos para sentir el efecto equilibrante.'
            ]
        },
        cta: {
            text: 'Encontrar mi equilibrio',
            subtext: 'Ejercicio guiado de 5 minutos'
        }
    },

    'labios-fruncidos': {
        slug: 'respiracion-labios-fruncidos',
        seo: {
            title: 'Respiración con Labios Fruncidos para Falta de Aire por Ansiedad | BreathCalm',
            description: 'Técnica de labios fruncidos para aliviar la sensación de ahogo y falta de aire durante la ansiedad. Simple, efectiva e inmediata.',
            h1: 'Técnica de Labios Fruncidos: Alivio Cuando Sientes que te Ahogas'
        },
        content: {
            intro: 'Esa sensación de que no puedes respirar, de que el aire no entra, es una de las peores de la ansiedad. Pero aquí está la verdad: el aire SÍ está entrando. Tu cuerpo te engaña. Esta técnica simple te ayuda a sentir que el aire *sí* está llegando, porque controla la velocidad de la salida.',
            howItWorks: 'Al fruncir los labios como si fueras a dar un beso o soplar una vela, creas una pequeña resistencia al aire que sale. Esto hace que la exhalación sea más lenta y controlada, lo que genera una ligera presión positiva en tus vías respiratorias. Resultado: sientes que respiras mejor porque *controlas* el flujo.',
            benefits: [
                'Alivia la sensación de ahogo casi inmediatamente',
                'Te da control sobre algo que parecía incontrolable',
                'Muy fácil de aprender y practicar en cualquier lugar',
                'Especialmente útil para hiperventilación',
                'Ralentiza automáticamente la respiración sin esfuerzo'
            ],
            whenToUse: 'Cuando sientes que te falta el aire, durante ataques de ansiedad con hiperventilación, si tienes sensación de nudo en la garganta, o cuando has estado respirando rápido sin darte cuenta.',
            steps: [
                'Siéntate erguido/a. La postura abierta facilita la entrada de aire.',
                'Inhala lentamente por la nariz durante 2 segundos. No fuerces.',
                'Frunce los labios como si fueras a soplar una vela o dar un beso.',
                'Exhala muy lentamente a través de los labios fruncidos durante 4 segundos.',
                'Imagina que estás soplando una vela sin apagarla, solo moviendo la llama.',
                'Repite durante 5-10 minutos, o hasta que sientas alivio.'
            ]
        },
        cta: {
            text: 'Respirar sin agobio',
            subtext: 'Ejercicio guiado de 3 minutos'
        }
    }
};

// Helper para encontrar técnica por slug
export const getTechniqueBySlug = (slug: string): string | undefined => {
    return Object.keys(TECHNIQUE_PAGES).find(
        key => TECHNIQUE_PAGES[key].slug === slug
    );
};
