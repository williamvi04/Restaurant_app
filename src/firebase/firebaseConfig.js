// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSbe700flihh2pTbK_exmqojbLbM3Jfgw",
  authDomain: "aplicacion-restaurante-4578a.firebaseapp.com",
  projectId: "aplicacion-restaurante-4578a",
  storageBucket: "aplicacion-restaurante-4578a.appspot.com",
  messagingSenderId: "628361591870",
  appId: "1:628361591870:web:dc1cb7946955f4adbe656f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export default db;
