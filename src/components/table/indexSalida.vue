<template>
  <div class="q-pa-md">
    <q-table
      title=""
      :rows="rows"
      :columns="columns"
      :filter="filter"
      row-key="name"
    >
      <template v-slot:top-right>
        <q-input
          rounded
          filled
          clearable
          borderless
          debounce="300"
          v-model="filter"
          placeholder="Buscar"
          bg-color="field"
        >
          <template v-slot:append
            ><q-icon name="search" color="blue"
          /></template>
        </q-input>
      </template>
      <template v-slot:top-left>
        <q-btn color="red" :icon="'add'" size="sm" @click="action(null)">{{
          Agregar
        }}</q-btn>
      </template>
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th auto-width />
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td auto-width> </q-td>

          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.value }}
          </q-td>

          <q-td auto-width>
            <q-btn
              color="green"
              :icon="'search'"
              size="sm"
              @click="
                action(
                  props.row.id,
                  'GET',
                  null,

                  'Consulta',
                  true
                )
              "
            >
              <q-tooltip> Consultar</q-tooltip></q-btn
            >
            <q-btn
              color="red"
              v-if="props.row.status === true"
              :icon="'delete'"
              @click="
                action(
                  props.row.id,
                  'DELETE',
                  ` Registro Eliminado :${props.row.id}`,

                  'Eliminar',
                  false
                )
              "
              size="sm"
            >
              <q-tooltip> Eliminar</q-tooltip></q-btn
            >
            <q-btn
              color="blue"
              v-if="props.row.status === true"
              :icon="'edit'"
              size="sm"
              @click="action(props.row.id, 'PUT', null, 'Modificar', false)"
            >
              <q-tooltip> Modificar</q-tooltip></q-btn
            >
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>
<script>
import { ref, watchEffect } from "vue";
//import crud from "../../composables/index";
//import { column } from "../../components/table/column/index";
//import { listas2 } from "../../helper/list";

import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  name: "Qtable",
  props: ["variables", "endPoint", "method", "col"],

  setup(props) {
    const columns = ref(props.col()),
      rows = ref([]),
      variable = props.variables,
      endPoints = props.endPoint,
      methods = props.method,
      router = useRouter(),
      store = useStore(),
      filter = ref("");

    let Agregar = "Agregar";
    let routeAdd = null;

    //console.log(endPoints(variable.urlEndPointAll, methods.POST));

    /*   listas2(endPoints(variable.urlEndPointAll, methods.POST)).then((res) => {
      // rows.value = res.data;
    });*/

    let payLoad = {
      url: variable.urlEndPointAll,
      options: {
        method: methods.POST,
      },
    };
    store.dispatch("loadList", payLoad);

    watchEffect(() => {
      if (store.getters.isGetter("isList")) {
        rows.value = store.getters.isGetter("isList");
      }
    });

    const action = (id, method, msg, label, disabled) => {
      if (id === null) {
        store.dispatch("resetState");
        router.push(variable.routeAdd);
      } else {
        let url = `${variable.endPointBase}${id}`;

        // const { create } = crud();

        routeAdd = variable.routeAdd;

        let payLoad = {
          url,
          options: {
            method: "GET",
          },
          msg,
          label,
          method,
          disabled,
          routeAdd,
          routePrincipal: variable.routePrincipal,
        };

        //routePrincipal: "/unidades"

        store.dispatch("action", payLoad);
      }

      //create(url, method, variable.routeAdd, msg);
    };

    return {
      columns,
      rows,
      action,
      filter,
      variable,
      Agregar,
    };
  },
};
</script>
