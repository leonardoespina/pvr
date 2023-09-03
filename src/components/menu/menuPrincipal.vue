<template>
  <q-menu>
    <q-list dense style="min-width: 100px">
      <q-item clickable to="/">
        <q-item-section>Home</q-item-section>
      </q-item>

      <q-item clickable>
        <q-item-section>PVR</q-item-section>
        <q-item-section side>
          <q-icon name="keyboard_arrow_right" />
        </q-item-section>

        <q-menu anchor="top end" self="top start">
          <q-list dense
            ><q-item clickable to="/salida">
              <q-item-section>Salida</q-item-section>
            </q-item>
            <q-item clickable to="/entrada">
              <q-item-section>Entrada</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-item>

      <q-item clickable>
        <q-item-section>Configuracion</q-item-section>
        <q-item-section side>
          <q-icon name="keyboard_arrow_right" />
        </q-item-section>

        <q-menu anchor="top end" self="top start">
          <q-list dense
            ><q-item clickable to="/unidades">
              <q-item-section>Unidades</q-item-section>
            </q-item>
            <q-item clickable to="/choferes">
              <q-item-section>Choferes</q-item-section>
            </q-item>
            <q-item clickable to="/ayudantes">
              <q-item-section>Ayudantes</q-item-section>
            </q-item>
            <q-item clickable to="/rutas">
              <q-item-section>Rutas</q-item-section>
            </q-item>
            <q-item clickable to="/supervisores">
              <q-item-section>Supervisores</q-item-section>
            </q-item>
            <q-item clickable to="/verificadores">
              <q-item-section>Verificadores</q-item-section>
            </q-item>
            <q-item clickable to="/usuarios">
              <q-item-section>Usuarios</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
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
