// Optei por utilizar essa forma para facilitar posteriormente caso alguem queira adicionar novas perguntas e não precisar ficar criando novas variáveis :)

var perguntas = ["Telefonou para a vítima?", "Esteve no local do crime?", "Mora perto da vítima?", "Devia para a vítima?", "Já trabalhou com a vítima?"];
alert("Responda com sim ou não as seguintes perguntas");
var count = 0;
for (let i = 0; i < 5; i++) {
    var questionamentos = prompt(perguntas[i]);
    questionamentos = questionamentos.toLocaleLowerCase();
    if (questionamentos  == 's' || questionamentos == 'sim') count++;
}

switch (count){
    case 0:
    case 1:
        console.log("Possívelmente um inocente");
        break;
    case 2:
        console.log("Essa pessoa é uma suspeita");
        break;
    case 3:
    case 4:
        console.log("Essa pessoa é um possível cúmplice");
        break;
    case 5:
        console.log("Essa pessoa possívelmente é o assasino");
        break;
}