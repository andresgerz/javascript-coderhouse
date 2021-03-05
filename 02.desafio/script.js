let windSimulator = Math.random() * 540 + 60 ;
let windSpeed = Math.round(windSimulator);

let intensity;


if (windSpeed >= 64 && windSpeed < 117) {
  intensity = "F0";

} else if (windSpeed >= 117 && windSpeed < 181) {
  intensity = "F1";

} else if (windSpeed >= 181 && windSpeed < 254) {
  intensity = "F2";

} else if (windSpeed >= 254 && windSpeed < 333) {
  intensity = "F3";

} else if (windSpeed >= 333 && windSpeed < 418) {
  intensity = "F4";

} else if (windSpeed >= 418 && windSpeed < 512) {
  intensity = "F5";

} else {
  intensity = "The scale has 12 levels until MACH number 1.0";

}


// HTML with JS
let app = document.getElementById("app");

let newDiv = document.createElement("div");
let newH1 = document.createElement("h1");
let newHr = document.createElement("hr");
let newH4 = document.createElement("h2");

app.appendChild(newH1);
app.appendChild(newHr);
app.appendChild(newH4);


// CSS styles with JS
app.style.backgroundColor = "#aaf";
app.style.color = "#008";
app.style.textAlign = "center";

newH1.textContent = "Fujita-Pearson Scale: tornado intensity";
newH4.textContent = windSpeed.toString() + " km/h => " + intensity; 