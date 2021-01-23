const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

inputRef.addEventListener('input', e => {
    const value = e.target.value;
    spanRef.style.fontSize = `${value}px`
});