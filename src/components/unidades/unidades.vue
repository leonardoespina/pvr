<template>
  <div class="q-pa-md">
    <q-card class="my-card" flat bordered>
      <q-card-section class="bg-green text-white">
        <q-btn color="green" :icon="'arrow_back'" size="sm" to="/unidades">
          <q-tooltip> Atras</q-tooltip></q-btn
        >Vehiculos
      </q-card-section>
      <q-form ref="myForm" @submit.prevent="action">
        <q-card-actions>
          <div class="row">
            <div class="contenido">
              <q-input
                type="text"
                label="Unidad"
                v-model="model.unidad"
                lazy-rules
                :disable="isDisabled"
                :rules="[
                  (val) => search(val, '/api/vehiculoUnidad/', Unidad),
                  required,
                ]"
              >
                <!---    :rules="[(val) => myRule(val, 'leo') || 'Must be a valid email.']"     @update:model-value="verificar(requeridLetter(model.nombreCurso))"
                required-->
                <template v-slot:prepend>
                  <q-icon name="card_membership" color="blue" />
                </template>
              </q-input>
            </div>

            <div class="contenido">
              <q-input
                ref="cursoRef"
                type="text"
                label="PLACA"
                lazy-rules
                :disable="isDisabled"
                v-model="model.placa"
                :rules="[
                  (val) => search(val, '/api/vehiculoPlaca/', placa),
                  required,
                ]"
              >
                <!---       @update:model-value="verificar(requeridLetter(model.nombreCurso))"
                required-->
                <template v-slot:prepend>
                  <q-icon name="card_membership" color="blue" />
                </template>
              </q-input>
            </div>
            <div class="contenido">
              <q-select
                option-value="id"
                option-label="categorias"
                emit-value
                v-model="model.idCategoria"
                :options="categorias"
                map-options
                label="Categoria"
                lazy-rules
                :disable="isDisabled"
                :rules="[required]"
              />
            </div>
            <div class="contenido">
              <q-select
                option-value="id"
                option-label="modelo"
                v-model="model.idModelo"
                :options="modelos"
                emit-value
                map-options
                label="Modelo"
                lazy-rules
                :disable="isDisabled"
                :rules="[required]"
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
import { search, modelos, categorias } from "../../helper/list";
//import { unidades } from "../../helper/variables";
import { required /*, contarObjeto*/ } from "../../helper/validation";
import crud from "../../composables/index";
import { unidades } from "../../helper/vars";
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
      Unidad = ref(""),
      placa = ref("");

    /****VARIABLE FIJA PARA EL BUSCADOR SEARCH* */
    if (store.getters.isAction.data) {
      Object.assign(myAction, store.getters.isAction);

      model.value = myAction.data;
      label.value = myAction.label;
      placa.value = myAction.data.placa;
      Unidad.value = myAction.data.unidad;

      if (label.value != "Eliminar") {
        buttonDisabled.value = myAction.disabled;
      }
      isDisabled.value = myAction.disabled;
    }
    const action = () => {
      console.log(store.getters.isAction);

      let data = {};
      Object.assign(data, model.value, { idUser: "root" });
      const { confirm } = crud();

      //   action(data, myAction, unidades);

      $q.notify(confirm(data, myAction, unidades));
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
      placa,
      Unidad,
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
