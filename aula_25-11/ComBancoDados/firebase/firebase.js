import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
 apiKey: "AIzaSyBf3tas2i4oD9e7Mut5Et7lCOvRe20Qees",
  authDomain: "aula-ddm-4cc0e.firebaseapp.com",
  projectId: "aula-ddm-4cc0e",
  storageBucket: "aula-ddm-4cc0e.firebasestorage.app",
  messagingSenderId: "159622477583",
  appId: "1:159622477583:web:6be28157c86f6e2cf4707a"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);