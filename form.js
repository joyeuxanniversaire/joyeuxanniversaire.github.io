
function validerFormulaire() {
    if (confirm('Souhaitez-vous valider ce formulaire ?') == true) {
        let surname = document.getElementById('surname').value;
        let text = surname + ", Bienvenue dans notre Newsletter !";
        alert(text)
    } else {
        return false;
    }
}

let form = document.querySelector('form');

let name = document.getElementById('name');
let surname = document.getElementById('surname');
let email = document.getElementById('email');

name.addEventListener('click', () => {
    if (name.value != "") {
        return true;
    } else if (name.classList = "click-event-input") {
        return true;
    } else {
        name.classList.toggle("click-event-input");
    }
});

surname.addEventListener('click', () => {
    if (surname.value != "") {
        return true;
    } else if (surname.classList = "click-event-input") {
        return true;
    } else {
        surname.classList.toggle("click-event-input");
    }
});

email.addEventListener('click', () => {
    if (email.value != "") {
        return true;
    } else if (email.classList = "click-event-input") {
        return true;
    } else {
        email.classList.toggle("click-event-input");
    }
});



