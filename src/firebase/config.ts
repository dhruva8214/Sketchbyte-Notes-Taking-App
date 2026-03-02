import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBn9s_Q3O9XD_q4eMna9miWO7cZs4I-kDY",
    authDomain: "sketchbyte.firebaseapp.com",
    projectId: "sketchbyte",
    storageBucket: "sketchbyte.firebasestorage.app",
    messagingSenderId: "663653416003",
    appId: "1:663653416003:web:f3c2e42fb56471779528f6",
    measurementId: "G-HHHB3WG815"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
