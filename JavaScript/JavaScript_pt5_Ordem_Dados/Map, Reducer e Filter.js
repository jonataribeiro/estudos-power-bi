/*
const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadela', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
]

// Conectando o filter direto no map:
const ceosDeEmpresasPromissoras = companies
    .filter(company => company.marketValue < 200 && company.foundedOn > 1990)
    .map(company => company.CEO)

console.log(ceosDeEmpresasPromissoras)
// O resultado no seu terminal será: [ 'Daniel Ek' ]
*/


/*
const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadela', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 }
];
*/

/*
Adicionar 10% de valor de mercado a todas as companhias -> MAP
Filtrar somente companhias fundadas abaixo de 1990 -> FILTER
Somar o valor de mercado das restantes -> REDUCE
*/



/*
const add10Percent = (company) => {
    company.marketValue = company.marketValue + company.marketValue / 10

    return company
}

const filterCompanies = (company) => company.foundedOn < 1990

const calculateTotalMarketValue = (acc, company) => acc + company.marketValue


const marketValueOldCompanies = companies
    .map(add10Percent)        // Etapa 1: Aumento de 10%
    .filter(filterCompanies)  // Etapa 2: Peneira dos antigos
    .reduce(calculateTotalMarketValue, 0) // Etapa 3: Soma total

console.log(marketValueOldCompanies)
*/



/*
const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadela', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 }
];

// 1. Criamos a função copiando o objeto com ...company e multiplicando por 1.1 (+10%)
const add10Percent = (company) => ({
    ...company,
    marketValue: company.marketValue * 1.1
});

const filterCompanies = (company) => company.foundedOn < 1990;

const calculateTotalMarketValue = (acc, company) => acc + company.marketValue;

// Execução limpa e segura
const marketValueOldCompanies = companies
    .map(add10Percent)
    .filter(filterCompanies)
    .reduce(calculateTotalMarketValue, 0);

console.log(`Total antigo valorizado: ${marketValueOldCompanies}`); // 1570.8
*/


const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadela', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 }
];

// 1. MAP: Diminui 10% usando o atalho do 0.9 e já joga no Math.round para arredondar
const decrease10Percent = (company) => ({
    ...company,
    marketValue: Math.round(company.marketValue * 0.9)
});

// 2. FILTER: Pega apenas as empresas fundadas DEPOIS (> ) de 1980
const filterNewCompanies = (company) => company.foundedOn > 1980;

// 3. REDUCE: Soma o valor de mercado das sobreviventes
const sumMarketValue = (acc, company) => acc + company.marketValue;


// Executando a nossa esteira de produção
const resultDesafio = companies
    .map(decrease10Percent)
    .filter(filterNewCompanies)
    .reduce(sumMarketValue, 0);

console.log(`O valor total das empresas pós-1980 com desconto é: ${resultDesafio}`);

