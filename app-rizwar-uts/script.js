document.getElementById('tampilBtn').addEventListener('click', function() {
    const nim = document.getElementById('nim').value;
    const nama = document.getElementById('nama').value;
    const mataKuliah = document.getElementById('mataKuliah').value;
    const nilaiAkhir = document.getElementById('nilaiAkhir').value;

    let nilaiHuruf;
    let indeksNilai;

    if (nilaiAkhir >= 85 && nilaiAkhir <= 100) {
        nilaiHuruf = 'A';
        indeksNilai = '4.00 Pujian';
    } else if (nilaiAkhir >= 79) {
        nilaiHuruf = 'A-';
        indeksNilai = '3.67 Sangat Memuaskan';
    } else if (nilaiAkhir >= 74) {
        nilaiHuruf = 'B+';
        indeksNilai = '3.33 Sangat Memuaskan';
    } else if (nilaiAkhir >= 69) {
        nilaiHuruf = 'B';
        indeksNilai = '3.00 Memuaskan';
    } else if (nilaiAkhir >= 64) {
        nilaiHuruf = 'B-';
        indeksNilai = '2.67 Memuaskan';
    } else if (nilaiAkhir >= 59) {
        nilaiHuruf = 'C+';
        indeksNilai = '2.33';
    } else if (nilaiAkhir >= 54) {
        nilaiHuruf = 'C';
        indeksNilai = '2.00';
    } else if (nilaiAkhir >= 41) {
        nilaiHuruf = 'D';
        indeksNilai = '1.00';
    } else {
        nilaiHuruf = 'E';
        indeksNilai = '0.00';
    }

    document.getElementById('outputNim').textContent = nim;
    document.getElementById('outputNama').textContent = nama;
    document.getElementById('outputMataKuliah').textContent = mataKuliah;
    document.getElementById('outputNilaiAkhir').textContent = nilaiAkhir;
    document.getElementById('outputNilaiHuruf').textContent = nilaiHuruf;
    document.getElementById('outputIndeksNilai').textContent = indeksNilai;

    document.getElementById('output').classList.remove('hidden');
});

document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('output').classList.add('hidden');
});
