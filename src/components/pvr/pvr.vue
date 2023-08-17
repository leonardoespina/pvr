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

      <Salidas
        :modelVariables="'isVariableSalida'"
        :modelCondicion="'isVariableCondicionSalida'"
      />

      "modelVariables", "modelCondicion"
    </q-card>
    <q-card>
      <div class="text-subtitle2">
        <b>Entrada</b>
        <q-btn size="15px" round dense flat color="black" icon="exit" />
      </div>

      <Salidas
        :modelVariables="'isVariableEntrada'"
        :modelCondicion="'isVariableCondicionEntrada'"
      />
    </q-card>
    <q-card-actions vertical align="center">
      <q-btn @click="guardar" color="primary" label="Guadar" class="q-ml-sm" />
    </q-card-actions>
  </div>
</template>

<script>
import { useStore } from "vuex";
import Salidas from "../../components/pvr/salida/index.vue";
import Choferes from "../../components/pvr/choferes/index.vue";
import Unidades from "../../components/pvr/unidades/index.vue";
import Ayudantes from "../../components/pvr/ayudantes/index.vue";
import Rutas from "../../components/pvr/rutas/index.vue";
import crud from "../../composables/index";
import { pvr } from "../../helper/vars";
import { useQuasar } from "quasar";

/*
// Alternativa 1: Pasar a JSON
variable = JSON.parse(JSON.stringify(variable))

// Alternativa 2: Crear una copia usando el operador spread
variable = { ...variable }

// Alternativa 3: Crear una copia usando Object.assign
variable = Object.assign({}, variable)
*/

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
      $q = useQuasar(),
      myAction = {};

    const guardar = async () => {
      let data = {};
      // obj = {};

      data = { ...store.getters.isData() };

      /* let { unidad } = data;

      data = {
        unidad,
        pvr: data,
        idUsuario: "root",
        correlativo: Date.now(),
      };*/

      console.log(data);

      const { confirm } = crud();

      //   action(data, myAction, unidades);

      $q.notify(confirm(data, myAction, pvr));

      //console.log(store.getters.isFuncion());
    };

    return {
      guardar,
    };
  },
};
</script>
