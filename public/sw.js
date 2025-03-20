self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('pwa-cache-v1').then((cache) => {
      return cache.addAll([
        '/index.html',
        '/src/assets/bg.jpg',
        '/src/assets/bg-2.jpg',
        '/src/assets/bg-3.jpg',
        '/src/assets/doc-1.png',
        '/src/assets/patient-1.png',
        '/src/assets/patient-2.png',
        '/src/assets/patient-3.png',
        '/src/assets/service-1.png',
        '/src/assets/service-2.png',
        '/src/assets/service-3.png',
        '/src/assets/hospital-icon.svg',
        '/assets/bg.jpg',
        '/assets/bg-2.jpg',
        '/assets/bg-3.jpg',
        '/assets/doc-1.png',
        '/assets/patient-1.png',
        '/assets/patient-2.png',
        '/assets/patient-3.png',
        '/assets/service-1.png',
        '/assets/service-2.png',
        '/assets/service-3.png',
        '/assets/hospital-icon.svg',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return (
        response ||
        fetch(event.request).then((networkResponse) => {
          return caches.open('pwa-cache').then((cache) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.open('pwa-cache').then((cache) => {
      return cache.match(event.request).then((response) => {
        const fetchPromise = fetch(event.request).then((networkResponse) => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
        return response || fetchPromise;
      });
    })
  );
});
