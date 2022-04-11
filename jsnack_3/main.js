/* 
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es:
[
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]
Crea un nuovo array con la lista dei mammiferi.
*/

let animals = [
    { nome: 'gatto', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'rondine', famiglia: 'fasianidi', classe: 'uccelli' },
    { nome: 'cobra', famiglia: 'serpenti', classe: 'rettili' },
    { nome: 'trota', famiglia: 'salmonidae', classe: 'pesci' },
    { nome: 'asino', famiglia: 'equidi', classe: 'mammiferi' },
  ]

let mammiferi = animals.filter((animal) => animal.classe === "mammiferi");
console.log(mammiferi);

