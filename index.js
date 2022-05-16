// console.log("form");

let sname = document.getElementById("name");
let password = document.getElementById("password");
let phone = document.getElementById("phone");
let email = document.getElementById("email");

let validSname = false;
let validPassword = false;
let validPhone = false;
let validEmail = false;
let failure = document.getElementById('failure');
let success = document.getElementById('success');
success.style.display = "none";
failure.style.display = "none";

sname.addEventListener('blur', () => {
    // console.log("sname is blur");
    let str = sname.value;
    // console.log(str);
    let reg = /^([a-zA-Z\s]){2,30}$/
    // console.log(reg.source, str);
    if (reg.test(str)) {
        // console.log("Your name is valid");
        sname.classList.remove('is-invalid');
        validSname = true;
    } else {
        // console.log("Your name is invalid");
        sname.classList.add('is-invalid');
        validSname = false;
    }
})
password.addEventListener('blur', () => {
    // console.log("password is blur");
    let str = password.value;
    let reg = /^([0-9a-zA-Z\@\_]+)([0-9]+)([0-9a-zA-Z\@\_]*){8,20}$/
    // console.log(str); console.log(reg, str);
    if (reg.test(str)) {
        // console.log("Your password is valid");
        password.classList.remove('is-invalid');
        validPassword = true;
    } else {
        // console.log("Your password is invalid");
        password.classList.add('is-invalid');
        validPassword = false;
    }
})
phone.addEventListener('blur', () => {
    // console.log("phone is blur");
    let str = phone.value;
    let reg = /^([0-9]){10}$/
    // console.log(str); console.log(reg, str);
    if (reg.test(str)) {
        // console.log("Your phone is valid");
        phone.classList.remove('is-invalid');
        validPhone = true;
    } else {
        // console.log("Your phone is invalid");
        phone.classList.add('is-invalid');
        validPhone = false;
    }
})
email.addEventListener('blur', () => {
    // console.log("email is blur");
    let str = email.value;
    // console.log(str);
    let reg = /^[a-zA-Z]([a-zA-Z0-9\.]+)@([a-zA-Z]+)\.([a-zA-z]+)$/
    // console.log(reg, str);
    if (reg.test(str)) {
        // console.log("Your email is valid");
        email.classList.remove('is-invalid');
        validEmail = true;
    } else {
        // console.log("Your email is invalid");
        email.classList.add('is-invalid');
        validEmail = false;
    }
})

let submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log("You click submit");
    // console.log(validSname, validPassword, validPhone, validEmail);
    if (validSname && validPassword && validPhone && validEmail) {
        // console.log('Phone, email and user are valid. Submitting the form');
        success.classList.add('show');
        success.style.display = "block";
        failure.style.display = "none";
    } else {
        // console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');

        failure.classList.add('show');
        success.style.display = "none";
        failure.style.display = "block";
    }
})