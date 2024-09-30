
/*Som van de eerste n getallen: Vraag een getal n aan de gebruiker en bereken de som van
de getallen van 1 tot n.
 */


let n = parseInt(prompt("Geef een natuurlijk getal in"));
let getal1 = 1;
let sum = 0;

for(getal1;getal1<=n;getal1++){
    sum=sum+getal1;
}
console.log(+sum);
