const verifica_vogais = (letra: string) => {

    // Lista com todas as vogais incluindo acentos 
    let vogais: Array<string> = ['a','e','i','o','u', "á", "ã", "à", "â", "é", "ê", "è", "í", "ì", "î", "ó", "ò", "õ", "ô", "ú", "û", "ù"]
    
    // Verifica se a letra é uma vogal, retornando um booleano
    return vogais.includes(letra)

}

const qtd_vogais = (palavra) => {

    // Transforma a palavra em uma lista com letras minúsculas 
    let lista_letras = palavra.toString().toLowerCase().split('')

    // Retorna a quantidade de vogais que tem na palavra
    return lista_letras.filter(verifica_vogais).length

}