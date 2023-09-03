<template>
  <q-separator vertical />
  <q-card-section>
    <q-table title="" :rows="rows" :columns="columns" row-key="name">
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
              color="red"
              :icon="'delete'"
              size="sm"
              @click="eliminar(props.row)"
            >
              <q-tooltip> Eliminar</q-tooltip></q-btn
            ></q-td
          >
        </q-tr>
      </template>
    </q-table>
  </q-card-section>
</template>
<script>
import { ref } from "vue";
import { useStore } from "vuex";
 

export default {
  name: "tabla",

  props: ["col", "rows", "variable"],
  setup(props) {
    const columns = props.col,
      store = useStore(),
    
      variables = props.variable,
      rows = ref(props.rows);

    const eliminar = (val) => {
      ///ELIMINAR DESDE EL ESTADO

      rows.value = rows.value.filter((todo) => todo !== val);

      let row = { val: variables, valor: rows.value };

      store.dispatch("varMutuacion", row);
    };

    return {
      columns,
      rows,
      eliminar,
    };
  },
};
</script>
