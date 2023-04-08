var throttle = require('lodash.throttle');

const formEl = document.querySelector('.feedback-form');
const inputEmailEl = document.querySelector('input');
const textareaMessageEl = document.querySelector('textarea');

let message;
let email;
const objLocalEl = {message, email};

if (localStorage.getItem("feedback-form-state")) {
    let dataEl = JSON.parse(localStorage.getItem("feedback-form-state"));
    inputEmailEl.value = dataEl.email ?? '';
    textareaMessageEl.value = dataEl.message ?? '';
    };

const sendData = (event) => {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    localStorage.removeItem("feedback-form-state");
};

const saveData = () => {
    objLocalEl.message = textareaMessageEl.value;
    objLocalEl.email = inputEmailEl.value
    localStorage.setItem("feedback-form-state", JSON.stringify(objLocalEl));
};

formEl.addEventListener('submit', sendData);
formEl.addEventListener('input', throttle(saveData, 500));
