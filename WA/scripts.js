let add_on = document.getElementById('basic-addon1');
let display_code = document.getElementById('display-code');
let country_codes = document.getElementById('country-codes');

function create_list(country_code) {
    for (let i = 0; i < data.length; i++) {
        let li = document.createElement('li');
        let span_dial_code = document.createElement('span');
        let span_name = document.createElement('span');
        let dial_code_attr = document.createAttribute('data-code');

        span_dial_code.className = 'span_dial_code';
        span_dial_code.innerText = " (" + data[i].dial_code + ")";
        span_name.className = 'span_name';
        span_name.innerText = data[i].name;
        li.className = 'country-data';
        dial_code_attr.value = data[i].code;
        li.setAttributeNode(dial_code_attr);
        if (data[i].code == country_code) {
            display_code.innerText = country_code + " (" + data[i].dial_code + ")";
        }
        li.appendChild(span_name);
        li.appendChild(span_dial_code);
        country_codes.appendChild(li);
    }
}

function check() {
    let country_data = document.getElementsByClassName('country-data');

    for (let i = 0; i < country_data.length; i++) {
        country_data[i].addEventListener('click', function (e) {
            let x = e.target;
            if (x.tagName != 'LI') {
                x = x.parentNode;
            }
            // x.style.backgroundColor = 'gray';
            display_code.innerText = x.getAttribute('data-code') + x.children[1].innerText;
        });
    }

}

$.getJSON("http://ipinfo.io", function (response) {
    var country = response.country;

    for (let i = 0; i < data.length; i++) {
        if (data[i].code == country) {
            dial_code = data[i].dial_code;
            name = data[i].name;
        }
    }
    create_list(country);
    check();

}, "jsonp");
