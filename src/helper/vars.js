const method = {
  POST: "post",
  GET: "get",
  UPDATE: "put",
  DELETE: "delete",
};
const unidades = {
  endPointBase: "/api/vehiculo/",
  urlEndPointAll: "/api/vehiculo/All",
  routeAdd: "/unidadesAdd",
  routePrincipal: "/unidades",
};
const choferes = {
  endPointBase: "/api/choferes/",
  urlEndPointAll: "/api/choferes/All",
  FindById: "/api/choferesCedula/",
  routeAdd: "/choferesAdd",
  routePrincipal: "/choferes",
};
const ayudantes = {
  endPointBase: "/api/ayudantes/",
  urlEndPointAll: "/api/ayudantes/All",
  routeAdd: "/ayudanteAdd",
  routePrincipal: "/ayudantes",
  FindById: "/api/ayudantesCedula/",
};
const rutas = {
  endPointBase: "/api/rutas/",
  urlEndPointAll: "/api/rutas/All",
  routeAdd: "/rutasAdd",
  routePrincipal: "/rutas",
  FindById: "/api/rutas/",
};
const pvr = {
  endPointBase: "/api/salidas/",
  urlEndPointAll: "/api/salidas/All",
  routeAdd: "/pvrAdd",
  routePrincipal: "/pvr",
  FindById: "/api/pvr/",
  json: true,
};

const endPoint = (url, act) => {
  return {
    url,
    options: {
      method: act,
    },
  };
};

export { unidades, endPoint, method, choferes, ayudantes, rutas, pvr };
