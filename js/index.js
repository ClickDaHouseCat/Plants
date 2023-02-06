// Бургер меню

const burger = document.querySelector(".burgerMenu")
const burgerBtn = document.querySelector(".burgerBtn")
const burgerBtnClose = document.querySelector(".burgerBtnClose")
const burgLi = document.querySelectorAll(".burgLi")

    burgerBtn.addEventListener('click', ()=> {
        burger.classList.toggle('open')
    })
    // Выбираем каждый элемент с классом burgLi
    document.querySelectorAll('.burgLi').forEach((elem) =>
    elem.addEventListener('click', () => {
        burger.classList.toggle('open')
    }))

    // Закрываем меню по нажатию в любое место
    document.querySelectorAll('.main'),forEach((elem) =>
    elem.addEventListener('click', ()=> {
        burger.classList.remove('open')
    }))

    burgerBtnClose.addEventListener('click', ()=> {
        burger.classList.toggle('open')
    })

// Карточки сервисов и проектов

const gardensBtn = document.querySelector(".gardensBtn")
const lawnBtn = document.querySelector(".lawnBtn")
const plantingBtn = document.querySelector(".plantingBtn")
const gardensCrd = document.querySelector(".gardensCrd")
const lawnCrd = document.querySelector(".lawnCrd")
const plantingCrd = document.querySelector(".plantingCrd")

gardensBtn.addEventListener('click', () => {
    lawnCrd.classList.toggle('blur');
    plantingCrd.classList.toggle('blur');
})

lawnBtn.addEventListener('click', () => {
    gardenCrd.classList.toggle('blur');
    plantingCrd.classList.toggle('blur');
})

plantingBtn.addEventListener('click', () => {
    lawnCrd.classList.toggle('blur');
    gardenCrd.classList.toggle('blur');
})