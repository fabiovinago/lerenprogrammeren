/* Schrijf een programma dat de gebruiker een getal laat invoeren en controleert
of het even of oneven is
 */



let nummer = parseInt(prompt("Geef een nummer in:"));

if(nummer%3===0 && nummer%5===0){
    console.log(`${nummer} is zowel door 3 als 5 deelbaar`);
}else if(nummer%3 === 0){
    console.log(`${nummer} is enkel deelbaar door 3`);
}else if(nummer%5===0){
    console.log(`${nummer} is enkel deelbaar door 5`);
}else{
    console.log(`${nummer} is niet deelbaar door 3 of 5`);
}



