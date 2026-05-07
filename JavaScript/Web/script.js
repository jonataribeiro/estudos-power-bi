console.log("Olá, JavaScript! Agora estou por aqui!");


/* document -> HTML

getElementById -> Pega o elemento pelo ID
getElementsByClassName -> Pega os elementos pela classe (retorna uma coleção de elementos)
getElementsByTagName -> Pega os elementos pela tag (retorna uma coleção de elementos)
querySelector -> Pega o primeiro elemento que corresponde ao seletor CSS
querySelectorAll -> Pega todos os elementos que correspondem ao seletor CSS (retorna uma NodeList)

const heading = document.getElementById("main-heading");
console.log(heading);

const buttons = document.getElementsByClassName("main-button");
console.log(buttons);

const paragraphs = document.getElementsByTagName("p");  
console.log(paragraphs);

const firstButton = document.querySelector(".main-button");
console.log(firstButton);

const allButtons = document.querySelectorAll(".main-button");
console.log(allButtons);
*/

/*
const input = document.getElementById("name-input")

console.log(input)
*/


/*
const elements = document.getElementsByClassName("paragraph-js");

console.log(elements)
*/



const elements = document.getElementsByName("nome-completo   ");

console.log(elements)
