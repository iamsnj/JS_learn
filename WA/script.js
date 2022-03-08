let input_number = document.getElementById('tel-no');
let msg = document.getElementById('msg');
let form = document.getElementById('form');
var nums = /^[0-9]+$/;

function show_error_message() {
    msg.innerHTML = '\u26A0 Invalid Phone Number';
    msg.style.display = 'block';
    input_number.style.borderColor = "red";
}

function make_valid() {
    if (input_number.value.length == 0) {
        input_number.style.borderColor = "green";
        msg.style.display = 'none';
    }
}

input_number.addEventListener('focusin', function () {
    make_valid();
});

input_number.addEventListener('focusout', function () {
    make_valid();
});

input_number.addEventListener('input', function () {
    let number = form['tel-no'].value;
    let len = number.length;

    if (number.match(nums)) {
        if (len > 10) {
            show_error_message();
        } else {
            msg.style.display = 'none';
            input_number.style.borderColor = "green";
        }
    } else {
        show_error_message();
    }
    make_valid();
});

function send() {
    let number = input_number.value;
    let len = number.length;
    let message = form['message'].value;

    if (number.match(nums) && len == 10) {
        let link = 'https://api.whatsapp.com/send?phone=91'.concat(number);
        if (message != '') {
            link = link.concat('&text=');
            link = link.concat(message);
        }
        location.href = link;
    } else {
        show_error_message();
    }
}

document.getElementById('btn').onclick = function () {
    send();
}

form.onsubmit = function (e) {
    e.preventDefault();
    send();
}
