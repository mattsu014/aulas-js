var kid = 0;
var teen = 0;
var old = 0;
for (let i = 0; i < 5; i++){
    var ages = parseInt(prompt("Digite a sua idade:"))
    if (ages <= 25) kid += ages;
    if (ages >= 26 && ages <= 60) teen += ages;
    if (ages > 60) old += ages;
}
var media = (kid + teen + old)/5;
if (media <= 25) console.log(`Baseada na média de idades da turma (${(media).toFixed(2)}) grande parte dela é jovem`);
if (media >= 26 && ages <= 60) console.log(`Baseada na média de idades da turma (${(media).toFixed(2)}) grande parte dela é adulta`);
if (media > 60) console.log(`Baseada na média de idades da turma (${(media).toFixed(2)}) grande parte dela é idosa`);
