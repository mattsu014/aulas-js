let palavra = prompt("Digite uma palavra:");
palavra = palavra.toLocaleLowerCase()
let palavraReverse = palavra.split("").reverse().join(""); // Inverte a ordem dos caracteres da string

palavraReverse === palavra ? console.log(`${palavra} é um palíndromo`) : console.log(`${palavra} não é um palíndromo pois fica ${palavraReverse}`);