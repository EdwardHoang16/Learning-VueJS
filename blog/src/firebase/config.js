import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB7xzmQtZJ9f7qgjx3qbVov55VM2CrsTpE",
    authDomain: "learning-firebase-5a002.firebaseapp.com",
    projectId: "learning-firebase-5a002",
    storageBucket: "learning-firebase-5a002.appspot.com",
    messagingSenderId: "438220654839",
    appId: "1:438220654839:web:f065b0ceea8da0efe2ebf2"
  };

//init firebase
firebase.initializeApp(firebaseConfig)

//init firestore service
const projectFirestore = firebase.firestore()

export { projectFirestore }