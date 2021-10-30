let lista: Array<Person> = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."},
    {"id": 5}
];

interface Person{
    id?:number;
    name?:string;
    bio?:string;
}

const verifica_existencia_item = (array: Array<Person>, id:number) => {
    let item = array.filter(objeto => objeto['id'] == id)
    if(item.length == 0){
        return false
    }
    else{
        return true
    } 
}

const item_por_id = (array: Array<Person>, id:number):Person => {
    // Compara o parâmetro ID com todos os itens da lista, se não achar retorna Undefined   
    let item = array.filter(objeto => objeto['id'] == id)
    if(verifica_existencia_item(array, id)){
        return item[0]
    }
}

// A
const id_para_bio = (array: Array<Person>, id:number):string => {
    // Retorna a biografia através do ID
    if(verifica_existencia_item(array, id)){
        let item:string = item_por_id(array, id).bio
        if(item === undefined){ return 'O ID passado não possui biografia' }
        else{ return item }
    }
    else{ return 'O item não existe' }
}

// B
const id_para_nome = (array: Array<Person>, id:number):string => {
    // Retorna o nome através do ID
    if(verifica_existencia_item(array, id)){
        let item:string = item_por_id(array, id).name
        if(item === undefined){ return 'O ID passado não possui nome' }
        else{ return item }
    }
    else{ return 'O item não existe' }
}

// C
const apaga_item = (array: Array<Person>, id:number) => {
    if(verifica_existencia_item(array, id)){
        let indice_item = array.indexOf(item_por_id(array, id)) 
        array.splice(indice_item, 1)
        return array
    }
    else{
        return 'O item não existe'
    }
}

// D
const altera_item = (array: Array<Person>, id: number, opcao: string, alteracao: string) => {

    if(verifica_existencia_item(array, id)){
        let item = array.indexOf(item_por_id(array, id)) 
    
        if(opcao.toLowerCase() == 'bio'){
            array[item].bio = alteracao
        }
        else if(opcao.toLowerCase() == 'name'){
            array[item].name = alteracao
        }
        else{
            console.log('Opção não reconhecida, opções disponíveis para alteração: bio, name')
            return 
        }
        return array
    }
    else{
        return 'O item não existe'
    }
}
