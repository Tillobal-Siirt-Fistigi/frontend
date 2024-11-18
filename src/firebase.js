// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage'; // For Firebase Storage
import { getFirestore } from 'firebase/firestore'; // For Firestore

// Your Firebase config (can be found in your Firebase console under Project Settings)
const firebaseConfig = {
    apiKey: "AIzaSyAbTW_nnIqCrFTZeTgSssYhslm0QyRsdAo",
    authDomain: "cs308-store-app.firebaseapp.com",
    projectId: "cs308-store-app",
    storageBucket: "cs308-store-app.appspot.com",  // Corrected storage bucket URL
    messagingSenderId: "522086335341",
    appId: "1:522086335341:web:7617ac44fb697cac199064"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Storage using the correct functions
const storage = getStorage(app);
const firestore = getFirestore(app);

export { storage, firestore };
