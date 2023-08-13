<template>
  <div class="q-gutter-md row items-start">
    <q-select
      filled
      v-model="model"
      use-input
      hide-selected
      fill-input
      input-debounce="0"
      :options="options"
      @filter="filterFn"
      hint="Indique Codigo Ruta"
      style="width: 250px; padding-bottom: 32px"
      @update:model-value="showChannel"
    />
    <q-input
      v-model="model.ruta"
      type="text"
      label="Ruta"
      style="width: 250px"
      autogrow
    />
    <q-input
      v-model="model.supervisores"
      ref="telefono"
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
          @click="agregar(model)"
        />
        <q-tooltip anchor="bottom middle" self="top middle" :offset="[10, 10]">
          Agregar Acompañante o Ayudantes (<q-icon name="add" />)
        </q-tooltip>
      </template>
    </q-input>
  </div>

  <q-stepper-navigation>
    <q-btn @click="continuar(5)" color="primary" label="Continue" />
    <q-btn
      flat
      @click="continuar(3)"
      color="primary"
      label="Back"
      class="q-ml-sm"
    />
  </q-stepper-navigation>
</template>
<script>
import { loadList } from "../../../helper/list";
import { ref, watchEffect } from "vue";

import { column } from "../../pvr/ayudantes/column";
import { useStore } from "vuex";
export default {
  components: {},

  setup() {
    const stringOptions = ref([]),
      store = useStore(),
      col = ref(column()),
      rows = ref([]),
      cedula = ref([]),
      telefono = ref(null),
      nombreApellido = ref(null),
      variable = "isListAyudante",
      model = ref([]);

    loadList("/api/rutas/All", "POST").then(
      (datos) =>
        (stringOptions.value = datos.data.map(function (ele) {
          return {
            value: ele.id,
            label: `${ele.codRuta}`,
          };
        }))
    );

    watchEffect(() => {
      rows.value = store.getters.isListAyudante;
    });

    const options = ref(stringOptions.value);
    const continuar = (v) => {
      let variable = { val: "isStep", valor: v };
      store.dispatch("varMutuacion", variable);
    };

    const showChannel = async (val) => {
      await loadList(`/api/rutas/${val.value}`, "GET").then((datos) => {
        //  model.value = datos.data[0];
        Object.assign(model.value, datos.data[0]);

        console.log(datos.data[0]);
      });
    };

    const agregar = (mod) => {
      const resultado = rows.value.find((e) => {
        if (e.id === mod.id) {
          return e;
        }
      });
      if (resultado === undefined) {
        rows.value.push(mod);

        let variable = { val: "isListAyudante", valor: rows.value };
        store.dispatch("varMutuacion", variable);
        model.value = [];
      }
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
      telefono,
      nombreApellido,
      showChannel,
      col,
      rows,
      agregar,
      variable,
      cedula,
    };
  },
};
</script>
