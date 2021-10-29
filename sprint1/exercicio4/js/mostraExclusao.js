const botao_mostra_exclusao = document.getElementById('botao-mostra-exclusao');
botao_mostra_exclusao.addEventListener('click', () => {
    let formulario = document.getElementById('form-exclui');
    if (formulario.classList.length > 0) {
        formulario.classList.remove('esconde-formulario');
    }
    else {
        formulario.classList.add('esconde-formulario');
    }
});
//# sourceMappingURL=mostraExclusao.js.map