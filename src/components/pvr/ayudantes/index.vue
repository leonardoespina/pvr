<template>
  <div class="q-gutter-md row items-start">
    <q-select
      filled
      v-model="model.cedula"
      use-input
      hide-selected
      fill-input
      input-debounce="0"
      :options="options"
      @filter="filterFn"
      hint="Indique Cedula"
      style="width: 250px; padding-bottom: 32px"
      @update:model-value="showChannel"
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
    />
  </div>
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
import { useStore } from "vuex";
export default {
  setup() {
    const stringOptions = ref([]),
      store = useStore(),
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
      loadList(`/api/ayudantesCedula/${val.value}`, "GET").then(
        (datos) => (model.value = datos.data[0])
      );
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
    };
  },
};
</script>
