const menuBurger = document.getElementById("menuBurger");
const menu = document.getElementById("menu");
const menuClose = document.getElementById("menuClose");

// Открытие меню
menuBurger.addEventListener("click", () => {
    menu.classList.toggle("menu-active");
});

// Закрытие меню
menuClose.addEventListener("click", () => {
    menu.classList.remove("menu-active");
});
