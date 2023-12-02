import "../style.css";

window.addEventListener('DOMContentLoaded', () => {
    openCloseMenu();
})

function openCloseMenu() {
    const burgerBtn = document.querySelector('.burger-button')
    const closeBtn = document.querySelector('.close-menu-btn')
    const body = document.querySelector('body')
    const menu = document.querySelector('.menu')

    burgerBtn?.addEventListener('click', () => {
        menu.classList.add('open')
        body.style.overflow='hidden'
    })

    closeBtn?.addEventListener('click', () => {
        menu.classList.remove('open')
        body.style.overflow='scroll'
    })

}
