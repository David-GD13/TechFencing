// Privacy-respecting aggregate visitor counter using Cloudflare KV.
// Stores two numbers: total visits and unprotected visits (no tracker blocker).
// No cookies, no PII, no fingerprinting — just two counters.

export async function onRequestGet(context) {
  const kv = context.env.COUNTER_KV;
  if (!kv) {
    return Response.json({ total: 0, unprotected: 0 }, { status: 503 });
  }

  const [total, unprotected] = await Promise.all([
    kv.get('counter:total'),
    kv.get('counter:unprotected'),
  ]);

  return Response.json({
    total: parseInt(total || '0', 10),
    unprotected: parseInt(unprotected || '0', 10),
  }, {
    headers: { 'Cache-Control': 'public, max-age=60' },
  });
}

export async function onRequestPost(context) {
  const kv = context.env.COUNTER_KV;
  if (!kv) {
    return Response.json({ ok: false }, { status: 503 });
  }

  let body;
  try {
    body = await context.request.json();
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  // Increment total visits
  const currentTotal = parseInt(await kv.get('counter:total') || '0', 10);
  await kv.put('counter:total', String(currentTotal + 1));

  // Increment unprotected visits if flagged
  if (body.unprotected) {
    const currentUnprotected = parseInt(await kv.get('counter:unprotected') || '0', 10);
    await kv.put('counter:unprotected', String(currentUnprotected + 1));
  }

  return Response.json({ ok: true });
}
