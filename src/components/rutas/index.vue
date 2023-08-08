<template>
  <div>
    <Table
      :variables="rutas"
      :endPoint="endPoint"
      :method="method"
      :col="columnRutas"
    />
  </div>
</template>
<script>
//import { ref } from "vue";
import Table from "../../components/table/index.vue";
import { rutas, endPoint, method } from "../../helper/vars";
import { columnRutas } from "../table/column/index";
export default {
  components: {
    Table,
  },
  setup() {
    return { rutas, endPoint, method, columnRutas };
  },
};
</script>
