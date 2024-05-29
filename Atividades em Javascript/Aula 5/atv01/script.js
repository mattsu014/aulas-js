alert("Coloque 20 números Inteiros");
var EvenNumbers = [];
var OddNumbers = [];
for (let i = 0; i < 10; i++){
    while (true){
        var addNumber = parseInt(prompt("Adicione um número"));
        if (!isNaN(addNumber)) break;
        alert("Adicione um número válido")
    }
    EvenNumbers.push(addNumber);
}
for (odd of EvenNumbers){
    if (odd % 2 !== 0){
        OddNumbers.push(odd);
    }
}
EvenNumbers = EvenNumbers.filter(number => number % 2 === 0);
console.log(`Números pares: ${EvenNumbers}`);
console.log(`Números ímpares: ${OddNumbers}`);