<template>
  <div>
    <Table
      :variables="verificadores"
      :endPoint="endPoint"
      :method="method"
      :col="columnVerificadores"
    />
  </div>
</template>
<script>
//import { ref } from "vue";
import Table from "../../components/table/index.vue";
import { verificadores, endPoint, method } from "../../helper/vars";
import { columnVerificadores } from "../table/column/index";
export default {
  components: {
    Table,
  },
  setup() {
    return { verificadores, endPoint, method, columnVerificadores };
  },
};
</script>
