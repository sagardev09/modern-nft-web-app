
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC5eA5FxLWOH3icRTSmO8-wx7cW-txYi6o",
    authDomain: "nft-webapp-9b856.firebaseapp.com",
    projectId: "nft-webapp-9b856",
    storageBucket: "nft-webapp-9b856.appspot.com",
    messagingSenderId: "428070043051",
    appId: "1:428070043051:web:f4036d8c87e036749126ee"
};

// Initialize Firebase
export const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);