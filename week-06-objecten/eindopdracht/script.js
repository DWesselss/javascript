const users = [
  { name: 'Jan de Vries',  email: 'jan@bedrijf.nl',  role: 'admin', active: true  },
  { name: 'Lisa Bakker',   email: 'lisa@bedrijf.nl', role: 'user',  active: true  },
  { name: 'Tom Visser',    email: 'tom@bedrijf.nl',  role: 'user',  active: false },
  { name: 'Sara Meijer',   email: 'sara@bedrijf.nl', role: 'admin', active: true  },
];

let filter = 'all';

const showUsers = (users) => {
  const container = document.querySelector('#users');
  container.innerHTML = '';

  for (const user of users) {
    const { name, email, role, active } = user;
    const article = document.createElement('article');
    const heading = document.createElement('h3');
    heading.textContent = name;

    const emailText = document.createElement('p');
    emailText.textContent = `E-mail: ${email}`;

    const roleText = document.createElement('p');
    roleText.textContent = `Rol: ${role === 'admin' ? 'Admin' : 'Gebruiker'}`;

    const statusText = document.createElement('p');
    statusText.textContent = `Status: ${active ? 'Actief' : 'Inactief'}`;

    article.append(heading, emailText, roleText, statusText);
    container.appendChild(article);
  }
};

const filterUsers = () => {
  const visibleUsers = filter === 'admin'
    ? users.filter(user => user.role === 'admin')
    : users;

  showUsers(visibleUsers);
};

document.querySelector('#filter-admin').addEventListener('click', () => {
  filter = 'admin';
  filterUsers();
});

document.querySelector('#filter-all').addEventListener('click', () => {
  filter = 'all';
  filterUsers();
});

document.querySelector('#user-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const role = document.querySelector('#role').value;

  if (!name || !email) return;

  const defaultUser = { name: '', email: '', role: 'user', active: true };
  const newUser = { ...defaultUser, name, email, role };
  users.push(newUser);

  event.target.reset();
  filterUsers();
});

filterUsers();