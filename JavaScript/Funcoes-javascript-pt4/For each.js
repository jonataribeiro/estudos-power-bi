/*
ForEach(item, index, array)
*/

const users = [
    { name: 'Maria', age: 33, contact: '(11) 94545-3030' },
    { name: 'Mayara', age: 21, contact: '(11) 94545-5050' },
    { name: 'Carla', age: 40, contact: '(11) 94545-8888' },
    { name: 'Amanda', age: 12, contact: '(11) 94545-9966' },
]


// Coisa mais organizada e padrão
users.forEach(function (item) {
    console.log(`Nome: ${item.name}, Idade: ${item.age}, Contato: ${item.contact}`)
});




/*
users.forEach(function (item, i, array) {
    console.log(i)
    console.log(item)
    console.log(array)

});

*/