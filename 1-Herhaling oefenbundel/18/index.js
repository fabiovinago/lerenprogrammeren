
/*Print getallen tussen 1 en n die deelbaar zijn door 5: Vraag een getal n aan de
gebruiker en print alle getallen van 1 tot n die deelbaar zijn door 5.
 */

let n = parseInt(prompt("Voer een natuurlijk getal in"));
let getal1 = 1;

for(getal1; getal1 <= n ;getal1++){
    if(getal1 % 5 ===0){
        console.log(getal1);
    }
}



