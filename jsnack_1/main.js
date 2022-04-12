/* 
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array.

*/

let cars = [
    {
    marca: "toyota",
    modello: "yaris",
    alimentazione: "benzina"
},
{
    marca: "toyota",
    modello: "Iq",
    alimentazione: "diesel"
},
{
    marca: "fiat",
    modello: "500",
    alimentazione: "benzina"
},
{
    marca: "fiat",
    modello: "600",
    alimentazione: "diesel"
},
{
    marca: "fiat",
    modello: "punto",
    alimentazione: "metano"
},
{
    marca: "fiat",
    modello: "500L",
    alimentazione: "metano"
},
{
    marca: "opel",
    modello: "corsa",
    alimentazione: "benzina"
},
{
    marca: "opel",
    modello: "meriva",
    alimentazione: "elettrico"
},
{
    marca: "seat",
    modello: "ibiza",
    alimentazione: "metano"
},
{
    marca: "seat",
    modello: "ibiza",
    alimentazione: "benzina"
},

{
    marca: "renault",
    modello: "capture",
    alimentazione: "metano"
}

]

let benzina = cars.filter((element) => element.alimentazione === "benzina");
console.log(benzina);

let diesel = cars.filter((element) => element.alimentazione === "diesel");
console.log(diesel);

let metano = cars.filter((element) => element.alimentazione !== "benzina" && element.alimentazione !== "diesel");
console.log(metano);



