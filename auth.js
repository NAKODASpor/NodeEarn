// Import Firebase (Menggunakan CDN agar tidak perlu install npm)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// KONFIGURASI FIREBASE (Dapatkan ini dari Console Firebase kamu)
const firebaseConfig = {
  apiKey: "AIzaSyA...", 
  authDomain: "nodeearn.firebaseapp.com",
  projectId: "nodeearn",
  storageBucket: "nodeearn.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456:web:abcdef"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Logika Login Google
document.getElementById('googleBtn').addEventListener('click', () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      alert("Selamat datang, " + user.displayName);
      window.location.href = "/dashboard.html"; // Arahkan ke dashboard
    }).catch((error) => {
      console.error(error.message);
    });
});

// Logika Form Email (Simulasi)
document.getElementById('authForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Fitur email sedang dalam pengembangan. Silakan gunakan Google Login!");
});
