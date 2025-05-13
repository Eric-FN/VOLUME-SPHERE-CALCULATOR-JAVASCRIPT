let raio = parseInt(prompt("Insira o raio da esfera:"));
let PI = Math.PI;
let formula = "V= (4/3) * PI * raio³";
let form = (4 / 3) * PI * Math.pow(raio, 3);

alert(
  `O volume da esfera é igual a ${formula}, portanto uma esfera de raio ${raio} tem um volume de ${form}.`
);
