let createPW = document.getElementById('create-password');
let confirmPW = document.getElementById('confirm-password');
let alertTxtFalse = document.getElementById('alert-text-false');
let blur = document.getElementById('blurred-bg');
let popUp = document.getElementById('acc-created-box');
let match = true;

let checkPW = (e) => {
    event.preventDefault();
    if (createPW.value == confirmPW.value){
        blur.classList.add('bg-blurry');
        popUp.classList.add('bg-blurry');
        match = false;
    }
    else {
        alertTxtFalse.style.display = 'block';
        return checkPW();
    }
    return match;
};