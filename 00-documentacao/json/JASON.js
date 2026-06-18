/*
JSON - JavaScript Object Notation

- Padrão de troca e armazenamento de informações
- Padrão lógico simples
- Leve para ser enviado e recebido
- Simples e fácil de entender
- Derivado do Javascript
- Utiliza o formato chave / valor

*/

const user = {
    nome: "Jônata",
    idade: 31,
    filhos: null,
    hobbies: ["Codar", "Filmes", "Séries", "Academia"],
    casado: true,
    empresas: {
        DevClub: {
            fundada: 2021,
            colaboradores: 40
        },
        HannahPerfumes: {
            fundada: 2023,
            colaboradores: 4
        },
        Atlas: {
            fundada: 2023,
            colaboradores: 6
        },
        Cagepa: {
            fundada: 2008,
            colaboradores: 1658
        }
    }
}



const userJson = JSON.stringify(user)

const userJsonToJS = JSON.parse(userJson)
console.log(userJsonToJS)