/*
* Schrijf een programma dat het totale bedrag berekent dat je moet betalen in een winkel op basis van het aantal producten dat je koopt en de prijs per product. Als je meer dan 10 producten koopt, krijg je 10% korting, anders betaal je de volle prijs.
* */

/*
let aantalProducten = parseInt(prompt("Geef een aantal in:"));
let prijsPerProduct = parseFloat(prompt("Geef de prijs in"));  // in euro's

// Bereken de totale prijs zonder korting
let totalePrijs = aantalProducten * prijsPerProduct;

if (aantalProducten > 10) {
    // Bereken 10% korting
    let korting = totalePrijs * 0.10;
    totalePrijs = totalePrijs - korting;  // Pas de korting toe
}

console.log("Het totale bedrag is: €" + totalePrijs.toFixed(2));
*/

/*
* Schrijf een programma dat het totale bedrag berekent dat je moet betalen in een winkel op basis van het aantal producten dat je koopt en de prijs per product. Als je meer dan 10 producten koopt, krijg je 10% korting, anders betaal je de volle prijs.
* */



//let product = parseInt(prompt("Kies een product"));
let prijs = parseInt(prompt("geef de prijs van het product"));
//let totaal = parseInt(prompt("De totaalprijs"));


if(prijs > 100){
    console.log("Je krijgt 10% korting")
}else if (prijs >= 50 && 100){
    console.log("Je krijgt 5% korting")
}else{
    console.log("Je krijgt geen korting")
}



/*
let aantalProducten = parseInt(prompt("Geef een aantal in:"));
let prijsPerProduct = parseFloat(prompt("Geef de prijs in"));  // in euro's

// Bereken de totale prijs zonder korting
let totalePrijs = aantalProducten * prijsPerProduct;

if (aantalProducten > 10) {
    // Bereken 10% korting
    let korting = totalePrijs * 0.10;
    totalePrijs = totalePrijs - korting;  // Pas de korting toe
}

console.log("Het totale bedrag is: €" + totalePrijs.toFixed(2));

 */
