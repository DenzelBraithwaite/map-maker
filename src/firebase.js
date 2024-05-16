// Add SDKs for Firebase products that you want to use https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4lDoGg94RCFhzkS_YcMP5BGxO57yNk_Q",
  authDomain: "kk-map-maker.firebaseapp.com",
  projectId: "kk-map-maker",
  storageBucket: "kk-map-maker.appspot.com",
  messagingSenderId: "1002280598181",
  appId: "1:1002280598181:web:876a8e3277054a0e532b4c"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
  
export default firebase;