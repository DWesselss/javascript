const form = document.querySelector('#profile-form');
const profilesList = document.querySelector('#profiles-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const naam = document.querySelector('#name').value.trim();
  const functie = document.querySelector('#role').value.trim();
  const afdeling = document.querySelector('#department').value.trim();

  if (!naam || !functie || !afdeling) {
    alert('Vul alle velden in.');
    return;
  }

  const profiel = document.createElement('article');
  # textconten zodat ingevulde tekst veilig wordt getoond
  profiel.innerHTML = `<h3></h3><p><strong>Functie:</strong> <span class="role"></span></p><p><strong>Afdeling:</strong> <span class="department"></span></p><button type="button" class="delete-button">Verwijderen</button>`;
  profiel.querySelector('h3').textContent = naam;
  profiel.querySelector('.role').textContent = functie;
  profiel.querySelector('.department').textContent = afdeling;
  profiel.querySelector('.delete-button').addEventListener('click', () => {
    profiel.remove();
  });

  profilesList.appendChild(profiel);
  form.reset();
});