import firebase from 'firebase/app'  
import 'firebase/firestore'
import 'firebase/auto'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA9jU8YFZyhd2r812l2FVlD3UrHKktQOUY",
    authDomain: "mario-plan-26dd9.firebaseapp.com",
    databaseURL: "https://mario-plan-26dd9.firebaseio.com",
    projectId: "mario-plan-26dd9",
    storageBucket: "mario-plan-26dd9.appspot.com",
    messagingSenderId: "193809670150",
    appId: "1:193809670150:web:15e72e58601595b642e387",
    measurementId: "G-DL50QN2GS1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase