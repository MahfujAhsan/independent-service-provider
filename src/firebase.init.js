// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlKMyC92p8hQGfh91q5N-VlnspfhBk0ZU",
  authDomain: "jade-mills-real-estate-agent.firebaseapp.com",
  projectId: "jade-mills-real-estate-agent",
  storageBucket: "jade-mills-real-estate-agent.appspot.com",
  messagingSenderId: "1003299476229",
  appId: "1:1003299476229:web:ae3ff757d119a9ec2e9d6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;