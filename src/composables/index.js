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
  const create = (url, method, urlRoute) => {
    let payLoad = {
      url,
      options: {
        method,
      },
      urlRoute,
    };
    store.dispatch("conecctionApiRest", payLoad);
  };

  return {
    create,
  };
};

export default crud;
