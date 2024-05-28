var count = 0;
var somaNumber = 0;
while (true){
    var number = parseInt(prompt("Digite um número:"));
    if (isNaN(numero) || numero == 0){
        break;
    }
    somaNumber += number;
    count++;
}
console.log(`A soma dos números foram: ${(somaNumber).toFixed(2)}`);