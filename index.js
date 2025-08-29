function calculateTip(billAmount, tipPercentage) {
    if (typeof billAmount !== 'number' || typeof tipPercentage !== 'number' ||
        billAmount < 0 || tipPercentage < 0) {
        throw new Error('Ambos parámetros deben ser números positivos');
    }
    const tip = billAmount * (tipPercentage / 100);
    return tip;
}
console.log(calculateTip(100, 10));
console.log(calculateTip(1524.33, 25));