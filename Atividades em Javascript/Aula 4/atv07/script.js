let palavra = prompt("Digite uma palavra");
palavra = palavra.toLocaleLowerCase();
const tiposvogais = 'aeiouAEIOU';
var vogais = 0;
for (char of palavra){
    if (tiposvogais.includes(char)){
        vogais++;
    }
}
console.log(`A palavra ${palavra} tem ${vogais} vogais`);