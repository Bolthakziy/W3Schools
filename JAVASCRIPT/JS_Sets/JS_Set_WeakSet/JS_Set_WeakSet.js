let mySet = new WeakSet();
let eu = {fname:"Alexandre", lname:"rabbit"};
let amiga1 = {fname:"Ana", lname:"duck"};
let amiga2 = {fname:"Laura", lname:"cat"};
let amigo1 = {fname:"Daniel", lname:"cat"};
let amigo2 = {fname:"Fernando", lname:"donkey"};
let demon = {fname:"Akdeokyoung", lname:"devil"};

mySet.add(eu);
mySet.add(amiga1);
mySet.add(amiga2);
mySet.add(amigo1);
mySet.add(amigo2);

let answer = mySet.has(demon);

document.getElementById("coelho").innerHTML = "Akdeokyoung is my friend?" + "<br>" + "The answer is " + answer;