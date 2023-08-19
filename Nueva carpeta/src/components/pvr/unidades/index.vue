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
</template>
<script>
import { loadList } from "../../../helper/list";
import { ref, watchEffect } from "vue";
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

    watchEffect(() => {
      //    let variable = { val: "isUnidad", valor: model.value };
      //store.dispatch("varMutuacion", variable);
      model.value = store.getters.isGetter("isUnidad");
    });

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
    const showChannel = (v) => {
      loadList(`/api/vehiculo/AllId/${v.value}`, "POST").then(
        //   (datos) => (model.value = datos.data[0])
        (datos) => {
          //  model.value = datos.data[0];
          Object.assign(model.value, datos.data[0]);
          let variable = { val: "isUnidad", valor: model.value };
          store.dispatch("varMutuacion", variable);
        }
      );
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
    };
  },
};
</script>
