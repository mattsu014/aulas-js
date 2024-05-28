var palavra = prompt("Digite uma palavra:");
const vogais = 'aeiouAEIOU';
let palavraSemVogais = '';
for (const char of palavra) {
    if (!vogais.includes(char)) {
        palavraSemVogais += char;
    }
}
console.log(palavraSemVogais);
