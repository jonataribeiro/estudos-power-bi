/*

MAP => Mapear o nosso array para criar um novo array com base em uma função.
- Cria um novo array com os resultados da chamada de uma função para cada elemento do array.
A partir do array construído, podemos criar um novo array com os valores modificados conforme a função passada como parâmetro.
- Cria um novo array sem modificar o array original.
- Não modifica o array original.
- Retorna um novo array com a mesma quantidade de elementos do array original.
- Sintaxe: array.map(function(currentValue, index, array) { // return element for newArray })
- Aceita 3 parâmetros:
 1. currentValue: O valor do elemento atual que está sendo processado no array. (Item do array)
 2. index (opcional): O índice do elemento atual que está sendo processado no array. (Posição do item no array)
 3. array (opcional): O array original que está sendo percorrido. (O array completo)
*/




/*
const number = [1, 2, 3, 4, 5, 6, 7]

const double = number.map((item) => item * 2 )

const list = [
    { name: 'Ana', vip: true },
    { name: 'Bia', vip: false },
    { name: 'Carlos', vip: true },
    { name: 'Daniel', vip: true },
    { name: 'Gui', vip: false },
    { name: 'Rebeca', vip: true},
    { name: 'Arthur', vip: false },
    
]

const newList = list.map( user => {
    let braceletColor

    if(braceletColor === true) {
        braceletColor = 'black'
    } else {
        braceletColor = 'green'
    }
    const newUser = {
        name: user.name,
        braceletColor: braceletColor
    }

    return newUser

})

console.log(newList)
*/





const students = [
    { name: 'Ana', grade: 7 },
    { name: 'Bia', grade: 4 },
    { name: 'Carlos', grade: 8 },
    { name: 'John', grade: 6 },
    { name: 'Gui', grade: 3 },
    { name: 'Rebeca', grade: 9},
    { name: 'Arthur', grade: 5 },
]


const newStudentsResult = students.map( student => {
    return {
        name: student.name,
        grade: student.grade >= 7 ? 'Aprovado' : 'Reprovado'
    }
})

console.log(newStudentsResult)



/*
const number = [1, 2, 3, 4, 5, 6, 7]

const double = number.map(item, index, ArrayOriginal) => {
    console.log(item + ' -> item')
    console.log(index + '-> index')
    console.log(ArrayOriginal + ' ArrayOriginal')
    const newItem = item * 2
    return newItem
}

console.log(number) // [1, 2, 3, 4, 5, 6, 7]
console.log(double) // [2, 4, 6, 8, 10]

const list = [
]


const listNames = list.map((item) => {
    return item.name
})

console.log(listNames) // ['Ana', 'Bia', 'Carlos', 'John', 'Gui', 'Rebeca', 'Arthur']

*/