<template>
  <!-- -->
  <q-header elevated class="bg-green text-white">
    <q-toolbar>
      <q-avatar rounded>
        <img src="fospuca.png" />
      </q-avatar>
      <q-btn dense flat round icon="menu" />Sistema de Registrol y Control de
      Entrada y Salida PVR <b> </b>
      <!-- @click="toggleLeftDrawer-->
      <q-toolbar-title> </q-toolbar-title>
      <!-- INICIO DEL POPUP-->
      <q-btn dense flat round icon="person">
        <q-menu>
          <q-list style="min-width: 100px"> </q-list>
        </q-menu>
      </q-btn>
      <!-- FIN DEL POPUP-->
    </q-toolbar>
  </q-header>
  <!-- -->
  <q-drawer
    v-model="leftDrawerOpen"
    side="left"
    overlay
    bordered
    :width="200"
    :breakpoint="400"
  >
    <q-scroll-area
      style="
        height: calc(100% - 50px);
        margin-top: 50px;
        border-right: 1px solid #ddd;
      "
    >
      <!--Inicio Componente de ItemMenu-->

      <q-list padding>
        <div>
          <!-- <MenuItem />-->
        </div>
      </q-list>
      <!--Fin del ItemMenu-->
    </q-scroll-area>
  </q-drawer>
</template>

<script>
import { ref, watchEffect } from "vue";
//import MenuItem from "../header/menuItem";
//import Loader from "../loader/index.vue";
import { useStore } from "vuex";
import { useQuasar } from "quasar";
import { messages } from "../../helper/validation.js";

export default {
  name: "Top",
  components: {
    //  Loader,
  },

  setup() {
    const store = useStore();
    const $q = useQuasar();
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);
    /**COMPROBAR CONEXION */
    store.dispatch("conecctionApiRest", {
      url: "/api/empresa/findAll",
      options: {
        method: "POST",
      },
    });
    /******FIN ********/

    watchEffect(() => {
      /****LOADER  Y  MESSAGES****/
      if (store.getters.isMsg !== null) {
        $q.notify(messages(store.getters.isMsg, "positive", "close", "normal"));
      }
      if (store.getters.isLoader === true) {
        $q.loading.show();
      } else {
        $q.loading.hide();
      }
      /***FIN****/
    });

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
};
</script>
