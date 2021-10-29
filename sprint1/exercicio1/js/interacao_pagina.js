// Letra A
let letra_A = document.getElementById('formulario_A_saida');
let frase_A = document.getElementById('frase_A');
letra_A.value = qtd_vogais(frase_A.innerHTML.toString()).toString();
//letra B
let letraB = document.getElementById('botao_vogais');
letraB.addEventListener("click", function () {
    event.preventDefault();
    let palavra_entrada = document.getElementById("formulario_B_entrada");
    let numero_vogais_b = document.getElementById("formulario_B_saida");
    numero_vogais_b.value = qtd_vogais(palavra_entrada.value).toString();
});
//# sourceMappingURL=interacao_pagina.js.map