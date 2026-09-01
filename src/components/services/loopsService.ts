/**
 * Loops.so API Service
 * Handles email subscription via local proxy to avoid CORS
 */

// Use local proxy in development, Vercel function in production
const getSubscribeUrl = () => {
    // In development, we need to use a mock or the direct URL with a proxy
    // In production (Vercel), use the serverless function
    if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
        // For local dev without Vercel, we'll use the Loops form submission endpoint
        // which doesn't have CORS issues
        return 'https://app.loops.so/api/newsletter-form/cm5wlr6sx00c1mj2oicjyj81d';
    }
    return '/api/subscribe';
};

interface LoopsResponse {
    success?: boolean;
    id?: string;
    message?: string;
}

/**
 * Subscribe an email to Loops.so
 * @param email - The email address to subscribe
 * @returns Promise with success status and message
 */
export const subscribeToLoops = async (email: string): Promise<{ success: boolean; message: string }> => {
    try {
        const url = getSubscribeUrl();
        const isFormEndpoint = url.includes('newsletter-form');

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': isFormEndpoint ? 'application/x-www-form-urlencoded' : 'application/json',
            },
            body: isFormEndpoint
                ? new URLSearchParams({ email }).toString()
                : JSON.stringify({ email }),
        });

        const data: LoopsResponse = await response.json();

        if (response.ok) {
            return { success: true, message: '¡Suscrito correctamente!' };
        } else {
            // Handle specific error cases
            if (data.message?.includes('already') || data.message?.includes('exists')) {
                return { success: true, message: 'Ya estás suscrito' };
            }
            return { success: false, message: data.message || 'Error al suscribir' };
        }
    } catch (error) {
        console.error('Error subscribing to Loops:', error);
        return { success: false, message: 'Error de conexión' };
    }
};
