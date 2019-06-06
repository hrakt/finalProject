 import firebase from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth'
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBnPFfhCIC3BCXNU7pPXJed0eeW8mhPKyE",
    authDomain: "final-project-10df8.firebaseapp.com",
    databaseURL: "https://final-project-10df8.firebaseio.com",
    projectId: "final-project-10df8",
    storageBucket: "final-project-10df8.appspot.com",
    messagingSenderId: "439567868753",
    appId: "1:439567868753:web:38db5f8c440ae395"
  };


firebase.initializeApp(firebaseConfig);
firebase.firestore()


export default firebase;