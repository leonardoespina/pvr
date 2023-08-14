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
      style="width: 100px"
    />
    <q-input
      v-model="model.telefono"
      readonly="readonly"
      type="text"
      label="Telefono"
      style="width: 100px"
    />
  </div>
</template>
<script>
import { loadList } from "../../../helper/list";
import { ref, watchEffect } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const stringOptions = ref([]),
      store = useStore(),
      model = ref([]);

    watchEffect(() => {
      let variable = { val: "isChofer", valor: model.value };
      store.dispatch("varMutuacion", variable);
    });

    loadList("/api/choferes/All", "POST").then(
      (datos) =>
        (stringOptions.value = datos.data.map(function (ele) {
          return {
            value: ele.cedula,
            label: `${ele.cedula}`,
          };
        }))
    );
    const options = ref(stringOptions.value);

    const showChannel = (val) => {
      console.log(val);

      loadList(`/api/choferesCedula/${val.value}`, "GET").then(
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
      showChannel,
    };
  },
};
</script>
