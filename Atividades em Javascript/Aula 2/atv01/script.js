var number = parseFloat(prompt("digite um numero"))

if (number > 0 && number % 2 == 0){
    console.log(`${number} é positivo e par`)
} else {
    console.log(`${number} não é positivo e par`)
}