"use strict"

let elForm = document.querySelector('.register__inner');

elForm.addEventListener('submit', evt => {
    evt.preventDefault();
    let value = evt.target.username.value.trim();
    if (value != "" && value != " ") {
        if (!localStorage.getItem('username')) {
            localStorage.setItem('username', value);
            window.location.href = './index.html';
        } else {
            window.location.href = './index.html';
        }
    }
});