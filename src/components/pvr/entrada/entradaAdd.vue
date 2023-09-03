<template>
  <div class="q-pa-md">
    <q-form class="q-gutter-md" @submit.prevent="guardar">
      <q-card>
        <q-card-section class="bg-green text-white">
          <div class="text-h6">
            Registro de Planilla de Prevencion Vehicular
          </div>

          <q-btn color="green" :icon="'arrow_back'" size="sm" to="/entrada">
            <q-tooltip> Atras</q-tooltip></q-btn
          >
        </q-card-section>
      </q-card>
      <q-separator />
      <q-card>
        <div class="text-subtitle2">
          <b>DATOS DE LA SALIDA </b>
        </div>

        <q-card><Unidades /></q-card>

        <q-card><Choferes /></q-card>
        <q-card><Rutas /></q-card>
        <q-card><Ayudantes /></q-card>

        <q-card
          ><Salidas
            :modelVariables="'isVariableSalida'"
            :modelCondicion="'isVariableCondicionSalida'"
        /></q-card>
        <q-card><Verificadores /></q-card>
        <q-card
          ><Entradas
            :modelVariables="'isVariableEntrada'"
            :modelCondicion="'isVariableCondicionEntrada'"
            :validacion="true"
        /></q-card>

        <q-separator />
      </q-card>

      <q-separator />
      <q-card-actions vertical align="center">
        <q-btn
          size="sm"
          color="red"
          type="submit"
          :label="label"
          :disable="buttonDisabled"
        />
      </q-card-actions>
    </q-form>
  </div>
</template>

<script>
import { ref } from "vue";

import Salidas from "../consultas/salidas.vue";
import Entradas from "../salida/salida.vue";
import Unidades from "../consultas/unidades.vue";
import Verificadores from "../verificadores/index.vue";
import Choferes from "../consultas/choferes.vue";
import Ayudantes from "../consultas/ayudantes.vue";
import Rutas from "../consultas/rutas.vue";
import { useStore } from "vuex";
import { Salida } from "../../../helper/vars";
import { useQuasar } from "quasar";
import crud from "../../../composables/index";

export default {
  components: {
    Unidades,
    Choferes,
    Ayudantes,
    Salidas,
    Entradas,
    Rutas,
    Verificadores,
  },

  setup() {
    const store = useStore(),
      $q = useQuasar(),
      isDisabled = ref(false),
      label = ref("Guardar"),
      // status = ref(false),
      buttonDisabled = ref(false),
      model = ref([]),
      //model = ref([]),
      myAction = {};

    if (store.getters.isAction.data) {
      Object.assign(myAction, store.getters.isAction);
      let objs = { ...store.getters.isAction.data };
      let { pvr } = objs;
      pvr = JSON.parse(pvr);
      if (label.value != "Eliminar") {
        buttonDisabled.value = myAction.disabled;
        label.value = myAction.label;
      }
      isDisabled.value = myAction.disabled;

      Object.entries(pvr).forEach(([val, valor]) => {
        store.dispatch("varMutuacion", { val, valor });
      });

      console.log(store.getters.isData());
    }

    const guardar = () => {
      let pvrCondicion = JSON.parse(store.getters.isData().pvr),
        horaSalida = store.getters.isGetter("isVariableSalida").hora,
        horaEntrada = store.getters.isGetter("isVariableEntrada").hora,
        fechaSalida = Date.now(
          store.getters.isGetter("isVariableSalida").fecha
        ),
        fechaEntrada = Date.now(
          store.getters.isGetter("isVariableEntrada").fecha
        ),
        kmEntrada = parseInt(
          store.getters.isGetter("isVariableEntrada").kilometraje
        ),
        kmSalida = parseInt(
          store.getters.isGetter("isVariableSalida").kilometraje
        );

      let kilometraje = kmEntrada > kmSalida;

      let val = "status",
        valor = false;

      store.dispatch("varMutuacion", { val, valor });

      console.log(pvrCondicion.isVariableCondicionEntrada.length);
      const { confirm } = crud();

      if (pvrCondicion.isVariableCondicionEntrada.length === 0) {
        $q.notify({
          type: "negative",
          message: "Falto el Ingrese la Condicion de la Salida.",
        });
      } else if (fechaEntrada >= fechaSalida && horaEntrada <= horaSalida) {
        $q.notify({
          type: "negative",
          message:
            "La Fecha de la Entrada o La hora Entrada tiene que ser Mayor que la Salida .",
        });
      } else if (kilometraje === false) {
        $q.notify({
          type: "negative",
          message:
            "El kilometraje de Entrada Tiene que ser Mayor que el KM salida .",
        });
      } else {
        $q.notify(confirm(store.getters.isData(), myAction, Salida));
      }
    };

    return {
      guardar,
      label,
      buttonDisabled,
      model,
    };
  },
};
</script>
