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
