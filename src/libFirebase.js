import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyB0hnZuDfSfpxPj86H-drZRSCBz-bm0oAQ",
    authDomain: "entreletras-841ff.firebaseapp.com",
    databaseURL: "https://entreletras-841ff.firebaseio.com",
    projectId: "entreletras-841ff",
    storageBucket: "entreletras-841ff.appspot.com",
    messagingSenderId: "792002298661",
    appId: "1:792002298661:web:09bb399b36b44990"
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();