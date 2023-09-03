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
      style="width: 150px; padding-bottom: 32px"
      @update:model-value="showChannel"
      :rules="[required]"
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
      v-model="model.idSupervisor"
      type="text"
      readonly
      label="Supervisor"
      style="width: 150px"
    >
    </q-input>
    <q-input
      v-model="model.idSector"
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
import { ref, watchEffect } from "vue";

import { column } from "../../pvr/ayudantes/column";
import { useStore } from "vuex";
import { required /*, contarObjeto*/ } from "../../../helper/validation";
export default {
  components: {},

  setup() {
    const stringOptions = ref([]),
      store = useStore(),
      col = ref(column()),
      rows = ref([]),
      cedula = ref([]),
      telefono = ref(null),
      isDisable = ref(true),
      nombreApellido = ref(null),
      variable = "isListAyudante",
      model = ref([]);

    watchEffect(() => {
      //    let variable = { val: "isUnidad", valor: model.value };
      //store.dispatch("varMutuacion", variable);
      model.value = store.getters.isGetter("isRuta");
    });

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

    const showChannel = async (val) => {
      await loadList(`/api/rutas/${val.value}`, "GET").then((datos) => {
        Object.assign(model.value, datos.data[0]);

        /*   let variable = { isRuta: model.value };

        store.dispatch("varMutuacionArray", variable);*/

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
      required,
      variable,
      cedula,
      isDisable,
    };
  },
};
</script>
