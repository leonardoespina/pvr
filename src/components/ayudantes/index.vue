<template>
  <div>
    <Table
      :variables="ayudantes"
      :endPoint="endPoint"
      :method="method"
      :col="columnAyudantes"
    />
  </div>
</template>
<script>
//import { ref } from "vue";
import Table from "../../components/table/index.vue";
import { ayudantes, endPoint, method } from "../../helper/vars";
import { columnAyudantes } from "../table/column/index";
export default {
  components: {
    Table,
  },
  setup() {
    return { ayudantes, endPoint, method, columnAyudantes };
  },
};
</script>
