<template>
  <div>
    <Table
      :variables="usuarios"
      :endPoint="endPoint"
      :method="method"
      :col="columnUsuarios"
    />
  </div>
</template>
<script>
//import { ref } from "vue";
import Table from "../../components/table/index.vue";
import { usuarios, endPoint, method } from "../../helper/vars";
import { columnUsuarios } from "../table/column/index";
export default {
  components: {
    Table,
  },
  setup() {
    return { usuarios, endPoint, method, columnUsuarios };
  },
};
</script>
