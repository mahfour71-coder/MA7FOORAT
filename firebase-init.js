<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-database-compat.js"></script>

<script>
  const firebaseConfig = {
    apiKey: "AIzaSyCOoh1GVhGhA4g7M9ptprPRnTrszpSexmU",
    authDomain: "mahfoor-cnc-6b389.firebaseapp.com",
    databaseURL: "https://mahfoor-cnc-6b389-default-rtdb.firebaseio.com",
    projectId: "mahfoor-cnc-6b389",
    storageBucket: "mahfoor-cnc-6b389.firebasestorage.app",
    messagingSenderId: "422714394058",
    appId: "1:422714394058:web:d3dab2bf9f64b27cc5fb33"
  };

  firebase.initializeApp(firebaseConfig);
  window.db = firebase.database();

  console.log("%cFirebase متصل بنجاح يا وحش! ✅🔥", "color: #25D366; font-size: 18px; font-weight: bold;");
</script>

