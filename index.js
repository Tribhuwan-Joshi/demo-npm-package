const ham = document.querySelector('.ham');
ham.addEventListener("click", showMenu)

function showMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("visible")
}
