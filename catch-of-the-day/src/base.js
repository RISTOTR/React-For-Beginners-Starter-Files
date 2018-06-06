import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDRW_L0cgehPJt2gVTRXWkK1cgfhWg-W7U",
    authDomain: "catch-of-the-day-risto.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-risto.firebaseio.com",
    
});

const base = Rebase.createClass(firebaseApp.database());

//this is a named export
export { firebaseApp };

//this is a default export
export default base;