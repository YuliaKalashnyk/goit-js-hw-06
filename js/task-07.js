const inputFontSize = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

inputFontSize.addEventListener('change', event => {
    spanText.style.fontSize = `${event.target.value}px`
});
