// main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // router anda
import "./assets/main.css";

// === FONT AWESOME ===
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

// Masukkan ikon yang nak guna
library.add(faDownload);

// Create app
const app = createApp(App);

// Register router + fontawesome global component
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
