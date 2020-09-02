import firebase from 'firebase'
import { dumpToBuffer } from 'bser';

const firebaseConfig = {
    apiKey: "AIzaSyCHcnu3F5DCIjS8g_LZ1niHJVp96oQfoUo",
    authDomain: "facebook-clone-f4985.firebaseapp.com",
    databaseURL: "https://facebook-clone-f4985.firebaseio.com",
    projectId: "facebook-clone-f4985",
    storageBucket: "facebook-clone-f4985.appspot.com",
    messagingSenderId: "908678382257",
    appId: "1:908678382257:web:67f8a314bf05954d765890",
    measurementId: "G-85X4971YML"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth= firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db