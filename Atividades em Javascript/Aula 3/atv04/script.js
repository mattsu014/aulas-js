while (true) {
    var name = prompt("Me informe o seu nome:");
    var password = prompt("Me informe uma senha:");

    if (name == password) break;

    console.log(`Me informe uma senha diferente do nome do usuario`);
}

console.log("Senha e nome salvos");