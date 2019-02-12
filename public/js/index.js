//Import
var input = document.getElementById('entry');
var ul = document.querySelector('div#response ul');
var button = input.nextElementSibling;
// ul = [];
//Fct
var addTask = () => {
    var li = document.createElement('LI');
    var task = document.createElement('SPAN');
    task.innerHTML = input.value;
    input.value = '';
    var div = document.createElement('DIV')
    var button1 = document.createElement('BUTTON');
    var button2 = document.createElement('BUTTON');
    button1.setAttribute('class', 'btn')
    button1.innerHTML = '<i class="fas fa-trash-alt"></i>';
    button2.setAttribute('class', 'btn')
    button2.innerHTML = '<i class="far fa-check-circle"></i>';
    li.setAttribute('class', 'eleCreated')
    ul.appendChild(li);
    li.appendChild(task);
    li.appendChild(div);
    div.appendChild(button1);
    div.appendChild(button2);
    task.addEventListener('dblclick', function () {
        task.setAttribute('contenteditable', 'true');
        // task.contentEditable = 'true';//même res mais html !=
    });
    task.addEventListener('keypress', function (key) {
        if (key.keyCode == 13) {
            task.setAttribute('contenteditable', 'false');
            // task.contentEditable = 'false';
            console.log('event déclenché');
        }
    });
    button1.addEventListener('click', function () {
        if (li.style.display != 'none') {
            li.style.display = 'none';
        }
        else {
            li.style.display = 'flex';
        }
    });
    button2.addEventListener('click', function () {
        if (li.style.backgroundColor !== 'green') {
            li.style.backgroundColor = 'green';
            button2.style.backgroundColor = 'yellowgreen';
            button2.style.color = 'darkgreen';
        }
        else {
            li.style.backgroundColor = '';
            button2.style.backgroundColor = '';
            button2.style.color = 'dark';
        }
    });
}
//on a sortie les event de la fonction car ils ne ciblent pas un element créé dans la fonctions
var triButton = document.querySelectorAll('div#button button');
triButton[0].addEventListener('click', function (event) {
    console.log('on filtre !!!');
    triButton[1].style.backgroundColor = '';
    triButton[2].style.backgroundColor = '';
    event.target.style.backgroundColor = 'green';
    for (let i = 0; i < ul.childElementCount; i++) {
        let li = ul.children[i];//on recupère les li créé dans le ul dans la fct ci-dessus
        if (li.style.backgroundColor !== '') {
            li.style.display = 'none';
        }
        else {
            li.style.display = 'flex';
        }
    }
});
triButton[1].addEventListener('click', function (event) {
    // toggle button en vert
    // pour chaque li faire ...
    triButton[2].style.backgroundColor = '';
    triButton[0].style.backgroundColor = '';
    event.target.style.backgroundColor = 'green';
    for (let i = 0; i < ul.childElementCount; i++) {
        let li = ul.children[i];
        if (li.style.backgroundColor !== 'green'/*  && li.style.display != 'none'//bloque le cas else */) {
            li.style.display = 'none';
        }
        else {
            li.style.display = 'flex';
        }
    }
});
triButton[2].addEventListener('click', function (event) {
    triButton[1].style.backgroundColor = '';
    triButton[0].style.backgroundColor = '';
    event.target.style.backgroundColor = 'green';
    for (let i = 0; i < ul.childElementCount; i++) {
        let li = ul.children[i];
        if (li.style.display != 'flex') {
            li.style.display = 'flex';

        }
    }
});
//Event
button.addEventListener('click', addTask);
input.addEventListener('keypress', function (key) {
    if (key.keyCode == 13 && input.value != '') {
        addTask();
    }
});