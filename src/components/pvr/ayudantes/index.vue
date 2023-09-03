<template>
  <div class="q-gutter-md row items-start">
    <q-select
      filled
      v-model="model"
      use-input
      hide-selected
      ref="ayudante"
      fill-input
      input-debounce="0"
      :options="options"
      @filter="filterFn"
      hint="Indique Cedula"
      style="width: 250px; padding-bottom: 32px"
      @update:model-value="showChannel"
    />
    <q-input
      v-model="model.nombreApellido"
      type="text"
      ref="nombreApellido"
      label="Nombre"
      style="width: 250px"
    />
    <q-input
      v-model="model.telefono"
      ref="telefono"
      type="text"
      label="Telefono"
      style="width: 250px"
    >
      <template v-slot:after>
        <q-btn
          size="15px"
          round
          dense
          flat
          color="red"
          icon="playlist_add"
          @click="agregar(model)"
        />
        <q-tooltip anchor="bottom middle" self="top middle" :offset="[10, 10]">
          Agregar Acompañante o Ayudantes (<q-icon name="add" />)
        </q-tooltip>
      </template>
    </q-input>
  </div>

  <Tabla :rows="rows" :col="col" :variable="variable" />
</template>
<script>
import { loadList } from "../../../helper/list";
import { ref, watchEffect, inject } from "vue";
import { required /*, contarObjeto*/ } from "../../../helper/validation";
import Tabla from "../../pvr/ayudantes/tables.vue";
import { column } from "../../pvr/ayudantes/column";
import { useStore } from "vuex";
export default {
  components: {
    Tabla,
  },

  setup() {
    const stringOptions = ref([]),
      store = useStore(),
      isDisable = ref(true),
      col = ref(column()),
      rows = ref([]),
      ayudante = ref(null),
      cedula = ref([]),
      telefono = ref(null),
      nombreApellido = ref(null),
      variable = "isListAyudante",
      model = ref([]);

    /* if (store.getters.isAction.data) {
      Object.assign(model.value, store.getters.isGetter("isListAyudante"));
    }*/

    loadList("/api/ayudantes/All", "POST").then(
      (datos) =>
        (stringOptions.value = datos.data.map(function (ele) {
          return {
            value: ele.cedula,
            label: `${ele.cedula}`,
          };
        }))
    );

    watchEffect(() => {
      rows.value = store.getters.isGetter("isListAyudante");
    });

    const options = ref(stringOptions.value);

    const showChannel = async (val) => {
      await loadList(`/api/ayudantesCedula/${val.value}`, "GET").then(
        (datos) => {
          //  model.value = datos.data[0];
          Object.assign(model.value, datos.data[0]);
        }
      );
    };

    const agregar = (mod) => {
      const resultado = rows.value.find((e) => {
        if (e.id === mod.id) {
          return e;
        }
      });
      if (resultado === undefined) {
        console.log(mod);
        rows.value.push(model.value);

        let variable = { val: "isListAyudante", valor: rows.value };
        store.dispatch("varMutuacion", variable);
        /*   let variable = { isListAyudante: rows.value };

        store.dispatch("varMutuacionArray", variable);*/
        model.value = [];
      }
    };

    return {
      filterFn(val, update, abort) {
        update(() => {
          const needle = val.toLowerCase();
          options.value = stringOptions.value.filter(
            (v) => v.label.indexOf(needle) > -1
          );
        });
      },

      options,
      model,
      required,
      telefono,
      nombreApellido,
      showChannel,
      col,
      rows,
      agregar,
      variable,
      cedula,
      ayudante,
      isDisable,
    };
  },
};
</script>
