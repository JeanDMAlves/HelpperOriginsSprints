let lista = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
const item_por_id = (array, id) => {
    // Compara o parâmetro ID com todos os itens da lista, se não achar retorna Undefined   
    let item = array.filter(objeto => objeto['id'] == id);
    return item[0];
};
// A
const id_para_bio = (array, id) => {
    // Retorna a biografia através do ID
    return item_por_id(array, id)['bio'];
};
// B
const id_para_nome = (array, id) => {
    // Retorna o nome através do ID
    return item_por_id(array, id)['name'];
};
// C
const apaga_item = (array, id) => {
    let indice_item = array.indexOf(item_por_id(array, id));
    array.splice(indice_item, 1);
    return array;
};
// D
const altera_item = (array, id, opcao, alteracao) => {
    let item = array.indexOf(item_por_id(array, id));
    if (opcao.toLowerCase() == 'bio') {
        array[item]["bio"] = alteracao;
    }
    else if (opcao.toLowerCase() == 'name') {
        array[item]["name"] = alteracao;
    }
    else {
        console.log('Opção não reconhecida, opções disponíveis para alteração: bio, name');
        return;
    }
    return array;
};
//# sourceMappingURL=paradigma_funcional_exercicio2.js.map