/*
String -> Textos
*/
const myAge = 30
const myCar = "BMW"

const myString = `Minha idade é ${myAge}, tô ficando velho.
Mas meu carro é um ${myCar}.`

console.log(myString)


/*
"Textos com aspas duplas"
"Textos com aspas simples"
`Textos com crase` // Template Literals ou Template Strings


Com a crase dá pra pular linhas
E também usar expressões: ${1 + 1}
*/
const name = "João"
const age = 25
const address = "Rua A, 123"

const João = {
    name: "João",
    age: 25,
    address: "Rua A, 123"
}

console.log(João.address)


/* Arrays -> Listas */
const fruits = ["Maçã", "Banana", "Laranja"]
console.log(fruits[1]) // Acessando o segundo item da lista (índice 1)

const users = [20, 40, 989]

users[2] = 1000 // Atualizando o terceiro item da lista (índice 2)
console.log(users)

/*
Controlador de Fluxo
If(SE)
Else(SENÃO)

Operadores de comparação:
==  -> Igual a
=== -> Estritamente igual a (valor e tipo)
!=  -> Diferente de
!== -> Estritamente diferente de (valor e tipo)
>   -> Maior que
<   -> Menor que
>=  -> Maior ou igual a
<=  -> Menor ou igual a
*/

const notaDoAluno = 10
const notaDeCorte = 5

if (notaDoAluno > notaDeCorte) {
    // Bloco de código executado se a condição for verdadeira
    console.log("Aluno aprovado!")
}
else {
    // Bloco de código executado se a condição for falsa
    console.log("Aluno reprovado!")
}


/* Functions -> Funções 
Trecho de código que é executado SOMENTE quando solicitado*/

const variavel = "Abacate"

console.log(variavel)
function nomeNaTela() {
    console.log("João da Silva")
}

nomeNaTela() // Chamando a função para executar o código dentro dela
