/*
Calcula Desconto
Todos os Produtos acima de R$ 30,00 terão 10% de Desconto no valor final!
*/


/*

R$ 250,00 // 7%
250 * 0.07 = 17.5
250 - 17.5 = 232.5
R$ 1000,00 // 10%
1000 * 0.10 = 100
1000 - 100 = 900
R$ 50,00 // 5%
50 * 0.05 = 2.5
50 - 2.5 = 47.5
R$ 15,00 // 0%
15 * 0 = 0
15 - 0 = 15
*/

const cart = [10, 244, 99, 2, 45, 320, 15, 75]
let finalValueWithDiscount = 0


function calculateDiscount(price, Discount) {
    const result = (price * Discount) / 100
    return result
}

cart.forEach(value => {

    if(value > 30) {
        const discount = calculateDiscount(value, 10)
        finalValueWithDiscount += finalValueWithDiscount + (value - discount)
    } else {
        finalValueWithDiscount += value
    }
});

console.log(`O valor final da compra foi de R$ ${finalValue},
porém você teve desconto, irá pagar apenas R$ ${finalValueWithDiscount.toFixed(2)},
portanto, você economizou R$ ${finalValueWithDiscount}`)

 