
/*Print de veelvouden van een gegeven getal: Vraag een getal aan de gebruiker en print
de veelvouden van dat getal tot 100
 */

let nummer = parseInt(prompt("Geef een getal in"));
let getal1 = 1;

for(getal1;getal1<=100;getal1++){
    if(getal1 % nummer ===0)
        console.log(getal1);
}

