const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

// console.log(textInput);
// console.log(output);

textInput.addEventListener('input', (event) => {
    output.textContent = event.currentTarget.value;
    if (event.currentTarget.value === '') {
        output.textContent = 'Anonymous'
    }
})