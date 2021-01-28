let htmlArr = new Array();

htmlArr = [
  ['<h1>Complete data</h1>', '<br><br>'],
  ['<form>'],
  ['<label>Name:</label>', '<input>', '<br><br>' ], 
  ['<label>Surname:</label>', '<input>', '<br><br>'], 
  ['<label>Age:</label>', '<input>', '<br><br>'],
  ['<label>Email:</label>', '<input>', '<br><br>'], 
  ['<label>Profession:</label>', '<input>', '<br><br>'], 
  ['<label>Phone:</label>', '<input>', '<br><br>'],
  ['<button type=\'submit\'>Send</button>' ],
  ['</form>']
]; 

let htmlArrConcat = new Array();

for (let i = 0; i < htmlArr.length; i++) {
  
  htmlArrConcat = htmlArrConcat.concat(htmlArr[i]);
}

console.log(htmlArrConcat);

let htmlArrJoin = htmlArrConcat.join('');

console.log(htmlArrJoin);

document.getElementById('app').innerHTML = `<div class='form-wrapper'>${htmlArrJoin}</form></div>`;


document.createElement('div');
document.getElementById('app').style.display = "flex";
document.getElementById('app').style.justifyContent = "center";
document.body.style.backgroundColor = "#008";
document.querySelector('.form-wrapper').style.backgroundColor = "#07a";
document.querySelector('.form-wrapper').style.padding = "20px";