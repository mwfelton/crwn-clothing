import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAVWVUz5tkOdpGKxZwTVMQSzznWkSpJw0I",
    authDomain: "crwn-db-56f8d.firebaseapp.com",
    projectId: "crwn-db-56f8d",
    storageBucket: "crwn-db-56f8d.appspot.com",
    messagingSenderId: "184900674136",
    appId: "1:184900674136:web:0bc2a7007dfcb4bb45202d"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'})
  export const SignInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;