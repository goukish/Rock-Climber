//import * as firebase from 'firebase/app';
import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    apiKey: "AIzaSyD7EvSC1Ct_IivP_yBe3Cp95vF6GZAP5QA",
    authDomain: "fir-react-54ee8.firebaseapp.com",
    databaseURL: "https://fir-react-54ee8-default-rtdb.firebaseio.com",
    projectId: "fir-react-54ee8",
    storageBucket: "fir-react-54ee8.appspot.com",
    messagingSenderId: "332975905436",
    appId: "1:332975905436:web:742b97fbad78329f24eb59",
    measurementId: "G-WRQCGLPB74"
  };

  firebase.initializeApp(config);
  const database = firebase.database();

  
export default firebase;