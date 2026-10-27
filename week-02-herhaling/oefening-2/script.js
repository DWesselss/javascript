 // 1. Titel aanpassen
const title = document.getElementById('title');
title.textContent = 'Oefening 2 - DOM-manipulatie';

// 2. Tekstkleur wisselen
const message = document.getElementById('message');
const toggleBtn = document.getElementById('toggle-btn');
let isRood = false;

toggleBtn.addEventListener('click', function() {
    if (isRood) {
        message.style.color = 'black';
        isRood = false;
    } else {
        message.style.color = 'red';
        isRood = true;
    }
});

// 3. Begroeting tonen
const greetBtn = document.getElementById('greet-btn');

greetBtn.addEventListener('click', function() {
    const naam = document.getElementById('name-input').value;
    document.getElementById('greeting').textContent =
        'Hallo, ' + naam + '!';
});