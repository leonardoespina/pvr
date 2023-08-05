import { createRouter, createWebHistory } from "vue-router";
/* eslint-disable */

import home from "../views/home";
import login from "../views/login";
//import top from "../components/header/top.vue";

/** inicio del router */
const routes = [
  {
    path: "/",
    name: "home",
    component: home,

    children: [
      {
        path: "/unidades/",
        name: "unidades",

        component: () => import("../components/unidades/index.vue"),
      },

      {
        path: "/unidadesAdd",
        name: "unidadesAdd",

        component: () => import("../components/unidades/unidades.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
