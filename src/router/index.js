import { createRouter, createWebHistory } from "vue-router";
/* eslint-disable */

import home from "../views/home";
import login from "../views/login";
import Found from "../components/found.vue";
//import top from "../components/header/top.vue";
let sessionStorage;
/** inicio del router */

function guardMyroute(to, from, next) {
  console.log(to.matched[0].name);
  sessionStorage = JSON.parse(localStorage.getItem("token"));
  const { meta } = to;
  //let { tipoUsuario } = sessionStorage;

  if (sessionStorage) {
    /*********AQUI PODRIA VALIDAR EL ACCESO CON LA API X SEGURIDAD ******/
    next();
  } else {
    next({ name: "login" });
  }
}

async function guardMyrouteLogin(to, from, next) {
  sessionStorage = JSON.parse(localStorage.getItem("token"));
  if (to.name === "login") {
    if (!sessionStorage) {
      next();
    } else {
      next({ name: "home" });
    }
  }
}

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
    beforeEnter: guardMyroute,

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
        path: "/salida",
        name: "salida",

        component: () => import("../components/pvr/salida/index.vue"),
      },
      {
        path: "/salidaAdd",
        name: "salidaAdd",

        component: () => import("../components/pvr/salida/salidaAdd.vue"),
      },
      {
        path: "/entrada",
        name: "entrada",

        component: () => import("../components/pvr/entrada/index.vue"),
      },
      {
        path: "/entradaAdd",
        name: "entradaAdd",

        component: () => import("../components/pvr/entrada/entradaAdd.vue"),
      },
      {
        path: "/consultaPvr",
        name: "consultaPvr",

        component: () => import("../components/pvr/entrada/consultaPvr.vue"),
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
        path: "/verificadores/",
        name: "verificadores",

        component: () => import("../components/verificadores/index.vue"),
      },

      {
        path: "/verificadoresAdd",
        name: "verificadoresAdd",

        component: () =>
          import("../components/verificadores/verificadores.vue"),
      },
      /////

      {
        path: "/supervisores/",
        name: "supervisores",

        component: () => import("../components/supervisores/index.vue"),
      },

      {
        path: "/supervisoresAdd",
        name: "supervisoresAdd",

        component: () => import("../components/supervisores/supervisores.vue"),
      },

      ////

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
      {
        path: "/usuarios/",
        name: "user",

        component: () => import("../components/usuarios/index.vue"),
      },

      {
        path: "/usuariosAdd",
        name: "userAdd",

        component: () => import("../components/usuarios/usuarios.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: login,
    beforeEnter: guardMyrouteLogin,
  },
  {
    path: "/:notFound",
    component: Found,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
