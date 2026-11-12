fetch('./movies.json')
  .then(response => response.json())
  .then(movies => {
    const films = document.querySelector('#films');
    movies.forEach(movie => {
      const article = document.createElement('article');
      const title = document.createElement('h2');
      const info = document.createElement('p');
      title.textContent = movie.title;
      info.textContent = `${movie.director} — ${movie.year} — ${movie.genre}`;
      article.append(title, info);
      films.appendChild(article);
    });
  })
  .catch(error => console.error('Fout:', error));