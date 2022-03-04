// email - zov email esehiig shalgah
// firstname
// lastname
// number - 8 orontoi bh estoi
// password - tom useg , jijig useg, spec Char, 8-s deesh , too
// password confirm

// burtgeh tovch

function valid() {
    const password = document.querySelector('password');
    const checkPassword = document.querySelector('checkPassword');
    if (password.value != checkPassword.value) {
        alert("Password not match")
    } else {
        alert("Password match")
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

function checkFirstName(inp) {
    var regex = /^\w{3,6}$/
    validation(regex, inp);
}

function checkLastname(inp) {
    var regex = /^\w{3,6}$/
    validation(regex, inp);
}

function checkPhone(inp) {
    var regex = /\d{8}$/
    validation(regex, inp);
}

function checkPassword(inp) {
    var regex = /^\w{6,9}$/
    validation(regex, inp);
}

function checkConfirmPassword(inp) {
    var regex = /^\w{6,9}$/
    validation(regex, inp);
}