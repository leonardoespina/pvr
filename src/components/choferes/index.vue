<template>
  <div>
    <Table
      :variables="choferes"
      :endPoint="endPoint"
      :method="method"
      :col="columnChoferes"
    />
  </div>
</template>
<script>
//import { ref } from "vue";
import Table from "../../components/table/index.vue";
import { choferes, endPoint, method } from "../../helper/vars";
import { columnChoferes } from "../table/column/index";
export default {
  components: {
    Table,
  },
  setup() {
    return { choferes, endPoint, method, columnChoferes };
  },
};
</script>
