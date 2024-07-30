import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSCT1rdpYXzlhJdn2gpkpTL8e9P5Hp6c0",
    authDomain: "bussinessmenuapp.firebaseapp.com",
    projectId: "bussinessmenuapp",
    storageBucket: "bussinessmenuapp.appspot.com",
    messagingSenderId: "679656766304",
    appId: "1:679656766304:web:a476b9fecb92efc9463c05"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
