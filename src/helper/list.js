import apiAxios from "../axios/index";
import { ref } from "vue";

const categorias = ref([]),
  supervisores = ref([]),
  sectores = ref([]),
  modelos = ref([]);

const listas = async (url, options) => {
  let lista;

  await apiAxios(url, options).then((respo) => {
    lista = respo;
  });

  return lista;
};

const listas2 = async ({ url, options }) =>
  await apiAxios(url, options).then((res) => res);

let url = "/api/categoria/All",
  options = {
    method: "POST",
  };

listas(url, options).then((res) => {
  categorias.value = res.data;
});

url = "/api/modelo/All";
options = {
  method: "POST",
};

listas(url, options).then((res) => {
  modelos.value = res.data;
});

url = "/api/supervisores/All";
options = {
  method: "POST",
};

listas(url, options).then((res) => {
  supervisores.value = res.data;
});

url = "/api/sectores/All";
options = {
  method: "POST",
};

listas(url, options).then((res) => {
  sectores.value = res.data;
});

const search = (val, urlEndPoint, comparaValor) => {
  console.log(comparaValor);
  let varBusqueda = val.toString();
  if (varBusqueda != comparaValor && val != "") {
    let url = urlEndPoint,
      options = {
        method: "GET",
      };

    return new Promise((resolve) => {
      setTimeout(() => {
        apiAxios(`${url}${val}`, options).then((response) => {
          let resul = response.data;

          resolve(!resul.length || `*  ya existe`);
        });
      }, 1000);
    });
  }
};

export { categorias, modelos, sectores, supervisores, search, listas2 };
