
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCmw7FOoAz9UNFtNQZaiQQE71ByRxiKF1E",
  authDomain: "portofolio-b6e26.firebaseapp.com",
  projectId: "portofolio-b6e26",
  storageBucket: "portofolio-b6e26.appspot.com",
  messagingSenderId: "745708029468",
  appId: "1:745708029468:web:cb01b67248877a8690c1d9"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)