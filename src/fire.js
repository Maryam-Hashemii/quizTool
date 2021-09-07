import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBf2XOiK-UfTaPyt506BIkxS556h_sy15k",
    authDomain: "assignment-tool-a57ea.firebaseapp.com",
    databaseURL: "https://assignment-tool-a57ea-default-rtdb.firebaseio.com",
    projectId: "assignment-tool-a57ea",
    storageBucket: "assignment-tool-a57ea.appspot.com",
    messagingSenderId: "1056414492402",
    appId: "1:1056414492402:web:67588f3f50fb5bc1f2926b"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;