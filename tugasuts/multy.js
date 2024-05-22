let hari = "Rabu";

if (hari === "Senin") {
     console.log("Awal minggu kerja.");
} else if (hari === "Selasa") {
     console.log("Hari kedua minggu kerja.");
} else if (hari === "Rabu") {
     console.log("Hari pertengahan minggu.");
} else if (hari === "Kamis") {
     console.log("Hampir akhir minggu kerja.");
} else if (hari === "Jumat") {
     console.log("Hari kerja terakhir dalam seminggu.");
} else if (hari === "Sabtu") {
     console.log("Akhir pekan! Saatnya bersantai.");
} else if (hari === "Minggu") {
     console.log("Akhir pekan! Bersiaplah untuk minggu depan.");
} else {
     console.log("Hari dalam seminggu tidak valid.");
}

//output : "Hari pertengahan minggu."