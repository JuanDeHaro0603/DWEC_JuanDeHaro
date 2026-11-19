import pc from "picocolors";

const facturas = [
  { id: 101, cliente: "Comercial Alfa", total: 300, pagada: true },
  { id: 102, cliente: "Desarrollos Beta", total: 550, pagada: false },
  { id: 103, cliente: "Logística Gamma", total: 180, pagada: false }
];

// 4. Imprimir cada factura con colores
facturas.forEach((factura) => {
  const estado = factura.pagada
    ? pc.green("✓ PAGADA")
    : pc.red("✗ PENDIENTE");

  console.log(`[#${factura.id}] ${factura.cliente} - ${factura.total}€ -> ${estado}`);
});

// 5. Calcular el total pendiente de cobro con filter y reduce
const totalPendiente = facturas
  .filter((factura) => !factura.pagada)
  .reduce((acumulador, factura) => acumulador + factura.total, 0);

console.log(`\nTotal por cobrar: ${totalPendiente}€`);