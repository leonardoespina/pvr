<template>
  <q-card-section>
    <div class="q-gutter-md row items-start">
      <q-select
        v-model="condicion"
        option-value="id"
        option-label="condicion"
        :options="listCondiciones"
        hint="Condiciones"
        style="width: 120px"
        filled
      >
        <template v-slot:no-option>
          <q-item><q-item-section> Registro Vacio</q-item-section> </q-item>
        </template>
      </q-select>
      <q-select
        :options="listTipoCondicion"
        v-model="condicion.listaTipoCondicion"
        hint="Tipo Condicion"
        filled
        style="width: 100px"
      >
        <template v-slot:no-option>
          <q-item><q-item-section> Registro Vacio</q-item-section> </q-item>
        </template>
      </q-select>
      <q-input
        type="text"
        autogrow
        v-model="condicion.listaObservacion"
        hint="Observacion"
        filled
        style="width: 300px"
      >
        <template v-slot:after>
          <q-btn
            size="15px"
            @click="agregar(condicion)"
            type="submit"
            round
            dense
            flat
            color="red"
            icon="playlist_add"
          />
        </template>
      </q-input>
    </div>
  </q-card-section>
  <q-separator vertical />
  <q-card-section>
    <Tabla :rows="rows" :col="col" :variable="variable"
  /></q-card-section>
</template>
<script>
import { ref, watchEffect } from "vue";
//import api from "../../composable/crud";

//import { useQuasar } from "quasar";
//import selectQ from "../select/select.vue";
//import { useRouter } from "vue-router";
//import { required, requeridNumber } from "../../helper/validation";
//import axios from "../../helper/axios";
//import { listas } from "../../helper/helper";
import { columnCondicion } from "../../table/column/index";
import Tabla from "../../pvr/salida/tables.vue";
import { useStore } from "vuex";
//import api from "../../composable/crud";

export default {
  components: {
    Tabla,
  },
  props: ["variable"],

  setup(props) {
    const variable = props.variable,
      col = ref(columnCondicion()),
      store = useStore(),
      condicion = ref([]),
      rows = ref([]),
      model = ref([]);

    watchEffect(() => {
      rows.value = store.getters[variable];
    });

    let listCondiciones = [
      {
        id: 1,
        condicion: "Cauchos #1",
      },
      {
        id: 2,
        condicion: "Cauchos #2",
      },
      {
        id: 3,
        condicion: "Cauchos #3",
      },
      {
        id: 4,
        condicion: "Cauchos #4",
      },
      {
        id: 5,
        condicion: "Carroceria",
      },
    ];

    let listTipoCondicion = ["Buena", "Regular", "Mala", "N/A"];

    const agregar = (mod) => {
      const resultado = rows.value.find((e) => {
        if (e.id === mod.id) {
          return e;
        }
      });

      if (resultado === undefined) {
        rows.value.push(mod);

        let vari = { val: variable, valor: rows.value };
        store.dispatch("varMutuacion", vari);
      }
      model.value = [];
    };

    return {
      model,

      agregar,
      condicion,
      variable,
      rows,
      col,
      listCondiciones,
      listTipoCondicion,
    };
  },
};
</script>
<style>
.contenido {
  padding: 1% 1px 12px 25px;
  width: 240px;
}
</style>
