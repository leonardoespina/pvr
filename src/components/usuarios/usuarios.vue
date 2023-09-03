<template>
  <div class="q-pa-md">
    <q-card class="my-card" flat bordered>
      <q-card-section class="bg-green text-white">
        <q-btn color="green" :icon="'arrow_back'" size="sm" to="/usuarios">
          <q-tooltip> Atras</q-tooltip></q-btn
        >Usuarios
      </q-card-section>
      <q-form ref="myForm" @submit.prevent="action">
        <q-card-actions>
          <div class="row">
            <div class="contenido">
              <q-input
                type="text"
                label="Nombre "
                :disable="isDisabled"
                v-model="model.firstname"
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
                type="text"
                label="Apellido "
                :disable="isDisabled"
                v-model="model.lastname"
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
                  (val) => search(val, '/api/usersCedula/', cedula),
                  required,
                ]"
              >
                <template v-slot:prepend>
                  <q-icon name="person_add" color="blue" />
                </template>
              </q-input>
            </div>

            <div class="contenido">
              <q-input
                type="text"
                label="Login"
                :disable="isDisabled"
                v-model="model.email"
                lazy-rules
                :rules="[
                  (val) => search(val, '/api/usersUser/', user),
                  required,
                ]"
              >
                <template v-slot:prepend>
                  <q-icon name="person_add" color="blue" />
                </template>
              </q-input>
            </div>
            <div class="contenido">
              <q-input
                type="text"
                label="Password"
                :disable="isDisabled"
                v-model="model.password"
                lazy-rules
                :rules="[required]"
              >
                <template v-slot:prepend>
                  <q-icon name="person_add" color="blue" />
                </template>
              </q-input>
            </div>
            <div class="contenido">
              <q-input
                type="text"
                label="Repita Password"
                :disable="isDisabled"
                v-model="model.password1"
                lazy-rules
                :rules="[required]"
              >
                <template v-slot:prepend>
                  <q-icon name="person_add" color="blue" />
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
import { search, modelos, categorias } from "../../helper/list";
//import { unidades } from "../../helper/variables";
import { required /*, contarObjeto*/ } from "../../helper/validation";
import crud from "../../composables/index";
import { usuarios } from "../../helper/vars";
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
      cedula = ref(""),
      user = ref("");

    /****VARIABLE FIJA PARA EL BUSCADOR SEARCH* */

    if (store.getters.isAction.data) {
      Object.assign(myAction, store.getters.isAction);

      console.table(store.getters.isAction);

      model.value = myAction.data;
      label.value = myAction.label;
      cedula.value = myAction.data.cedula;
      user.value = myAction.data.email;

      if (label.value != "Eliminar") {
        buttonDisabled.value = myAction.disabled;
      }
      isDisabled.value = myAction.disabled;
    }
    const action = () => {
      let data = {};
      Object.assign(data, model.value, { idUsuario: "root" });
      const { confirm } = crud();

      //   action(data, myAction, unidades);

      $q.notify(confirm(data, myAction, usuarios));
    };

    return {
      categorias,
      modelos,
      model,
      search,
      action,
      myForm,
      isDisabled,
      buttonDisabled,
      required,
      cedula,
      user,
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
