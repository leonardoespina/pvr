const unidades = {
  categoria: {
    url: "/api/categoria/All",
    options: {
      method: "POST",
    },
  },
  modelo: {
    url: "/api/modelo/All",
    options: {
      method: "POST",
    },
  },
  vehiculos: {
    urlBase: "/api/vehiculo/",
    view: "/unidadesView/",
    url: "/api/vehiculo/All",
    options: {
      method: "POST",
    },
  },
};

/* categoria: {
      url: "/api/categoria/All",
      options: {
        method: "POST",
      },
    },
    modelo: {
      url: "/api/modelo/All",
      options: {
        method: "POST",
      },
    },
  },*/

export { unidades };
