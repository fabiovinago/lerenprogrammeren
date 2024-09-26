/* Som van de even getallen: Gebruik een for-loop om de som van de even getallen van 1
tot 100 te berekenen.
*/

let som = 0;
let getal1 = 1;

for(getal1;getal1<=100;getal1++){
    if(getal1%2===0){
        som=som+getal1;
    }
}

console.log("De som van de even getallen van 1 tot 100 is: " + som);









