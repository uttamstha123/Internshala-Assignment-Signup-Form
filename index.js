const inputs = document.querySelectorAll('.form-input');
const form = document.querySelector('#form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    inputs.forEach(input => {
        let errorElem;
        if (input.value == "") {
            errorElem = input.parentElement.querySelector('p')
            errorElem.innerText = 'Please fill the required details'
            errorElem.classList.add('error-msg')
        }
        else {
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            if (input.id == 'confirmPassword' && password != confirmPassword) {
                errorElem = input.parentElement.querySelector('p')
                errorElem.innerText = 'Password did not match'
                errorElem.classList.add('error-msg')
            }
            else {
                errorElem = input.parentElement.querySelector('p')
                errorElem.classList.remove('error-msg')
            }
        }
    })
})

