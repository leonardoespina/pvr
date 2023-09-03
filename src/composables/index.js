//import apiAxios from "../axios/index";
import store from "../store/index";

//import store from "../store/index";

/*const form = async (promesa) => {
  promesa.validate().then((success) => {
    if (success) {
      console.log(success);
    } else {
      // oh no, user has filled in
      // at least one invalid value
      console.log("error");
    }
  });
};*/

const crud = () => {
  const action = (data, myAction, variables) => {
    let payLoad = {};
    if (myAction.data) {
      let { routeEndpoint, method, routePrincipal } = myAction;

      payLoad.url = routeEndpoint;
      // payLoad.url = store.dispatch("conecctionApiRest", payLoad);

      payLoad.options = {
        method,
        data,
      };
      payLoad.urlRoute = routePrincipal;

      console.log(payLoad);

      store.dispatch("conecctionApiRest", payLoad);
    } else {
      console.log(data, myAction, variables);
      payLoad.msg = "Registro Almacenado ";
      payLoad.url = variables.endPointBase;
      payLoad.urlRoute = variables.routePrincipal;
      payLoad.options = {
        method: "POST",
        data,
      };

      store.dispatch("conecctionApiRest", payLoad);
    }
  };

  const login = async (payLoad) => {
    /*  await postApi(url, options);
    data = store.getters("data");*/

    store.dispatch("login", payLoad);

    /*if (data.accessToken) {
    }*/
  };

  const token = () => {
    let ls = localStorage;
    let parse = JSON.parse(ls.getItem("token"));

    if (parse) {
      return parse;
    } else {
      false;
    }
  };

  const confirm = (data, myAction, variables) => {
    let objeto = {
      message: "Esta seguro de Realizar la Accion",
      color: "blue",
      progress: true,
      position: "center",

      actions: [
        {
          label: "Proceder",
          color: "white",
          handler: () => {
            action(data, myAction, variables);
            /* ... */
          },
        },
        {
          label: "Cancelar",
          color: "white",
          handler: () => {
            console.log("cancelarr");
            /* ... */
          },
        },
      ],
    };
    return objeto;
  };

  return {
    action,
    confirm,
    login,
    token,
  };
};

export default crud;
