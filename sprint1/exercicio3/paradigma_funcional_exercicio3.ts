const informacoes_lista_numerica_funcional = (lista:Array<number>):Array<number> => {

    if(lista.filter((item) => {return isNaN(item)}).length > 0){
        console.log("A lista passada não é inteiramente numérica")
        return
    }

    let maior_valor: number = lista.reduce((a,b) => {return Math.max(a,b)})
    let menor_valor: number = lista.reduce((a,b) => {return Math.min(a,b)})

    let soma_numeros = (a:number, b:number) => {return a+b}
    let valor_medio: number = (lista.reduce(soma_numeros,0))/(lista.length)

    return [menor_valor, valor_medio, maior_valor]
}

let numeros2 = [0,2,3,5,1,4,8,6,7,10,9]
console.log(informacoes_lista_numerica_funcional(numeros2))
