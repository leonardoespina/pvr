<template>
  <q-menu>
    <div class="row no-wrap q-pa-md">
      <q-separator vertical inset class="q-mx-lg" />

      <div class="column items-center">
        <q-avatar size="72px">
          <img src="user.png" />
        </q-avatar>

        <div class="text-subtitle1 q-mt-md q-mb-xs">Admin</div>

        <q-btn color="green" label="Salir" push size="sm" v-close-popup />
      </div>
    </div>
  </q-menu>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      mobileData: ref(true),
      bluetooth: ref(false),
    };
  },
};
</script>
