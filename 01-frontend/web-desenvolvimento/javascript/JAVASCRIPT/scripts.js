/*

document -> HTML

getElementById() -> select an element by its ID
getElementsByClassName() -> Trás todos os elementos com uma determinada classe
getElementsByTagName() -> Trás todos os elementos com uma determinada tag
getElementsByName() -> Trás todos os elementos com um determinado nome
querySelector -> Trás um elemento, o primeiro que encontrar, baseado em um seletor CSS
querySelectorAll -> Trás todos os elementos que encontrar, baseado em um seletor CSS
createElement() -> Cria um novo elemento HTML
appendChild() -> Adiciona um elemento filho a um elemento pai
removeChild() -> Remove um elemento filho de um elemento pai
innerHTML -> Permite acessar ou modificar o conteúdo HTML de um elemento
textContent -> Permite acessar ou modificar o conteúdo de texto de um elemento
setAttribute() -> Define um atributo para um elemento
getAttribute() -> Obtém o valor de um atributo de um elemento
addEventListener() -> Adiciona um ouvinte de eventos a um elemento
removeEventListener() -> Remove um ouvinte de eventos de um elemento
*/



/*const input = document.getElementById("main-input")
console.log(input)
*/

/*const elements = document.getElementsByClassName("paragraph-js")

console.log(elements)
*/

/*const elements = document.getElementsByName("nome-completo")

console.log(elements)*/

/*const elements = document.querySelector("#main-input") /*(".paragraph-js")*/

/*console.log(elements)*/


/*const elements = document.querySelectorAll("p")

console.log(elements)*/


/*

const element = document.querySelector(".paragraph-js")

console.log(element.textContent) // Só HTML 
console.log(element.innerText) // Leva em conta o CSS (Trás só o que está visível na tela)
console.log(element.innerHTML) // Trás tudo, inclusive o que está escondido pelo CSS e permite adicionar HTML


const button = document.querySelector("h1")

button.style.fontSize = "100px"
*/

/*
const input = document.querySelector("#main-input")
function clqueiNoBotao() {
    alert("Você clicou no botão!")
}

function digiteiNoInput() {
    console.log(input.value)
}
*/

const input = document.querySelector("#main-input")
const select = document.querySelector("select")
const button = document.querySelector(".main-button")

function troqueiValor(abacate) {
    console.log(abacate)
}
select.addEventListener("change", troqueiValor)