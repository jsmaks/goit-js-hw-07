const valueSpan = document.querySelector('#value');
let counterValue = Number(valueSpan.textContent);

const valueDec = document.querySelector('[data-action="decrement"]')
const valueInc = document.querySelector('[data-action="increment"]')



const increment = value => {
    return counterValue += value;
}
const decrement = value => {
    return counterValue -= value;
}
valueInc.addEventListener('click', () => {
    const result = increment(Number(valueInc.innerHTML));
    valueSpan.textContent = result;

});

valueDec.addEventListener('click', () => {
    const result = decrement(Number(valueInc.innerHTML));
    valueSpan.textContent = result;
});

