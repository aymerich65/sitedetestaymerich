// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import { 
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut
} from 'firebase/auth'
import {
  getFirestore,
  collection,
  addDoc
} from 'firebase/firestore'





// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIA2QN3E9Z69M6poaKMXYdMW4W2nAtl-I",
  authDomain: "monprojettestfirebase.firebaseapp.com",
  projectId: "monprojettestfirebase",
  storageBucket: "monprojettestfirebase.appspot.com",
  messagingSenderId: "96785381642",
  appId: "1:96785381642:web:21040cd2bbf71d449d62f3"
};


const logIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (err) {
    console.error(err)
  }
}

const registerUser = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const user = res.user
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      authProvider: "local",
      email,
    })
  } catch (err) {
    console.error(err)
  }
}

const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email)
    alert("Mail de réinitialisation envoyé !")
  } catch (err) {
    console.error(err)
  }
}


const logOut = () => {
	signOut(auth)
}


export {auth,db,logIn,registerUser, resetPassword, logOut}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)