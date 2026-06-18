/*
REDUCE
Retorna um único valor a partir de uma lista de valores.
A partir do array original, podemos reduzir seus valores a um único valor, seja ele um número, string, objeto ou até mesmo um array.
Não modifica o array original.
(Pode ser um novo array, um objeto, um número, uma string, etc).
Aceita 4 parâmetros:
1. accumulator: Acumulador que armazena o valor retornado na última invocação da função callback, ou o valor inicial, se fornecido.
2. currentValue: O valor do elemento atual que está sendo processado no array. (Item do array)
3. index (opcional): O índice do elemento atual que está sendo processado no array. (Posição do item no array)
4. array (opcional): O array original que está sendo percorrido. (O array completo)
Sintaxe: array.reduce(function(accumulator, currentValue, index, array) { // return the updated accumulator }, initialValue)
*/

/*

const list [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const sum = list.reduce((accumulator, valorAtual) => {
    console.log(accumulator + ' acc ')
    console.log(valorAtual + 'valorAtual')
    return accumulator + valorAtual
}, 0)

console.log(sum) // 55}

*/

const companies = [
    { name: 'Samsung', marketValue: 60, CEO: 'Kim Hyun Suk', foundedOn: 1938 },

    { name: 'Microsoft', marketValue: 507, CEO: 'Satya Nadella', foundedOn: 1975},

    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968},

    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004},

    { name: 'Google', marketValue: 527, CEO: 'Sundar Pichai', foundedOn: 1998},

    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976},

]


const marketValue = companies.reduce((acc,value) => {
    return acc + value.marketValue
}, 0)

console.log(marketValue) // 2439





const cart = [
    { productName: 'Abóbora', pricePerKg: 5.00, quantity: 2 }, // 10.00
    { productName: 'Banana', pricePerKg: 3.00, quantity: 1.5 }, // 4.50
    { productName: 'Alface', pricePerKg: 4.00, quantity: 1 }, // 4.00
    { productName: 'Carne', pricePerKg: 30.00, quantity: 0.750 }, // 22.50
    { productName: 'Frango', pricePerKg: 12.00, quantity: 2 }, // 24.00
    { productName: 'Detergente', pricePerKg: 8.00, quantity: 1 }, // 8.00
    { productName: 'Ervilha', pricePerKg: 4.00, quantity: 0.5 }, // 2.00
]

const totalPrice = cart.reduce((acc, value) => {
    return acc + (value.pricePerKg * value.quantity)
}, 0)

console.log(totalPrice) //  fifty two point five