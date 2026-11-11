const car = {
  name: 'Golf',
  brand: 'Volkswagen',
  year: 2008,
  mileage: 145000,
  description() {
    return `Dit is een ${this.brand} ${this.name}.`;
  },
  isOld() {
    return this.year < 2010;
  },
  drive(km) {
    this.mileage += km;
    return this.mileage;
  },
};

document.querySelector('#output-1').textContent = car.description();
document.querySelector('#output-2').textContent = `Is de auto oud? ${car.isOld() ? 'Ja' : 'Nee'}`;
document.querySelector('#output-3').textContent = `Km-stand na 100 km rijden: ${car.drive(100)} km`;