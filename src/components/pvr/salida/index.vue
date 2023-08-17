<template>
  <div class="q-gutter-md row items-start">
    <q-input
      v-model="model.combustible"
      style="width: 100px"
      type="number"
      label="Combustible"
      @update:model-value="save"
    />
    <q-input
      v-model="model.kilometraje"
      type="number"
      label="Kilometraje"
      @update:model-value="save"
      style="width: 100px"
    >
    </q-input>
    <q-input
      v-model="model.fecha"
      @update:model-value="save"
      type="date"
      hint="Fecha"
      style="width: 100px"
    />
    <q-input
      v-model="model.hora"
      @update:model-value="save"
      type="time"
      hint="Hora"
    />
  </div>
  <TablaCondicion :variable="valueCondicion" />
</template>

<script>
import { ref } from "vue";
import TablaCondicion from "../../pvr/salida/tablaCondicion.vue";
import { useStore } from "vuex";
export default {
  components: {
    TablaCondicion,
  },
  props: ["modelVariables", "modelCondicion"],

  setup(props) {
    const model = ref([]),
      store = useStore();

    let value = props.modelVariables;
    let valueCondicion = props.modelCondicion;

    const save = () => {
      let obj = {};

      obj = { ...model.value };

      console.log(obj);

      let variable = { val: value, valor: obj };
      store.dispatch("varMutuacion", variable);
    };

    return {
      model,
      save,

      valueCondicion,
    };
  },
};
</script>
