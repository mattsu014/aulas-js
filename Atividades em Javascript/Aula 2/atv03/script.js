var price = parseFloat(prompt("Digite o preço do Produto:"));
var age = parseInt(prompt("Digite a sua idade:"))
if (age < 18){
    console.log(`O seu produto custa ${price*0.90}`);
} else {
    console.log(`O seu produto custa ${price}`)
}
