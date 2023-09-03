<template>
  <div class="q-gutter-md row items-start">
    <q-input
      v-model="model.combustible"
      style="width: 100px"
      type="number"
      label="Combustible"
      @update:model-value="save"
      :rules="[required]"
    />
    <q-input
      v-model="model.kilometraje"
      type="number"
      label="Kilometraje"
      @update:model-value="save"
      style="width: 100px"
      :rules="[required]"
    >
    </q-input>
    <q-input
      v-model="model.fecha"
      @update:model-value="save"
      type="date"
      hint="Fecha"
      style="width: 100px"
      :rules="[required]"
    />
    <q-input
      v-model="model.hora"
      @update:model-value="save"
      type="time"
      hint="Hora"
      :rules="[required]"
    />
  </div>
  <TablaCondicion :variable="valueCondicion" />
</template>

<script>
import { ref, watchEffect } from "vue";
import TablaCondicion from "./tablaCondicion.vue";
import { useStore } from "vuex";
import { required /*, contarObjeto*/ } from "../../../helper/validation";
export default {
  components: {
    TablaCondicion,
  },
  props: ["modelVariables", "modelCondicion", "validacion"],

  setup(props) {
    const model = ref([]),
      store = useStore();

    let value = props.modelVariables,
      valueCondicion = props.modelCondicion,
      valida = props.validacion;

    watchEffect(() => {
      if (store.getters.isAction.data) {
        model.value = store.getters.isGetter(value);
      }
    });

    const save = () => {
      let obj = {};

      obj = { ...model.value };

      let variable = { val: value, valor: obj };
      store.dispatch("varMutuacion", variable);
    };

    return {
      model,
      save,
      required,
      valida,

      valueCondicion,
    };
  },
};
</script>
