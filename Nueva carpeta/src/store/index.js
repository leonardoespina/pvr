import { createStore } from "vuex";
import apiAxios from "../axios/index";
import useRouter from "../router/index";

const initialState = () => ({
  isLoading: false,
  isConection: false,
  msg: null,
  isAction: {},
  isChofer: [],
  isList: null,
  isPvr: {},
  isStep: 1,
  isListAyudante: [],
  isListCondicion: [],
  isRuta: [],
  isSalida: [],
  isEntrada: [],
  isUnidad: [],
  isVariableSalida: [],
  isVariableCondicionSalida: [],
  isVariableEntrada: [],
  isVariableCondicionEntrada: [],
});

export default createStore({
  state: initialState,
  mutations: {
    setReset(state) {
      const initial = initialState();

      Object.keys(initial).forEach((key) => {
        state[key] = initial[key];
      });
    },
    setLoading(state, val) {
      state.isLoading = val;
    },
    setConection(state, val) {
      state.isConection = val;
    },
    setMsg(state, val) {
      state.msg = val;
    },
    setAction(state, val) {
      state.isAction = val;
    },
    setPvr(state, val) {
      state.isPvr = val;
    },
    setList(state, val) {
      state.isList = val;
    },
    setMutuacion(state, { val, valor }) {
      console.log(`Valor:${val} -- Variable:${valor} --`);
      state[val] = valor;
      console.log(state[val]);
    },
  },
  actions: {
    async conecctionApiRest({ commit }, { url, options, urlRoute, msg }) {
      console.log(msg);
      commit("setLoading", true);
      await apiAxios(url, options)
        .then((res) => {
          if (res.statusText === "OK") {
            //     commit("setConection", true);
            commit("setLoading", false);
            commit("setMsg", msg);
            //     commit("setReset");
            useRouter.push(urlRoute);
          }
        })
        .catch((error) => {
          //   commit("setConection", false);
          if (error.message === "canceled") {
            commit("setMsg", "Problemas de Conexion a la Api-Rest");
            commit("setLoading", false);
            commit("setReset");
            useRouter.push(urlRoute);
          }
        });
    },
    async action(
      { commit },
      { url, options, msg, label, method, disabled, routeAdd, routePrincipal }
    ) {
      commit("setLoading", true);
      await apiAxios(url, options).then((res) => {
        console.log(res);
        if (res.statusText === "OK") {
          let payLoad = {
            data: res.data,
            msg,
            label,
            method,
            disabled,
            routePrincipal,
            routeEndpoint: url,
          };
          commit("setLoading", false);
          commit("setAction", payLoad);
          useRouter.push(routeAdd);
        }
      });

      // commit("setAction", val);
    },
    pvrState({ commit }) {
      commit("setPvr");
    },
    resetState({ commit }) {
      commit("setReset");
    },
    varMutuacion({ commit }, variable) {
      commit("setMutuacion", variable);
    },
    varMutuacionArray({ commit }, variable) {
      commit("setMutuacion", variable);
    },
    async loadList({ commit }, { url, options }) {
      console.log(url, options);
      commit("setLoading", true);
      await apiAxios(url, options).then((res) => {
        if (res.statusText === "OK") {
          //     commit("setConection", true);
          commit("setLoading", false);

          commit("setList", res.data);

          //     commit("setReset");
        }
      });
    },
  },
  getters: {
    isMsg: (state) => state.msg,
    isLoader: (state) => state.isLoading,
    isAction: (state) => state.isAction,
    isList: (state) => state.isList,
    isStep: (state) => state.isStep,
    isListAyudante: (state) => state.isListAyudante,
    isListCondicion: (state) => state.isListCondicion,
    isSalida: (state) => state.isSalida,
    isEntrada: (state) => state.isEntrada,
    isUnidad: (state) => state.isUnidad,
    isRuta: (state) => state.isRuta,
    isVariableCondicionSalida: (state) => state.isVariableCondicionSalida,
    isVariableCondicionEntrada: (state) => state.isVariableCondicionEntrada,
    isVariableEntrada: (state) => state.isVariableEntrada,
    isVariableSalida: (state) => state.isVariableSalida,

    isGetter: (state) => (variable) => {
      //state.isRuta,
      return state[variable];
    },

    isFuncion: (state) => () => {
      //state.isRuta,
      return {
        unidad: state.isUnidad.unidad,
        placa: state.isUnidad.placa,
        rutas: state.isRuta,
        chofer: state.isChofer,
        // unidad: state.isUnidad,
        salida: {
          varSalida: state.isVariableSalida,
          varCondicionSalida: state.isVariableCondicionSalida,
        },
        entrada: {
          varEntrada: state.isVariableEntrada,
          varCondicionEntrada: state.isVariableCondicionEntrada,
        },
      };
    },
    isData: (state) => () => {
      return {
        unidad: state.isUnidad.unidad,
        correlativo: Date.now(),
        placa: state.isUnidad.placa,
        idUsuario: "Root",
        status: true,
        chofer: `Cedula: ${state.isChofer.cedula} - ${state.isChofer.nombreApellido}`,
        tipoUnidad: state.isUnidad.tipoUnidad,

        pvr: {
          ayudantes: state.isListAyudante,
          unidades: state.isUnidad,
          ruta: state.isRuta,
          chofer: state.isChofer,
          salida: {
            varSalida: state.isVariableSalida,
            varCondicionSalida: state.isVariableCondicionSalida,
          },
          entrada: {
            varEntrada: state.isVariableEntrada,
            varCondicionEntrada: state.isVariableCondicionEntrada,
          },
        },
      };
    },
  },
});
