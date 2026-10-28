const input = document.querySelector('#input');
const lijst = document.querySelector('#list');

document.querySelector('#add').addEventListener('click', () => {
  const tekst = input.value.trim();
  if (tekst === '') return;

  const item = document.createElement('li');
  item.textContent = tekst + ' ';
  const knop = document.createElement('button');
  knop.textContent = 'Verwijder';
  knop.addEventListener('click', () => item.remove());
  item.appendChild(knop);
  lijst.appendChild(item);
  input.value = '';
});