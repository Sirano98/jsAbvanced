var mainDiv = document.querySelector("#main-div");
var tooltipElem;
var target;

mainDiv.addEventListener("mouseover", showTooltip);
mainDiv.addEventListener("mouseout", hideTooltip);

function showTooltip(event) {
    target = event.target;
    if (target.tagName !== "SPAN") {
        return
    };

    tooltipElem = document.createElement("div");
    tooltipElem.classList.add("tooltip");
    tooltipElem.innerHTML = target.dataset.tooltip;
    document.body.append(tooltipElem);

    var position = target.getBoundingClientRect();
    var tooltipTop = position.top + target.offsetHeight + 5;

    tooltipElem.style.top = tooltipTop + "px";
    tooltipElem.style.left = position.left + "px";
};

function hideTooltip(event) {
    target = event.target;
    if (target.tagName !== "SPAN") {
        return
    };
    tooltipElem.remove()
};