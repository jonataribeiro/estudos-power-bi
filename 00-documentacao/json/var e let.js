// VAR X LET X CONST

// O filho tem acesso às varáveis do pai, embora, o que foi criado dentro do filho, o pai não tem acesso por segurança.
//continuação: O var, ele é diferente, eu consigo ter acesso mesmo fora do escopo.

if (true) {

    var myVar = "Hello" // NÃO USAMOS MAIS O VAR

    let myLet = "Olá"
    const myConst = "Hei"

}

console.log(myVar)

// eu criei o var dentro do if, mas acredite, é muito perigoso, por isso que, hoje em dia, a gente usa só let e const.