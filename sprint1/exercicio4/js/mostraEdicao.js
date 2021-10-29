const botao_mostra_edicao = document.getElementById('botao-mostra-edicao');
botao_mostra_edicao.addEventListener('click', () => {
    let formulario = document.getElementById('form-edita');
    if (formulario.classList.length > 0) {
        formulario.classList.remove('esconde-formulario');
    }
    else {
        formulario.classList.add('esconde-formulario');
    }
});
//# sourceMappingURL=mostraEdicao.js.map