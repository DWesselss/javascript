const products = [
  'Laptop Pro',
  'Draadloze muis',
  'USB-C hub',
  'Bureaulamp',
  'Notitieboek',
  'Pennenset',
  'Koptelefoon',
  'Bluetooth speaker',
  'Webcam HD',
  'Muismat XL',
  'Monitor 27"',
  'Desk organizer',
];

let searchTerm = '';
let sorting = '';

const showProducts = (list) => {
  const container = document.getElementById('products');
  container.innerHTML = '';

  list.forEach(name => {
    const article = document.createElement('article');
    article.textContent = name;
    container.appendChild(article);
  });

  document.getElementById('counter').textContent = `${list.length} producten`;
};

const filterProducts = () => {
  const filtered = products.filter(name => name.toLowerCase().includes(searchTerm.toLowerCase()));

  if (sorting === 'az') {
    filtered.sort((a, b) => a.localeCompare(b, 'nl'));
  } else if (sorting === 'za') {
    filtered.sort((a, b) => a.localeCompare(b, 'nl')).reverse();
  }

  showProducts(filtered);
};

document.getElementById('search-bar').addEventListener('input', event => {
  searchTerm = event.target.value;
  filterProducts();
});

document.getElementById('sort-az').addEventListener('click', () => {
  sorting = 'az';
  filterProducts();
});

document.getElementById('sort-za').addEventListener('click', () => {
  sorting = 'za';
  filterProducts();
});

filterProducts();