let num = +prompt("Son kiriting>: ");
let i = 2;

if (num === 1) {
  console.log(num + " tub son emas");
} else if (num === 2) {
  console.log(num + " tub son");
} else {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      console.log(num + " tub son emas");
      break;
    } else if (i === num - 1) {
      console.log(num + " tub son");
    } else {
      continue;
    }
  }
}
