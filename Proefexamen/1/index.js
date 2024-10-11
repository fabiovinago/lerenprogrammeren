
/*Controleer of een getal positief, negatief of nul is
Schrijf een programma dat de gebruiker vraagt om een getal in te voeren en
vervolgens controleert of het getal positief, negatief of nul is. Toon het resultaat in
de console.
 */

let getal1 = parseInt(prompt("Voer een getal is"));

if (getal1 > 0) {
    console.log("Het getal is positief");

} else if (getal1 < 0) {
    console.log("Het getal is negatief");

} else {
    console.log("Het getal is 0");
}



