import Vue from "vue";
import Fragment from "vue-fragment";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import App from "./App.vue";
import i18n from "./lang/index";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import mixins from "./mixins";
import "./registerServiceWorker";
import "sweetalert2/dist/sweetalert2.min.css";
import lang from "./components/language";

const options = {
  confirmButtonColor: "#41b882",
  cancelButtonColor: "#ff7674",
};

Vue.component("v-select", vSelect);
Vue.use(VueSweetalert2, options);
Vue.mixin(mixins);

Vue.config.productionTip = false;
Vue.use(Fragment.Plugin);
Vue.component("language", lang);

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
