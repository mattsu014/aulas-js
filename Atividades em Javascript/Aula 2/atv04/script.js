var letra = prompt("Digiteuma letra");
letra = letra.toLowerCase();
if (letra == 'a' || letra == 'e' || letra == 'i' ||letra == 'o' || letra == 'u') {
    console.log(`a letra ${letra} é uma vogal`)
} else {
    console.log(`a letra ${letra} é uma consoante`)
}