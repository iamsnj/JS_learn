let add_button = document.getElementById('button-add');
let form = document.getElementById('form-input');
let add_value = document.getElementById('added-item');
let check_item = document.getElementsByClassName('item-done');
let edit_item = document.getElementsByClassName('item-edit');
let delete_item = document.getElementsByClassName('item-delete');
let item = document.getElementById('itemInput');

const todo_list = [];

function add_icons() {
    let icons = document.getElementById('item-icons');
    let span = document.createElement('span');
    span.innerHTML = icons.innerHTML;
    return span;
}

function add_item() {
    let msg = document.getElementById('msg');

    if (item.value != '') {
        msg.innerHTML = '';
        msg.style.display = 'none';
        let li = document.createElement('li');
        let txt = document.createTextNode(item.value);
        let data = document.createElement('data');
        data.value = 'yes'
        data.appendChild(txt);
        li.appendChild(data);
        li.appendChild(add_icons());
        add_value.appendChild(li);
    } else {
        msg.innerHTML = '\u26A0 Add an item';
        msg.style.display = 'block';
        setTimeout(function(){ msg.style.display = "none"; }, 800);
    }
    item.value = '';
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    add_item();
});

function item_done() {
    for (let i = 1; i < add_value.childElementCount; i++) {
        check_item[i].onclick = function () {
            let li_txt = this.parentElement.previousSibling;
            let ex_node = li_txt.childNodes[0];
            this.parentElement.previousSibling.removeChild(ex_node);

            if (li_txt.value == 'yes') {
                let new_node = document.createElement('del');
                let new_txt = document.createTextNode(ex_node.data);
                new_node.appendChild(new_txt);
                li_txt.appendChild(new_node);
                li_txt.value = 'no';
            } else {
                let new_txt = document.createTextNode(ex_node.innerText);
                li_txt.appendChild(new_txt);
                li_txt.value = 'yes';
            }
        }
    }
}

function item_edit() {
    for (let i = 1; i < add_value.childElementCount; i++) {
        edit_item[i].onclick = function () {
            let li_txt = this.parentElement.previousSibling;
            item.value = li_txt.innerText;
            add_value.removeChild(this.parentElement.parentElement);
        }
    }
}

function item_delete() {
    for (let i = 1; i < add_value.childElementCount; i++) {
        delete_item[i].onclick = function () {
            add_value.removeChild(this.parentElement.parentElement);
        }
    }
}

function check_icons_call() {
    item_done();
    item_edit();
    item_delete();
}

add_value.addEventListener('click', function () {
    check_icons_call()
});
