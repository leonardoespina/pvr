<template>
  <div class="q-pa-md">
    <div class="text-h6 text-center">Planilla de Prevencion Vehicular</div>
    <div class="text-h8 text-center">
      <b>Correlativo N°:</b>{{ model.correlativo }}
    </div>
  </div>

  <div class="q-pa-md row items-start justify-center q-gutter-md">
    <q-card flat bordered class="my-card">
      <q-card-section class="q-pt-none">
        <q-markup-table>
          <tbody>
            <tr>
              <td><b>Unidad:</b>{{ model.unidad }}</td>
              <td><b>Placa:</b>{{ model.placa }}</td>
              <td><b>Tipo de Unidad:</b>{{ model.tipoUnidad }}</td>
            </tr>
            <tr>
              <td><b>Modelo:</b>{{ model.modelo }}</td>
              <td><b>Chofer:</b>{{ model.chofer }}</td>
              <td><b>Cedula:</b>{{ model.cedulaChofer }}</td>
            </tr>
            <tr>
              <td><b>Telefono Chofer:</b>{{ model.telefonoChofer }}</td>
              <td><b>Cod-Ruta:</b>{{ model.codRuta }}</td>
              <td><b>Superv. Ruta:</b>{{ model.supervisor }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th colspan="4" nowrap><b> Ruta:</b>{{ model.ruta }}</th>
            </tr>
          </tfoot>
        </q-markup-table>
        <q-separator inset />
        <q-markup-table>
          <tbody>
            <b>SALIDA</b>
            <tr>
              <td><b>Combustible:</b>{{ model.salidaCombutible }}</td>
              <td><b>Kilometraje:</b>{{ model.salidaKilometraje }}</td>
              <td>
                <b>Fecha:</b>
                {{ new Date(model.salidaFecha).toLocaleDateString() }}
              </td>
            </tr>
            <tr>
              <td><b>Hora:</b>{{ model.salidaHora }}</td>
            </tr>
            <b>CONDICION:</b>
            <tr>
              <th><b>Condición</b></th>
              <th><b>Tipo de Condicion</b></th>
              <th><b>Obersavacion</b></th>
            </tr>
          </tbody>
          <tr v-for="value in model.salidaCondicion" :key="value.id">
            <td>
              <q-input
                v-model="value.condicion"
                type="text"
                readonly
                style="width: 100px"
                autogrow
              />
            </td>
            <td>
              <q-input
                v-model="value.listaTipoCondicion"
                type="text"
                readonly
                style="width: 100px"
                autogrow
              />
            </td>
            <td>
              <q-input
                v-model="value.listaObservacion"
                type="text"
                readonly
                style="width: 300px"
                autogrow
              />
            </td>
          </tr> </q-markup-table
        ><q-separator inset />
        <q-markup-table>
          <tbody>
            <b>ENTRADA:</b>
            <tr>
              <td><b>Combustible:</b>{{ model.entradaCombutible }}</td>
              <td><b>Kilometraje:</b>{{ model.entradaKilometraje }}</td>
              <td>
                <b>Fecha:</b
                >{{ new Date(model.entradaFecha).toLocaleDateString() }}
              </td>
            </tr>
            <tr>
              <td><b>Hora:</b>{{ model.entradaHora }}</td>
            </tr>
            <b>CONDICION:</b>
            <tr>
              <th><b>Condición</b></th>
              <th><b>Tipo de Condicion</b></th>
              <th><b>Obersavacion</b></th>
            </tr>
          </tbody>
          <tr v-for="value in model.entradaCondicion" :key="value.id">
            <td>
              <q-input
                v-model="value.condicion"
                type="text"
                readonly
                style="width: 100px"
                autogrow
              />
            </td>
            <td>
              <q-input
                v-model="value.listaTipoCondicion"
                type="text"
                readonly
                style="width: 100px"
                autogrow
              />
            </td>
            <td>
              <q-input
                v-model="value.listaObservacion"
                type="text"
                readonly
                style="width: 300px"
                autogrow
              />
            </td>
          </tr>
        </q-markup-table>
      </q-card-section>
      <q-card-section>
        <q-markup-table>
          <thead>
            <tr>
              <th class="text-center"><b>VERIFICADOR</b></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">{{ model.veficador }}</td>
            </tr>
          </tbody></q-markup-table
        >
      </q-card-section>

      <q-markup-table>
        <thead>
          <tr>
            <th class="text-center"><b>CHOFER</b></th>
            <th class="text-left"><b>SEGURIDAD</b></th>
            <th class="text-left"><b>VERIFICADOR</b></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-center">________________</td>
            <td class="text-left">_________________</td>
            <td class="text-left">_________________</td>
          </tr>
        </tbody></q-markup-table
      >
      <q-separator inset />

      <q-card-actions vertical align="center"
        ><q-img :src="unidadImg" no-native-menu> </q-img>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";

//import Salidas from "../consultas/salidas.vue";
//import Entradas from "../salida/salida.vue";
//import Unidades from "../consultas/unidades.vue";
//import Choferes from "../consultas/choferes.vue";
//import Ayudantes from "../consultas/ayudantes.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

//import { Salida } from "../../../helper/vars";
//import { useQuasar } from "quasar";
//import crud from "../../../composables/index";

export default {
  components: {
    /* Unidades,
    Choferes,
    Ayudantes,
    Salidas,*/
  },

  setup() {
    const store = useStore(),
      //$q = useQuasar(),

      label = ref("Guardar"),
      // status = ref(false),
      buttonDisabled = ref(false),
      model = ref([]),
      router = useRouter(),
      unidadImg = ref(""),
      //model = ref([]),
      myAction = {};

    if (store.getters.isAction.data) {
      Object.assign(myAction, store.getters.isAction);
      let objs = { ...store.getters.isAction.data };
      let { pvr } = objs;
      pvr = JSON.parse(pvr);

      Object.assign(model.value, {
        unidad: objs.unidad,
        correlativo: objs.correlativo,
        placa: objs.placa,
        tipoUnidad: objs.tipoUnidad,
        chofer: pvr.isChofer.nombreApellido,
        telefonoChofer: pvr.isChofer.telefono,
        modelo: pvr.isUnidad.marca,
        cedulaChofer: pvr.isChofer.cedula,
        codRuta: pvr.isRuta.codRuta,
        supervisor: pvr.isRuta.idSupervisor,
        ruta: pvr.isRuta.ruta,
        salidaCombutible: pvr.isVariableSalida.combustible,
        salidaKilometraje: pvr.isVariableSalida.kilometraje,
        salidaFecha: pvr.isVariableSalida.fecha,
        salidaHora: pvr.isVariableSalida.hora,
        salidaCondicion: pvr.isVariableCondicionSalida,
        entradaCombutible: pvr.isVariableEntrada.combustible,
        entradaKilometraje: pvr.isVariableEntrada.kilometraje,
        entradaFecha: pvr.isVariableEntrada.fecha,
        entradaHora: pvr.isVariableEntrada.hora,
        entradaCondicion: pvr.isVariableCondicionEntrada,
        veficador: pvr.isVerificador.nombreApellido,
      });

      if (model.value.tipoUnidad === "COMPACTADORA") {
        unidadImg.value = "1.jpg";
      } else {
        unidadImg.value = "2.jpg";
      }
    } else {
      router.push("/entrada");
    }

    return {
      model,
      label,
      buttonDisabled,
      unidadImg,
    };
  },
};
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 800px
</style>
