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
        <q-btn color="red" :icon="'add'" size="sm" :to="variables.urlRouteAdd"
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
              @click="action(props.row.id, 'view')"
            >
              <q-tooltip> Consultar</q-tooltip></q-btn
            >
            <q-btn
              color="red"
              :icon="'delete'"
              @click="action(props.row.id, 'delete')"
              size="sm"
            >
              <q-tooltip> Eliminar</q-tooltip></q-btn
            >
            <q-btn
              color="blue"
              :icon="'edit'"
              size="sm"
              @click="action(props.row.id, 'edit')"
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
//import api from "../../composable/crud";
import { column } from "../../components/table/column/index";
import { listas2 } from "../../helper/list";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  name: "Qtable",
  props: ["variables"],

  setup(props) {
    const columns = ref(column()),
      rows = ref([]),
      router = useRouter(),
      store = useStore(),
      filter = ref("");

    let routeView = props.variables.urlRouteAdd;

    console.log(useRouter());

    listas2(props.variables.rows).then((res) => {
      rows.value = res.data;
    });
    const action = (val, act) => {
      let accion = { id: val };
      if (act === "view") {
        accion.isDisabled = true;
        store.dispatch("action", accion);
        router.push(`${routeView}`);
      } else if (act === "edit") {
        accion.isDisabled = false;
        accion.label = "Modificar";
        accion.color = "blue";

        store.dispatch("action", accion);
        router.push(`${routeView}`);
      } else {
        ////eliminar
      }
    };

    return {
      columns,
      rows,
      action,
      filter,
    };
  },
};
</script>
