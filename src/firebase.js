import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAXEbZLjbp2qrkGcj7oysUp0RP3e_nIMmM",
    authDomain: "afourathon-af27a.firebaseapp.com",
    projectId: "afourathon-af27a",
    storageBucket: "afourathon-af27a.appspot.com",
    messagingSenderId: "584183721042",
    appId: "1:584183721042:web:040479418314754db9838b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export default db;
export {auth};
