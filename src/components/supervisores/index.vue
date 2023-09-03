<template>
  <div>
    <Table
      :variables="supervisores"
      :endPoint="endPoint"
      :method="method"
      :col="columnSupervisores"
    />
  </div>
</template>
<script>
//import { ref } from "vue";
import Table from "../../components/table/index.vue";
import { supervisores, endPoint, method } from "../../helper/vars";
import { columnSupervisores } from "../table/column/index";
export default {
  components: {
    Table,
  },
  setup() {
    return { supervisores, endPoint, method, columnSupervisores };
  },
};
</script>
