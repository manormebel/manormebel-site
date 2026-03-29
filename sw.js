const CACHE_NAME = 'manor-mebel-v20';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './product.html',
  './css/tailwind-local.css',
  './data.js',
  './cara-pemesanan.html',
  './pengiriman.html',
  './garansi.html',
  './tentang-kami.html',
  '/images/logo/logo.png',
  '/images/logo/text.png',
  '/images/logo-wa/wa-logo.png'
];

// Install Event: Cache core assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate Event: Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: Stale-While-Revalidate Strategy
self.addEventListener('fetch', (event) => {
  // Skip cross-origin requests (like analytics, cdns) for now, or cache them if needed.
  // We will cache CDN requests (runtime caching) to speed up subsequent loads.
  
  // CRITICAL FIX: Skip HTML navigation requests to prevent ERR_FAILED
  if (event.request.destination === 'document' || event.request.url.endsWith('.html')) {
    return;
  }
  
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // Return cached response if found
        if (cachedResponse) {
          // Update cache in background (Stale-while-revalidate)
          fetch(event.request).then((networkResponse) => {
             if(networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
                 caches.open(CACHE_NAME).then((cache) => {
                     cache.put(event.request, networkResponse.clone());
                 });
             }
          }).catch(() => {}); // Eat errors on background update
          
          return cachedResponse;
        }

        // Network fallback
        return fetch(event.request).then((response) => {
          // Check if valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Cache the new resource (Runtime Caching)
          // Clone it because the response is a stream and can only be consumed once
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });

          return response;
        });
      })
  );
});
