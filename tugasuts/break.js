let number = 0;

do {
    if (number === 3) {
        break;
    }
    console.log("Nomor saat ini: " + number);
    number++;
} while (number < 5);

console.log("Loop berhenti pada nomor ke-3.");

/* output:  Nomor saat ini: 0
            Nomor saat ini: 1
            Nomor saat ini: 2
            Loop berhenti pada nomor ke-3.*/
