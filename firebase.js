// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDFaT5GHMxz0r0rO90tyJTYd6QPt_ZbOGQ',
  authDomain: 'twitter-clone-sugat-2.firebaseapp.com',
  projectId: 'twitter-clone-sugat-2',
  storageBucket: 'twitter-clone-sugat-2.appspot.com',
  messagingSenderId: '320717282988',
  appId: '1:320717282988:web:d2325ae794ec9f4cae8909',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export default app
export { db, storage }
