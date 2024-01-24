// // Бургер меню

// const burger = document.querySelector(".burgerMenu")
// const burgerBtn = document.querySelector(".burgerBtn")
// const burgerBtnClose = document.querySelector(".burgerBtnClose")
// const burgLi = document.querySelectorAll(".burgLi")

//     burgerBtn.addEventListener('click', ()=> {
//         burger.classList.toggle('open')
//     })
//     // Выбираем каждый элемент с классом burgLi
//     document.querySelectorAll('.burgLi').forEach((elem) =>
//     elem.addEventListener('click', () => {
//         burger.classList.toggle('open')
//     }))

//     // Закрываем меню по нажатию в любое место
//     document.querySelectorAll('.main'),forEach((elem) =>
//     elem.addEventListener('click', ()=> {
//         burger.classList.remove('open')
//     }))

//     burgerBtnClose.addEventListener('click', ()=> {
//         burger.classList.toggle('open')
//     })

const gardensBtn = document.querySelector(".gardensBtn");
const lawnBtn = document.querySelector(".lawnBtn");
const plantingBtn = document.querySelector(".plantingBtn");

const gardenCrd = document.querySelectorAll(".gardenCrd");
const lawnCrd = document.querySelectorAll(".lawnCrd");
const plantingCrd = document.querySelectorAll(".plantingCrd");

gardensBtn.addEventListener('click', () => {
    lawnCrd.forEach(card => card.classList.add('blur'));
    plantingCrd.forEach(card => card.classList.add('blur'));
    gardenCrd.forEach(card => card.classList.remove('blur'));
});

lawnBtn.addEventListener('click', () => {
    plantingCrd.forEach(card => card.classList.add('blur'));
    gardenCrd.forEach(card => card.classList.add('blur'));
    lawnCrd.forEach(card => card.classList.remove('blur'));
});

plantingBtn.addEventListener('click', () => {
    gardenCrd.forEach(card => card.classList.add('blur'));
    lawnCrd.forEach(card => card.classList.add('blur'));
    plantingCrd.forEach(card => card.classList.remove('blur'));
});

