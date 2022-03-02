let add_on = document.getElementById('basic-addon1');

function create_list(country) {
    var select = document.createElement('select');
    select.name = 'country_code';
    select.id = 'country_code';

    for (let i = 0; i < data.length; i++) {
        let option = document.createElement('option');
        option.value = data[i].code;
        let name_text = document.createTextNode(data[i].name + " (" + data[i].dial_code + ")");
        option.appendChild(name_text);
        if (data[i].code == country) {
            option.selected = true;
        }
        select.appendChild(option);
    }
    add_on.appendChild(select);
}

$.getJSON("http://ipinfo.io", function (response) {
    var country = response.country;
    let dial_code, name;

    for (let i = 0; i < data.length; i++) {
        if (data[i].code == country) {
            dial_code = data[i].dial_code;
            name = data[i].name;
        }
    }
    create_list(country);
    console.log(dial_code, name);

}, "jsonp");
