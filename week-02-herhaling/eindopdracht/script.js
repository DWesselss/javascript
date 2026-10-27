// Stap 1: Bereken het bedrag na korting
function calculateTotal(bedrag, korting) {
    return bedrag - (bedrag * korting / 100);
}

// Bonus: Bepaal het klantniveau
function getKlantniveau(bedrag) {
    if (bedrag < 50) {
        return 'Nieuwe klant';
    } else if (bedrag <= 150) {
        return 'Vaste klant';
    } else {
        return 'VIP klant';
    }
}

// Stap 2 en 3: Verwerk het formulier
const form = document.getElementById('discount-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const amount = document.getElementById('amount').value;
    const discount = document.getElementById('discount').value;
    const result = document.getElementById('result');

    if (amount === '' || discount === '') {
        result.textContent =
            'Vul het bestelbedrag en de korting in.';
    } else {
        const bedrag = Number(amount);
        const korting = Number(discount);

        const totaal = calculateTotal(bedrag, korting);
        const niveau = getKlantniveau(bedrag);

        result.textContent =
            'Te betalen: €' + totaal.toFixed(2) +
            ' | Klantniveau: ' + niveau;
    }
});