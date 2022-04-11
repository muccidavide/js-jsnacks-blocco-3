/* 
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: ['grogu', 'MANDO', 'Luke'] =>  ['Grogu', 'Mando', 'Luke']
*/

const classUser = ["MICHELE", "Rosario","Davide", "anna", "SErena"];

let camelArray = []

classUser.forEach(element => {
    let resetStrings = element.toLowerCase()
    let camelFirst = resetStrings[0].toLocaleUpperCase()
    let camelWord = camelFirst + resetStrings.slice(1)
    camelArray.push(camelWord)

});

console.log(camelArray);
