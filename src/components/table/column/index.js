const col = [
  // column Object definition
  {
    name: "placas",
    required: true,
    label: "Placas",
    align: "left",
    field: (row) => row.placa,
    sortable: true,
  },
  {
    name: "modelos",
    required: true,
    label: "Modelo",
    align: "left",
    field: (row) => row.modelo.modelo,
    sortable: true,
  },
  {
    name: "categoria",
    required: true,
    label: "Categoria",
    align: "left",
    field: (row) => row.categoria.categorias,
    sortable: true,
  },
  {
    name: "Estado",
    required: true,
    label: "Estado",
    align: "left",
    field: (row) => row.tipofalla.fallas,
    sortable: true,
  },
  {
    name: "Usuario",
    required: true,
    label: "Usuario",
    align: "left",
    field: (row) => `${row.user.firstname},${row.user.lastname}`,
    sortable: true,
  },

  {
    name: "Fechacreacion",
    required: true,
    label: "Fecha de Creacion",
    align: "left",
    field: (row) => row.createdAt,
    sortable: true,
  },
];

export function column() {
  return col;
}

const colChoferes = [
  // column Object definition
  {
    name: "nombreApellido",
    required: true,
    label: "Nombre y Apellido",
    align: "left",
    field: (row) => row.nombreApellido,
    sortable: true,
  },
  {
    name: "Cedula",
    required: true,
    label: "Cedula de identidad",
    align: "left",
    field: (row) => row.cedula,
    sortable: true,
  },
  {
    name: "telefono",
    required: true,
    label: "Telefono",
    align: "left",
    field: (row) => row.telefono,
    sortable: true,
  },

  {
    name: "Usuario",
    required: true,
    label: "Usuario",
    align: "left",
    field: (row) => row.idUsuario,
    sortable: true,
  },

  {
    name: "Fechacreacion",
    required: true,
    label: "Fecha de Creacion",
    align: "left",
    field: (row) => row.createdAt,
    sortable: true,
  },
];

export function columnChoferes() {
  return colChoferes;
}

const ayudantes = [
  // column Object definition
  {
    name: "nombreApellido",
    required: true,
    label: "Nombre y Apellido",
    align: "left",
    field: (row) => row.nombreApellido,
    sortable: true,
  },
  {
    name: "Cedula",
    required: true,
    label: "Cedula de identidad",
    align: "left",
    field: (row) => row.cedula,
    sortable: true,
  },
  {
    name: "telefono",
    required: true,
    label: "Telefono",
    align: "left",
    field: (row) => row.telefono,
    sortable: true,
  },

  {
    name: "Usuario",
    required: true,
    label: "Usuario",
    align: "left",
    field: (row) => row.idUsuario,
    sortable: true,
  },

  {
    name: "Fechacreacion",
    required: true,
    label: "Fecha de Creacion",
    align: "left",
    field: (row) => row.createdAt,
    sortable: true,
  },
];

export function columnAyudantes() {
  return ayudantes;
}

const rutas = [
  // column Object definition
  {
    name: "Ruta",
    required: true,
    label: "Rutas",
    align: "left",
    field: (row) => row.ruta,
    sortable: true,
  },
  {
    name: "Codigo",
    required: true,
    label: "Codigo Ruta",
    align: "left",
    field: (row) => row.codRuta,
    sortable: true,
  },
  {
    name: "Supervisor",
    required: true,
    label: "Supervisor",
    align: "left",
    field: (row) => row.supervisore.nombreApellido,
    sortable: true,
  },

  {
    name: "Usuario",
    required: true,
    label: "Usuario",
    align: "left",
    field: (row) => row.idUsuario,
    sortable: true,
  },

  {
    name: "Fechacreacion",
    required: true,
    label: "Fecha de Creacion",
    align: "left",
    field: (row) => row.createdAt,
    sortable: true,
  },
];

export function columnRutas() {
  return rutas;
}

const colPvr = [
  // column Object definition
  {
    name: "Unidad",
    required: true,
    label: "Unidad",
    align: "left",
    field: (row) => row.unidad,
    sortable: true,
  },
  {
    name: "Numero",
    required: true,
    label: " # Numero de PVR",
    align: "center",
    field: (row) => row.correlativo,
    sortable: true,
  },
  {
    name: "placa",
    required: true,
    label: "Placa",
    align: "left",
    field: (row) => row.placa,
    sortable: true,
  },
  {
    name: "chofer",
    required: true,
    label: "Chofer",
    align: "left",
    field: (row) => row.chofer,
    sortable: true,
  },
  {
    name: "Tipo de Unidad",
    required: true,
    label: "Tipo de Unidad",
    align: "left",
    field: (row) => row.tipoUnidad,
    sortable: true,
  },
  {
    name: "Operador",
    required: true,
    label: "Operador",
    align: "left",
    field: (row) => row.idUsuario,
    sortable: true,
  },
  {
    name: "Fecha de Creacion",
    required: true,
    label: "Fecha de Creacion",
    align: "left",
    field: (row) => row.createdAt,
    sortable: true,
  },
  {
    name: "ESTATUS",
    required: true,
    label: "ESTATUS",
    align: "left",
    field: (row) => (row.pvrSalida === "" ? "ABIERTO " : "CERRADO"),
    sortable: true,
  },
];

export function columnPvr() {
  return colPvr;
}

const colCondicion = [
  // column Object definition

  {
    name: "Condicion",
    required: true,
    label: "Condicion",
    align: "left",
    field: (row) => row.condicion,
    sortable: true,
  },
  {
    name: "Tipo",
    required: true,
    label: "Tipo de Condicion",
    align: "left",
    field: (row) => row.listaTipoCondicion,

    sortable: true,
  },
  {
    name: "Observacion",
    required: true,
    label: "Obsevacion",
    align: "left",
    field: (row) => row.listaObservacion,
    sortable: true,
  },
];
export function columnCondicion() {
  return colCondicion;
}
