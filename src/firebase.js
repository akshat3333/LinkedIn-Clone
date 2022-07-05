import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//I changed the imports 

const firebaseConfig = {
    apiKey: "AIzaSyAwbh_VwpLTkBg7GYUwc7PYN8J-7Gldkoo",
    authDomain: "linkedin-clone-f9674.firebaseapp.com",
    projectId: "linkedin-clone-f9674",
    storageBucket: "linkedin-clone-f9674.appspot.com",
    messagingSenderId: "859600478480",
    appId: "1:859600478480:web:975dae191403fbdb990595"
  };
 
  const firebaseApp = firebase.initializeApp(firebaseConfig); //This links everything (our app and fb)
  const db = firebaseApp.firestore(); //accessing the database
  const auth = firebase.auth(); //access to authentication

  export {db, auth};  //with this we can send these variables outside this file