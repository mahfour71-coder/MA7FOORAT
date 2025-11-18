/* global firebase */
(function initializeFirebaseCompat() {
  if (typeof firebase === 'undefined') {
    console.error('Firebase SDK (compat version) is required before loading firebase-init.js');
    return;
  }

  const firebaseConfig = {
    apiKey: "AIzaSyCOoh1GVhGhA4g7M9ptprPRnTrszpSexmU",
    authDomain: "mahfoor-cnc-6b389.firebaseapp.com",
    projectId: "mahfoor-cnc-6b389",
    storageBucket: "mahfoor-cnc-6b389.firebasestorage.app",
    messagingSenderId: "422714394058",
    appId: "1:422714394058:web:d3dab2bf9f64b27cc5fb33",
    measurementId: "G-E29SJDG49J",
    databaseURL: "https://mahfoor-cnc-6b389-default-rtdb.firebaseio.com"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  window.db = firebase.database();
})();

console.log("%cFirebase متصل بنجاح! ✅", "color: #25D366; font-size: 16px; font-weight: bold;");

