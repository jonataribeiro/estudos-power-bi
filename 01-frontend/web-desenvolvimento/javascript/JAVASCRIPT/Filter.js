/*
FILTER

- Cria um novo array, a partir do array percorrido, com os elementos que passaram no teste implementado pela função fornecida.
- Não modifica o array original.
- Retorna um novo array com a quantidade de elementos filtrados (pode ser menor ou igual ao array original).
- Cria um novo array com todos os elementos que passaram no teste.
- Sintaxe: array.filter(function(currentValue, index, array) { // return true to keep the element, false otherwise })
- Aceita 3 parâmetros:
    1. currentValue: O valor do elemento atual que está sendo processado no array. (Item do array)
    2. index (opcional): O índice do elemento atual que está sendo processado no array. (Posição do item no array)
    3. array (opcional): O array original que está sendo percorrido. (O array completo)

    return true: mantém o elemento no novo array
    return false: remove o elemento do novo array
*/

/*
const list = [20, 30, 15, 25, 10, 5, 40, 50, 35, 45]

const newList = list.filter(number => {
    if(number >= 25) {
        return true
    } else {
        return false
    }
})

console.log(newList) // [30, 25, 40, 50, 35, 45]

*/



const companies = [
    { name: 'Samsung', marketValue: 60, CEO: 'Kim Hyun Suk', foundedOn: 1938 },

    { name: 'Microsoft', marketValue: 507, CEO: 'Satya Nadella', foundedOn: 1975},

    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968},

    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004},

    { name: 'Google', marketValue: 527, CEO: 'Sundar Pichai', foundedOn: 1998},

    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976},

]

const newCompanies = companies.filter( company => {
    if(company.marketValue > 200 && company.foundedOn > 1990) return true
    else return false

})
console.log(newCompanies) 



/*
[
  { name: 'Microsoft', marketValue: 507, CEO: 'Satya Nadella', foundedOn: 1975 },
  { name: 'Google', marketValue: 527, CEO: 'Sundar Pichai', foundedOn: 1998 },
  { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 }
]
*/


/*const marketValue = companies.reduce((acc,value) => {
    return acc + value.marketValue
}, 0)

console.log(marketValue) // 2439
*/