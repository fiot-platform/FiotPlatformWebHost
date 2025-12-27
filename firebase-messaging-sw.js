importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

if (!(self.firebase && self.firebase.apps && self.firebase.apps.length)) {
  firebase.initializeApp({
    apiKey: "AIzaSyA0fDxlvBAfG6MDJxlTAtXEpB0UYHhWCOk",
    authDomain: "rax-fiotplatform.firebaseapp.com",
    projectId: "rax-fiotplatform",
    storageBucket: "rax-fiotplatform.appspot.com", // ✅ *.appspot.com
    messagingSenderId: "657177101784",
    appId: "1:657177101784:web:d3762ecd08df62fba21ead",
    measurementId: "G-MHXPZXHZSJ"
  });
}

const messaging = firebase.messaging();

if (messaging.onBackgroundMessage) {
  messaging.onBackgroundMessage((payload) => show(payload));
}

if (messaging.setBackgroundMessageHandler) {
  messaging.setBackgroundMessageHandler((payload) => show(payload));
}

function show(payload) {
  const notif = (payload && payload.notification) || {};
  const data = (payload && payload.data) || {};

  const title = notif.title || 'FIOT';
  const options = {
    body: notif.body || '',
    // 🔑 Use relative paths so it works under /<REPO_NAME>/ on GitHub Pages
    icon: './icons/Icon-192.png',
    badge: './icons/Icon-192.png',
    data // keep extra fields (e.g., route) for click handling
  };

  return self.registration.showNotification(title, options);

}

self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  const route = event.notification?.data?.route || '';
  // Build a relative URL so it respects base href/subpath
  const target = route ? `./#${route}` : './';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientsArr) => {
      // Focus an open tab if one exists
      for (const client of clientsArr) {
        if ('focus' in client) {
          // If you want to navigate existing tab: client.navigate(target)
          return client.focus();
        }
      }
      // Otherwise open a new one
      return clients.openWindow(target);
    })
  );
});
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
