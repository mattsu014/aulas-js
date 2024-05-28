function contagemRegressiva() {
    const numero = parseInt(prompt("Digite um número para iniciar a contagem regressiva:"));

    if (isNaN(numero)) {
        alert("Por favor, digite um número válido.");
        return;
    }

    for (let i = numero; i >= 0; i--) {
        console.log(i);
    }
}

contagemRegressiva();