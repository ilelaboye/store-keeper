import Checkout from "../pages/dashboard/checkout";
import Dashboard from "../pages/dashboard/index";
import OrderDetails from "../pages/dashboard/order";
import Order from "../pages/dashboard/orders";
import Profile from "../pages/dashboard/profile";
import Products from "../pages/dashboard/products";

import Scan from "@/pages/dashboard/scan.vue";

export const dashboardRoutes = [
  {
    path: "/dashboard",
    component: Dashboard,
    name: "dashboard",
  },
  {
    path: "/scan",
    component: Scan,
    name: "scan",
  },
  {
    path: "products",
    component: Products,
    name: "products",
  },
  {
    path: "order/:order",
    name: "order-details",
    component: OrderDetails,
  },
  {
    path: "order",
    name: "orders",
    component: Order,
  },
  {
    path: "profile",
    component: Profile,
    name: "profile",
  },
  {
    path: "checkout",
    component: Checkout,
    name: "checkout",
  },
];
