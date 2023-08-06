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

const endPoint = (url, act) => {
  return {
    url,
    options: {
      method: act,
    },
  };
};

export { unidades, endPoint, method };
