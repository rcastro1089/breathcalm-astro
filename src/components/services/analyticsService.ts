/**
 * Google Analytics 4 Service
 * Handles event tracking for BreathCalm app
 */

// GA4 Measurement ID - Replace with your actual ID
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

// Check if gtag is available
const isGtagAvailable = (): boolean => {
    return typeof window !== 'undefined' && typeof (window as any).gtag === 'function';
};

/**
 * Track a custom event in GA4
 */
export const trackEvent = (
    eventName: string,
    params?: Record<string, string | number | boolean>
): void => {
    if (!isGtagAvailable()) {
        console.log('[Analytics] gtag not available, event not tracked:', eventName);
        return;
    }

    (window as any).gtag('event', eventName, params);
    console.log('[Analytics] Event tracked:', eventName, params);
};

/**
 * Track when user starts a breathing exercise
 */
export const trackExerciseStart = (techniqueId: string, techniqueName: string): void => {
    trackEvent('exercise_start', {
        technique_id: techniqueId,
        technique_name: techniqueName,
    });
};

/**
 * Track when user completes a breathing exercise
 */
export const trackExerciseComplete = (
    techniqueId: string,
    techniqueName: string,
    durationSeconds: number
): void => {
    trackEvent('exercise_complete', {
        technique_id: techniqueId,
        technique_name: techniqueName,
        duration_seconds: durationSeconds,
    });
};

/**
 * Track when user pauses an exercise
 */
export const trackExercisePause = (techniqueId: string, secondsRemaining: number): void => {
    trackEvent('exercise_pause', {
        technique_id: techniqueId,
        seconds_remaining: secondsRemaining,
    });
};

/**
 * Track when user cancels an exercise
 */
export const trackExerciseCancel = (techniqueId: string, secondsElapsed: number): void => {
    trackEvent('exercise_cancel', {
        technique_id: techniqueId,
        seconds_elapsed: secondsElapsed,
    });
};

/**
 * Track email subscription attempt
 */
export const trackEmailSubscription = (success: boolean): void => {
    trackEvent('email_subscription', {
        success: success,
    });
};

/**
 * Track page view (for SPA navigation)
 */
export const trackPageView = (pagePath: string, pageTitle: string): void => {
    if (!isGtagAvailable()) return;

    (window as any).gtag('config', GA_MEASUREMENT_ID, {
        page_path: pagePath,
        page_title: pageTitle,
    });
};

/**
 * Track technique page view (SEO pages)
 */
export const trackTechniquePageView = (techniqueId: string, techniqueName: string): void => {
    trackEvent('technique_page_view', {
        technique_id: techniqueId,
        technique_name: techniqueName,
    });
};
