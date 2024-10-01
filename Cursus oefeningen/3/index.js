
/*Raden van een getal. Laat de gebruiker een getal tussen 1 en 10 raden. Gebruik een while loop om
de gebruiker te laten raden totdat het juiste getal wordt ingevoerd.
 */

let correctGetal = 7;
let poging = parseInt(prompt("Raad een getal tussen 1 en 10"))

while(poging!==correctGetal){
    poging = parseInt(prompt("Fout, probeer opnieuw"));
}
console.log("Gefeliciteerd, je hebt het juiste getal geraden");
