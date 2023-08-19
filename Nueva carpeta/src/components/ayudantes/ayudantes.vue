<template>
  <div class="q-pa-md">
    <q-card class="my-card" flat bordered>
      <q-card-section class="bg-green text-white">
        <q-btn color="green" :icon="'arrow_back'" size="sm" to="/ayudantes">
          <q-tooltip> Atras</q-tooltip></q-btn
        >Ayudantes
      </q-card-section>
      <q-form ref="myForm" @submit.prevent="action">
        <q-card-actions>
          <div class="row">
            <div class="contenido">
              <q-input
                type="text"
                label="Nombre y Apellido"
                :disable="isDisabled"
                v-model="model.nombreApellido"
                lazy-rules
                :rules="[required]"
              >
                <!---       @update:model-value="verificar(requeridLetter(model.nombreCurso))"
                required-->
                <template v-slot:prepend>
                  <q-icon name="card_membership" color="blue" />
                </template>
              </q-input>
            </div>

            <div class="contenido">
              <q-input
                type="number"
                label="Cedula"
                :disable="isDisabled"
                v-model="model.cedula"
                lazy-rules
                :rules="[
                  (val) => search(val, '/api/ayudantesCedula/', cedula),
                  required,
                ]"
              >
                <!---       @update:model-value="verificar(requeridLetter(model.nombreCurso))"
                required-->
                <template v-slot:prepend>
                  <q-icon name="person_add" color="blue" />
                </template>
              </q-input>
            </div>
            <div class="contenido">
              <q-input
                type="text"
                label="Telefono"
                :disable="isDisabled"
                v-model="model.telefono"
              >
                <!---       @update:model-value="verificar(requeridLetter(model.nombreCurso))"
                required-->
                <template v-slot:prepend>
                  <q-icon name="phone" color="blue" />
                </template>
              </q-input>
            </div>
            <div class="contenido"></div>
          </div>
        </q-card-actions>
        <q-separator />
        <!-- <Buttons :lbl="labelButon" @click="datos()"   @click="stepFunction()" /> -->
        <q-card-actions>
          <q-btn
            size="sm"
            color="red"
            :disable="buttonDisabled"
            type="submit"
            :label="label"
          />
        </q-card-actions>
      </q-form>
    </q-card>
  </div>
</template>
<script>
import { ref } from "vue";
import { search } from "../../helper/list";
//import { unidades } from "../../helper/variables";
import { required /*, contarObjeto*/ } from "../../helper/validation";
import crud from "../../composables/index";
import { ayudantes } from "../../helper/vars";
import { useQuasar } from "quasar";
import { useStore } from "vuex";
export default {
  setup() {
    const model = ref([]);
    const store = useStore();
    const myForm = ref(null);
    const myAction = {};
    const isDisabled = ref(false),
      buttonDisabled = ref(false),
      $q = useQuasar(),
      // store = useStore(),
      label = ref("Guardar"),
      cedula = ref("");

    /****VARIABLE FIJA PARA EL BUSCADOR SEARCH* */

    if (store.getters.isAction.data) {
      Object.assign(myAction, store.getters.isAction);

      model.value = myAction.data;
      label.value = myAction.label;
      cedula.value = myAction.data.cedula;

      if (label.value != "Eliminar") {
        buttonDisabled.value = myAction.disabled;
      }
      isDisabled.value = myAction.disabled;
    }
    const action = () => {
      console.log(store.getters.isAction);

      let data = {};
      Object.assign(data, model.value);
      const { confirm } = crud();

      //   action(data, myAction, unidades);

      $q.notify(confirm(data, myAction, ayudantes));
    };

    return {
      model,
      search,
      action,
      myForm,
      isDisabled,
      buttonDisabled,
      required,
      cedula,
      label,
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
