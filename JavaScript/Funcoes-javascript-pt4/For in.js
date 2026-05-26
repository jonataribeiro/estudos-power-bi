/*

Estrutura de Repetição - LOOP

FOR IN

*/

const users = { name: 'Maria', age: 33, street: "Rua dos Anjos"}


for (const key in users) {
    console.log(`${key} : ${users[key]}`)

}

/*
for (const key in users) {
    console.log(key + " : " + users[key])

    
}


/*console.log(users['name'])

console.log(users.name)


/*for (const key in users) {
    console.log(key)
    
}
    */