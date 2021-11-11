import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store/store";
import { initializeApp } from "firebase/app";
import { VuesticPlugin } from "vuestic-ui";
import "vuestic-ui/dist/vuestic-ui.css";
import "@mdi/font/css/materialdesignicons.min.css";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).use(router).use(store).use(VuesticPlugin).mount("#app");
