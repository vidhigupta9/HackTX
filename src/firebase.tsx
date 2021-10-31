import firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyDnUlAjJZnIR2xeizv_6FgbmvfVkvIRrXg",
  authDomain: "armuseum-ccd5f.firebaseapp.com",
  projectId: "armuseum-ccd5f",
  storageBucket: "armuseum-ccd5f.appspot.com",
  messagingSenderId: "290911660743",
  appId: "1:290911660743:web:178871caeda4085e962ce2",
  measurementId: "G-NDPK1B0FEC"
})

const firestore = firebase.firestore()

const auth = firebase.auth()

export { firestore, auth }