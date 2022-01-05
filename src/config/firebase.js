import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBIdGCmRZTPN05qdeAxAHT73uR2JFF6n3c",
    authDomain: "reactfirebase-db572.firebaseapp.com",
    projectId: "reactfirebase-db572",
    storageBucket: "reactfirebase-db572.appspot.com",
    messagingSenderId: "500208914560",
    appId: "1:500208914560:web:a32dda9b87a976b4915665"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);