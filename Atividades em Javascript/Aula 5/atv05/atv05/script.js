alert("Digite 4 notas");
var vetor = [];
for (let i = 0; i < 4; i++){
    while (true){
        var notas = parseFloat(prompt("Digite uma nota"));
        if (!isNaN(notas)) break;
        console.log("Digite uma nota valida");
    }
vetor.push(notas);
}
var soma = 0;
for(let i = 0; i < vetor.length; i++) soma += vetor[i];
console.log(`${soma/vetor.length}`);