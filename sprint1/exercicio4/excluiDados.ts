const botao_excluir = document.getElementById('botao-excluir-conteudo')

botao_excluir.addEventListener('click', () => {
    event.preventDefault()

    let id: HTMLInputElement = document.getElementById('id-exclusao') as HTMLInputElement
    
    let dados_tabela: HTMLCollection = document.getElementById('dados_tabela').children

    for(let i=0; i<dados_tabela.length;i++){

        let dados_linha = dados_tabela[i].children 

        if(dados_linha[0].innerHTML == id.value){
            let item_excluir = document.getElementById(id.value)
            item_excluir.remove()
        }
    }
})