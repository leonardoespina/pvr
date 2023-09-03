<template>
  <div class="q-pa-md">
    <q-card class="my-card" flat bordered>
      <div class="text-h6 q-mb-xs">Datos de la Unidad</div>
      <q-separator />
      <q-separator />
      <q-form>
        <q-card-actions>
          <q-input
            v-model="model.unidad"
            readonly="readonly"
            type="text"
            label="Unidad"
            style="width: 100px" />

          <q-input
            v-model="model.placa"
            readonly="readonly"
            type="text"
            label="Placa"
            style="width: 100px" />

          <q-input
            type="text"
            label="Tipo de Unidad"
            v-model="model.tipoUnidad"
            readonly="readonly" />
          <q-input
            v-model="model.marca"
            readonly="readonly"
            type="text"
            label="Marca"
        /></q-card-actions>
        <q-separator />
      </q-form>
    </q-card>
  </div>
</template>
<script>
import { ref } from "vue";

import { useStore } from "vuex";
export default {
  setup() {
    const model = ref([]);
    const store = useStore();

    Object.assign(model.value, store.getters.isGetter("isUnidad"));

    return {
      model,
    };
  },
};
</script>
<style>
.contenido {
  padding: 1% 1px 12px 25px;
  width: 200px;
}
</style>
