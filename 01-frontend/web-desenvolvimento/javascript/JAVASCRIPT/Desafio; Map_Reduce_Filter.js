const companies = [
    { name: 'Samsung', marketValue: 60, CEO: 'Kim Hyun Suk', foundedOn: 1938 },

    { name: 'Microsoft', marketValue: 507, CEO: 'Satya Nadella', foundedOn: 1975},

    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968},

    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004},

    { name: 'Google', marketValue: 527, CEO: 'Sundar Pichai', foundedOn: 1998},

    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976},
];

/*
Adicionar 10% de valor de mercado a todas as empresas -> MAP
Filtrar somente as empresas fundadas antes de 1990 -> FILTER
Somar o valor de mercado das empresas restantes -> REDUCE
*/


const add10Percente = company => {
    company.marketValue = company.marketValue + company.marketValue / 10
    return company
}

const filterCompanies = company => company.foundedOn < 1990

const clculateTotalMarketValue = (acc, company) => acc + company.marketValue


const marketValueOldCompanies = companies
    .map(add10Percente)
    .filter(filterCompanies)
    .reduce(clculateTotalMarketValue, 0)


console.log(marketValueOldCompanies) // 1620.4