alert("Jogo de par ou impar");

var par = false;

while (true){
    let choice = prompt("Escolha entre Ímpar ou Par");
    choice = choice.toLocaleLowerCase();
    if(choice == 'par' || choice == 'impar' || choice == 'ímpar'){
        if (choice == 'par') par = true;
        break;
    } 
    alert(`Informe um valor válido`);
}

var rodadas = 0;
var vitorias = 0;

while (true){
    let number = parseInt(prompt("Agora fale um número"));
    if (isNaN(number)) break;
    rodadas++;
    alert(`Rodade número ${rodadas}, boa sorte 😘 \n`);
    alert("Sorteando um número... 🎲");
    let numberRandom = Math.floor(Math.random() * 100);
    alert(`O meu número é ${numberRandom}`);
    let sum = numberRandom + number;
    if (sum % 2 == 0) {
        if (par = true) {
            alert(`${sum} é um número par, você ganhou\n parabéns 🤗`);
            vitorias++;
        } else {
            alert(`${sum} é um número par\nEu ganhei 😎`);
        }
    } else {
        if (par = false) {
            alert(`${sum} é um número ímpar, você ganhou\n parabéns 🤗`);
            vitorias++;
        } else {
            alert(`${sum} é um número ímpar\n Eu ganhei 😎`);
        }
    }
}

if (vitorias > rodadas-vitorias){
    alert(`Parabéns, você ganhou!!! 🤪`)
    alert(`
    Placar: \n
    \n
    😀Você: ${vitorias}
    🤖Robô: ${rodadas-vitorias}
    🎲Número de rodadas: ${rodadas}
    `)
} else if (vitorias < rodadas-vitorias) {
    alert(`Ebaaa, eu ganhei!!! 😆`)
    alert(`
    Placar: \n
    \n
    😀Você: ${vitorias}
    🤖Robô: ${rodadas-vitorias}
    🎲Número de rodadas: ${rodadas}
    `)
} else {
    alert(`Empatamos, foi um bom jogo 😒`)
    alert(`
    Placar: \n
    \n
    😀Você: ${vitorias}
    🤖Robô: ${rodadas-vitorias}
    🎲Número de rodadas: ${rodadas}
    `)
}