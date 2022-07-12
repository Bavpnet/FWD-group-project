import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyC_pKhlAgpq0UT-wcPffWQLumh-lxyE3oc",
  authDomain: "learn-b4ec9.firebaseapp.com",
  projectId: "learn-b4ec9",
  storageBucket: "learn-b4ec9.appspot.com",
  messagingSenderId: "21017718911",
  appId: "1:21017718911:web:3e38d1b3a5e98646038f4a",
  measurementId: "G-CJ3HPBFGM8"
};

export const app = initializeApp(firebaseConfig);
export const database =getFirestore(app);