<template>
  <Top />
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <q-header elevated class="bg-red-9"> </q-header>
      <q-page class="row justify-center bg-image">
        <div class="column">
          <div class="row">
            <q-card square class="q-pa-lg shadow-0" style="background: none">
              <h5 class="text-h6 text-black text-center full-width"></h5>
              <q-card-section><Login /> </q-card-section>
            </q-card>
          </div>
        </div>
      </q-page>

      <!--<router-view />-->
    </q-page-container>
  </q-layout>
</template>
<script>
//import Top from "../components/header/top";
import Login from "../components/login/login.vue";
import Top from "../components/header/top.vue";
export default {
  components: {
    Top,
    // Msg,
    Login,
  },
};
</script>
