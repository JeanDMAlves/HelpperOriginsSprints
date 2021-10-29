const botao_mostra_edicao: HTMLInputElement = document.getElementById('botao-mostra-edicao') as HTMLInputElement

botao_mostra_edicao.addEventListener('click', () => {
    let formulario:HTMLElement = document.getElementById('form-edita')

    if(formulario.classList.length > 0){
        formulario.classList.remove('esconde-formulario')
    }
    else{
        formulario.classList.add('esconde-formulario')
    }
});