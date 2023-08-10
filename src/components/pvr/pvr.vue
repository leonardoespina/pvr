<template>
  <div class="q-pa-md">
    <q-btn
      label="Reset"
      push
      color="white"
      text-color="primary"
      @click="reset"
      class="q-mb-md"
    />

    <q-stepper v-model="step" header-nav ref="stepper" color="primary" animated>
      <q-step
        :name="1"
        title="Datos de la Unidad"
        icon="settings"
        :done="done1"
      >
        <div class="q-gutter-md row items-start">
          <q-select
            v-model="model.unidad"
            style="width: 200px"
            :options="vehiculos"
            option-value="id"
            option-label="unidad"
            emit-value
            map-options
            label="Seleccion una Unidad"
            @update:model-value="showChannel(model.unidad)"
          />
          <q-input
            v-model="model.placa"
            readonly="readonly"
            type="text"
            label="Placa"
            style="width: 100px"
          />
          <q-input
            type="text"
            label="Tipo de Unidad"
            v-model="model.tipoUnidad"
            readonly="readonly"
          />
          <q-input
            v-model="model.marca"
            readonly="readonly"
            type="text"
            label="Marca"
          />
        </div>

        <q-stepper-navigation>
          <q-btn
            @click="
              () => {
                done1 = true;
                step = 2;
                addPvr('vehiculo');
              }
            "
            color="primary"
            label="Continue"
          />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        title="Chofer,Acompañantes y Rutas"
        icon="create_new_folder"
        :done="done2"
      >
        An ad group contains one or more ads which target a shared set of
        keywords.

        <q-stepper-navigation>
          <q-btn
            @click="
              () => {
                done2 = true;
                step = 3;
                addPvr('chofer');
              }
            "
            color="primary"
            label="Continue"
          />
          <q-btn
            flat
            @click="step = 1"
            color="primary"
            label="Back"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="3" title="Create an ad" icon="add_comment" :done="done3">
        Try out different ad text to see what brings in the most customers, and
        learn how to enhance your ads using features like ad extensions. If you
        run into any problems with your ads, find out how to tell if they're
        running and how to resolve approval issues.

        <q-stepper-navigation>
          <q-btn color="primary" @click="done3 = true" label="Finish" />
          <q-btn
            flat
            @click="step = 2"
            color="primary"
            label="Back"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </div>
</template>

<script>
import { ref } from "vue";
import { listas } from "../../helper/list";

export default {
  setup() {
    const step = ref(1),
      vehiculos = ref(),
      done1 = ref(false),
      done2 = ref(false),
      done3 = ref(false),
      model = ref([]);

    let url = "/api/vehiculo/All",
      options = {
        method: "POST",
      };

    listas(url, options).then((res) => {
      vehiculos.value = res.data;
    });

    const showChannel = (val) => {
      let url = `/api/vehiculo/AllId/${val}`,
        options = {
          method: "POST",
        };

      listas(url, options).then((res) => {
        Object.assign(model.value, res.data[0]);
      });
    };

    const addPvr = (val) => {
      if (val === "vehiculo") {
        console.log(model.value.placa, model.value.marca);
      }
      if (val === "chofer") {
        console.log("chofere");
      }
      if (val === "ruta") {
        console.log("ruta");
      }
    };

    return {
      step,
      addPvr,
      vehiculos,
      showChannel,
      model,
      done1,
      done2,
      done3,

      reset() {
        done1.value = false;
        done2.value = false;
        done3.value = false;
        step.value = 1;
      },
    };
  },
};
</script>
