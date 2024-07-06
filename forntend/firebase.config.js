// firebase.config.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBPQbSGqk0kQZUVJMAA8RNKXxLIzgSG-14",
  authDomain:   "my-literary-path.firebaseapp.com",
  databaseURL:"https://my-literary-path-default-rtdb.firebaseio.com/",
  projectId: "my-literary-path",
  storageBucket: "my-literary-path.appspot.com",
  messagingSenderId: "143082721035",
  appId: "1:143082721035:web:0945e78fb6c241d5101c0e",
  measurementId: "G-8XFLWHCDWS"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };  