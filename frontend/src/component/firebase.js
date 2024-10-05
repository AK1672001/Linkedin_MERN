
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBJg8FW0YocKRVbx23hDLRxfxBRWZHlexQ",
  authDomain: "linkedinclone-53044.firebaseapp.com",
  projectId: "linkedinclone-53044",
  storageBucket: "linkedinclone-53044.appspot.com",
  messagingSenderId: "656379877824",
  appId: "1:656379877824:web:4ee5b37c2aa4361d405025",
  measurementId: "G-78XB73M5XW"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export { storage };