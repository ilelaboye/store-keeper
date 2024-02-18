import Vue from "vue";
import Router from "vue-router";
import Index from "../pages/index.vue";
import DashboardLayout from "../components/DashboardLayout";
import PublicLayout from "../components/PublicLayout";
import { dashboardRoutes } from "./dashboard";
import { publicRoutes } from "./public";
import Login from "../pages/public/login";

Vue.use(Router);

const routes = [
  {
    path: "",
    component: Index,
    children: [
      {
        path: "/",
        component: Login,
        name: "home",
      },
      {
        path: "/",
        component: DashboardLayout,
        children: [...dashboardRoutes],
        meta: { AuthRequired: true },
      },
      {
        path: "/",
        component: PublicLayout,
        children: [...publicRoutes],
      },
    ],
  },
];

const router = new Router({
  mode: "history",
  routes,
});

export default router;
