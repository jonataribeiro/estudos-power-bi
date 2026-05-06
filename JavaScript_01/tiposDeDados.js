/*
1. String -> Textos.
2. Number -> Números.
3. Boolean -> Verdadeiro ou Falso.
4. Undefined -> Variável declarada, mas sem valor atribuído.
5. Null -> Representa a ausência intencional de valor.
6. Symbol -> Valor único e imutável, usado principalmente para identificar propriedades de objetos.
7. BigInt -> Para representar números inteiros muito grandes que excedem o limite do tipo Number.



let nome = "Maria"; // String
let idade = 25; // Number
let isStudent = true; // Boolean
let endereco; // Undefined
let telefone = null; // Null
let id = Symbol("id"); // Symbol
let bigNumber = 9007199254740991n; // BigInt


const texto1 = "Olá, mundo!";
const texto2 = 'JavaScript é incrível!';
const texto3 = `Hoje é um ótimo dia para aprender JavaScript!`; // Template literals ou template strings, permitem interpolação de variáveis e expressões dentro de strings usando a sintaxe ${expressão}.

 
console.log(texto1);
console.log(texto2);
console.log(texto3);


---------------------------------------------------------

Array

const myArray = [20, 30, 40, 50, 'JavaScript', true, null, undefined, { name: 'Maria' }, [1, 2, 3]];

console.log(myArray);

---------------------------------------------------------
*/


/* if e else 

    Controlador de |Fluxo

    - IF(Se) -> Se a condição for verdadeira, o bloco de código dentro do if será executado.
    - ELSE(Senão) -> Se a condição for falsa, o bloco de código dentro do else será executado.


    Operadores de comparação:
    - == (igual a) -> Compara os valores, mas não os tipos. Pode levar a resultados inesperados devido à coerção de tipo.
    - === (estritamente igual a) -> Compara tanto os valores quanto os tipos, garantindo que ambos sejam iguais.
    - != (diferente de) -> Compara os valores, mas não os tipos. Pode levar a resultados inesperados devido à coerção de tipo.
    - !== (estritamente diferente de) -> Compara tanto os valores quanto os tipos, garantindo que ambos sejam diferentes.
    - > (maior que) -> Verifica se o valor à esquerda é maior que o valor à direita.
    - < (menor que) -> Verifica se o valor à esquerda é menor que o valor à direita.
    - >= (maior ou igual a) -> Verifica se o valor à esquerda é maior ou igual ao valor à direita.
    - <= (menor ou igual a)


let numero = 10;

if (numero > 5) {
    console.log("O número é maior que 5.");
} else {
    console.log("O número é menor ou igual a 5.");
}



const notaDoAluno = 80;
const notaDeCorte = 60;

if (notaDoAluno >= notaDeCorte) {
    console.log("Parabéns! Você passou no exame.");
} else {
    console.log("Infelizmente, você não passou no exame. Tente novamente.");
}

*/


/* Functions / Funções

Funções são blocos de código reutilizáveis que realizam uma tarefa específica. Elas podem receber parâmetros, executar ações e retornar valores.
- function declaration (declaração de função): A forma tradicional de definir uma função. Ela é "hoisted", o que significa que pode ser chamada antes de sua definição no código.
- function expression (expressão de função): Uma função definida como parte de uma expressão. Não é "hoisted", então só pode ser chamada após sua definição.
- arrow function (função de seta): Introduzida no ES6, é uma forma mais concisa de escrever funções. Não tem seu próprio `this`, `arguments`, `super` ou `new.target`, e não pode ser usada como construtora.

// Function declaration
function saudacao(nome)
{
    return `Olá, ${nome}!`;
}

console.log(saudacao("Maria"));

// Function expression
const saudacao2 = function(nome) {
    return `Olá, ${nome}!`;
};

console.log(saudacao2("João"));

// Arrow function
const saudacao3 = (nome) => {
    return `Olá, ${nome}!`;
};

console.log(saudacao3("Ana"));

// Arrow function com sintaxe mais curta
const saudacao4 = nome => `Olá, ${nome}!`;

console.log(saudacao4("Carlos"));

*/


const variavel = "Olá, mundo!"; // String

console.log(variavel);

function nomeNaTela(nome) {
    console.log(`Olá, ${nome}!`);
}
nomeNaTela("Maria");


