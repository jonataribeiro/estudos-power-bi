/*
Filter: O método Filter serve para filtrar array. Ele passará por todos os valores do array
e você decidirá quais valores vão para seu novo array, e quais vão ser descartados.

/*const novaArray = arrayOriginal.filter((valorAtual, índice, arrayOriginal) => {
    seu código aqui
    });

    1) O filter vai passar por todos os itens do array, e o primeiro parâmetro é
    cada ítem, um por vez do array que estamos filtrando. Item OBRIGATÓRIO.
    2) O índice é a posição atual qeu estamos filtrando. Item OPCIONAL.
    3) Uma cópia do array original. Item OPCIONAL.

    A cada ítem, fazemos uma 'pergunta' ao código. Se a resposta for verdadeira naquele pitem,
    ele guardará o valorAtual no novo array.
    Caso seja falso, o valor será descartado.

    */

/*
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = numeros.filter(valorAtual => valorAtual % 2 === 0 );
*/
// pares ficou assim... [2, 4, 6, 8, 10]
// numbers continua... [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


/* return true  -> Item atual passa pro novo array
return false    -> Item atual NÃO passa pro novo array
*/



/*
const list = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000]

const newList = list.filter(number => {
    if (number < 100 || number % 2 === 0) {
        return true
    } else {
        return false
    }
})

console.log(newList)
*/





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
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
]


const newCompanies = companies.filter( company => {
    if(company.marketValue < 200 && company.foundedOn > 1990) return true
    else return false
})

console.log(newCompanies)

