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
      {
        path: "/choferes/",
        name: "choferes",

        component: () => import("../components/choferes/index.vue"),
      },

      {
        path: "/choferesAdd",
        name: "choferesAdd",

        component: () => import("../components/choferes/choferes.vue"),
      },
      {
        path: "/ayudantes/",
        name: "ayudantes",

        component: () => import("../components/ayudantes/index.vue"),
      },

      {
        path: "/ayudanteAdd",
        name: "ayudanteAdd",

        component: () => import("../components/ayudantes/ayudantes.vue"),
      },
      {
        path: "/rutas/",
        name: "rutas",

        component: () => import("../components/rutas/index.vue"),
      },

      {
        path: "/rutasAdd",
        name: "rutasAdd",

        component: () => import("../components/rutas/rutas.vue"),
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
