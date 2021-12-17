import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VeeValidatePlugin from "./includes/plugins/validation";

import "./assets/tailwind.css";
import "./assets/main.css";

let app = createApp(App);

//use allow to register plugin
//store from vuex library, store stands for a container to contain the data

app.use(store);
app.use(router);

//create custom plugin for form validation
app.use(VeeValidatePlugin);

app.mount("#app");
