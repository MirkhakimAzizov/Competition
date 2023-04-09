"use strict"


// let elForm = document.querySelector('.register__inner');

// elForm.addEventListener('submit', evt => {
//     evt.preventDefault();
//     let value = evt.target.username.value.trim();
//     if (value != "" && value != " ") {
//         if (!localStorage.getItem('username')) {
//             localStorage.setItem('username', value);
//             window.location.href = './index.html';
//         } else {
//             window.location.href = './index.html';
//         }
//     }
// });


let elWord = document.querySelectorAll('.field');
console.log(elWord);

for (let i = 0; i < 20; i++) {
    let r = Math.trunc(Math.random() * 70)
    let rotate = -Math.trunc(Math.random() * 70)
    console.log(r);
    elWord[i].innerHTML = `
   
   <button class="btn btn${i} hover-zoom btn-primary position-absolute">${i}</button>

   `
    console.log(document.querySelector(`.btn${i}`));
    document.querySelector(`.btn${i}`).style.top = `${r}%`;
    document.querySelector(`.btn${i}`).style.left = `${r}%`;
    document.querySelector(`.btn${i}`).style.transform = `rotate(${rotate}deg)`;


}