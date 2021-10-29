const ordena_lista = (a:number, b:number) => {
    if (a>b) return 1
    else if (a<b) return -1
    return 0
}

const informacoes_lista_numerica_imperativo = (lista:Array<number>) => {
    for(let item of lista){
        if(isNaN(item)){
            console.log("A lista passada não é inteiramente numérica")
            return
        }
    }

    lista.sort(ordena_lista)

    let maior_valor: number = lista[lista.length - 1] 
    let menor_valor: number = lista[0]
    let valor_medio: number 
    let acumulador: number = 0

    for(let i = 0; i < lista.length; i++){
        acumulador += lista[i]
        console.log(acumulador)
    }
    
    valor_medio = (acumulador/(lista.length))

    return [menor_valor, valor_medio, maior_valor]
}

let numeros = [0,2,3,5,1,4,8,6,7,10,9]
console.log(informacoes_lista_numerica_imperativo(numeros))
