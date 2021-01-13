
let diasParesArr = [];
let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];


for (let i = 0; i < dias.length; i++ ) {
  
  if (i+1 === 7) {
    alert(`¡El septimo día es: ${dias[i]}!`);
  }  
  
  if (i%2 === 0) {
    diasParesArr.push(dias[i]);
  }
}

let result =document.querySelector(".result");
let app =document.querySelector("#app");

result.innerHTML = `<h1>Días que son pares: ${diasParesArr.join(", ")} </h1>`;

app.style.textAlign = "center";
app.style.marginTop = "100px";
app.style.backgroundColor = "#aaf";