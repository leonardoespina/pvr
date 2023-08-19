<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn label="Click me" color="primary" @click="inception = true" />

    <q-dialog v-model="inception">
      <q-card>
        <q-card-section>
          <div class="text-h6">Inception</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
          laudantium minus earum totam modi laborum illo, corporis fuga saepe
          animi aliquam ea enim assumenda ut nulla natus aperiam quis. Iste.
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn
            flat
            label="Open another dialog"
            @click="secondDialog = true"
          />
          <q-btn flat label="Close" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      inception: ref(false),
      secondDialog: ref(false),
    };
  },
};
</script>
