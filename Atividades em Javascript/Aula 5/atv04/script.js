var vetor = [];
alert("Digite 10 números");
for (let i = 0; i < 10; i++){
while (true){
var numbers = parseFloat(prompt("Digite o número"));
if (!isNaN(numbers)) break;
}
vetor.push(numbers);
}
console.log(`${vetor.reverse()}`);