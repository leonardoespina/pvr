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
        <q-btn color="red" :icon="'add'" size="sm" @click="action(null)"
          >Agregar</q-btn
        >
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
              :icon="'delete'"
              @click="
                action(
                  props.row.id,
                  'DELETE',
                  ` Registro Eliminado :${props.row.id}`,

                  'Eliminar',
                  true
                )
              "
              size="sm"
            >
              <q-tooltip> Eliminar</q-tooltip></q-btn
            >
            <q-btn
              color="blue"
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
import { ref } from "vue";
//import crud from "../../composables/index";
//import { column } from "../../components/table/column/index";
import { listas2 } from "../../helper/list";

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

    //console.log(endPoints(variable.urlEndPointAll, methods.POST));

    listas2(endPoints(variable.urlEndPointAll, methods.POST)).then((res) => {
      console.log((rows.value = res.data));

      if (variable.json) {
        rows.value = rows.value.map(function (ele) {
          return {
            id: ele.id,
            unidad: ele.unidad,
            pvr: JSON.parse(ele.pvr),
            idUsuario: ele.idUsuario,
            fechaCreacion: ele.createdAt,
            pvrSalida: ele.pvrSalida,
          };
        });
      }
    });

    const action = (id, method, msg, label, disabled) => {
      if (id === null) {
        store.dispatch("resetState");
        router.push(variable.routeAdd);
      } else {
        let url = `${variable.endPointBase}${id}`;

        // const { create } = crud();

        let payLoad = {
          url,
          options: {
            method: "GET",
          },
          msg,
          label,
          method,
          disabled,
          routeAdd: variable.routeAdd,
          routePrincipal: variable.routePrincipal,
        };

        //routePrincipal: "/unidades"
        console.log(payLoad);

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
    };
  },
};
</script>
