let number = prompt("Son kiriting:");

for (let i = 0; i < number.length; i++) {
  if (number[i] % 2 === 0) {
    console.log(number[i] + " juft son");
  } else {
    console.log(number[i] + " toq son");
  }
}
