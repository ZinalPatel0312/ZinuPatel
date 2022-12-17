let icon_moon = document.querySelector(".fa-moon");
let page_body = document.querySelector("body");

icon_moon.addEventListener("click", function () {
    page_body.classList.toggle("dark_mode");

    if (page_body.classList.contains("dark_mode") == true) {
        icon_moon.classList.remove("fa-moon");
        icon_moon.innerHTML = "<span class='fa-solid fa-sun'></span>";
    }
    else {
        icon_moon.classList.remove("fa-sun");
        icon_moon.innerHTML = "<span class='fa-solid fa-moon'></span>";
    }
});