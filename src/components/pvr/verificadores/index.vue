<template>
  <div class="q-pa-md">
    <q-card class="my-card" flat bordered>
      <div class="text-h6 q-mb-xs">Datos del Verificador</div>
      <q-separator />
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
          hint="Indique Cedula"
          style="width: 250px; padding-bottom: 32px"
          @update:model-value="showChannel"
          :rules="[required]"
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
    </q-card>
  </div>
</template>
<script>
import { loadList } from "../../../helper/list";
import { required /*, contarObjeto*/ } from "../../../helper/validation";
import { ref, inject } from "vue";

import { useStore } from "vuex";
export default {
  setup() {
    const stringOptions = ref([]),
      store = useStore(),
      isDisable = ref(true),
      model = ref([]);

    if (store.getters.isAction.data) {
      model.value = store.getters.isGetter("isVerificador");
    }

    loadList("/api/verificadores/All", "POST").then(
      (datos) =>
        (stringOptions.value = datos.data.map(function (ele) {
          return {
            value: ele.cedula,
            label: `${ele.cedula}`,
          };
        }))
    );
    const options = ref(stringOptions.value);

    const showChannel = async (val) => {
      console.log(val);

      await loadList(`/api/verificadoresCedula/${val.value}`, "GET").then(
        (datos) => {
          /*  model.value = datos.data[0];
          let variable = { val: "isChofer", valor: model.value };
          store.dispatch("varMutuacion", variable);*/

          Object.assign(model.value, datos.data[0]);

          let variable = { val: "isVerificador", valor: model.value };
          store.dispatch("varMutuacion", variable);

          //   let variable = { isChofer: model.value };

          //store.dispatch("varMutuacionArray", variable);
        }
      );

      //  let variable = { val: "isChofer", valor: model.value };
      //store.dispatch("varMutuacion", variable);
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
      required,
      showChannel,
      isDisable,
    };
  },
};
</script>
