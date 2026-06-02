/*
Functions / Funções
Função void (vazia), não retorna nada.
Função return, retorna um valor para quem chamou a função
*/

/*
function sum(value, value2) {
    console.log(value + value2)
}
*/



function sum(value, value2) {
    const result = value + value2
    return result
}

const myResult = sum(10, 20)
console.log(myResult + 'resultado')
