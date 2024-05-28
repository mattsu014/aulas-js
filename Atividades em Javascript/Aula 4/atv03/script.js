while (true) {
    var number = parseInt(prompt("Digite um número inteiro positivo"));
    if (!isNaN(number) && number > 0) {
        break;
    } else {
        console.log("Digite um número válido");
    }
}
for (number; number >= 0; number--) console.log(number);
