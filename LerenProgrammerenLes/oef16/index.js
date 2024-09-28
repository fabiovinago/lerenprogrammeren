/*
geef een getal in: 100
1,2,4,8,16,32,64
* */
let getal = parseInt(prompt("geef een getal in:"));
let output= "";
let teller = 1;

for(teller=1;teller <= getal;teller = teller * 2){
    if(teller * 2 < getal){
        output = output + `${teller},`
    }else{
        output = output + `${teller}`
    }
}
console.log(output)