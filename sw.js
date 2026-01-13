// Service Worker para Cache e Performance
const CACHE_NAME = 'deterzin-v1';
const BASE_PATH = '/landing-page';

const urlsToCache = [
  BASE_PATH + '/',
  BASE_PATH + '/index.html',
  BASE_PATH + '/styles/main.css',
  BASE_PATH + '/assets/dtzsemfundo.png',
  BASE_PATH + '/assets/imagens/landing-page.png',
  BASE_PATH + '/assets/imagens/metricas.jpg',
  BASE_PATH + '/assets/imagens/dtzviews600x400.png'
];

// Instalar o Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .catch(err => console.log('Cache install error:', err))
  );
});

// Usar cache quando disponível
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
      .catch(err => console.log('Fetch error:', err))
  );
});

// Limpar cache antigo
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
