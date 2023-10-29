let string = prompt("Matn kiriting: ").toLowerCase();
let char = prompt("Harf kiriting: ").toLowerCase();
let s = 0;
for (let i = 0; i < string.length; i++) {
  if (char === string[i]) {
    s += 1;
  }
}

console.log("Matnda " + s + " ta " + char + " bor");
