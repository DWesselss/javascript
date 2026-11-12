// Fout was: onjuist JSON-pad, verkeerde id, appendChild(list) en ongeldige JSON; script ontbrak in HTML
// Oplossing: corrigeer het pad, de selector, het toegevoegde element, de JSON en de script-tag

fetch('./users.json')
  .then(r => r.json())
  .then(users => {
    const list = document.querySelector('#results');
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = user.name;
      list.appendChild(li);
    });
  })
  .catch(error => console.error('Fout:', error));