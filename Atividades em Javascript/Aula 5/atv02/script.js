const NumeroInteiro = n => Number.isInteger(Number(n));
alert("Digite 5 números inteiros:");
var InterNumbers = [];
for (let i = 0; i < 5; i++){
while (true){
var number = parseFloat(prompt("Digite o número"));
if(NumeroInteiro(number) == true) break;
alert("Digite um número inteiro")
}
InterNumbers.push(number);
}
console.log(`${InterNumbers}`)