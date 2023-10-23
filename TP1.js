// //affichage
// console.log("hi");
// //les variable
// let var1 = "valeur1";
// console.log("Name:", var1);
// //constant
const const1 = "test1";
// console.log("constant:", const1);
// //les types de données
// //String
// const ST = "abc";
// console.log(ST[1]);
// console.log(ST.length);
// //Number
// let age = 4 * 5;
// console.log("Mon age est " + age);
// //function
// function f1() {
//   console.log("Resultat function");
// }
// //l'appel
// f1();
// //tableau
// const t1 = [
//   {
//     age: 20,
//     nom: "Rabab",
//   },
//   {
//     age: 12,
//     nom: "mariem",
//   },
// ];
// //t1.nom = "autre nom";
// console.log(t1);

// const number = [12, 1, 2, 3, 4, 5, 6];
// console.log(number[0]);
// //boucle
// for (let i = 0; i < t1.length; i++) {
//   const t = t1[i];
//   console.log(i, t1);
// }
const array1 = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const result = array1.reduceRight((accumulator, currentValue) =>
  accumulator.concat(currentValue)
);

console.log(result);
