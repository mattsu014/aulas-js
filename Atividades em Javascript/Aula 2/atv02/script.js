var peso = parseFloat(prompt("peso em kg"));
var altura = parseFloat(prompt("Altura em metros"));
var IMC = peso/(altura**2);

if (IMC <= 18.5){
    console.log(`o seu IMC é ${IMC}, você está abaixo do peso (quando o IMC é menor ou igual a 18.5)`);
} else if (IMC > 18.5 && IMC < 24.9){
    console.log(`o seu IMC é ${IMC}, você está com peso normal (quando o IMC é maior que 18.5 e menor que 24.9)`);
} else if(IMC > 25 && IMC < 29.9){
    console.log(`o seu IMC é ${IMC}, você está com Sobrepeso (quando o IMC é maior que 25 e menor que 29.9)`);
}else if(IMC > 30 && IMC < 34.9){
    console.log(`o seu IMC é ${IMC}, você está com Obseidade (quando o IMC é maior que 30 e menor que 34.9)`);
}else if(IMC > 35 && IMC < 40){
    console.log(`o seu IMC é ${IMC}, você está com Obesidade grau 2 (quando o IMC é maior que 35 e menor que 40)`);
}else if(IMC > 40){
console.log(`o seu IMC é ${IMC}, você está com Obsidade grau 3 (quando o IMC é maior que 40)`);
} else {
    console.log("Informe um  valor válido");
}