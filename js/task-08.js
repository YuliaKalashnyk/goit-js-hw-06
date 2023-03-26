const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();

    const {email, password} = event.currentTarget.elements
    
    const data = {
        email: email.value,
        password: password.value
    };
    

    if(email.value === '' || password.value === '') {
        return alert('Будь ласка, заповніть всі поля!')
    }

    if(email.value !== '' || password.value !== '') {
        console.log(data);
    }

    event.currentTarget.reset()

}