// Mendefinisikan objek biodata
var biodata = {
    nama: "AHMAD RIZWAR ABDILLAH",
    umur: 18,
    alamat: "NGABUL TAHUNAN JEPARA",
    mahasiswa: "POLITEKNIK BALEKAMBANG",
    hobi: ["mancing","badminton"],
  };
  
  // Fungsi untuk menampilkan biodata
  function tampilkanBiodata() {
    console.log("===== BIODATA =====");
    console.log("Nama      : " + biodata.nama);
    console.log("Umur      : " + biodata.umur + " tahun");
    console.log("Alamat    : " + biodata.alamat);
    console.log("mahasiswa : " + biodata.mahasiswa);
    console.log("Hobi      : " + biodata.hobi.join(", "));
    console.log("====================");
  }
  
  // Memanggil fungsi untuk menampilkan biodata
  tampilkanBiodata();