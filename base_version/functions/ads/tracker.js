// Bait endpoint — blockers will block requests to /ads/tracker.js based on URL pattern.
// If the fetch succeeds, the visitor has no tracker blocker active.
export function onRequest() {
  return new Response('/* ok */', {
    headers: {
      'Content-Type': 'application/javascript',
      'Cache-Control': 'no-store',
    },
  });
}
