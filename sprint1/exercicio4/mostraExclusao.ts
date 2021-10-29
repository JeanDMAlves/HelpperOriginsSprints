const botao_mostra_exclusao: HTMLInputElement = document.getElementById('botao-mostra-exclusao') as HTMLInputElement

botao_mostra_exclusao.addEventListener('click', () => {
    let formulario:HTMLElement = document.getElementById('form-exclui')

    if(formulario.classList.length > 0){
        formulario.classList.remove('esconde-formulario')
    }
    else{
        formulario.classList.add('esconde-formulario')
    }
});