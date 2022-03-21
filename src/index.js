import { createApp } from "vue";
import i18n from "./plugins/i18n";
import store from "./store/index";
import App from "./App.vue";

const app = createApp(App);

app.use(i18n);
app.use(store);
app.mount("#app");
