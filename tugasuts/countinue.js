for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Lewati iterasi jika `i` adalah bilangan genap
    }
    console.log("Hitungan ganjil: " + i);
}

console.log("Selesai iterasi hitungan ganjil!");

/* output:  Hitungan ganjil: 1
            Hitungan ganjil: 3
            Hitungan ganjil: 5
            Hitungan ganjil: 7
            Hitungan ganjil: 9
            Selesai iterasi hitungan ganjil!*/
