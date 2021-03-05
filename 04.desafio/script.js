const plazoMin = 1;
const plazoMax = 72;
const montoMin = 10000;
const montoMax = 1000000;

let plazoCredito = Number(prompt(`\n Crédito \n\nPlazo [${plazoMin} - ${plazoMax}meses
]: `));
let montoCredito = Number(prompt(`\n Crédito \n\nMonto [$${montoMin} - $${montoMax}]:`));


function verificarValores(valorMin, valorMax, valor, unidad) {

  while(valor < valorMin || valor > valorMax ) {

    valor = Number(prompt(`\n ${unidad} fuera de rango, vuelva a ingresarlo ${unidad} [${valorMin} - ${valorMax}]:`));
  } 

  return valor;
}


function calcularCredito() {
  const intereses = 0.24;
  
  let montoMensual = (montoCredito + montoCredito*intereses)/plazoCredito;

  return montoMensual.toFixed(2);
}


function mostrarMontoMensual() {
  alert(`Monto mensual: ${plazoCredito} cuotas de $ ${String(calcularCredito())}`);
}


plazoCredito = verificarValores(plazoMin,plazoMax,plazoCredito,"Plazo");
montoCredito = verificarValores(montoMin,montoMax,montoCredito,"Monto");
mostrarMontoMensual();


/* Estilos */
const app = document.querySelector("#app");
app.style.backgroundColor = "#33f";
app.style.color = "#fff";
app.style.textAlign = "center";