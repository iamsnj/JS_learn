let x = document.getElementsByClassName('popover-menu')[0];
let u = x.parentElement.parentElement;

function create(u) {
    let l = document.createElement('li');
    let d = document.createElement('div');
    d.classList.add('popover-menu');
    let b = document.createElement('button');
    // b.name = 'invert';
    b.value = 'invert';
    b.id = 'invert';
    b.innerText = 'INV';
    b.style.border = '2px solid grey';
    // d.appendChild(b);
    // l.appendChild(d);

    l.appendChild(b);
    u.appendChild(l);

    style = document.createElement('style');
    // style.innerText = '.dark-mode{background-color: black; color: #FFFFFF;}';
    // style.innerText = 'html,body{background:white; height:100%; margin:0; padding:0; box-sizing:border-box;}';
    // style.innerText = 'body{background: white; height:100%; margin:0; padding:1em; box-sizing:border-box;}';
    style.innerText = 'body{background:white}';
    style.innerText += '.dark-mode{-webkit-filter:invert(90%); filter:invert(90%);}';
    document.head.appendChild(style);

    // let sheet = document.styleSheets[0];
    // sheet.insertRule('.dark-mode{background-color: black, color: white}', sheet.cssRules.length)

    b.addEventListener('click', function () {
        let element = document.body;
        element.classList.toggle("dark-mode");
    });
}


if (u.childElementCount == 2) {
    create(u);
}

console.log('hello :)');

// .dark-mode {
//     background-color: black;
//     color: white;
//   }

// let sheet = document.
// sheet.innerHTML = ""

// .inversed {
//     -webkit-filter: invert(100%);
//     filter: invert(100%);
//   }


// -webkit-filter: invert(100%);
// filter: invert(100%);

// let script = document.createElement('script');
// script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js';
// document.body.appendChild(script);

// $('#invert').click(function () {
//     $("html").toggleClass("invert");
// });


// let htmlStyle = {
//     background: white,
//     height: "100%",
//     margin: 0,
//     padding: 0,
//     "box-sizing": "border-box"
// };

// let bodyStyle = {
//     background: white,
//     height: "100%",
//     margin: 0,
//     padding: "1em",
//     "box-sizing": "border-box"
// }



// $("html").css(htmlStyle);
// $("body").css(bodyStyle);
