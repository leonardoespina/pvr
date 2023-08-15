<template>
  <div class="q-gutter-md row items-start">
    <q-input
      v-model="model.combustible"
      style="width: 100px"
      type="number"
      label="Combustible"
      @update:model-value="save(model, value)"
    />
    <q-input
      v-model="model.kilometraje"
      type="number"
      label="Kilometraje"
      @update:model-value="save(model, value)"
      style="width: 100px"
    >
    </q-input>
    <q-input
      v-model="model.fecha"
      @update:model-value="save(model, value)"
      type="date"
      hint="Fecha"
      style="width: 100px"
    />
    <q-input v-model="model.hora" type="time" hint="Hora" />
  </div>
  <TablaCondicion :valueCondicion="valueCondicion" />
</template>

<script>
import { ref } from "vue";
import TablaCondicion from "../../pvr/salida/tablaCondicion.vue";
export default {
  components: {
    TablaCondicion,
  },
  props: ["modelVariables", "modelCondicion"],

  setup(props) {
    const model = ref([]);

    let value = props.modelVariables;
    let valueCondicion = props.modelCondicion;

    const save = (model, value) => {
      console.log(model, value);
    };

    return {
      model,
      save,

      value,
      valueCondicion,
    };
  },
};
</script>
