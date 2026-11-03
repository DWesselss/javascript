const scores = [12, 67, 45, 89, 23, 55, 71, 38, 94, 16];

const filtered = scores.filter(score => score > 50);
const doubled = scores.map(score => score * 2);
const sorted = [...scores].sort((a, b) => a - b);

const showList = (id, values) => {
  document.getElementById(id).innerHTML = values.map(value => `<li>${value}</li>`).join('');
};

showList('result-filtered', filtered);
showList('result-map', doubled);
showList('result-sorted', sorted);