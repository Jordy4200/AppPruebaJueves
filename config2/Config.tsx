import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyAS2Zcrc3HP1bG5RQDoD1V2NUzFUkfE62Q",
  authDomain: "taller1-19fa8.firebaseapp.com",
  databaseURL: "https://taller1-19fa8-default-rtdb.firebaseio.com",
  projectId: "taller1-19fa8",
  storageBucket: "taller1-19fa8.appspot.com",
  messagingSenderId: "403480200104",
  appId: "1:403480200104:web:179957dc3e761ece16139d"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
