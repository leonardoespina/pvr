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
