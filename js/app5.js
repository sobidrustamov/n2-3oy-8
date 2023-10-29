let num = +prompt("Musbat son kiriting>: ");
let sum = 0;

for (let i = 1; i < num; i++) {
  if (num % i === 0) {
    sum += i;
  } else {
    continue;
  }
}
if (num === 1) {
  console.log(num + " mukammal son emas");
} else if (sum === num) {
  console.log(num + " mukammal son");
} else {
  console.log(num + " mukammal son emas");
}
