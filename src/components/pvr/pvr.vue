<template>
  <div class="q-pa-md">
    <q-card>
      <q-card-section class="bg-green text-white">
        <div class="text-h6">Registro de Planilla de Prevencion Vehicular</div>
      </q-card-section>
    </q-card>
    <q-separator />
    <q-card>
      <div class="text-subtitle2">
        <b>UNIDAD</b>
        <q-btn
          size="15px"
          round
          dense
          flat
          color="black"
          icon="add_shopping_cart"
        />
      </div>

      <Unidades />
      <q-separator />
    </q-card>
    <q-card>
      <b> CHOFER</b>
      <q-btn size="15px" round dense flat color="black" icon="drive_eta" />

      <Choferes />
      <q-separator />
    </q-card>
    <q-card>
      <div class="text-subtitle2">
        <b>Acompañantes o Ayudantes</b>
        <q-btn size="15px" round dense flat color="black" icon="eject" />
      </div>

      <Ayudantes />
    </q-card>
    <q-separator />
    <q-card>
      <div class="text-subtitle2">
        <b>RUTAS</b>
        <q-btn size="15px" round dense flat color="black" icon="map" />
      </div>

      <Rutas />
    </q-card>
    <q-separator />
    <q-card>
      <div class="text-subtitle2">
        <b>SALIDA</b>
        <q-btn size="15px" round dense flat color="black" icon="exit" />
      </div>

      <Salidas />
    </q-card>
  </div>
</template>

<script>
import { ref, computed } from "vue";

import { useStore } from "vuex";
import Salidas from "../../components/pvr/salida/index.vue";
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
    Salidas,
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
