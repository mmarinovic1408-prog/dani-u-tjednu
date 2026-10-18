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


let unos = prompt("Unesi broj ili naziv dana:");
let brojDana = 0;
let uneseniBroj = Number(unos) % 7;

if (unos == null || unos.trim() == "") {
    console.log("Nisi ništa unio.");
} else if (uneseniBroj >= 1 && uneseniBroj <= 7
    && uneseniBroj % 1 == 0) {

    brojDana = (uneseniBroj - 1) % 7 + 1;

    if (brojDana == 1) {
        nazivDana = "Ponedjeljak";
    } else if (brojDana == 2) {
        nazivDana = "Utorak";
    } else if (brojDana == 3) {
        nazivDana = "Srijeda";
    } else if (brojDana == 4) {
        nazivDana = "Četvrtak";
    } else if (brojDana == 5) {
        nazivDana = "Petak";
    } else if (brojDana == 6) {
        nazivDana = "Subota";
    } else {
        nazivDana = "Nedjelja";
    }

    console.log("Uneseni broj: " + uneseniBroj);
    console.log("Naziv dana: " + nazivDana);

} else {
    let danUnos = unos.toLowerCase();

    if (danUnos == "ponedjeljak") {
        brojDana = 1;
    } else if (danUnos == "utorak") {
        brojDana = 2;
    } else if (danUnos == "srijeda") {
        brojDana = 3;
    } else if (danUnos == "četvrtak") {
        brojDana = 4;
    } else if (danUnos == "petak") {
        brojDana = 5;
    } else if (danUnos == "subota") {
        brojDana = 6;
    } else if (danUnos == "nedjelja") {
        brojDana = 7;
    }

    if (brojDana == 0) {
        console.log("Pogreška: unesi broj od 1 do 7 ili ispravan naziv dana.");
    } else {
        console.log("Uneseni dan: " + unos);
        console.log("Broj dana: " + brojDana);
    }
}

if (brojDana >= 1 && brojDana <= 5) {
    console.log("Ovo je radni dan.");
} else if (brojDana == 6 || brojDana == 7) {
    console.log("Ovo je neradni dan.");
}

if (brojDana == 1) {
    console.log("Ja najviše volim JS od svih programskih jezika");
} else if (brojDana == 4) {
    console.log("Mali petak!");
} else if (brojDana == 5) {
    console.log("Vikend na Vidiku!");
}