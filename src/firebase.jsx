import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBEWEZYE8h3aVuUQeCBFZsvQ954iAj5HMQ",
  authDomain: "vastrabyaniketsapehia.firebaseapp.com",
  projectId: "vastrabyaniketsapehia",
  storageBucket: "vastrabyaniketsapehia.firebasestorage.app",
  messagingSenderId: "46541579097",
  appId: "1:46541579097:web:cb46dec129652a513a2248"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export { auth };