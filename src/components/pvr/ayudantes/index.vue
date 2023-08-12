<template>
  <div class="q-gutter-md row items-start">
    <q-input
      v-model="model.cedula"
      readonly="readonly"
      type="text"
      label="Cedula"
      style="width: 250px"
    />
    <q-input
      v-model="model.nombreApellido"
      readonly="readonly"
      type="text"
      label="Nombre"
      style="width: 250px"
    />
    <q-input
      v-model="model.telefono"
      readonly="readonly"
      type="text"
      label="Telefono"
      style="width: 250px"
    >
      <template v-slot:after>
        <q-btn
          size="15px"
          round
          dense
          flat
          color="red"
          icon="playlist_add"
          @click="agregar"
        />
        <q-tooltip anchor="bottom middle" self="top middle" :offset="[10, 10]">
          Agregar Acompañante o Ayudantes (<q-icon name="add" />)
        </q-tooltip>
      </template>
    </q-input>
  </div>
  <Tabla :rows="rows" :col="col" :variable="variable" />
  <q-stepper-navigation>
    <q-btn @click="continuar(4)" color="primary" label="Continue" />
    <q-btn
      flat
      @click="continuar(2)"
      color="primary"
      label="Back"
      class="q-ml-sm"
    />
  </q-stepper-navigation>
</template>
<script>
import { loadList } from "../../../helper/list";
import { ref } from "vue";

import Tabla from "../../pvr/ayudantes/tables.vue";
import { column } from "../../pvr/ayudantes/column";
import { useStore } from "vuex";
export default {
  components: {
    Tabla,
  },

  setup() {
    const stringOptions = ref([]),
      store = useStore(),
      col = ref(column()),
      rows = ref(store.getters.isListAyudante),
      variable = "isListAyudante",
      model = ref([]);

    loadList("/api/ayudantes/All", "POST").then(
      (datos) =>
        (stringOptions.value = datos.data.map(function (ele) {
          return {
            value: ele.cedula,
            label: `${ele.cedula}`,
          };
        }))
    );
    const options = ref(stringOptions.value);
    const continuar = (v) => {
      let variable = { val: "isStep", valor: v };
      store.dispatch("varMutuacion", variable);
    };

    const showChannel = (val) => {
      let { value } = val.cedula;

      loadList(`/api/ayudantesCedula/${value}`, "GET").then(
        (datos) => (model.value = datos.data[0])
      );
    };

    const agregar = () => {
      rows.value.push(model.value);
      let variable = { val: "isListAyudante", valor: rows.value };
      store.dispatch("varMutuacion", variable);
    };

    return {
      filterFn(val, update, abort) {
        update(() => {
          const needle = val.toLowerCase();
          options.value = stringOptions.value.filter(
            (v) => v.label.indexOf(needle) > -1
          );
        });
      },

      options,
      model,
      continuar,
      showChannel,
      col,
      rows,
      agregar,
      variable,
    };
  },
};
</script>
