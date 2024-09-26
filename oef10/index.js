/* Schrijf een programma dat de gebruiker een getal laat invoeren en controleert
of het even of oneven is
 */



let gewicht = parseFloat(prompt("Geef uw gewicht in"));
let lengte = parseFloat(prompt("Geef je lengte in (cm)"));
let bmi = gewicht / (lengte * lengte);


if(bmi < 18.5) {
    console.log("Ondergewicht");
}else if(bmi <= 25){
    console.log("Normaal");
}else if(bmi <= 25){
    console.log("Overgewicht");
}   else{
    console.log("Obisitas");
}

/* Tweede mogelijke oplossing

let gewicht = parseFloat(prompt("Geef uw gewicht in"));
let lengte = parseFloat(prompt("Geef uw lengte in (m)"));
let bmi = gewicht / (lengte * lengte)

if(bmi < 18.5){
    console.log(`Ondergewicht (BMI:${bmi.toFixed(2)})`)
}else if (bmi >= 18.5 && bmi < 25) {
    console.log(`Normaal gewicht (BMI: ${bmi.toFixed(2)})`);
} else if (bmi >= 25 && bmi < 30) {
    console.log(`Overgewicht (BMI: ${bmi.toFixed(2)})`);
} else {
    console.log(`Obesitas (BMI: ${bmi.toFixed(2)})`);
}

 */