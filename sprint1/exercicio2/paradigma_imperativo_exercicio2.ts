let lista2: Array<object> = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."},
    {"id":5}
];

interface Person{
    id?:number;
    name?:string;
    bio?:string;
}


// A
const id_para_bio_imperativo = (array: Array<Person>, id:number): string => {
    for(var i:number=0; i<array.length; i++){
        if(array[i].id == id){
            let biografia:string = array[i].bio
            if (biografia == undefined){
                return 'Biografia não encontrada'
            }
            else{
                return biografia
            }
        }
    }
    return 'Id não encontrado'
}

// B
const id_para_nome_imperativo = (array: Array<Person>, id:number): string => {
    for(var i:number=0; i<array.length; i++){
        if(array[i].id == id){
            let nome:string = array[i].name
            if (nome == undefined){
                return 'Nome não encontrado'
            }
            else{
                return nome
            }
        }
    }
    return 'Id não encontrado'
}

// C

const apaga_item_imperativo = (array: Array<Person>, id:number) => {
    for(var i:number=0; i<array.length; i++){
        if(array[i].id == id){
            array.splice(i,1)
            return array
        }
    }
    
    return 'Id não encontrado'
}

// D
const altera_item_imperativo = (array: Array<Person>, id: number, opcao: string, alteracao: string) => {
    
    for(var i:number=0; i<array.length; i++){
        let item = array[i]
        if(item.id == id){
            if(opcao.toLowerCase() == 'bio'){
                item.bio = alteracao
            }
            else if(opcao.toLowerCase() == 'name'){
                item.name = alteracao
            }
            else{
                return 'Opção não reconhecida, opções disponíveis para alteração: bio, name'
            }
            return array
        }
    }
    return 'Id não encontrado'
    
    
}