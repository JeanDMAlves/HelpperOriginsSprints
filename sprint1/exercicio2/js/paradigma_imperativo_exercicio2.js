let lista2 = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
// A
const id_para_bio_imperativo = (array, id) => {
    for (var i = 0; i < array.length; i++) {
        if (array[i]['id'] == id) {
            return array[i]['bio'];
        }
    }
};
// B
const id_para_nome_imperativo = (array, id) => {
    for (var i = 0; i < array.length; i++) {
        if (array[i]['id'] == id) {
            array.splice(i, 1);
            return array[i]['name'];
        }
    }
};
// C
const apaga_item_imperativo = (array, id) => {
    for (var i = 0; i < array.length; i++) {
        if (array[i]['id'] == id) {
            array.splice(i, 1);
            return array;
        }
    }
};
// D
const altera_item_imperativo = (array, id, opcao, alteracao) => {
    for (var i = 0; i < array.length; i++) {
        if (array[i]['id'] == id) {
            if (opcao.toLowerCase() == 'bio') {
                array[i]["bio"] = alteracao;
            }
            else if (opcao.toLowerCase() == 'name') {
                array[i]["name"] = alteracao;
            }
            else {
                console.log('Opção não reconhecida, opções disponíveis para alteração: bio, name');
                return;
            }
            return array;
        }
    }
};
//# sourceMappingURL=paradigma_imperativo_exercicio2.js.map