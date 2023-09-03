<template>
  <div class="q-pa-md">
    <q-card class="my-card" flat bordered>
      <div class="text-h6 q-mb-xs">Datos del Chofer</div>
      <q-separator />
      <q-form>
        <q-card-actions>
          <div class="row">
            <div class="contenido">
              <q-input
                type="text"
                label="Nombre y Apellido"
                readonly
                v-model="model.nombreApellido"
              >
                <template v-slot:prepend>
                  <q-icon name="card_membership" color="blue" />
                </template>
              </q-input>
            </div>

            <div class="contenido">
              <q-input
                type="number"
                label="Cedula"
                readonly
                v-model="model.cedula"
              >
                <template v-slot:prepend>
                  <q-icon name="person_add" color="blue" />
                </template>
              </q-input>
            </div>
            <div class="contenido">
              <q-input
                type="text"
                label="Telefono"
                readonly
                v-model="model.telefono"
              >
                <template v-slot:prepend>
                  <q-icon name="phone" color="blue" />
                </template>
              </q-input>
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

    Object.assign(model.value, store.getters.isGetter("isVerificador"));

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
