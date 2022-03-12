function valid() {
    const password = document.querySelector('#password');
    const checkPassword = document.querySelector('#checkPassword');
    if (password.value != checkPassword.value) {
        console.log("Password not match")
    } else {
        console.log("Password match")
        user.email = document.querySelector('#email').value;
        user.firstname = document.querySelector('#firstname').value;
        user.lastname = document.querySelector('#lastname').value;
        user.phone = document.querySelector('#phone').value;
        user.password = document.querySelector('#password').value;

        users.push(user);
        console.log(users);

        sessionStorage.setItem('users', JSON.stringify(users));
    }
    return false;
}

function validation(regex, inp) {
    if (regex.test(inp.value)) {
        inp.style.borderColor = "silver";
        return true;
    } else {
        inp.style.borderColor = "red";
    }
}

function checkEmail(inp) {
    var regex = /^\w+@\w+\./;
    validation(regex, inp);
}

function checkPhone(inp) {
    var regex = /\d{8}$/
    validation(regex, inp);
}


const users = [];
const user = {
    email:'',
    firstname:'',
    lastname:'',
    phone:0,
    password:'',
    id:Math.random().toString().split('.')[1]
}

document.addEventListener('load', function() {
    users = sessionStorage.getItem(JSON.parse('users'));
})