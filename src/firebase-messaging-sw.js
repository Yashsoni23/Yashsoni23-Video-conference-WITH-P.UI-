importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyChBqVPNvHMmKcVQSq0QCM-2B7zif4YNho",
  authDomain: "videoconferenceweb.firebaseapp.com",
  projectId: "videoconferenceweb",
  storageBucket: "videoconferenceweb.appspot.com",
  messagingSenderId: "180064810254",
  appId: "1:180064810254:web:354b811f519160a8e7535f",
  measurementId: "G-H4XQ3F8J2B",
  databaseUrl: "https://videoconferenceweb-default-rtdb.firebaseio.com/",
};


firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

// Handle incoming messages while the app is not in focus (i.e in the background, hidden behind other tabs, or completely closed).
messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
