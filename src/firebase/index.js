import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
  // apiKey: 'AIzaSyB2n0YqytrQOI-TMotoduah7myoLZq2Aew',
  // authDomain: 'green-park-flowers.firebaseapp.com',
  // projectId: 'green-park-flowers',
  // storageBucket: 'green-park-flowers.appspot.com',
  // messagingSenderId: '868827319525',
  // appId: '1:868827319525:web:f9851ffa22129f997a580c',
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_DTORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
}

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage()
const firestore = firebase.firestore()

export { storage, firestore, firebase as default }
