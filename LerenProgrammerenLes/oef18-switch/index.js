
let nummer1= 10;
let nummer2 = 5;
let operatie = "optellen";
let resultaat;

switch(operatie){
    case "optellen":
        resultaat=nummer1+nummer2;
        break;
    case "aftrekken":
        resultaat=nummer1-nummer2;
        break;
    case "vermenigvuldigen":
        resultaat=nummer1*nummer2;
        break;
    case "deling";
        resultaat=nummer1/nummer2;
        break;
    default:
        resultaat="ongeldige operatie"
}
