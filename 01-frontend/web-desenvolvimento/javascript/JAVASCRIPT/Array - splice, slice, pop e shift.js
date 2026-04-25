/*
Array's
- push -> Adiciona mais um elemento no final do array
- length -> Retorna o tamanho do array
- sort -> Ordena e organiza os elementos do array
- delete -> Remove um elemento do array (deixa um "buraco" no array)
- every -> Esse método testa se todos os elementos do Array e retorna true ou false
- some -> O .some() faz algo parecido com o .every(), mas ao invés de testar se todos os elementos passam no teste, ele testa se ao menos um elemento passa no teste.
- fill -> Preenche oposições do array como desejarmos
- find -> Usamos esse método quando queremos encontrar um elemento dentro do array que satisfaça uma condição.
- findIndex -> Faz o mesmo que o find(), mas retorna o índice do elemento ao invés do valor.
- concat -> Usado para concatenar (juntar) dois ou mais arrays


- includes -> O método includes() verifica se um determinado elemento existe no array, retornando true ou false conforme o caso.
- join -> O método join() junta todos os elementos de um array em uma string.
- slice -> O método slice() retorna uma cópia de uma parte do array dentro de um novo array.
- splice -> O método splice() altera o conteúdo de um array, adicionando novos elementos enquanto remove elementos antigos.
- pop -> O método pop() remove o último elemento de um array e retorna esse elemento.
- shift -> O método shift() remove o primeiro elemento de um array e retorna esse elemento.
*/


/*
const myArray = ['Rodolfo', 'Maria', 'João', 'Ana']
myArray.sort()
console.log(myArray)
*/


const users = [
    { name: 'Rodolfo', credit: 900 },
    { name: 'Maria', credit: 300 },
    { name: 'João', credit: 205 },
    { name: 'Ana', credit: 275 },
]

const isTrue = users.every(user => user.credit > 300) // some -> pelo menos um // every -> todos na validação

console.log(isTrue)

 