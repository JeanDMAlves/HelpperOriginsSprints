const botao_editar: HTMLInputElement = document.getElementById('editar-conteudo') as HTMLInputElement

botao_editar.addEventListener('click', function (event) {
    
    event.preventDefault();

    let [id, name, bio]: Array<HTMLInputElement> = pega_dados()
    
    let dados_tabela: HTMLCollection = document.getElementById('dados_tabela').children

    for(let i=0; i<dados_tabela.length;i++){

        let dados_linha = dados_tabela[i].children

        if(dados_linha[0].innerHTML == id.value){
            dados_linha[1].innerHTML = name.value
            dados_linha[2].innerHTML = bio.value
            return
        }
    }

    adiciona_dados_tabela(id, name, bio)

})

const pega_dados = ():Array<HTMLInputElement> => {

    let id: HTMLInputElement = document.getElementById('id') as HTMLInputElement
    let name: HTMLInputElement = document.getElementById('name') as HTMLInputElement
    let bio: HTMLInputElement = document.getElementById('bio') as HTMLInputElement
    return [id, name, bio]

}

const adiciona_dados_tabela = (id:HTMLInputElement, name:HTMLInputElement, bio:HTMLInputElement) => {
    let tabela = document.getElementById('dados_tabela')

    let elemento = montaTr(id, name, bio)
    tabela.appendChild(elemento)
}

const montaTd = (dados:any) => {

    let td = document.createElement('td')
    td.textContent = dados
    td.classList.add('tabela-conteudo')
    
    return td
}

const montaTr = (id:HTMLInputElement, name:HTMLInputElement, bio:HTMLInputElement):HTMLTableRowElement => {
    let linha = document.createElement('tr')
    linha.id = id.value
    
    linha.appendChild(montaTd(id.value))
    linha.appendChild(montaTd(name.value))
    linha.appendChild(montaTd(bio.value))

    return linha
}

