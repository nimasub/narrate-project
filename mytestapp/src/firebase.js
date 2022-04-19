import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database";


const firebaseapp = initializeApp({
    apiKey: "AIzaSyBJgFEBvQr2Pippw4JJNlxVRAQl03Cp4Vs",
    authDomain: "auth-dev-30353.firebaseapp.com",
    databaseURL: "https://auth-dev-30353-default-rtdb.firebaseio.com/",
    projectId: "auth-dev-30353",
    storageBucket: "auth-dev-30353.appspot.com",
    messagingSenderId: "560412902530",
    appId: "1:560412902530:web:dc50f3d122f20820c5609b"
})

//const database = getDatabase(firebaseapp);


export default firebaseapp