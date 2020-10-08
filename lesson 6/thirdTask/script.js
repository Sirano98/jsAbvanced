form1.userName.addEventListener("change", nameOnChange);
form1.email.addEventListener("change", emailOnChange);
form1.zip.addEventListener("change", zipcodeOnChange);
form1.addEventListener("submit", onsubmitHandler);

function validate(elem, pattern) {
    var res = pattern.test(elem.value);
    if (res === true) {
        elem.classList.remove("invalid");
        elem.classList.add("valid");
    } else {
        elem.classList.remove("valid");
        elem.classList.add("invalid");
    }

}

function nameOnChange() {
    var pattern = /\b\D+\b/;
    validate(this, pattern);
}

function emailOnChange() {
    var pattern = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i;
    validate(this, pattern);
}

function zipcodeOnChange() {
    var pattern = /\b\d{5}\b/;
    validate(this, pattern);
}

function onsubmitHandler(event) {
    for (var i = 0; i < form1.elements.length; i++) {
        var inp = form1.elements[i];
        if (inp.type === 'text' && (inp.className === "invalid" || inp.value === "")) {
            alert("Допущены ошибки при заполнении формы.");
            event.preventDefault();
            return false;
        }
    }
}
