import { createApp } from "vue";
import App from "./App.vue";
import { Quasar, Notify, Loading } from "quasar";
import quasarUserOptions from "./quasar-user-options";
import axios from "axios";
import VueAxios from "vue-axios";
import router from "./router";
import createStrore from "./store/index";

///API
const urlApi = "http://localhost:3000/";
axios.defaults.baseURL = urlApi;

createApp(App)
  .use(VueAxios, axios)
  .use(createStrore)
  .use(router)
  .use(Quasar, { plugins: { Notify, Loading } }, quasarUserOptions)
  .mount("#app");
