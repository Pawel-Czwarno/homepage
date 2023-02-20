{
    const welcome = () => {
        console.log("Witaj na stronie domowej Pawła Czwarno!");
    };

    const onPhotoToggle = () => {
        const photo = document.querySelector(".js-article__photo");
        const buttonPhoto = document.querySelector(".js-article__buttonPhoto");
        photo.classList.toggle("js-photoToggle");
        buttonPhoto.innerText = photo.classList.contains("js-photoToggle") ? "Pokaż zdjęcie" : "Schowaj zdjęcie";
    };

    const onBackgroundToggle = () => {
        const body = document.querySelector(".js-body");
        const backgroundName = document.querySelector(".js-backgroundName");
        body.classList.toggle("body--dark");
        backgroundName.innerText = body.classList.contains("body--dark") ? "jasne" : "ciemne";
    };

    const init = () => {
        const buttonBackground = document.querySelector(".js-header__buttonBackground");
        const buttonPhoto = document.querySelector(".js-article__buttonPhoto");
        buttonBackground.addEventListener("click", onBackgroundToggle);
        buttonPhoto.addEventListener("click", onPhotoToggle);
        welcome();
    };

    init();
}