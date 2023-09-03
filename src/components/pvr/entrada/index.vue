<template>
  <div>
    <Table
      :variables="Entrada"
      :endPoint="endPoint"
      :method="method"
      :col="columnPvr"
    />
  </div>
</template>
<script>
//import { ref } from "vue";
import Table from "../../table/indexEntrada.vue";
import { Entrada, endPoint, method } from "../../../helper/vars";
import { columnPvr } from "../../table/column/index";
export default {
  components: {
    Table,
  },
  setup() {
    return { Entrada, endPoint, method, columnPvr };
  },
};
</script>
