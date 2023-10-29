let number = prompt("Son kiriting");
let sum = 0;
let sum2 = 0;
let sum4 = 0;
for (let i = 0; i < number.length; i++) {
  sum += +number[i];
}
if (sum < 10) {
  console.log(sum);
} else {
  let sum1 = sum.toString();
  for (let j = 0; j < sum1.length; j++) {
    sum2 += +sum1[j];
  }
  if (sum2 < 10) {
    console.log(+sum2);
  } else {
    sum3 = sum2.toString();
    for (let j = 0; j < sum3.length; j++) {
      sum4 += +sum3[j];
    }
    console.log(+sum4);
  }
}
