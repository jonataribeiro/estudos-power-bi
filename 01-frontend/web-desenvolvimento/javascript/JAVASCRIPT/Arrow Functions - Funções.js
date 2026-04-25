/*
Functions / Funções
A função é um bloco de código projetado para executar uma tarefa específica.
Uma função em JavaScript é executada quando "algo" a invoca (chama).

function padrão: () {}
arrow function: () => {}

Não escrevemos nomes das funções com acentos, espaços ou caracteres especiais.
"functions", nem usamos "return" (retornar) explicitamente.
Além disso, as arrow functions são sempre anônimas (sem nome).
Usamos o sinal "=>" para separar os parâmetros (entrada) do corpo da função (código a ser executado).
o que lembra uma seta apontando para a direita.
*/

function sayMyName(name){
    return `Seu nome é: ${name}`
}

const sayMyName2 = (name) => `Seu nome é: ${name}`

console.log(sayMyName("Rodolfo"))
console.log(sayMyName("Maria"))
console.log(sayMyName("João"))
console.log(sayMyName("Ana"))
console.log(sayMyName("Camyla"))
console.log(sayMyName("Aline"))
console.log(sayMyName("Pedro"))
console.log(sayMyName("Lucas"))
console.log(sayMyName("Juliana"))
console.log(sayMyName("Fernanda"))

