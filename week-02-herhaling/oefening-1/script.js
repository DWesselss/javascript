 // 1. Twee getallen optellen
function optellen(a, b) {
    return a + b;
}

// 2. Controleren of een getal even is
function isEven(getal) {
    if (getal % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// 3. Een begroeting teruggeven
function groet(naam) {
    return 'Hallo, ' + naam + '!';
}

// 4. Celsius omrekenen naar Fahrenheit
function celsiusNaarFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

// Resultaten tonen in de DOM
document.getElementById('result-optellen').textContent =
    '3 + 5 = ' + optellen(3, 5);

document.getElementById('result-even').textContent =
    'Is 8 even? ' + isEven(8);

document.getElementById('result-groet').textContent = groet('Sanne');

document.getElementById('result-temp').textContent =
    '20°C is ' + celsiusNaarFahrenheit(20) + '°F';
