function contador_vogais(palavra) {
    const vogais = 'aeiouAEIOU';
    let count = 0;
    for (const char of palavra) if (vogais.includes(char)) count++;
    return count;
}

var palavra = prompt("Digite uma palavra:");
console.log(contador_vogais(palavra));