<template>
  <div class="q-gutter-md row items-start">
    <q-select
      filled
      v-model="model.codRuta"
      use-input
      hide-selected
      fill-input
      input-debounce="0"
      :options="options"
      @filter="filterFn"
      hint="Indique Codigo Ruta"
      style="width: 150px; padding-bottom: 32px"
      @update:model-value="showChannel"
    />
    <q-input
      v-model="model.ruta"
      type="text"
      label="Ruta"
      readonly
      style="width: 300px"
      autogrow
    />
    <q-input
      v-model="model.supervisor"
      type="text"
      readonly
      label="Supervisor"
      style="width: 150px"
    >
    </q-input>
    <q-input
      v-model="model.sectores"
      type="text"
      readonly
      label="Sector"
      style="width: 150px"
    >
    </q-input>
  </div>
</template>
<script>
import { loadList } from "../../../helper/list";
import { ref } from "vue";

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

    const options = ref(stringOptions.value);
    const continuar = (v) => {
      let variable = { val: "isStep", valor: v };
      store.dispatch("varMutuacion", variable);
    };

    const showChannel = async (val) => {
      await loadList(`/api/rutas/${val.value}`, "GET").then((datos) => {
        //  model.value = datos.data[0];
        //  Object.assign(model.value, datos.data[0]);
        // console.log(model.value.supervisore.nombreApellido);
        /*  objeto = datos.data.map(function (el) {
          console.log(el);
          return {
            ruta: el.ruta,
            nombre: el.nombreApellido,
            sectores:
          };
        });*/
        Object.assign(model.value, datos.data[0]);
        let variable = { val: "isRuta", valor: model.value };
        store.dispatch("varMutuacion", variable);
      });
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

      telefono,
      nombreApellido,
      showChannel,
      col,
      rows,

      variable,
      cedula,
    };
  },
};
</script>
