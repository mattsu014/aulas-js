alert("Pesquisa da nossa empresa, responda qual é o melhor Sistema Operacional");

var allvotes = [
    { sistema: "Windows Server", votos: 0, porcentagem: 0 },
    { sistema: "Unix", votos: 0, porcentagem: 0 },
    { sistema: "Linux", votos: 0, porcentagem: 0 },
    { sistema: "Netware", votos: 0, porcentagem: 0 },
    { sistema: "Mac OS", votos: 0, porcentagem: 0 },
    { sistema: "Outro", votos: 0, porcentagem: 0 }
];

var totalVotes = 0;

while (true) {
    var vote = prompt(
        "Informe o melhor sistema operacional:\n" +
        "1- Windows Server\n" +
        "2- Unix\n" +
        "3- Linux\n" +
        "4- Netware\n" +
        "5- Mac OS\n" +
        "6- Outro\n" +
        "Digite 0 para sair."
    );

    if (vote === null || vote === "" || isNaN(vote)) {
        alert("Informe um valor válido");
        continue;
    }

    vote = parseInt(vote);

    if (vote === 0) break;

    if (vote < 1 || vote > 6) {
        alert("Informe um valor válido");
        continue;
    }

    allvotes[vote - 1].votos++;
    totalVotes++;

    for (var i = 0; i < allvotes.length; i++) {
        allvotes[i].porcentagem = ((allvotes[i].votos / totalVotes) * 100).toFixed(2) + "%";
    }
}

console.log(
    "Sistema Operacional Votos %\n" +
    "------------------- ----- ---\n" +
    `Windows Server ${allvotes[0].votos} ${allvotes[0].porcentagem}\n` +
    `Unix ${allvotes[1].votos} ${allvotes[1].porcentagem}\n` +
    `Linux ${allvotes[2].votos} ${allvotes[2].porcentagem}\n` +
    `Netware ${allvotes[3].votos} ${allvotes[3].porcentagem}\n` +
    `Mac OS ${allvotes[4].votos} ${allvotes[4].porcentagem}\n` +
    `Outro ${allvotes[5].votos} ${allvotes[5].porcentagem}\n` +
    "------------------- ----- --- Total: ${totalVotes}\n"
);