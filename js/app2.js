let number = prompt("Son kiriting: ");
// let str = toString(number);
let restr = "";

for (let i = 1; i <= number.length; i++) {
  restr += number[number.length - i];
}

console.log(+restr);
