var element = document.querySelector("div");

element.addEventListener("mousedown", dragElement);

function dragElement(event) {
    var shiftX = event.clientX - element.getBoundingClientRect().left;
    var shiftY = event.clientY - element.getBoundingClientRect().top;

    document.addEventListener("mousemove", moveElement);
    element.addEventListener("mouseup", dropElement);

    function moveElement(event) {
        element.style.left = event.pageX - shiftX + "px";
        element.style.top = event.pageY - shiftY + "px";
    };
    function dropElement(event) {
        document.removeEventListener("mousemove", moveElement);
    };
};