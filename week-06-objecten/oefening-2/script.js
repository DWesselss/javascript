const people = [
  { name: 'Lisa', age: 28, city: 'Amsterdam' },
  { name: 'Mark', age: 34, city: 'Rotterdam' },
  { name: 'Sara', age: 22, city: 'Utrecht' },
];

const origineel = document.querySelector('#origineel');

for (const person of people) {
  const { name, city } = person;
  const p = document.createElement('p');
  p.textContent = `${name} woont in ${city}`;
  origineel.appendChild(p);
}

const updatedPeople = people.map(person => ({ ...person, city: 'Den Haag' }));
const kopie = document.querySelector('#kopie');

for (const person of updatedPeople) {
  const { name, city } = person;
  const p = document.createElement('p');
  p.textContent = `${name} woont in ${city}`;
  kopie.appendChild(p);
}