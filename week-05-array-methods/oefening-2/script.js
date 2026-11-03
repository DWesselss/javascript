const names = ['Anna', 'Bob', 'Charlotte', 'David', 'Emma', 'Frank', 'Grace', 'Henk', 'Isabel', 'Jan', 'Karen', 'Lars'];

const findInput = document.getElementById('search-find');
const includesInput = document.getElementById('search-includes');

findInput.addEventListener('keydown', event => {
  if (event.key !== 'Enter') return;

  const letter = findInput.value.trim().toLowerCase();
  const found = letter ? names.find(name => name.toLowerCase().startsWith(letter)) : undefined;
  document.getElementById('output-find').textContent = found ?? 'Geen naam gevonden';
  findInput.value = '';
});

includesInput.addEventListener('keydown', event => {
  if (event.key !== 'Enter') return;

  const search = includesInput.value.trim().toLowerCase();
  const exists = search !== '' && names.map(name => name.toLowerCase()).includes(search);
  document.getElementById('output-includes').textContent = String(exists);
  includesInput.value = '';
});