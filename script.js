
let danas = new Date();
let dan = danas.getDay();
let nazivDana = "";

if (dan == 1) {
    nazivDana = "Ponedjeljak";
} else if (dan == 2) {
    nazivDana = "Utorak";
} else if (dan == 3) {
    nazivDana = "Srijeda";
} else if (dan == 4) {
    nazivDana = "Četvrtak";
} else if (dan == 5) {
    nazivDana = "Petak";
} else if (dan == 6) {
    nazivDana = "Subota";
} else {
    nazivDana = "Nedjelja";
}

console.log("Danas je " + nazivDana);

if (dan >= 1 && dan <= 5) {
    console.log("Danas je radni dan.");
} else {
    console.log("Danas je neradni dan.");
}

if (dan == 1) {
    console.log("Ja najviše volim JS od svih programskih jezika");
} else if (dan == 4) {
    console.log("Mali petak!");
} else if (dan == 5) {
    console.log("Vikend na Vidiku!");
}