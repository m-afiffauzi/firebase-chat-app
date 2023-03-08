// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB_2mNVix0r-NnZ0NzcZ-emsiOri9awDJM',
  authDomain: 'fir-chat-1780a.firebaseapp.com',
  projectId: 'fir-chat-1780a',
  storageBucket: 'fir-chat-1780a.appspot.com',
  messagingSenderId: '139159282512',
  appId: '1:139159282512:web:333652bf02ae76107e4255',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
