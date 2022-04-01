import { createApp } from "vue";
import i18n from "./plugins/i18n";
import store from "./store/index";
import router from "./router"
import App from "./App.vue";

const app = createApp(App);

app.use(i18n);
app.use(store);
app.use(router);
app.mount("#app");
