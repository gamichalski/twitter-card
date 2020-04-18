import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import { registerCard } from "./utils/register.js";

Vue.use(VueRouter);
Vue.config.productionTip = false;

registerCard();

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/card",
      component: () =>
        import(/* webpackChunkName: "car" */ "./components/Card.vue")
    },
    {
      path: "/all",
      component: () =>
        import(/* webpackChunkName: "car" */ "./utils/Application.vue")
    },
    {
      path: "*",
      component: () =>
        import(/* webpackChunkName: "car" */ "./utils/MyCard.vue")
    }
  ]
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
