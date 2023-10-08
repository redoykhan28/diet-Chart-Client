// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD6PT5jZQiN79bsFsuZpMwjhqVgXgX_NQQ",
    authDomain: "diet-chart-5f010.firebaseapp.com",
    projectId: "diet-chart-5f010",
    storageBucket: "diet-chart-5f010.appspot.com",
    messagingSenderId: "59405587701",
    appId: "1:59405587701:web:ba88442d38ff92168721bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app