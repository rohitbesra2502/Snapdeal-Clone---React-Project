// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUJH6Lmc-Q0DokcS9cyJWFpDvmean0wPo",
  authDomain: "snapdeal-clone-e6ca2.firebaseapp.com",
  projectId: "snapdeal-clone-e6ca2",
  storageBucket: "snapdeal-clone-e6ca2.appspot.com",
  messagingSenderId: "89339993450",
  appId: "1:89339993450:web:ff2d56d7129735730a9913"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider};

export default app;