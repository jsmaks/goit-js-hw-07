const inputRef = document.querySelector('#validation-input');
const valueLength = inputRef.getAttribute('data-length');

inputRef.addEventListener('blur', event => {
    const value = event.target.value;
    if (value.length < Number(valueLength)) return inputRef.classList.add('invalid')
    inputRef.classList.add('valid');
});
inputRef.addEventListener('focus', e => {
    inputRef.classList.remove('invalid', 'valid')
})