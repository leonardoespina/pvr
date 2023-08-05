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
                  (val) => search(val, '/api/vehiculoPlaca/', model.unidad),
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
            :disable="isDisabled"
            type="submit"
            label="Enviar"
          />
        </q-card-actions>
      </q-form>
    </q-card>
  </div>
</template>
<script>
import { ref } from "vue";
import { search, listas2 } from "../../helper/list";
import { unidades } from "../../helper/vars";
import { required, contarObjeto } from "../../helper/validation";
import crud from "../../composables/index";

import { useStore } from "vuex";
export default {
  setup() {
    const model = ref([]);
    const myForm = ref(null);

    const modelos = ref([]),
      isDisabled = ref(false),
      store = useStore(),
      placa = ref(""),
      categorias = ref([]);

    let payLoad = {},
      data = {},
      options = {},
      accion = {},
      //    valorComporar = {},
      method = null;
    /****Buscar Placa de la Unidad */
    //search(model.unidad, model.value);
    /**Variables a pasar a la api */

    /***CARGAR LISTA */
    listas2(unidades.modelo).then((res) => {
      modelos.value = res.data;
    });
    listas2(unidades.categoria).then((res) => {
      categorias.value = res.data;
    });
    /****END */

    console.log(store.getters.isAction);
    Object.assign(accion, store.getters.isAction);

    let parametro = contarObjeto(accion);

    if (parametro > 0) {
      /****editar**** */
      isDisabled.value = accion.isDisabled;
      let url = `${unidades.vehiculos.urlBase}${accion.id}`;

      payLoad = {
        url,
        options: {
          method: "GET",
        },
      };

      listas2(payLoad).then((res) => {
        Object.assign(model.value, res.data);
        placa.value = model.value.placa;
      });

      Object.assign(payLoad, {
        url,
        urlRoute: "/unidades",
      });
      method = "PUT";
    } else {
      /******MEJORAR CON EL HELPER DE VARIABBLES */

      Object.assign(payLoad, {
        url: "/api/vehiculo/",
        urlRoute: "/unidades",
      });
      method = "POST";

      /*let sessionStorage = JSON.parse(localStorage.getItem("token"));
      let { id } = sessionStorage;

      newObjeto.idUser = id;

      newObjeto.idEstado = 1;*/
    }
    const { create } = crud(); //***composable**** */

    const action = () => {
      Object.assign(data, model.value);
      Object.assign(options, { method, data });
      Object.assign(payLoad, { options });

      create(payLoad);
    };
    /****VARIABLE FIJA PARA EL BUSCADOR SEARCH* */

    return {
      categorias,
      modelos,
      model,
      search,
      action,
      myForm,
      isDisabled,
      required,
      placa,
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
