<template>
  <div class="q-pa-md">
    <q-stepper v-model="step" ref="stepper" color="primary" animated>
      <q-step
        :name="1"
        title="Datos de la Unidad"
        icon="settings"
        :done="step > 1"
      >
        <Unidades />
      </q-step>

      <q-step
        :name="2"
        title="Chofer,Acompañantes y Rutas"
        icon="create_new_folder"
        :done="step > 2"
      >
        <Choferes />
      </q-step>

      <q-step
        :name="3"
        title="Ayudantas o Pasajeros"
        icon="add_comment"
        :done="step > 3"
      >
        <Ayudantes />
      </q-step>
      <q-step :name="4" title="Ruta" icon="add_comment">
        <Rutas />
      </q-step>
    </q-stepper>
  </div>
</template>

<script>
import { ref, computed } from "vue";

import { useStore } from "vuex";
import Choferes from "../../components/pvr/choferes/index.vue";
import Unidades from "../../components/pvr/unidades/index.vue";
import Ayudantes from "../../components/pvr/ayudantes/index.vue";
import Rutas from "../../components/pvr/rutas/index.vue";

//import { useStore } from "vuex";

export default {
  components: {
    Choferes,
    Unidades,
    Ayudantes,
    Rutas,
  },

  setup() {
    const store = useStore(),
      step = computed(() => store.getters.isStep);

    console.log(store.getters.isStep);

    const guardar = () => {
      console.log(store.getters.isListAyudante);
    };

    return {
      step,
      guardar,
    };
  },
};
</script>
