import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"
              
const firebaseConfig = {
  apiKey: "AIzaSyBiSLbEjNuLp1K3AvETupZxrhyilKWzEkY",
  authDomain: "hackathon-practice-34ca7.firebaseapp.com",
  databaseURL: "https://hackathon-practice-34ca7-default-rtdb.firebaseio.com",
  projectId: "hackathon-practice-34ca7",
  storageBucket: "hackathon-practice-34ca7.appspot.com",
  messagingSenderId: "167206234484",
  appId: "1:167206234484:web:f80310026cfed4841be421",
  measurementId: "G-SCPJBBRHFG"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getDatabase();
export default app;
