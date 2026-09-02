// Cloudflare Pages Function — proxy a Loops.so para la captura de email (evita CORS).
// Necesita la variable de entorno LOOPS_API_KEY en Cloudflare Pages.

interface Env {
  LOOPS_API_KEY?: string;
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const cors = { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' };

  if (!env.LOOPS_API_KEY) {
    return new Response(JSON.stringify({ error: 'API key not configured' }), { status: 500, headers: cors });
  }

  let email = '';
  try {
    const body = (await request.json()) as { email?: string };
    email = (body.email || '').trim();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid body' }), { status: 400, headers: cors });
  }

  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return new Response(JSON.stringify({ error: 'Invalid email' }), { status: 400, headers: cors });
  }

  const res = await fetch('https://app.loops.so/api/v1/contacts/create', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.LOOPS_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, source: 'calmaen3minutos.com', subscribed: true }),
  });

  const data = await res.json().catch(() => ({}));
  return new Response(JSON.stringify(data), { status: res.status, headers: cors });
};

export const onRequestOptions: PagesFunction = async () =>
  new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
