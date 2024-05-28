var ganhoporHora = parseFloat(prompt("Quanto você ganha por hora?"));
var horasdeTrabalho = parseFloat(prompt("Quantas horas você trabalha no mês?"));

console.log(`Salário bruto: ${ganhoporHora*horasdeTrabalho}`);
console.log(`INSS: ${(ganhoporHora*horasdeTrabalho)*0.08}`);
console.log(`Sindicato: ${(ganhoporHora*horasdeTrabalho)*0.05}`);
console.log("/n")
console.log(`Salário liquido: ${(ganhoporHora*horasdeTrabalho)*0.76}`);
console.log(`Considerando que os descontos foram: ${(ganhoporHora*horasdeTrabalho)*0.24}`);