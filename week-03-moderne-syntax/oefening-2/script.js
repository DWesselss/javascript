const message = document.querySelector('#message');
const list = document.querySelector('#list');

document.querySelector('#btn-1').addEventListener('click', () => {
  message.textContent += 'Hallo! ';
});

document.querySelector('#btn-2').addEventListener('click', () => {
  const item = document.createElement('li');
  item.textContent = `Nieuw lijstitem ${list.children.length + 1}`;
  list.appendChild(item);
});

document.querySelector('#btn-3').addEventListener('click', () => {
  message.classList.toggle('active');
});