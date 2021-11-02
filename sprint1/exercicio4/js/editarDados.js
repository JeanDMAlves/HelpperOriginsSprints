const botao_editar = document.getElementById('editar-conteudo');
botao_editar.addEventListener('click', function (event) {
    event.preventDefault();
    let [id, name, bio] = pega_dados();
    let dados_tabela = document.getElementById('dados_tabela').children;
    for (let i = 0; i < dados_tabela.length; i++) {
        let dados_linha = dados_tabela[i].children;
        if (dados_linha[0].innerHTML == id.value) {
            dados_linha[1].innerHTML = name.value;
            dados_linha[2].innerHTML = bio.value;
            return;
        }
    }
    adiciona_dados_tabela(id, name, bio);
});
const pega_dados = () => {
    let id = document.getElementById('id');
    let name = document.getElementById('name');
    let bio = document.getElementById('bio');
    return [id, name, bio];
};
const adiciona_dados_tabela = (id, name, bio) => {
    let tabela = document.getElementById('dados_tabela');
    let elemento = montaTr(id, name, bio);
    tabela.appendChild(elemento);
};
const montaTd = (dados) => {
    let td = document.createElement('td');
    td.textContent = dados;
    td.classList.add('tabela-conteudo');
    return td;
};
const montaTr = (id, name, bio) => {
    let linha = document.createElement('tr');
    linha.id = id.value;
    linha.appendChild(montaTd(id.value));
    linha.appendChild(montaTd(name.value));
    linha.appendChild(montaTd(bio.value));
    return linha;
};
//# sourceMappingURL=editarDados.js.map