const siswa = {
    nama: "Budi",
    umur: 17,
    kelas: "12A"
};

for (let prop in siswa) {
    console.log(prop + ": " + siswa[prop]);
}

console.log("Selesai iterasi properti siswa!");

/* output : nama: Budi
            umur: 17
            kelas: 12A
            Selesai iterasi properti siswa!
*/