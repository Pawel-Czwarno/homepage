console.log("Witaj na stronie domowej Pawła Czwarno!");

let body = document.querySelector(".js-body");
let themeName = document.querySelector(".js-themeName");
let buttonTheme = document.querySelector(".js-header__buttonTheme");
let buttonPhoto = document.querySelector(".js-article__buttonPhoto");
let photo = document.querySelector(".js-article__photo");
let photoToggle = document.querySelector(".js-photoToggle");

buttonTheme.addEventListener("click", () => {
    body.classList.toggle("body--dark");

    themeName.innerText = body.classList.contains("body--dark") ? "jasne" : "ciemne";
});

buttonPhoto.addEventListener("click", () => {
    photo.classList.toggle("js-photoToggle");

    buttonPhoto.innerText = photo.classList.contains("js-photoToggle") ? "Pokaż zdjęcie" : "Schowaj zdjęcie";
});