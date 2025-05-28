// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_hprD2NeXYcJeerTNmhf-VLMRgTZP9Qg",
  authDomain: "meu-site-react.firebaseapp.com",
  projectId: "meu-site-react",
  storageBucket: "meu-site-react.firebasestorage.app",
  messagingSenderId: "52392863073",
  appId: "1:52392863073:web:877ab698bde640d40c1120"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db };