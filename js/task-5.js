const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output')
const anonym = spanRef.textContent;

inputRef.addEventListener('input', event => {
    const value = event.target.value;
    spanRef.textContent = value;
    if (!value) spanRef.textContent = anonym;
})