import { createRouter, createWebHistory } from "vue-router";
/* eslint-disable */

import home from "../views/home";
import login from "../views/login";

/** inicio del router */
const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/unidades",
    name: "unidades",

    component: () => import("../components/unidades/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
