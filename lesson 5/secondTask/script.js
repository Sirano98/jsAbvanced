var parentElement = document.querySelector(".parent");

parentElement.addEventListener("click", hide);

function hide(event) {
    if (event.target.tagName == "INPUT") {
        event.target.parentElement.classList.add("hidden");
    }
}