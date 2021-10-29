const botao_editar = document.getElementById('editar-conteudo');
botao_editar.addEventListener('click', function () {
    event.preventDefault();
    let [id, name, bio] = pega_dados();
    let dados_tabela = document.getElementById('dados_tabela').children;
    for (let i = 0; i < dados_tabela.length; i++) {
        let dados_linha = dados_tabela[i].children;
        if (dados_linha[0].innerHTML == id.value) {
            dados_linha[1].innerHTML = name.value;
            dados_linha[2].innerHTML = bio.value;
        }
    }
});
const pega_dados = () => {
    let id = document.getElementById('id');
    let name = document.getElementById('name');
    let bio = document.getElementById('bio');
    return [id, name, bio];
};
//# sourceMappingURL=editarDados.js.map