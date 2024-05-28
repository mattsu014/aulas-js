var count = 0;
var somaNotas = 0;
while (true){
    var notas = parseInt(prompt("Digite a nota:"));
    if (isNaN(notas)){
        break;
    }
    somaNotas += notas;
    count++;
}
console.log(`A média das notas foram: ${(somaNotas/count).toFixed(2)}`);