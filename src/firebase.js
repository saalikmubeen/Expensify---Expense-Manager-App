import * as firebase from "firebase";

var firebaseConfig = {
    // put your firebase config here
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

var googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, googleAuthProvider, database as default};