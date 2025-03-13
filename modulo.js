// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQKTplDnReHUM06b0N10M5rIf8MyfiLEA",
  authDomain: "rogeliomarquez-cd8d4.firebaseapp.com",
  projectId: "rogeliomarquez-cd8d4",
  storageBucket: "rogeliomarquez-cd8d4.firebasestorage.app",
  messagingSenderId: "586434066245",
  appId: "1:586434066245:web:beaf88e177648e843bb02c",
  measurementId: "G-YTFTJJ83N0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);