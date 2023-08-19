<template>
  <Top />
  <div v-if="r.path === '/'">Home</div>

  <router-view></router-view>
</template>

<script>
//import api from "../composable/crud";
//import { watchEffect } from "vue";
import Top from "../components/header/top";
import { useRoute } from "vue-router";
import { ref } from "vue";

export default {
  components: {
    Top,
  },
  setup() {
    const r = ref(useRoute());

    console.table(r.value.path);
    /*    const { install } = api();
    let url = "/api/empresa/registro",
      options = {
        method: "POST",
      };
    install(url, options);*/
    return {
      r,
    };
  },
};
</script>
