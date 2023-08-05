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
          <div class="contenido">
            <q-input
              type="text"
              label="Unidad"
              v-model="model.unidad"
              lazy-rules
              error-message="Please use maximum 3 characters"
              :error="!isValid"
            >
              <!---       @update:model-value="verificar(requeridLetter(model.nombreCurso))"
                required-->
              <template v-slot:prepend>
                <q-icon name="card_membership" color="blue" />
              </template>
            </q-input>
          </div>
          <div class="row">
            <div class="contenido">
              <q-input
                ref="cursoRef"
                type="text"
                label="PLACA"
                lazy-rules
                v-model="model.placa"
                :rules="[search, required]"
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
                :rules="[required]"
              />
            </div>
          </div>
        </q-card-actions>
        <q-separator />
        <!-- <Buttons :lbl="labelButon" @click="datos()"   @click="stepFunction()" /> -->
        <q-card-actions>
          <q-btn size="sm" type="submit" />
        </q-card-actions>
      </q-form>
    </q-card>
  </div>
</template>
<script>
import { ref, computed } from "vue";
import { categorias, modelos, search } from "../../helper/list";
import { required, contarObjeto } from "../../helper/validation";
import crud from "../../composables/index";
import { useRoute } from "vue-router";
export default {
  setup() {
    const model = ref([]);
    const myForm = ref(null);
    const route = useRoute();
    let payLoad = {},
      data = {},
      options = {},
      method = null;
    /****Buscar Placa de la Unidad */
    //search(model.unidad, model.value);
    /**Variables a pasar a la api */

    let parametro = contarObjeto(route.params);

    const isValid = (val) => {
      console.log(val);
      if (model.value.unidad.length > 0) {
        return true;
      } else {
        return true;
      }
    };

    console.log(data);

    if (parametro > 0) {
      /****editar**** */
    } else {
      Object.assign(payLoad, {
        url: "/api/vehiculo/",
        urlRoute: "/unidades",
      });
      method = "POST";
    }
    const { create } = crud(); //***composable**** */

    const action = () => {
      Object.assign(data, model.value);
      Object.assign(options, { method, data });
      Object.assign(payLoad, { options });

      create(payLoad);
    };

    return {
      categorias,
      modelos,
      model,
      search,
      action,
      myForm,
      required,
      isValid,
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
