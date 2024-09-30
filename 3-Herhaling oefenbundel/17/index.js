
/*Som van de oneven getallen: Gebruik een for-loop om de som van de oneven getallen
van 1 tot 100 te berekenen.
 */

let sum = 0;
let getal1 = 1;

for(getal1;getal1<=100;getal1++){
    if(getal1%2!==0){
        sum=sum+getal1;
    }
}
console.log(+sum);



