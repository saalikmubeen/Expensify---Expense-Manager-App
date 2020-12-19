import {firebase, googleAuthProvider} from "../firebase";

export function loginUser(){
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
}

export function saveUser(uid){
     return {
         type: "LOGIN",
         uid: uid
     }
}


export function logoutUser(){
    return () => {
        return firebase.auth().signOut();
    }
}


export function removeUser(){
    return {
        type: "LOGOUT"
    }
}