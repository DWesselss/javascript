let allArticles = [];

const showArticles = (articles) => {
  const container = document.querySelector('#articles');
  container.innerHTML = '';

  articles.map(article => {
    const item = document.createElement('article');
    const category = document.createElement('span');
    const title = document.createElement('h2');
    const summary = document.createElement('p');

    category.textContent = article.category;
    title.textContent = article.title;
    summary.textContent = article.summary;

    item.append(category, title, summary);
    return item;
  }).forEach(item => container.appendChild(item));
};

fetch('./news.json')
  .then(response => response.json())
  .then(articles => {
    allArticles = articles;
    showArticles(allArticles);
  })
  .catch(error => console.error('Fout bij laden:', error));

document.querySelector('#filter-alle').addEventListener('click', () => {
  showArticles(allArticles);
});

document.querySelector('#filter-stad').addEventListener('click', () => {
  showArticles(allArticles.filter(article => article.category === 'Stad'));
});

document.querySelector('#filter-technologie').addEventListener('click', () => {
  showArticles(allArticles.filter(article => article.category === 'Technologie'));
});

document.querySelector('#filter-media').addEventListener('click', () => {
  showArticles(allArticles.filter(article => article.category === 'Media'));
});