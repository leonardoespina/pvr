import apiAxios from "../axios/index";
import store from "../store/index";
import { ref } from "vue";

const categorias = ref([]),
  supervisores = ref([]),
  unidades = ref([]),
  sectores = ref([]),
  modelos = ref([]);

const method = "POST";

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
    method,
  };

listas(url, options).then((res) => {
  categorias.value = res.data;
});

url = "/api/modelo/All";
options = {
  method,
};

listas(url, options).then((res) => {
  modelos.value = res.data;
});

url = "/api/supervisores/All";
options = {
  method,
};

listas(url, options).then((res) => {
  supervisores.value = res.data;
});
url = "/api/supervisores/All";
options = {
  method,
};

listas(url, options).then((res) => {
  supervisores.value = res.data;
});

url = "/api/sectores/All";
options = {
  method,
};

listas(url, options).then((res) => {
  sectores.value = res.data;
});

const search = (val, urlEndPoint, comparaValor) => {
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

const loadList = async (url, method) => {
  return await apiAxios(
    url,
    (options = {
      method,
    })
  );

  /*if (store.getters.isList) {
    vehiculos.value = store.getters.isList;
  }*/
};

const listCondicionesPick = [
  {
    id: 1,
    condicion: "Cauchos #1",
  },
  {
    id: 2,
    condicion: "Cauchos #2",
  },
  {
    id: 3,
    condicion: "Cauchos #3",
  },
  {
    id: 4,
    condicion: "Cauchos #4",
  },

  {
    id: 7,
    condicion: "Carroceria General",
  },
  {
    id: 8,
    condicion: "Faros delanteros",
  },
  {
    id: 9,
    condicion: "Luces Traseras",
  },
  {
    id: 10,
    condicion: "Parachoque",
  },
  {
    id: 11,
    condicion: "Tapa de Combustible",
  },
  {
    id: 12,
    condicion: "Espejos Retrovisores",
  },
  {
    id: 13,
    condicion: "Extintor",
  },
  {
    id: 14,
    condicion: "Triangulo de Seguridad",
  },
];

const listCondicionesCompactadora = [
  {
    id: 1,
    condicion: "Cauchos #1",
  },
  {
    id: 2,
    condicion: "Cauchos #2",
  },
  {
    id: 3,
    condicion: "Cauchos #3",
  },
  {
    id: 4,
    condicion: "Cauchos #4",
  },
  {
    id: 5,
    condicion: "Cauchos #5",
  },
  {
    id: 6,
    condicion: "Cauchos #6",
  },

  {
    id: 7,
    condicion: "Carroceria General",
  },
  {
    id: 8,
    condicion: "Faros delanteros",
  },
  {
    id: 9,
    condicion: "Luces Traseras",
  },
  {
    id: 10,
    condicion: "Parachoque",
  },
  {
    id: 11,
    condicion: "Tapa de Combustible",
  },
  {
    id: 12,
    condicion: "Espejos Retrovisores",
  },
  {
    id: 13,
    condicion: "Extintor",
  },
  {
    id: 14,
    condicion: "Triangulo de Seguridad",
  },
];

const listaCondiciones = (tipoUnidad) => {
  if (tipoUnidad === "COMPACTADORA") {
    return listCondicionesCompactadora;
  } else {
    return listCondicionesPick;
  }
};

export {
  categorias,
  modelos,
  sectores,
  supervisores,
  search,
  listas2,
  listas,
  listaCondiciones,
  unidades,
  loadList,
};
