/* 
MAP => Mapear o nosso array.

Cria um novo array, a partir do array percorrido (array original)
Cria um novo array, co a mesma quantidade de itens do array original
aceita 3 parâmetros
    item do array
    index
    array completo
*/

/*
const number = [1, 2, 3, 4, 5, 6, 7]

const double = number.map((item) => {
    const newItem = item * 10
    return newItem
})

console.log(double)
*/


/*
const number = [1, 2, 3, 4, 5, 6, 7]

const double = number.map((item, index, arrayOriginal) => {
    console.log(item + ' -> item')
    console.log(index + ' -> index')
    console.log(arrayOriginal + 'arrayOriginal')
    const newItem = item * 10
    return newItem
})
    */

/*

const number = [1, 2, 3, 4, 5, 6, 7]

const double = number.map((item) => item * 2 ) // lembrando que, toda vez que se usa uma arrow function, automaticamente existe uma return

console.log(number)
console.log(double)
*/




/*
Pegar a nota atual.

Fazer uma perguntinha simples para o código (usando um if): "Essa nota já é 10?"

Se for 10: Você não faz nada, só devolve o 10.

Se for menor que 10: Você soma 1 ponto e devolve a nova nota.

Olha a estrutura básica de como você pode começar a montar o código:

*/

/*
const notasOriginais = [5, 7, 10, 8];

const notasComBonus = notasOriginais.map((nota) => {
  // 1. Se a nota for igual a 10, retorna a própria nota
  if (nota === 10) {
    return nota;
  }
  
  // 2. Se não for, soma 1 e retorna
  return nota + 1;
});

console.log(notasComBonus);
*/




/*
MAP -02

O Map aceita até 3 parâmetros:

const novoArray = arrayOriginal.map((valorAtual, indice, arrayOriginal) => xxx)


    1) O Map vai passar por todos os itensdo array, e o primeiro parâmetro é cada item,
    um por vez do array que estamos mapeando. Item OBRIGATÓRIO.
    2) O índice é a posição atual que estamos mapeando. Item OPCIONAL.
    3) Uma cópia do array original. ITEM OPCIONAL.

    */

/*

const numbers = [1, 2, 3, ];
const double = numbers.map((num) => num = 2);

// double ficou assim...    [2, 4, 6, 8];
// numbers continua...      [1, 2, 3, 4];

*/

/*const numbers = [1, 2, 3, ];
    const double = numbers.map((item) => item * 2)
*/


/*

const list = [
    { name: 'Maryana', vip: true },
    { name: 'Maria', vip: false },
    { name: 'Adriana', vip: true },
    { name: 'Eduarda', vip: true },
    { name: 'Patrícia', vip: false },
    { name: 'Valéria', vip: true },
    { name: 'Keila', vip: false },
]

const newList = list.map(user => {

    const newUser = {
        name: user.name,
        braceletColor: user.vip ? 'black' : 'green'
    }

    return newUser
})

console.log(newList)

*/


const students = [
    { name: 'Rodolfo', testGrade: 7 },
    { name: 'Maria', testGrade: 5 },
    { name: 'João', testGrade: 8 },
    { name: 'Bruno', testGrade: 9 },
    { name: 'Carla', testGrade: 3 },
    { name: 'Ana Maria', testGrade: 2 },
    { name: 'Juliano', testGrade: 10 },
]

/*
Nota: Usamos os parênteses `()` em volta das chaves `{}`
para o JavaScript saber que estamos retornando um objeto direto).*

Saber fazer do jeito detalhado (criando a variável interna) deixa o código muito legível.
Fazer do jeito reduzido mostra maturidade com a sintaxe moderna. Os dois caminhos são excelentes!
*/


const studentsStatus = students.map(student => {

    const newStudent = {
        name: student.name,
        status: student.testGrade >= 7 ? 'Aprovado' : 'Reprovado'
    }

    return newStudent
})

console.log(studentsStatus)

