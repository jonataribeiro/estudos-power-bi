/*
Reduce: O método reduce serve para reduzir um array a apenas um item. Como assim?
Ele vai passar item por item no array e no final vai restar apenas um valor.

O Reduce aceita até 4 parâmetros:

const novoArray = arrayOriginal.reduce(
    (acumulador, valorAtual, índice, arrayOriginal) => {
        return xxxxxx
    }, valorInicial);


    1) O acumulador, na primeira interação terá o valor inicial que daremos a ele.
        Já nas demais iterações, ele terá o valor que iremos acumular nele.
        Item OBRIGATÓORIO.

    2) O valor do atual elemento sendo iterado. Item OBRIGATÓRIO.
    3) O índice do elemento atual. Item OPCIONAL.
    4) O array Original. Item OPCIONAL.

    */

/*
    const numbers = [1, 2, 3, 4, 5];

    const total = numbers.reduce((acumulador, atual) => {
        return acumulador = acumulador + numero;
    }, 0)
*/



/*
O que aconteceu aqui? Definimos um valor inicial para o acumulador.
Então ele começou a somar número a número dentro do array.

Na primeira iteração é assim:

    acumulador = acumulador(0) + atual(1) -> Agora acumulador valerá 1

    Na segunda iteração, agora acumulador vale 1.

    acumulador = acumulador(1) + atual(2) -> Agora acumulador valerá 3.
*/

// total é igual a 15;
// numbers continua... [1, 2, 3, 4];


/* REDUCE

- RETORNA UM VALOR (PODE SER UM NOVO ARRAY, UM OBJETO, STRING, NUMBER, ETC.)
- ACEITA 4 PARÂMETROS
    - ACUMULADOR
    - VALOR ATUAL
    - INDEX
    - ARRAY COMPLETO
*/





const list = [1, 2, 3, 4, 5, 6, 7];

const sum = list.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual

}, 0)

//console.log(sum)




/*
const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    {
        name: 'Microsoft',
        marketValue: 415,
        CEO: 'Satya Nadela',
        foundedOn: 1975,
    },

    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    {
        name: 'Facebook',
        marketValue: 383,
        CEO: 'Mark Zuckerberg',
        foundedOn: 2004,
    },

    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    {
        name: 'Apple',
        marketValue: 845,
        CEO: 'Tim Cook',
        foundedOn: 1976,
    },
]


const marketValue = companies.reduce( (acc, value) => {
    return acc + value.marketValue
}, 0)

console.log(marketValue)
*/


/*
const cart = [
    { productName: 'Abóbora', pricePerkg: 5, kg: 1 }, // 5 reais
    { productName: 'Pepino', pricePerkg: 3.55, kg: 1.3 }, // 4,60 reais
    { productName: 'Limão', pricePerkg: 1.2, kg: 2 },
    { productName: 'Abacate', pricePerkg: 5.4, kg: 1.67 },
    { productName: 'Morango', pricePerkg: 11.9, kg: 3 },
]

const finalValue = cart.reduce((acc, value) => {
    const result = value.pricePerkg * value.kg
    return acc + result
}, 0)

console.log(`A sua compra ficou no total de: ${finalValue}`)

*/


const cart = [
    { productName: 'iPhone', price: 5250, quantity: 3 },
    { productName: 'Samsung', price: 3500, quantity: 1 },
    { productName: 'Xiaomi', price: 1200, quantity: 2 },
    { productName: 'Samsung', price: 2500, quantity: 2 },
    { productName: 'iPhone', price: 9700, quantity: 3 },
]


const finalValue = cart.reduce((acc, value) => {
    const result = value.price * value.quantity 
    return acc + result
}, 0)

console.log(`A sua compra ficou no total de: ${finalValue}`)
