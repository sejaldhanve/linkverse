import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBkhndNU9MM2L1j4-OqDg92OZ8E4rt7yJA",
  authDomain: "ayritech-internship.firebaseapp.com",
  projectId: "ayritech-internship",
  storageBucket: "ayritech-internship.firebasestorage.app",
  messagingSenderId: "382254300025",
  appId: "1:382254300025:web:59c549214c569c4dfa0da8",
  measurementId: "G-7DPGS13N6P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app