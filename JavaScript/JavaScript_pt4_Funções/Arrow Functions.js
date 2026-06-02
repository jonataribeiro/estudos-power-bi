/*
Arrow Function

Functions / Funções

function padrão -> function() {}

arrow function -> () => {}

    Não escrevemos "function".

    Além disso, usamos o sinal "=>" para criá-la,
    o que lembra uma flecha, fazendo jus ao nome "Arrow Functions".
    */

function sayMyName(name){
    return `Seu nome é ${name}`
}

/*sayMyName2 = (name) => `Seu nome é ${name}` // quando tenho uma parâmetro só, eu não preciso colocar os parênteses (name)
*/

/*
const sayMyName2 = name => {
    return `Seu nome é ${name}` //E caso eu precise de mais linhas, é só colocar os colchetes na arrow fucntion
}

console.log(sayMyName('Jônata Ribeiro'))
console.log(sayMyName2('Nicole'))
*/


const sum = (number1, number2) => number1 + number2 // Para economizar código na mesma linha, return, se pular linha, não tem return


console.log(sayMyName('Jônata Ribeiro'))
console.log(sum(2,3))
