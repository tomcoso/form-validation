;(function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!form.checkValidity()) {
            form.reportValidity();
        } else {
            alert('good boi');
        }
    });

    const email = document.getElementById('email');
    email.addEventListener('input', () => {
        email.setCustomValidity('');
        if (email.validity.tooShort) {
            email.setCustomValidity('Email must be at least 8 digits!');
        } else if (!email.validity.valid) {
            email.setCustomValidity('Please write a valid email!');
        }
        email.reportValidity();
    });
    const country = document.getElementById('country');
    country.addEventListener('input', () => {
        country.setCustomValidity(''); 
        
        if (country.validity.tooShort) {
            country.setCustomValidity('Country must be at least 4 digits!');
        } else if (!country.validity.valid) {
            country.setCustomValidity('Please write your country of residence!');
        }
        country.reportValidity();
    });
    const zcode = document.getElementById('zcode');
    zcode.addEventListener('input', () => {
        zcode.setCustomValidity('');
        if (zcode.validity.patternMismatch) {
            zcode.setCustomValidity('Zip code must be two letters followed by four numbers!');
        } else if (!zcode.validity.valid) {
            zcode.setCustomValidity('Please write your zip code!')
        }
        zcode.reportValidity();
    })

    const rpass = document.getElementById('rpassword');
    const pass = document.getElementById('password');
    pass.addEventListener('input', () => {
        rpass.attributes.pattern.value = pass.value;
        pass.setCustomValidity('');
        if (pass.validity.patternMismatch) {
            if (pass.value.match(/(^[A-Za-z\d\W]+(?=.+[A-Z].*)(?=.+[a-z].*)(?!.*\s.*)[A-Za-z\d\W]{7,20}$)/)) {
                pass.setCustomValidity('Password is missing a number!');
            } else if (pass.value.match(/(^[A-Za-z\d\W]+(?=.+[a-z].*)(?=.+\d.*)(?!.*\s.*)[A-Za-z\d\W]{7,20}$)/)) {
                pass.setCustomValidity('Password is missing an upper case letter!')
            } else if (pass.value.match(/(^[A-Za-z\d\W]+(?=.+[A-Z].*)(?=.+\d.*)(?!.*\s.*)[A-Za-z\d\W]{7,20}$)/)) {
                pass.setCustomValidity('Password is missing a lower case letter!')
            } else if (pass.value.match(/[\s]/)) {
                pass.setCustomValidity('Password must not contain spaces!')
            } else if (!pass.value.match('.{8,}')) {
                pass.setCustomValidity('Password must be at least 8 characters long!')
            } else {
                pass.setCustomValidity('Password must be at least 8 characters long and contain at least one upper case letter, one lower case letter, and one or more numbers!');
            }
        } else if (!pass.validity.valid) {
            pass.setCustomValidity('Please type a password with 8 characters long and  at least one upper case letter, one lower case letter, and one or more numbers!')
        }
        pass.reportValidity();
    })
    rpass.addEventListener('input', () => {
        rpass.setCustomValidity('');
        if (rpass.validity.patternMismatch) {
            rpass.setCustomValidity('Password doesn\'t match!');
        } else if (rpass.validity.tooShort) {
            rpass.setCustomValidity('Please try again, password is too short!');
        } else if (!rpass.validity.valid) {
            rpass.setCustomValidity('Please re-enter the password!');
        }
        rpass.reportValidity();
    })

    window.addEventListener('load', () => {
            email.setCustomValidity('Please write a valid email!');
            country.setCustomValidity('Please write your country of residence!');
            zcode.setCustomValidity('Please write your zip code!');
            pass.setCustomValidity('Please type a password with 8 characters long and  at least one upper case letter, one lower case letter, and one or more numbers!');
            rpass.setCustomValidity('Please re-enter the password!');
        });

})();