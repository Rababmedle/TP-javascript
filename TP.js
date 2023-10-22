//exo1
//var
var number = 20;
console.log(number);
//let
let age = 4 * 5;
console.log("Mon age est " + age);
// const
const titre = "hello";
console.log(titre);

function addnumber(a, b) {
  return a + b;
}
//exo2 1)
console.log(addnumber(2, 3));
//arrow function
const addnumber1 = (a, b) => a + b;
console.log(addnumber1(4, 4));
//exo5
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
console.log(person["firstName"]);
console.log(person.firstName);
const numbers = [45, 4, 9, 16, 25];

for (let number of numbers) {
  console.log(number);
}

console.log("Utilisation de for...in :");
for (let index in numbers) {
  console.log(numbers[index]);
}

(function (a, b) {
  const sum = a + b;
  console.log("La somme est : " + sum);
})(2, 3);
