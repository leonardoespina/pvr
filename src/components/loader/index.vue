<template>
  <div class="q-pa-md"></div>
</template>

<script>
import { watchEffect, inject } from "vue";
import { useQuasar } from "quasar";
import { messages } from "../../helper/validation.js";
//import { onBeforeUnmount /*, onMounted */ } from "vue";

export default {
  setup() {
    //store.getters("data"),

    const $q = useQuasar(),
      store = inject("state");

    //  let timer;

    /*  onBeforeUnmount(() => {
      if (timer !== void 0) {
        clearTimeout(timer);
        $q.loading.hide();
      }
    });*/
    watchEffect(() => {
      //$q.loading.show();

      if (store.getters("loading") === true) {
        $q.loading.show();

        // hiding in 2s
        /*   timer = setTimeout(() => {
          $q.loading.hide();
          timer = void 0;
        }, 2000);*/
      } else {
        $q.loading.hide();

        if (store.getters("msg") !== null) {
          $q.notify(
            messages(store.getters("msg"), "positive", "close", "normal")
          );
        }
      }
    });
  },
};
</script>
