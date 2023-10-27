// let meva = [
//   "Apple",
//   "Banana",
//   "Chery",
//   "Kiwi",
//   "Orange",
//   "Grapes",
//   "Mango",
//   "Avocado",
//   "Lemon",
//   "Melon",
// ];

// let mevalar = meva.join();
// for (let i = 0; i < 10; i++) {
//   console.log(meva[i]);
// }
// for (let i = 0; i < mevalar.length; i++) {
//   console.log(mevalar[i]);
// }

// let person = {
//   fName: "Eshmat",
//   lName: "Toshmatov",
//   age: 32,
//   isMarried: true,
// };

// for (let key in person) {
//   console.log(key, person[key]);
// }

// for(let fruit of meva){
//   console.log(fruit);
// }

// let password = "1234";
// let input = prompt("Parol kiriting: ");

// let found = false;

// while (!found) {
//   if (password === input) {
//     found = true;
//     console.log("Topdiz");
//   } else {
//     input = prompt("Topolmadiyiz!");
//   }
// }

// while(password!==input){
//       input = prompt("Topolmadiyiz!");

// }

// do {
//   console.log("Salom!");
// } while (false);

// 1-misol

// let number = 12355;
// let string = number.toString();
// let sum = 0;

// for (let num = 0; num < string.length; num++) {
//   sum += +string[num];
// }
// console.log(sum);

// 2-misol

// let arr = [12, 13, 36, 15, 98, 1];

// let sum2 = 0;

// for (let i in arr) {
//   if (arr[i] % 2 !== 0) {
//     sum2 += arr[i];
//   } else {
//     continue;
//   }
// }

// console.log(sum2);

// // 3-misol
// let arr = [12, 13, 36, 15, 98, 1];
// // let a = 0;

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     let a = Math.max(arr[i], arr[j]);
//   }
//   console.log(a);
// }

