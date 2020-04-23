import firebase from 'firebase/app'  
import 'firebase/firestore'
import 'firebase/auth'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBjoNRP3HucRa_hRIY2NwggtvxUEijELuk",
    authDomain: "marioplan-51df4.firebaseapp.com",
    databaseURL: "https://marioplan-51df4.firebaseio.com",
    projectId: "marioplan-51df4",
    storageBucket: "marioplan-51df4.appspot.com",
    messagingSenderId: "321216514638",
    appId: "1:321216514638:web:c1cf3dd819c0a1ebca511f",
    measurementId: "G-6KRYK7Z5FH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase