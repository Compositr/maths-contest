const auth = firebase.auth();
const db = require('quick.db');
import firebase from 'firebase'
require('firebase/auth')

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCpwBCqyfiE8TzPUeyeOza-X3JebbTSzFg",
  authDomain: "multiplication-competition.firebaseapp.com",
  projectId: "multiplication-competition",
  storageBucket: "multiplication-competition.appspot.com",
  messagingSenderId: "152723253859",
  appId: "1:152723253859:web:188d0b91033b9b4c87a656",
  measurementId: "G-D9Z8BKQHE7",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var logonFailedAlert = document.getElementById('alert');

$(document).ready(function () {

  //$("#timerBar").hide(); would hide an element with the ID timerBar
});
auth.signInAnonymously()
  .then(() => {
    $("#success").removeClass("alert-hidden");
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    $("#alert").removeClass("alert-hidden");
    // ...
  });
