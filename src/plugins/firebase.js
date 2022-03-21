import firebase from "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyApDq2rfBZyQI8oo6gLSIy1R0fD_EEnvws",
  authDomain: "averroes-43c30.firebaseapp.com",
  databaseURL: "https://averroes-43c30-default-rtdb.firebaseio.com",
  projectId: "averroes-43c30",
  storageBucket: "averroes-43c30.appspot.com",
  messagingSenderId: "29194408892",
  appId: "1:29194408892:web:012a9a68d1168e7420d1b9",
  measurementId: "G-CT4JNR2RYC",
};

firebase.initializeApp(config);

export default firebase.database();