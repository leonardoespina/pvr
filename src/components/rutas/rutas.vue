<template>
  <div class="q-pa-md">
    <q-card class="my-card" flat bordered>
      <q-card-section class="bg-green text-white">
        <q-btn color="green" :icon="'arrow_back'" size="sm" to="/rutas">
          <q-tooltip> Atras</q-tooltip></q-btn
        >Rutas
      </q-card-section>
      <q-form ref="myForm" @submit.prevent="action">
        <q-card-actions>
          <div class="row">
            <div class="contenido">
              <q-input
                type="text"
                label="Ruta"
                :disable="isDisabled"
                v-model="model.ruta"
                lazy-rules
                :rules="[required]"
                autogrow
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
                label="Codigo Ruta"
                :disable="isDisabled"
                v-model="model.codRuta"
                :rules="[(val) => search(val, '/api/rutas/', ruta), required]"
              >
                <!---       @update:model-value="verificar(requeridLetter(model.nombreCurso))"
                required-->
                <template v-slot:prepend>
                  <q-icon name="person_add" color="blue" />
                </template>
              </q-input>
            </div>
            <div class="contenido">
              <q-select
                v-model="model.idSupervisor"
                :options="supervisores"
                option-value="id"
                option-label="nombreApellido"
                :disable="isDisabled"
                emit-value
                map-options
                label="Supervisor de Rutas"
              />
            </div>
            <div class="contenido">
              <q-select
                v-model="model.idSector"
                :options="sectores"
                option-value="id"
                option-label="sector"
                :disable="isDisabled"
                emit-value
                map-options
                label="Sectores"
              />
            </div>
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
import { search, supervisores, loadList } from "../../helper/list";
//import { unidades } from "../../helper/variables";
import { required /*, contarObjeto*/ } from "../../helper/validation";
import crud from "../../composables/index";
import { rutas } from "../../helper/vars";
import { useQuasar } from "quasar";
import { useStore } from "vuex";
export default {
  setup() {
    const model = ref([]);
    const store = useStore();
    const myForm = ref(null);
    const myAction = {};
    const isDisabled = ref(false),
      sectores = ref([]),
      buttonDisabled = ref(false),
      $q = useQuasar(),
      // store = useStore(),
      label = ref("Guardar"),
      ruta = ref("");

    /****VARIABLE FIJA PARA EL BUSCADOR SEARCH* */

    loadList("/api/sectores/All", "POST").then(
      (datos) => (sectores.value = datos.data)
    );

    console.log("---------------->", store.getters.isAction.data);

    if (store.getters.isAction.data) {
      Object.assign(myAction, store.getters.isAction);

      console.log(myAction);

      model.value = myAction.data[0];
      label.value = myAction.label;
      ruta.value = myAction.data.codRuta;

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

      $q.notify(confirm(data, myAction, rutas));
    };

    return {
      supervisores,
      model,
      search,
      action,
      myForm,
      isDisabled,
      buttonDisabled,
      required,
      ruta,
      sectores,
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
