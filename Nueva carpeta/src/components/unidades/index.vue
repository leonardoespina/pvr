<template>
  <div>
    <Table
      :variables="unidades"
      :endPoint="endPoint"
      :method="method"
      :col="column"
    />
  </div>
</template>
<script>
//import { ref } from "vue";
import Table from "../../components/table/index.vue";
import { unidades, endPoint, method } from "../../helper/vars";
import { column } from "../table/column/index";
export default {
  components: {
    Table,
  },
  setup() {
    return { unidades, endPoint, method, column };
  },
};
</script>
