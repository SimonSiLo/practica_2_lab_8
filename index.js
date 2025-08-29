function calculateTip(billAmount, tipPercentage) {
    if (typeof billAmount !== 'number' || typeof tipPercentage !== 'number' ||
        billAmount < 0 || tipPercentage < 0) {
        throw new Error('Ambos parámetros deben ser números positivos');
    }
    const tip = billAmount * (tipPercentage / 100);
    return tip;
}
