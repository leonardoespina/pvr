<template>
  <div class="q-gutter-md row items-start">
    <q-input
      v-model="model.combustible"
      style="width: 100px"
      type="number"
      label="Combustible"
      @update:model-value="save(model, tittle)"
    />
    <q-input
      v-model="model.kilometraje"
      type="number"
      label="Kilometraje"
      @update:model-value="save(model, tittle)"
      style="width: 100px"
    >
    </q-input>
    <q-input
      v-model="model.fecha"
      @update:model-value="save(model, tittle)"
      type="date"
      hint="Fecha"
      style="width: 100px"
    />
    <q-input v-model="model.hora" type="time" hint="Hora" />
  </div>
  <TablaCondicion :variable="tittle" />
</template>

<script>
import { ref } from "vue";
import TablaCondicion from "../../pvr/salida/tablaCondicion.vue";
export default {
  components: {
    TablaCondicion,
  },

  setup() {
    const model = ref([]),
      tittle = "salida";

    const save = () => {};

    return {
      model,
      save,
      tittle,
    };
  },
};
</script>
