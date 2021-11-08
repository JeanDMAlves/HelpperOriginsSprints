// Letra A
let letra_A: HTMLInputElement = document.getElementById('formulario_A_saida') as HTMLInputElement
let frase_A: HTMLInputElement = document.getElementById('frase_A') as HTMLInputElement
letra_A.value = qtd_vogais(frase_A.innerHTML.toString()).toString()

//letra B
let letraB = document.getElementById('botao_vogais')
letraB.addEventListener("click", function(){
    event.preventDefault()
    let palavra_entrada: HTMLInputElement = document.getElementById("formulario_B_entrada") as HTMLInputElement
    let numero_vogais_b: HTMLInputElement = document.getElementById("formulario_B_saida") as HTMLInputElement
    numero_vogais_b.value = qtd_vogais(palavra_entrada.value).toString()
})