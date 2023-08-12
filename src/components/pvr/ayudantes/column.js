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
];

export function column() {
  return ayudantes;
}
