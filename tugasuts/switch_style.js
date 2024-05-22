let hari = "Rabu";
let message;
switch (hari) {
     case "Senin":
         message = "Awal minggu kerja.";
         break;
     case "Selasa":
         message = "Hari kedua minggu kerja.";
         break;
     case "Rabu":
         message = "Tengah minggu.";
         break;
     case "Kamis":
         message = "Hampir akhir minggu kerja.";
         break;
     case "Jumat":
         message = "Hari kerja terakhir dalam seminggu.";
         break;
     case "Sabtu":
         message = "Akhir pekan! Saatnya bersantai.";
         break;
     case "Minggu":
         message = "Akhir pekan! Persiapan untuk minggu depan.";
         break;
     default:
         message = "Hari dalam seminggu tidak valid.";
}

console.log(pesan); // output: "Tengah minggu."