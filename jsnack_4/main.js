/* 
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
*/

let users =[
  {name:"Davide", lastname:"Mucci", age:"27"},
  {name:"Luca", lastname:"Rossi", age:"22"},
  {name:"Paolo", lastname:"Galli", age:"16"},
  {name:"Sara", lastname:"Nave", age:"17"},
  {name:"Sonia", lastname:"Volo", age:"19"},
  {name:"Nicole", lastname:"Chiarella", age:"26"},

]

let usersMajorAge = []

users.forEach(user => {

  let majorUsers = users.filter((user) => user.age >= 18);

  if (majorUsers.includes(user)) {
    usersMajorAge.push(`${user.name + " " + user.lastname} è idoneao alla guida`)
  } else{
    usersMajorAge.push(`${user.name +" " + user.lastname} non è idoneao alla guida`)
  }

});

console.log(usersMajorAge);


