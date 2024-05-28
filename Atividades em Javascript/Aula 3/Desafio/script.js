function mostrarMenu() {
    return prompt(
        "Escolha uma opção:\n" +
        "1. Verificar Saldo\n" +
        "2. Fazer Saque\n" +
        "3. Fazer Depósito\n" +
        "4. Sair"
    );
}

function main() {
    let saldo = 1000;
    let escolha;

    while (true) {
        escolha = mostrarMenu();

        switch (escolha) {
            case "1":
                alert(`Seu saldo atual é: R$ ${saldo.toFixed(2)}`);
                break;

            case "2":
                const saque = parseFloat(prompt("Digite o valor do saque:"));
                if (isNaN(saque) || saque <= 0) {
                    alert("Valor inválido. Tente novamente.");
                } else if (saque > saldo) {
                    alert("Saldo insuficiente. Tente novamente.");
                } else {
                    saldo -= saque;
                    alert(`Saque de R$ ${saque.toFixed(2)} realizado com sucesso.\nSaldo atual: R$ ${ saldo.toFixed(2)}`);
                }
                break;

            case "3":
                const deposito = parseFloat(prompt("Digite o valor do depósito:"));
                if (isNaN(deposito) || deposito <= 0) {
                    alert("Valor inválido. Tente novamente.");
                } else {
                    saldo += deposito;
                    alert(`Depósito de R$ ${deposito.toFixed(2)} realizado com sucesso.\nSaldo atual: R$ ${saldo.toFixed(2)}`)
                }
                break;

            case "4":
                alert("Saindo...");
                return;

            default:
                alert("Opção inválida. Tente novamente.");
                break;
        }
    }
}

main();