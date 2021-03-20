import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAi_dpQMvtK24EDhMrgez8c5kO8BWXEFm0",
    authDomain: "crwn-db-f93bb.firebaseapp.com",
    projectId: "crwn-db-f93bb",
    storageBucket: "crwn-db-f93bb.appspot.com",
    messagingSenderId: "364244565542",
    appId: "1:364244565542:web:199128a3669ca82e9ef0e7",
    measurementId: "G-5K51PQDWSW"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;