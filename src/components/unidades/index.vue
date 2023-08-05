<template>
  <div>
    <Table :variables="unidades" :endPoint="endPoint" :method="method" />
  </div>
</template>
<script>
//import { ref } from "vue";
import Table from "../../components/table/index.vue";
import { unidades, endPoint, method } from "../../helper/vars";
export default {
  components: {
    Table,
  },
  setup() {
    return { unidades, endPoint, method };
  },
};
</script>
