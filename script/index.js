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


// console.log(words);
let elWord = document.querySelectorAll('.field');
// console.log(elWord);

for (let i = 0; i < 20; i++) {
    let r = Math.trunc(Math.random() * 70)
    let rotate = -Math.trunc(Math.random() * 70)
        // console.log(r);
    elWord[i].innerHTML = `
   
   <button type="button" class="btn btn${i} button hover-zoom btn-primary position-absolute z-index-2">${false}</button>


   `
        // console.log(document.querySelector(`.btn${i}`));
    document.querySelector(`.btn${i}`).style.top = `${r}%`;
    document.querySelector(`.btn${i}`).style.left = `${r}%`;
    document.querySelector(`.btn${i}`).style.transform = `rotate(${rotate}deg)`;


}

document.querySelector(`.btn${2}`).textContent = words.easy.eng[2]
let numberEngArr = []
let numberUzArr = []
for (let i = 0; i < 20; i++) {
    let r1 = Math.trunc(Math.random() * 20);
    if (!numberEngArr.includes(r1)) {
        numberEngArr.push(r1);
    }
}
numberEngArr.slice(0, 10).forEach(index => {
    document.querySelector(`.btn${index}`).innerHTML = `
    <img class="button-image rounded-pill" src="https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/94/98/ae/9498ae73-008a-55d7-2845-f3be6ff6d527/source/512x512bb.jpg" alt="img" />
    <span>${words.easy.eng[index]}</span>`;
    elWord[index].dataset.id = `${index}`;
})

elWord.forEach((item, index) => {
    if (!item.dataset.id) {
        numberUzArr.push(index);
    }
})

for (let i = 0; i < 10; i++) {
    document.querySelector(`.btn${numberUzArr[i]}`).innerHTML = `
    <img class="button-image rounded-pill" src="https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/94/98/ae/9498ae73-008a-55d7-2845-f3be6ff6d527/source/512x512bb.jpg" alt="" />
    <span>${ words.easy.uz[`${numberEngArr[i]}`]}</span>`;
    elWord[i].dataset.id = `${i}`;
}

let allBtn = document.querySelector('.hard__inner_wrapper');
let elBall = document.querySelector('.ball');
let s = 0;
let b = 0;
let translate1
let translate2
let index1
let index2

allBtn.addEventListener('click', evt => {
    s++;
    evt.preventDefault();
    console.log(evt.target.textContent);
    if (evt.target.dataset) {
        if (s == 1) {
            translate1 = evt.target.textContent.trim();
            if (words.easy.eng.indexOf(translate1) > 0) {
                index1 = words.easy.eng.indexOf(translate1);
                console.log(index1);
            } else {
                index1 = words.easy.uz.indexOf(translate1);
                console.log(index1);
            }
        } else if (s == 2) {
            translate2 = evt.target.textContent.trim()
            if (words.easy.eng.indexOf(translate2) > 0 && translate1!=translate2) {
                index2 = words.easy.eng.indexOf(translate2);
                console.log(index2);
            } else {
                index2 = words.easy.uz.indexOf(translate2);
                console.log(index2);
            }
            if (index1 == index2 && translate1!=translate2) {
                console.log('a');
                elBall.textContent = `Ball: ${++b}`
            } else {
                console.log('b');
            }
            s = 0;
        }
    }
});