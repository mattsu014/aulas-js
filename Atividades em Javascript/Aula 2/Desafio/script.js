function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function calcularAreaRetangulo(largura, altura) {
    return largura * altura;
}

function calcularVolumeCubo(lado) {
    return Math.pow(lado, 3);
}

function calcularAreaCirculo(raio) {
    return Math.PI * Math.pow(raio, 2);
}

function mostrarMenu() {
    return prompt(
        "Escolha uma opção:\n" +
        "1. Calcular Área do Triângulo\n" +
        "2. Calcular Área do Retângulo\n" +
        "3. Calcular Volume do Cubo\n" +
        "4. Calcular Área do Círculo\n" +
        "5. Sair"
    );
}

function main() {
    let escolha;

    while (true) {
        escolha = mostrarMenu();

        switch (escolha) {
            case "1":
                const baseTriangulo = parseFloat(prompt("Digite a base do triângulo:"));
                const alturaTriangulo = parseFloat(prompt("Digite a altura do triângulo:"));
                const areaTriangulo = calcularAreaTriangulo(baseTriangulo, alturaTriangulo);
                alert("A área do triângulo é: " + areaTriangulo);
                break;

            case "2":
                const larguraRetangulo = parseFloat(prompt("Digite a largura do retângulo:"));
                const alturaRetangulo = parseFloat(prompt("Digite a altura do retângulo:"));
                const areaRetangulo = calcularAreaRetangulo(larguraRetangulo, alturaRetangulo);
                alert("A área do retângulo é: " + areaRetangulo);
                break;

            case "3":
                const ladoCubo = parseFloat(prompt("Digite o lado do cubo:"));
                const volumeCubo = calcularVolumeCubo(ladoCubo);
                alert("O volume do cubo é: " + volumeCubo);
                break;

            case "4":
                const raioCirculo = parseFloat(prompt("Digite o raio do círculo:"));
                const areaCirculo = calcularAreaCirculo(raioCirculo);
                alert("A área do círculo é: " + areaCirculo);
                break;

            case "5":
                alert("Saindo...");
                return;

            default:
                alert("Opção inválida. Tente novamente.");
                break;
        }
    }
}

main();
