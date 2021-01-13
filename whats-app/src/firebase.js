// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDvSkAb-lqeXCXlwYhmTSb0inVvdyUkTyo",
    authDomain: "whats-app-5005a.firebaseapp.com",
    projectId: "whats-app-5005a",
    storageBucket: "whats-app-5005a.appspot.com",
    messagingSenderId: "593946828485",
    appId: "1:593946828485:web:483b2295332957757adaac",
    measurementId: "G-M1GGSF82TE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
