/*
Operadores Ternários

? if (se)
: else (se não)

*/

//const salary = 5000

//if(salary < 3000) {
//    console.log("O colaborador é Junior")
//} else {
//    console.log("Ele é Senior")
//}


// salary < 3000 ? console.log("O colaborador é Junior") : console.log("Ele é Senior")



const salary = 10500

if(salary < 3000) {
    console.log("O colaborador é Junior")
} else if(salary >= 3000 && salary < 10000) {
    console.log("Ele é Senior")
} else {
    console.log("Ele é diretor")
}


