
const cart = [10, 244, 99, 2, 20, 33, 250];

let finalValue = 0;             // Armazena o total SEM desconto
let finalValueWithDiscount = 0; // Armazena o total COM desconto

function calculateDiscount(price, discount) {
    const result = (price * discount) / 100;
    return result;
}

cart.forEach(value => {
    // 1. Indiferente de ter desconto ou não, somamos o valor bruto aqui:
    finalValue += value;

    // 2. Aqui mantemos a regra que você já tinha feito:
    if (value > 30) {
        const discount = calculateDiscount(value, 10);
        finalValueWithDiscount = finalValueWithDiscount + (value - discount);
    } else {
        finalValueWithDiscount += value;
    }
});

// 3. Exibindo o relatório final para o cliente
console.log(`O valor final da compra foi de R$ ${finalValue.toFixed(2)},
porém você teve desconto, irá pagar apenas R$ ${finalValueWithDiscount.toFixed(2)}
você economizou R$ ${(finalValue - finalValueWithDiscount).toFixed(2)}`);

