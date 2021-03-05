
class SimuladorCredito {

  constructor(plazoRango,montoRango) {
    this.plazoRango = plazoRango;
    this.montoRango = montoRango;
    this.plazoCredito = this.plazoCredito = Number(prompt(`\n Crédito \n\nPlazo [${this.plazoRango[0]} - ${this.plazoRango[1]}meses
    ]: `));;
    this.montoCredito = Number(prompt(`\n Crédito \n\nMonto [$${this.montoRango[0]} - $${this.montoRango[1]}]:`));;
  }
  

  VerificarValores(rango, valor, unidad) {
  
    while(valor < rango[0] || valor > rango[1] ) {
  
      valor = Number(prompt(`\n ${unidad} fuera de rango, vuelva a ingresarlo ${unidad} [${rango[0]} - ${rango[1]}]:`));
    } 
  
    return valor;
  }
  
  
  CalcularCredito() {
    const intereses = 0.24;

    this.plazoCredito = this.VerificarValores(this.plazoRango,this.plazoCredito,"plazo");
    this.montoCredito = this.VerificarValores(this.montoRango,this.montoCredito,"monto");
    
    let montoMensual = (this.montoCredito + this.montoCredito*intereses)/this.plazoCredito;
  
    return [montoMensual.toFixed(2), this.plazoCredito, this.montoCredito];
  }
  
  
  MostrarMontoMensual() {
    let monto;
    [monto,this.plazoCredito,this.montoCredito] = this.CalcularCredito();

    alert(`Monto mensual: ${this.plazoCredito} cuotas de $ ${String(monto)}`);
  }
} 

/* SimuladorCredito([plazoRango],[montoRango])*/
let credito1 = new SimuladorCredito([1,72],[10000,1000000]);
credito1.MostrarMontoMensual();


/* Estilos */
const app = document.querySelector("#app");
app.style.backgroundColor = "#33f";
app.style.color = "#fff";
app.style.textAlign = "center";