<template>
  <div class="q-pa-md">
    <q-card class="my-card" flat bordered>
      <div class="text-h6 q-mb-xs">Condicion de la Salida</div>
      <q-separator />
      <q-form>
        <q-card-actions>
          <div class="q-gutter-md row items-start">
            <q-input
              v-model="model.combustible"
              style="width: 100px"
              type="number"
              label="Combustible"
              readonly
            />
            <q-input
              v-model="model.kilometraje"
              type="number"
              label="Kilometraje"
              style="width: 100px"
              readonly
            >
            </q-input>
            <q-input
              v-model="model.fecha"
              type="date"
              hint="Fecha"
              style="width: 100px"
              readonly
            />
            <q-input v-model="model.hora" type="time" hint="Hora" readonly />
          </div>
        </q-card-actions>

        <b>Condiciones de Salida</b>

        <div class="q-gutter-md row items-start">
          <div class="q-pa-md">
            <q-markup-table>
              <thead>
                <tr>
                  <th class="text-left"><b>Condicion</b></th>
                  <th class="text-right"><b>Tipo de Condicion</b></th>
                  <th class="text-right"><b> Observacion</b></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="value in model.condiciones" :key="value.id">
                  <td class="text-left">{{ value.condicion }}</td>
                  <td class="text-right">{{ value.listaTipoCondicion }}</td>
                  <td class="text-right">{{ value.listaObservacion }}</td>
                </tr>
              </tbody>
            </q-markup-table>
          </div>
        </div>

        <q-separator />
      </q-form>
    </q-card>
  </div>
</template>
<script>
import { ref } from "vue";

import { useStore } from "vuex";
export default {
  props: ["modelVariables", "modelCondicion"],

  setup(props) {
    const model = ref([]);
    const store = useStore();

    console.log(
      "-----------------------------",
      props.modelVariables,
      props.modelCondicion
    );

    let condiciones = store.getters.isGetter(props.modelCondicion);

    Object.assign(model.value, store.getters.isGetter(props.modelVariables), {
      condiciones,
    });

    console.table(model.value);

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
