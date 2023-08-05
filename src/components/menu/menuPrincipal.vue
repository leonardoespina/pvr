<template>
  <q-menu>
    <q-list dense style="min-width: 100px">
      <q-item clickable to="/">
        <q-item-section>Home</q-item-section>
      </q-item>
      <q-item clickable to="/unidades">
        <q-item-section>Unidades</q-item-section>
      </q-item>
      <q-separator />
      <q-item clickable v-close-popup>
        <q-item-section>Quit</q-item-section>
      </q-item>
    </q-list>
  </q-menu>
</template>
<script>
export default {
  name: "Menu",
};
</script>
