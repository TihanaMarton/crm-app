import firebase from 'firebase'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDOyR-xWluzSjx04V0Ve-7WdVzBH4axjEc",
  authDomain: "crm-app-f834c.firebaseapp.com",
  databaseURL: "https://crm-app-f834c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "crm-app-f834c",
  storageBucket: "crm-app-f834c.appspot.com",
  messagingSenderId: "1078521499862",
  appId: "1:1078521499862:web:f20e02b826dc426b14b977"
};

firebase.initializeApp(firebaseConfig);
export const database = firebase.database();
export const storage = firebase.storage();
export const auth = firebase.auth();