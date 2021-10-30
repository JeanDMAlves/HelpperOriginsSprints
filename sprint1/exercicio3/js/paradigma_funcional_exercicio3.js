const informacoes_lista_numerica_funcional = (lista) => {
    if (lista.filter((item) => { return isNaN(item); }).length > 0) {
        console.log("A lista passada não é inteiramente numérica");
        return;
    }
    let maior_valor = lista.reduce((a, b) => { return Math.max(a, b); });
    let menor_valor = lista.reduce((a, b) => { return Math.min(a, b); });
    let soma_numeros = (a, b) => { return a + b; };
    let valor_medio = (lista.reduce(soma_numeros, 0)) / (lista.length);
    return [menor_valor, valor_medio, maior_valor];
};
let numeros2 = [0, 2, 3, 5, 1, 4, 8, 6, 7, 10, 9];
//# sourceMappingURL=paradigma_funcional_exercicio3.js.map