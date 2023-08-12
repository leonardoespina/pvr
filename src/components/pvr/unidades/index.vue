<template>
  <div class="q-gutter-md row items-start">
    <q-select
      filled
      v-model="model.unidad"
      use-input
      hide-selected
      fill-input
      input-debounce="0"
      :options="options"
      @filter="filterFn"
      hint="Indique Unidad"
      style="width: 250px; padding-bottom: 32px"
      @update:model-value="showChannel"
    />

    <q-input
      v-model="model.placa"
      readonly="readonly"
      type="text"
      label="Placa"
      style="width: 100px"
    />

    <q-input
      type="text"
      label="Tipo de Unidad"
      v-model="model.tipoUnidad"
      readonly="readonly"
    />
    <q-input
      v-model="model.marca"
      readonly="readonly"
      type="text"
      label="Marca"
    />
  </div>
  <q-stepper-navigation>
    <q-btn @click="continuar()" color="primary" label="Continue" />
  </q-stepper-navigation>
</template>
<script>
import { loadList } from "../../../helper/list";
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    /*  () => {
          done1 = true;
          step = 2;
        }*/

    const stringOptions = ref([]),
      store = useStore(),
      model = ref([]);

    loadList("/api/vehiculo/All", "POST").then(
      (datos) =>
        (stringOptions.value = datos.data.map(function (ele) {
          return {
            value: ele.id,
            label: `${ele.unidad}`,
          };
        }))
    );
    const options = ref(stringOptions.value);
    const showChannel = (val) => {
      loadList(`/api/vehiculo/AllId/${val.value}`, "POST").then(
        (datos) => (model.value = datos.data[0])
      );
    };

    const continuar = () => {
      //   done1 = true;

      let step = { val: "isStep", valor: 2 };

      store.dispatch("varMutuacion", step);
    };

    return {
      filterFn(val, update, abort) {
        if (val) {
          update(() => {
            const needle = val.toLowerCase();
            options.value = stringOptions.value.filter(
              (v) => v.label.indexOf(needle) > -1
            );
          });
        }
      },

      options,
      model,
      showChannel,
      continuar,
    };
  },
};
</script>
