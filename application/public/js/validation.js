document.getElementById('username').addEventListener('input', function(ev) {
    let usernameElement = ev.target;//element that triggered the event
    let username = usernameElement.value;//text value of the element field
    if(username.length > 3){
        usernameElement.classList.add('valid-text');
        usernameElement.classList.remove('invalid-text');
    }else{
        usernameElement.classList.add('invalid-text');
        usernameElement.classList.remove('valid-text');
    }
});

document.getElementById('email').addEventListener('input', function(ev) {
    let emailElement = ev.target;//element that triggered the event
    let email = emailElement.value;//text value of the element field
    if(email.length > 3){
        emailElement.classList.add('valid-text');
        emailElement.classList.remove('invalid-text');
    }else{
        emailElement.classList.add('invalid-text');
        emailElement.classList.remove('valid-text');
    }
});
document.getElementById('password').addEventListener('input', function(ev) {
    let passwordElement = ev.target;//element that triggered the event
    let password = emailElement.value;//text value of the element field
    var regEx = /^[0-9a-zA-Z]+$/;
    if(password.length > 8){
        passwordElement.classList.add('valid-text');
        passwordElement.classList.remove('invalid-text');
    }else{
        passwordElement.classList.add('invalid-text');
        passwordElement.classList.remove('valid-text');
    }
});
document.getElementById('cpassword').addEventListener('input', function(ev) {
    let cpasswordElement = ev.target;//element that triggered the event
    let cpassword = emailElement.value;//text value of the element field
    var regEx = /^[0-9a-zA-Z]+$/;
    if(cpassword.length > 8){
        cpasswordElement.classList.add('valid-text');
        cpasswordElement.classList.remove('invalid-text');
    }else{
        cpasswordElement.classList.add('invalid-text');
        cpasswordElement.classList.remove('valid-text');
    }
});