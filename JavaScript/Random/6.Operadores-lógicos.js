/* Operadores Lógicos

&& -> E -> Pessoa Exigente // Pessoa Obediente
    true && true = true
    true && false = false
    false && false = false

|| -> Ou -> Tanto faz / Filho Espertinho
    true || true = true
    true || false = true
    false || false = false

    -> Negação

    !true = false
    !false = true
*/


// A Mariazinha é exigente. Ela NÃO  quer o Joãozinho
// Bonito &&(E) Inteligente &&(E) Programador &&(E) Tem que ter carro
// A Mariazinha quer tudo isso
// Não é Bonito / Inteligente / Programador / Tem Carro / Joãozinho


// A Luluzinha não é tão exigente. Ela quer o Paulinho
// Bonito ||(OU) Inteligente ||(OU) Programador ||(OU) Tem que ter carro // Luluzinha
// Não é Bonito / Burro / Não é Programador / Tem Carro // Paulinho


const digitarASenha = false
const digitarOToken = false
const numeroDaConta = false

if(digitarASenha || digitarOToken || numeroDaConta){
    console.log("Logado com sucesso")

} else {
    console.log("Autenticação FALHOU")
}
