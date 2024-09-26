/* Schrijf een programma dat de gebruiker een getal laat invoeren en controleert
of het even of oneven is
 */




let nummer1 =15, nummer2 = 25, nummer3 = 5;

if(nummer1 >= nummer2 && nummer1 >= nummer3){
    console.log(`${nummer1} is de grootste`)
}else if(nummer2 >= nummer1 && nummer2>= nummer3){
    console.log(`${nummer2} is de grootste`)
}else{
    console.log(`${nummer3} is de grootste`)
}