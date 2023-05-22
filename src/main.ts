import "./assets/main.css";

import { createApp } from "vue";
import { Quasar, Dialog } from "quasar";

import App from "./App.vue";
// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";
// Import Quasar css
import "quasar/src/css/index.sass";
import router from "./router";

createApp(App)
  .use(router)
  .use(Quasar, {
    plugins: { Dialog }, // import Quasar plugins and add here
  })
  .mount("#app");
