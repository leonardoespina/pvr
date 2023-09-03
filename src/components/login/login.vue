<template>
  <q-card class="my-card" flat bordered>
    <q-card-section>
      <div class="text-overline text-orange-9 text-center">Bienvenidos</div>

      <div class="text-caption text-black">
        <q-form class="q-gutter-md" @submit.prevent="onSubmit">
          <q-input
            square
            filled
            clearable
            v-model="model.email"
            label="login"
            bg-color="field"
            required
          >
            <template v-slot:prepend>
              <q-icon name="face" color="blue" />
            </template>
          </q-input>
          <q-input
            square
            filled
            clearable
            v-model="model.password"
            type="password"
            label="Password"
            bg-color="field"
            required
          >
            <template v-slot:prepend>
              <q-icon name="lock" color="blue" />
            </template>
          </q-input>

          <div class="text-overline text-orange-9 text-center">
            <q-card-actions class="q-px-md">
              <q-btn
                unelevated
                color="red"
                type="submit"
                label="Acceder"
                size="sm"
              >
              </q-btn>

              <q-btn unelevated color="green" size="sm" label="Recuperar" />
            </q-card-actions>
          </div>
        </q-form>
      </div>
    </q-card-section>
  </q-card>
</template>
<script>
import { ref } from "vue";
import crud from "../../composables/index";
import Top from "../../components/header/top.vue";
import { usuarios } from "../../helper/vars";

export default {
  components: {
    Top,
  },
  setup() {
    const model = ref([]);
    let objeto = {};
    const onSubmit = () => {
      Object.assign(objeto, model.value);

      let { login } = crud();

      let payLoad = {
        urlRoute: usuarios.routeSecundario,
        url: "/api/user/signin",
        options: {
          method: "POST",
          data: objeto,
        },
      };

      login(payLoad);
    };
    return { onSubmit, model };
  },
};
</script>
