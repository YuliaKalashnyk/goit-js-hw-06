const textInput = document.querySelector('#validation-input');
console.log(textInput.getAttribute('data-length'));
textInput.addEventListener('blur', event => {
    if (event.target.value.length === textInput.getAttribute('data-length')) {
        textInput.classList.add('valid')
    } else {
		textInput.classList.add('invalid')
    }
})