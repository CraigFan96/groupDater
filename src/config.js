import Firebase from 'firebase';
let config = {
    apiKey: "AIzaSyBNHRe5ilm9TGHjPKE2k6kTStND4Zj_rWE",
    authDomain: "groupdating-9a0f4.firebaseapp.com",
    databaseURL: "https://groupdating-9a0f4.firebaseio.com",
    projectId: "groupdating-9a0f4",
    storageBucket: "groupdating-9a0f4.appspot.com",
    messagingSenderId: "351609977687",
    appId: "1:351609977687:web:c98bc698fb0d77d8bc1c12",
    measurementId: "G-LTCWGLWQ2L"
};
let app = Firebase.initializeApp(config);
export const db = app.database();
