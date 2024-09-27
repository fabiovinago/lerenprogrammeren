
/*Print de tafel van een gegeven getal: Vraag een getal aan de gebruiker en gebruik een
for-loop om de tafel van dat getal te printen.
 */

let tafel = parseInt(prompt("Geef een getal in"));
let getal1 = 1

for(getal1;getal1<=10;getal1++){
    console.log(`${tafel}*${getal1} =`, getal1*tafel);
}