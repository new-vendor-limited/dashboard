import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyBrPh3wLwqzDJwO0ub1mn2K3sYAiJmyB6k",
  authDomain: "new-vendor-com.firebaseapp.com",
  databaseURL: "https://new-vendor-com.firebaseio.com",
  projectId: "new-vendor-com",
  storageBucket: "new-vendor-com.appspot.com",
  messagingSenderId: "744326171069",
  appId: "1:744326171069:web:1d53c949f4c53105"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 