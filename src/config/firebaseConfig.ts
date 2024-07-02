import admin from 'firebase-admin';
import serviceAccount from './src/config/backend-ebuddy-firebase-adminsdk-jxbl2-10626c6f37'; // Add your Firebase service account key file

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: '...'
});

const db = admin.firestore();

export { admin, db };

// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// // Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_PROJECT_ID.appspot.com",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID",
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// export {admin ,db}