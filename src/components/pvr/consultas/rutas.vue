<template>
  <div class="q-pa-md">
    <q-card class="my-card" flat bordered>
      <div class="text-h6 q-mb-xs">Datos de la Unidad</div>
      <q-separator />
      <q-separator />
      <q-form>
        <q-card-actions>
          <q-input
            v-model="model.ruta"
            readonly="readonly"
            type="text"
            label="Ruta"
            style="width: 250px" />

          <q-input
            v-model="model.codRuta"
            readonly="readonly"
            type="text"
            label="Codigo"
            style="width: 300px" />

          <q-input
            type="text"
            label="Supervisor"
            v-model="model.idSupervisor"
            readonly="readonly" />
          <q-input
            v-model="model.idSector"
            readonly="readonly"
            type="text"
            label="Sectores"
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

    Object.assign(model.value, store.getters.isGetter("isRuta"));

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
