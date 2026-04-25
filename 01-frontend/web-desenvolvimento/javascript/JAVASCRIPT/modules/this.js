/*
THIS

this em inglês significa: este, esta, isto...
No Javascript, o this faz referência:

Node: module.exports
Web: window

Escopo:

    Global >>> Quando começamos a escrever nossa aplicação.
    No contexto global, o this faz referência ao objeto global,
    que é o objeto window no navegador de internet ou ao objeto global no Node.js.

    Local >>> por exemplo, dentro de uma função.

*/

/*
const name = "Roberto" // Escopo Global

function myName() {
    const myName = "Roberto" // Escopo Local
}
*/

//global.console.log("Olá, planeta")

const person = {
    name: "Roberto",
    age: 25,
    talk: function(){
        console.log(this.name)
    }
}

function myFunction(){
    this.console.log("Agora eu sou global")
}

// person.talk()