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
const verificadores = {
  endPointBase: "/api/verificadores/",
  urlEndPointAll: "/api/verificadores/All",
  FindById: "/api/verificadoresCedula/",
  routeAdd: "/verificadoresAdd",
  routePrincipal: "/verificadores",
};
const supervisores = {
  endPointBase: "/api/supervisores/",
  urlEndPointAll: "/api/supervisores/All",
  FindById: "/api/supervisoresCedula/",
  routeAdd: "/supervisoresAdd",
  routePrincipal: "/supervisores",
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

const Salida = {
  endPointBase: "/api/salidas/",
  urlEndPointAll: "/api/salidas/All",
  routeAdd: "/salidaAdd",
  routePrincipal: "/salida",
  FindById: "/api/pvr/",
  json: true,
};
const Entrada = {
  endPointBase: "/api/salidas/",
  urlEndPointAll: "/api/salidas/All",
  routeAdd: "/entradaAdd",
  consultaPvr: "/consultaPvr",
  routePrincipal: "/entrada",
  FindById: "/api/pvr/",
  json: true,
};
const usuarios = {
  endPointBase: "/api/users/",
  urlEndPointAll: "/api/users/",
  routeAdd: "/usuariosAdd",
  routePrincipal: "/usuarios",
  routeSecundario: "/",
  FindById: "/api/users/",
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

export {
  unidades,
  endPoint,
  method,
  choferes,
  ayudantes,
  rutas,
  usuarios,
  Salida,
  supervisores,
  verificadores,
  Entrada,
};
