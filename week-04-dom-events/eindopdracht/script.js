const formulier = document.querySelector('#task-form');
const invoer = document.querySelector('#task-input');
const takenlijst = document.querySelector('#tasks');
const teller = document.querySelector('#counter');

function toonTaken() {
  const aantal = takenlijst.children.length;
  teller.textContent = aantal === 1 ? '1 taak' : `${aantal} taken`;
}

function taakToevoegen(tekst) {
  const taak = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  const naam = document.createElement('span');
  naam.textContent = tekst;
  const verwijderen = document.createElement('button');
  verwijderen.type = 'button';
  verwijderen.textContent = 'Verwijder';

  checkbox.addEventListener('change', () => {
    taak.classList.toggle('afgevinkt', checkbox.checked);
  });
  verwijderen.addEventListener('click', () => {
    taak.remove();
    toonTaken();
  });

  taak.append(checkbox, naam, verwijderen);
  takenlijst.appendChild(taak);
  toonTaken();
}

formulier.addEventListener('submit', (event) => {
  event.preventDefault();
  const tekst = invoer.value.trim();
  if (tekst === '') return;
  taakToevoegen(tekst);
  invoer.value = '';
  invoer.focus();
});