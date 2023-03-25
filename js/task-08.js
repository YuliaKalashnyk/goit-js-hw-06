const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();

    const {email, password} = event.currentTarget.elements
    console.dir(email.value);
    console.dir(password.value);
    
    const data = {
        email: email.value,
        password: password.value
    };
    console.log(data);

    if(email.value === '' || password.value === '') {
        return alert('Будь ласка, заповніть всі поля!')
    }

    event.currentTarget.reset()

}