<template>
  <div class="q-pa-md">
    <q-card class="my-card" flat bordered>
      <div class="text-h6 q-mb-xs">Datos de los Ayudantes o Acompañantes</div>
      <q-separator />
      <q-form>
        <q-card-actions>
          <div class="q-gutter-md row items-start">
            <div class="q-pa-md">
              <q-markup-table>
                <thead>
                  <tr>
                    <th class="text-left"><b>Nombre y Apellido</b></th>
                    <th class="text-right"><b>Cedula</b></th>
                    <th class="text-right"><b> Telefono</b></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="value in model" :key="value.id">
                    <td class="text-left">{{ value.nombreApellido }}</td>
                    <td class="text-right">{{ value.cedula }}</td>
                    <td class="text-right">{{ value.telefono }}</td>
                  </tr>
                </tbody>
              </q-markup-table>
            </div>
          </div>
        </q-card-actions>
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

    Object.assign(model.value, store.getters.isGetter("isListAyudante"));

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
