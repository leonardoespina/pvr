import { createStore } from "vuex";
import apiAxios from "../axios/index";
import useRouter from "../router/index";
const initialState = () => ({
  isLoading: false,
  isConection: false,
  msg: null,
  isAction: {},
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
  },
  actions: {
    async conecctionApiRest({ commit }, { url, options, urlRoute, msg }) {
      console.log(urlRoute);
      commit("setLoading", true);
      await apiAxios(url, options)
        .then((res) => {
          if (res.statusText === "OK") {
            //     commit("setConection", true);
            commit("setLoading", false);
            commit("setMsg", msg);
            if (urlRoute) {
              useRouter.push(urlRoute);
            }
          }
        })
        .catch((error) => {
          //   commit("setConection", false);
          if (error.message === "canceled") {
            commit("setMsg", "Problemas de Conexion a la Api-Rest");
            commit("setLoading", false);
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
          };
          commit("setLoading", false);
          commit("setAction", payLoad);
          useRouter.push(routeAdd);
        }
      });

      // commit("setAction", val);
    },
    resetState({ commit }) {
      commit("setReset");
    },
  },
  getters: {
    isMsg: (state) => state.msg,
    isLoader: (state) => state.isLoading,
    isAction: (state) => state.isAction,
  },
});
