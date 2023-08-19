<template>
  <div>
    <Table
      :variables="pvr"
      :endPoint="endPoint"
      :method="method"
      :col="columnPvr"
    />
  </div>
</template>
<script>
//import { ref } from "vue";
import Table from "../../components/table/index.vue";
import { pvr, endPoint, method } from "../../helper/vars";
import { columnPvr } from "../table/column/index";
export default {
  components: {
    Table,
  },
  setup() {
    return { pvr, endPoint, method, columnPvr };
  },
};
</script>
