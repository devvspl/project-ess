// [firebase-messaging-sw.js]

// Import scripts needed for Firebase
importScripts('https://www.gstatic.com/firebasejs/9.6.11/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.11/firebase-messaging-compat.js');

// Initialize Firebase app in the service worker
firebase.initializeApp({
  apiKey: "AIzaSyAhHUMADuSLMOtmo6BQBMDyM8bQQFLOfuo",
  authDomain: "essios.firebaseapp.com",
  projectId: "essios",
  storageBucket: "essios.appspot.com",
  messagingSenderId: "381905364149",
  appId: '1:381905364149:android:6add0b06fedf024f630afc',// optional
});

// Retrieve messaging instance
const messaging = firebase.messaging();
